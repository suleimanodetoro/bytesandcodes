// lib/email.ts
import { Resend } from 'resend';
import { EmailTemplate, ContactFormEmail } from '@/types/forms';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const emailTemplates = {
  contactForm: {
    userConfirmation: (name: string): EmailTemplate => ({
      subject: 'We received your message',
      html: `
        <div>
          <h1>Thank you for contacting us!</h1>
          <p>Dear ${name},</p>
          <p>We've received your message and will get back to you shortly.</p>
          <p>Best regards,<br />Bytes & Codes Team</p>
        </div>
      `,
    }),
    adminNotification: (data: ContactFormEmail): EmailTemplate => ({
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>From:</strong> ${data.name} (${data.email})</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    }),
  },
};