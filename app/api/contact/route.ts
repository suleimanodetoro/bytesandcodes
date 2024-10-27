// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Here we will handle the email
    // 1. Send an email

    // For now, we'll just log it
    console.log("Contact form submission:", validatedData);

    // add email sending logic here using services like:

    // - Resend

    // To complete the implementation:

    // Add email sending functionality in the API route
    // Add rate limiting

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: "Failed to send message",
      },
      { status: 500 }
    );
  }
}
