// app/api/mentorship/apply/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limiter";
import { headers } from "next/headers";
import { emailConfig } from "@/lib/email/config";


const applicationSchema = z.object({
    // Personal Information
    firstName: z.string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be less than 50 characters'),
    lastName: z.string()
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'Last name must be less than 50 characters'),
    email: z.string()
      .email('Please enter a valid email address'),
    phone: z.string()
      .min(10, 'Please enter a valid phone number')
      .max(15, 'Please enter a valid phone number'),
    location: z.string()
      .min(2, 'Please enter your location')
      .max(100, 'Location must be less than 100 characters'),
    
    // Background
    currentRole: z.string()
      .min(2, 'Please enter your current role')
      .max(100, 'Current role must be less than 100 characters'),
    experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
    education: z.string()
      .min(2, 'Please enter your educational background')
      .max(500, 'Education must be less than 500 characters'),
    
    // Technical Background
    primaryLanguages: z.array(z.string())
      .min(1, 'Please select at least one programming language'),
    githubProfile: z.string()
      .url('Please enter a valid GitHub URL')
      .optional()
      .or(z.literal('')),
    portfolioUrl: z.string()
      .url('Please enter a valid URL')
      .optional()
      .or(z.literal('')),
    
    // Program Specific – Tailored to our AWS Cloud & Social Impact focus
    areasOfInterest: z.array(z.string())
      .min(1, 'Please select at least one area of interest'),
    mentorshipGoals: z.string()
      .min(50, 'Please provide more detail about your goals')
      .max(1000, 'Goals must be less than 1000 characters'),
    timeCommitment: z.enum(['5-10hrs', '10-15hrs', '15+hrs']),
    preferredMeetingTimes: z.array(z.string())
      .min(1, 'Please select at least one preferred meeting time'),
    
    // Additional Information
    previousMentorship: z.boolean(),
    heardAboutUs: z.string()
      .min(2, 'Please let us know how you heard about our program')
      .max(200, 'Response must be less than 200 characters'),
    additionalInfo: z.string()
      .max(1000, 'Additional information must be less than 1000 characters')
      .optional(),
  
    // Terms: Update to use a refined boolean instead of a literal
    acceptedTerms: z
      .boolean()
      .refine(val => val === true, {
        message: 'You must accept the terms and conditions',
      }),
  });

// app/api/mentorship/apply/route.ts
export async function POST(request: Request) {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for") || "unknown";
  
    try {
        // Validate inputs
        const body = await request.json();
        const validatedData = applicationSchema.parse(body);
  
        // Check rate limits
        const rateLimitResult = rateLimit(ip);
        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Too many attempts. Please try again in ${Math.ceil(
                        (rateLimitResult.reset - Date.now()) / 1000 / 60
                    )} minutes.`,
                },
                { status: 429 }
            );
        }
  
        // Insert into Supabase
        const { data: application, error } = await supabase
            .from('mentorship_applications')
            .insert([{
                first_name: validatedData.firstName,
                last_name: validatedData.lastName,
                email: validatedData.email,
                phone: validatedData.phone,
                location: validatedData.location,
                job_role: validatedData.currentRole,
                experience_level: validatedData.experienceLevel,
                education: validatedData.education,
                primary_languages: validatedData.primaryLanguages,
                github_profile: validatedData.githubProfile || null,
                portfolio_url: validatedData.portfolioUrl || null,
                areas_of_interest: validatedData.areasOfInterest,
                mentorship_goals: validatedData.mentorshipGoals,
                time_commitment: validatedData.timeCommitment,
                preferred_meeting_times: validatedData.preferredMeetingTimes,
                previous_mentorship: validatedData.previousMentorship,
                heard_about_us: validatedData.heardAboutUs,
                additional_info: validatedData.additionalInfo || null,
            }])
            .select()
            .single();
  
        if (error) throw error;
  
        // Send confirmation email using the new template
        await resend.emails.send(emailConfig.templates.applicationReceived({
            firstName: validatedData.firstName,
            email: validatedData.email
        }));
  
        // Send admin notification using the new template
        if (process.env.ADMIN_EMAIL) {
            await resend.emails.send(emailConfig.templates.adminNotification({
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
                email: validatedData.email,
                experienceLevel: validatedData.experienceLevel,
                areasOfInterest: validatedData.areasOfInterest,
                applicationId: application?.id || ''
            }));
        }
  
        return NextResponse.json({
            success: true,
            message: "Application submitted successfully",
        });
  
    } catch (error) {
        console.error('Application submission error:', {
            ip,
            timestamp: new Date().toISOString(),
            error: error instanceof Error ? {
                message: error.message,
                stack: error.stack
            } : 'Unknown error'
        });
  
        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error 
                    ? error.message 
                    : 'An unexpected error occurred. Please try again.',
            },
            { status: error instanceof Error && error.message.includes('rate limit') ? 429 : 500 }
        );
    }
}