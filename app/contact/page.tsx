'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, LoaderCircle, AlertCircle } from 'lucide-react';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    
    try {
      // Example API call - replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      reset(); // Clear form on success
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  // Input field with error handling
  const FormField = ({ 
    label, 
    name, 
    type = 'text',
    placeholder,
    textarea = false 
  }: {
    label: string;
    name: keyof ContactFormData;
    type?: string;
    placeholder: string;
    textarea?: boolean;
  }) => {
    const error = errors[name];
    const Component = textarea ? 'textarea' : 'input';

    return (
      <div>
        <label className="block text-sm font-medium text-secondary-700 mb-2">
          {label}
        </label>
        <div className="relative">
          <Component
            {...register(name)}
            type={type}
            placeholder={placeholder}
            rows={textarea ? 6 : undefined}
            className={`
              w-full px-4 py-3 rounded-lg border
              ${error ? 'border-red-300' : 'border-secondary-200'}
              focus:ring-2 focus:ring-primary-500 focus:border-transparent
              placeholder-secondary-400
              ${textarea ? 'resize-none' : ''}
            `}
          />
          {error && (
            <div className="absolute right-0 top-0 pr-3 pt-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error.message}</p>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section - Same as before */}
      <section className="bg-primary-50 py-24">
        {/* ... your existing header code ... */}
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information - Same as before */}
          <div className="space-y-12">
            {/* ... your existing contact info code ... */}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  name="name"
                  placeholder="Your name"
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              
              <FormField
                label="Subject"
                name="subject"
                placeholder="How can we help?"
              />

              <FormField
                label="Message"
                name="message"
                placeholder="Tell us about your inquiry..."
                textarea
              />

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                  <div className="flex-shrink-0">✓</div>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle className="flex-shrink-0" />
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm">Please try again later or contact us directly.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg
                         hover:bg-primary-700 transition-colors flex items-center justify-center
                         disabled:bg-primary-300"
              >
                {status === 'loading' ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;