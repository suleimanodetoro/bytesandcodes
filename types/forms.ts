// types/forms.ts
import { UseFormRegister, FieldErrors } from 'react-hook-form';

// Existing interfaces
// types/forms.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; 
  timestamp: number; 
}

export interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder: string;
  textarea?: boolean;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}

// Add email-related interfaces
export interface EmailTemplate {
  subject: string;
  html: string;
}

// Extend ContactFormData for email context
export type ContactFormEmail = ContactFormData;

// Add API response types
export interface ApiResponse {
  success: boolean;
  message: string;
}