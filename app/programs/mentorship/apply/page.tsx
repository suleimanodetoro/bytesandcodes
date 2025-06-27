'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  LoaderCircle, 
  AlertCircle, 
  ChevronLeft,
  Check
} from 'lucide-react';
import Link from 'next/link';

// General-purpose application schema
const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name is required').max(50),
  lastName: z.string().min(2, 'Last name is required').max(50),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  location: z.string().min(2, 'Please enter your location').max(100),
  university: z.string().min(3, 'Please enter your university name').max(100),

  // Background
  fieldOfStudy: z.string().min(2, 'Please enter your field of study').max(100),
  yearOfStudy: z.enum(['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+', 'Graduate']),
  
  // Technical Interests
  areasOfInterest: z.array(z.string()).min(1, 'Please select at least one area of interest'),
  githubProfile: z.string().url('Please enter a valid GitHub URL').optional().or(z.literal('')),
  
  // Program Specific
  mentorshipGoals: z.string().min(50, 'Please describe your goals in at least 50 characters').max(1000),
  timeCommitment: z.enum(['4-6hrs', '6-8hrs', '8+hrs']),
  
  // Additional Information
  heardAboutUs: z.string().min(2, 'Please let us know how you heard about us').max(200),
  
  // Terms
  acceptedTerms: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
  }),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const MentorshipApplicationPage = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      areasOfInterest: [],
      acceptedTerms: false,
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');
    console.log(data); // For testing, remove in production
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');

    // Replace mock with actual API call
    /*
    try {
      const response = await fetch('/api/mentorship/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Failed to submit application');
      }
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
    */
  };

  const FormField = ({ 
    label, 
    name, 
    error,
    children,
  }: {
    label: string;
    name: string;
    error?: { message?: string };
    children: React.ReactNode;
  }) => (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-secondary-700">
        {label}
      </label>
      {children}
      {error?.message && (
        <p className="text-sm text-red-600 mt-1">{error.message}</p>
      )}
    </div>
  );

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white py-24 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              Application Submitted!
            </h1>
            <p className="text-secondary-600 mb-8">
              Thank you for applying to our University Mentorship Program. We will review your application and be in touch within the next two weeks if you are selected for the matching process.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Programs
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Mentorship Program Application
          </h1>
          <p className="text-xl text-secondary-600">
            Take the next step in your tech career. Apply to be matched with a mentor.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Personal Information */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">Personal & Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="First Name" name="firstName" error={errors.firstName}>
                <input {...register('firstName')} type="text" id="firstName" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="Last Name" name="lastName" error={errors.lastName}>
                <input {...register('lastName')} type="text" id="lastName" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="Email" name="email" error={errors.email}>
                <input {...register('email')} type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="Phone Number" name="phone" error={errors.phone}>
                <input {...register('phone')} type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="Location (City, State)" name="location" error={errors.location}>
                <input {...register('location')} type="text" id="location" placeholder="e.g., Lagos, Lagos" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="University" name="university" error={errors.university}>
                <input {...register('university')} type="text" id="university" placeholder="e.g., University of Lagos" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
              <FormField label="Field of Study" name="fieldOfStudy" error={errors.fieldOfStudy}>
                <input {...register('fieldOfStudy')} type="text" id="fieldOfStudy" placeholder="e.g., Computer Science" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
               <FormField label="Year of Study" name="yearOfStudy" error={errors.yearOfStudy}>
                <select {...register('yearOfStudy')} id="yearOfStudy" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="5th Year+">5th Year+</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </FormField>
            </div>
          </div>

          {/* Technical Interests */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">Technical Interests</h2>
            <div className="space-y-6">
              <FormField label="Areas of Interest (select all that apply)" name="areasOfInterest" error={errors.areasOfInterest}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Frontend Development', 'Backend Development', 'Mobile Development (Android/iOS)', 'UI/UX Design', 'Data Science / AI / ML', 'Cybersecurity', 'Cloud Computing (AWS/Azure/GCP)', 'DevOps', 'Product Management', 'Game Development'].map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input type="checkbox" value={area} {...register('areasOfInterest')} className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"/>
                      <span className="text-secondary-700">{area}</span>
                    </label>
                  ))}
                </div>
              </FormField>
              <FormField label="GitHub Profile (optional)" name="githubProfile" error={errors.githubProfile}>
                <input {...register('githubProfile')} type="url" placeholder="https://github.com/yourusername" className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>
            </div>
          </div>

          {/* Program Specific */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">Your Goals</h2>
            <div className="space-y-6">
              <FormField label="What do you hope to achieve through this mentorship?" name="mentorshipGoals" error={errors.mentorshipGoals}>
                <textarea {...register('mentorshipGoals')} rows={4} className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="e.g., I want to build my first web application, prepare for technical interviews, get advice on my portfolio, or understand a specific tech career path..."/>
              </FormField>
              <FormField label="Monthly Time Commitment" name="timeCommitment" error={errors.timeCommitment}>
                <select {...register('timeCommitment')} className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Select time commitment</option>
                  <option value="4-6hrs">4-6 hours per month</option>
                  <option value="6-8hrs">6-8 hours per month</option>
                  <option value="8+hrs">8+ hours per month</option>
                </select>
              </FormField>
            </div>
          </div>
          
          {/* Submit */}
           <div className="space-y-6">
              <FormField label="How did you hear about us?" name="heardAboutUs" error={errors.heardAboutUs}>
                <input {...register('heardAboutUs')} type="text" placeholder="e.g., From a friend, social media, university..." className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </FormField>

              <FormField label="" name="acceptedTerms" error={errors.acceptedTerms}>
                <label className="flex items-start space-x-2">
                  <input type="checkbox" {...register('acceptedTerms')} className="mt-1 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"/>
                  <span className="text-sm text-secondary-600">I agree to the <Link href="/terms" className="text-primary-600 hover:underline">terms and conditions</Link> and <Link href="/privacy" className="text-primary-600 hover:underline">privacy policy</Link>.</span>
                </label>
              </FormField>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2"><AlertCircle className="flex-shrink-0" /><p>{errorMessage || 'An unexpected error occurred. Please try again.'}</p></div>
              )}

              <div className="flex items-center justify-end">
                <button type="submit" disabled={submitStatus === 'loading'} className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 disabled:bg-primary-300 disabled:cursor-not-allowed">
                  {submitStatus === 'loading' ? (<><LoaderCircle className="animate-spin" /> Submitting...</>) : ('Submit Application')}
                </button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorshipApplicationPage;
