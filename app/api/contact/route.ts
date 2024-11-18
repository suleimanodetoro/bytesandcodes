// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { resend, emailTemplates } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limiter";
import { headers } from "next/headers";
import { IS_DEVELOPMENT } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
  honeypot: z.string().max(0),
  timestamp: z.number(),
});

export async function POST(request: Request) {
  // Track request timing
  const requestStart = Date.now();
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";

  try {
    // Validate inputs
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Check rate limits in production
    if (!IS_DEVELOPMENT) {
      const rateLimitResult = rateLimit(ip);
      console.log('Rate limit check:', {
        ip,
        remaining: rateLimitResult.remaining,
        reset: new Date(rateLimitResult.reset).toISOString()
      });

      if (!rateLimitResult.success) {
        return NextResponse.json(
          {
            success: false,
            message: `Too many requests. Please try again in ${Math.ceil((rateLimitResult.reset - Date.now()) / 1000 / 60)} minutes.`,
          },
          { status: 429 }
        );
      }
    }

    // Spam checks in production
    if (!IS_DEVELOPMENT) {
      // Honeypot check
      if (validatedData.honeypot) {
        console.warn('Spam detected: honeypot filled', { ip });
        return NextResponse.json(
          {
            success: false,
            message: "Message appears to be spam",
          },
          { status: 400 }
        );
      }

      // Timing checks
      const timeDiff = Date.now() - validatedData.timestamp;
      console.log('Submission timing:', {
        timeDiff,
        submitted: new Date(validatedData.timestamp).toISOString()
      });

      if (timeDiff < 1000 || timeDiff > 300000) { // Between 1 second and 5 minutes
        console.warn('Suspicious timing detected:', { timeDiff, ip });
        return NextResponse.json(
          {
            success: false,
            message: "Invalid submission timing",
          },
          { status: 400 }
        );
      }
    }

    // Send confirmation email
    try {
      const userEmailResult = await resend.emails.send({
        from: "Bytes & Codes <noreply@bytesandcodes.org>",
        to: [validatedData.email],
        ...emailTemplates.contactForm.userConfirmation(validatedData.name),
      });
      console.log('User confirmation sent:', userEmailResult);
    } catch (error) {
      console.error('Failed to send user confirmation:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        email: validatedData.email
      });
      throw new Error('Unable to send confirmation email. Please try again.');
    }

    // Send admin notification
    try {
      const adminEmailResult = await resend.emails.send({
        from: "Contact Form <contact@bytesandcodes.org>",
        to: [process.env.ADMIN_EMAIL!],
        ...emailTemplates.contactForm.adminNotification(validatedData),
      });
      console.log('Admin notification sent:', adminEmailResult);
    } catch (error) {
      console.error('Failed to send admin notification:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        adminEmail: process.env.ADMIN_EMAIL
      });
      throw new Error('Message received but admin notification failed.');
    }

    // Success response
    const requestDuration = Date.now() - requestStart;
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      ...(IS_DEVELOPMENT && { debug: { duration: requestDuration } })
    });

  } catch (error) {
    const requestDuration = Date.now() - requestStart;
    
    // Enhanced error logging
    console.error('Contact form error:', {
      ip,
      duration: requestDuration,
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? {
        message: error.message,
        stack: error.stack
      } : 'Unknown error',
      environment: {
        isDev: IS_DEVELOPMENT,
        hasResendKey: !!process.env.RESEND_API_KEY,
        hasAdminEmail: !!process.env.ADMIN_EMAIL
      }
    });

    // User-friendly error response
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'An unexpected error occurred. Please try again.',
        ...(IS_DEVELOPMENT && { 
          debug: { 
            error: error instanceof Error ? error.message : 'Unknown error',
            duration: requestDuration
          }
        })
      },
      { status: error instanceof Error && error.message.includes('spam') ? 400 : 500 }
    );
  }
}