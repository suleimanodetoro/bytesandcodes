'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, LoaderCircle, AlertCircle } from 'lucide-react';
import type { ContactFormData, FormFieldProps } from '@/types/forms';

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


// Form field component
const FormField = ({ 
    label, 
    name, 
    type = 'text',
    placeholder,
    textarea = false,
    register,
    errors,
  }: FormFieldProps) => {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      reset();
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl">
            Have questions about our programs or want to get involved? 
            We'd love to hear from you. Reach out using the form below.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                details: 'info@bytesandcodes.com',
                description: 'Write to us anytime'
              },
              {
                icon: Phone,
                title: 'Phone',
                details: '+234 123 456 7890',
                description: 'Mon-Fri from 9am to 5pm'
              },
              {
                icon: MapPin,
                title: 'Location',
                details: 'Abuja, Nigeria',
                description: 'Request a visit'
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{item.details}</p>
                  <p className="text-secondary-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  register={register}
                  errors={errors}
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  register={register}
                  errors={errors}
                />
              </div>
              
              <FormField
                label="Subject"
                name="subject"
                placeholder="How can we help?"
                register={register}
                errors={errors}
              />

              <FormField
                label="Message"
                name="message"
                placeholder="Tell us about your inquiry..."
                textarea
                register={register}
                errors={errors}
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