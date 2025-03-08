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

// Updated Form validation schema
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
      primaryLanguages: [],
      areasOfInterest: [],
      preferredMeetingTimes: [],
      previousMentorship: false,
      acceptedTerms: false, // Set to a plain boolean value
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');
  
    try {
      const response = await fetch('/api/mentorship/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application');
      }
  
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  const FormField = ({ 
    label, 
    name, 
    type = 'text',
    error,
    children,
  }: {
    label: string;
    name: string;
    type?: string;
    error?: { message?: string };
    children: React.ReactNode;
  }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-secondary-700">
        {label}
      </label>
      {children}
      {error?.message && (
        <p className="text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-secondary-600 mb-8">
              Thank you for applying to our AWS Cloud Development Mentorship Program for Social Impact. 
              We review applications within 5-7 business days and will be in touch soon.
            </p>
            <Link
              href="/programs/mentorship"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Mentorship Program
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            AWS Cloud Development Mentorship Application
          </h1>
          <p className="text-xl text-secondary-600">
            Accelerate your cloud skills and build socially impactful solutions.
          </p>
          <p className="text-sm text-secondary-500 mt-2">
            This program features recorded masterclasses, live Q&A sessions, and hands-on projects that produce a documented portfolio of your AWS expertise.
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="First Name"
                name="firstName"
                error={errors.firstName}
              >
                <input
                  {...register('firstName')}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Last Name"
                name="lastName"
                error={errors.lastName}
              >
                <input
                  {...register('lastName')}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Email"
                name="email"
                type="email"
                error={errors.email}
              >
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Phone Number"
                name="phone"
                error={errors.phone}
              >
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Location (City, Country)"
                name="location"
                error={errors.location}
              >
                <input
                  {...register('location')}
                  type="text"
                  placeholder="e.g., London, UK"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>
            </div>
          </div>

          {/* Background */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">
              Background & Experience
            </h2>
            <div className="space-y-6">
              <FormField
                label="Current Role"
                name="currentRole"
                error={errors.currentRole}
              >
                <input
                  {...register('currentRole')}
                  type="text"
                  placeholder="e.g., Student, Junior Developer, Cloud Enthusiast"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Experience Level"
                name="experienceLevel"
                error={errors.experienceLevel}
              >
                <select
                  {...register('experienceLevel')}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                </select>
              </FormField>

              <FormField
                label="Educational Background"
                name="education"
                error={errors.education}
              >
                <textarea
                  {...register('education')}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Briefly describe your educational background"
                />
              </FormField>
            </div>
          </div>

          {/* Technical Background */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">
              Technical Background
            </h2>
            <div className="space-y-6">
              <FormField
                label="Primary Programming Languages"
                name="primaryLanguages"
                error={errors.primaryLanguages}
              >
                <div className="space-y-2">
                  {[
                    'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP',
                    'Swift', 'Go', 'Rust', 'Other'
                  ].map((language) => (
                    <label key={language} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={language}
                        {...register('primaryLanguages')}
                        className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-secondary-700">{language}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              <FormField
                label="GitHub Profile (optional)"
                name="githubProfile"
                error={errors.githubProfile}
              >
                <input
                  {...register('githubProfile')}
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Portfolio URL (optional)"
                name="portfolioUrl"
                error={errors.portfolioUrl}
              >
                <input
                  {...register('portfolioUrl')}
                  type="url"
                  placeholder="https://your-portfolio.com"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>
            </div>
          </div>

          {/* Program Specific – AWS Cloud & Social Impact */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">
              Program Details
            </h2>
            <div className="space-y-6">
              <FormField
                label="Areas of Interest"
                name="areasOfInterest"
                error={errors.areasOfInterest}
              >
                <div className="space-y-2">
                  {[
                    'AWS Cloud Computing', 'Serverless Architectures', 
                    'DevOps & CI/CD', 'Cloud Security', 'Infrastructure as Code',
                    'Social Impact Projects'
                  ].map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={area}
                        {...register('areasOfInterest')}
                        className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-secondary-700">{area}</span>
                    </label>
                  ))}
                </div>
              </FormField>

              <FormField
                label="Mentorship Goals"
                name="mentorshipGoals"
                error={errors.mentorshipGoals}
              >
                <textarea
                  {...register('mentorshipGoals')}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Describe your goals for mastering AWS cloud development and applying your skills to create solutions with social impact. For example, explain how you plan to build secure, scalable cloud applications that address community challenges."
                />
              </FormField>

              <FormField
                label="Weekly Time Commitment"
                name="timeCommitment"
                error={errors.timeCommitment}
              >
                <select
                  {...register('timeCommitment')}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select time commitment</option>
                  <option value="5-10hrs">5-10 hours per week</option>
                  <option value="10-15hrs">10-15 hours per week</option>
                  <option value="15+hrs">15+ hours per week</option>
                </select>
              </FormField>

              <FormField
                label="Preferred Meeting Times"
                name="preferredMeetingTimes"
                error={errors.preferredMeetingTimes}
              >
                <div className="space-y-2">
                  {[
                    'Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings',
                    'Weekend Mornings', 'Weekend Afternoons', 'Weekend Evenings'
                  ].map((time) => (
                    <label key={time} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={time}
                        {...register('preferredMeetingTimes')}
                        className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-secondary-700">{time}</span>
                    </label>
                  ))}
                </div>
              </FormField>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-secondary-900 mb-6">
              Additional Information
            </h2>
            <div className="space-y-6">
              <FormField
                label="Previous Mentorship Experience"
                name="previousMentorship"
                error={errors.previousMentorship}
              >
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="true"
                      {...register('previousMentorship', { setValueAs: (v) => v === 'true' })}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="false"
                      {...register('previousMentorship', { setValueAs: (v) => v === 'true' })}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </FormField>

              <FormField
                label="How did you hear about our program?"
                name="heardAboutUs"
                error={errors.heardAboutUs}
              >
                <input
                  {...register('heardAboutUs')}
                  type="text"
                  placeholder="e.g., Social media, friend, community forum"
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </FormField>

              <FormField
                label="Additional Information (Optional)"
                name="additionalInfo"
                error={errors.additionalInfo}
              >
                <textarea
                  {...register('additionalInfo')}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any extra details you'd like to share about your cloud experience or social impact ideas?"
                />
              </FormField>
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="space-y-6">
            <FormField
              label="Terms and Conditions"
              name="acceptedTerms"
              error={errors.acceptedTerms}
            >
              <label className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  {...register('acceptedTerms')}
                  className="mt-1 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                    terms and conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                    privacy policy
                  </Link>
                </span>
              </label>
            </FormField>

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle className="flex-shrink-0" />
                <div>
                  <p className="font-medium">Failed to submit application</p>
                  <p className="text-sm">{errorMessage || 'Please try again later'}</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <Link
                href="/programs/mentorship"
                className="text-secondary-600 hover:text-secondary-700 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Program
              </Link>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                         transition-colors flex items-center gap-2 disabled:bg-primary-300"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <LoaderCircle className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorshipApplicationPage;
