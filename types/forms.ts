// types/forms.ts
import { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
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