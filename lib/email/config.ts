// lib/email/config.ts
import { Resend } from 'resend';

// Provide a fallback for build time
const resendApiKey = process.env.RESEND_API_KEY || 'placeholder-key';
export const resend = new Resend(resendApiKey);

// Helper to check if email service is properly configured
export const hasEmailCredentials = () => {
  return process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'placeholder-key';
};

export const emailConfig = {
  from: {
    noreply: "AWS Cloud Mentorship <noreply@bytesandcodes.org>",
    mentorship: "Mentorship Team <mentorship@bytesandcodes.org>"
  },
  templates: {
    applicationReceived: (data: { 
      firstName: string, 
      email: string 
    }) => ({
      to: [data.email],
      from: "AWS Cloud Mentorship <noreply@bytesandcodes.org>",
      subject: "Application Received - AWS Cloud Development Mentorship Program",
      text: `
Dear ${data.firstName},

Thank you for applying to our AWS Cloud Development Mentorship Program. 
We've received your application and are excited about your interest in cloud development and social impact.

Our team will carefully review your application within the next 5-7 business days.

Next Steps:
- Follow us on Twitter for program updates
- Start exploring AWS free tier services
- Review our recommended AWS certification paths

Best regards,
The Bytes & Codes Team
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { font-size: 24px; color: #2563eb; margin-bottom: 20px; }
              .content { margin-bottom: 20px; }
              .next-steps { background: #f3f4f6; padding: 15px; border-radius: 5px; }
              .footer { margin-top: 30px; font-size: 14px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Application Received!</div>
              <div class="content">
                <p>Dear ${data.firstName},</p>
                <p>Thank you for applying to our AWS Cloud Development Mentorship Program. 
                We've received your application and are excited about your interest in cloud development and social impact.</p>
                <p>Our team will carefully review your application within the next 5-7 business days.</p>
              </div>
              <div class="next-steps">
                <p><strong>Next Steps:</strong></p>
                <ul>
                  <li>Follow us on <a href="https://twitter.com/bytesandcodes">Twitter</a> for program updates</li>
                  <li>Start exploring <a href="https://aws.amazon.com/free/">AWS free tier services</a></li>
                  <li>Review our recommended <a href="https://aws.amazon.com/certification/">AWS certification paths</a></li>
                </ul>
              </div>
              <div class="footer">
                <p>Best regards,<br />The Bytes & Codes Team</p>
              </div>
            </div>
          </body>
        </html>
      `
    }),
    adminNotification: (data: {
      firstName: string;
      lastName: string;
      email: string;
      experienceLevel: string;
      areasOfInterest: string[];
      applicationId: string;
    }) => ({
      to: [process.env.ADMIN_EMAIL || 'admin@example.com'], // Fallback for build
      from: "Mentorship Applications <mentorship@bytesandcodes.org>",
      subject: "New AWS Cloud Mentorship Application",
      text: `
New Application Received

Applicant: ${data.firstName} ${data.lastName}
Email: ${data.email}
Experience Level: ${data.experienceLevel}
Areas of Interest: ${data.areasOfInterest.join(', ')}

Review Application: ${process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.example.com'}/applications/${data.applicationId}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { font-size: 24px; color: #2563eb; margin-bottom: 20px; }
              .applicant-info { background: #f3f4f6; padding: 15px; border-radius: 5px; }
              .review-button { 
                display: inline-block; 
                padding: 10px 20px; 
                background: #2563eb; 
                color: white; 
                text-decoration: none; 
                border-radius: 5px; 
                margin-top: 20px; 
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">New Application Received</div>
              <div class="applicant-info">
                <p><strong>Applicant:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
                <p><strong>Areas of Interest:</strong> ${data.areasOfInterest.join(', ')}</p>
              </div>
              <a href="${process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.example.com'}/applications/${data.applicationId}" 
                 class="review-button">Review Application</a>
            </div>
          </body>
        </html>
      `
    })
  }
};