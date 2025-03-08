// app/programs/mentorship/page.tsx
"use client";

import React from "react";
import { Calendar, Users, Target, Blocks } from "lucide-react";
import Link from "next/link";

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          Cloud Mentorship Program
        </h1>

        {/* Hero Section */}
        <div className="bg-primary-50 p-8 rounded-lg mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary-900">
              Join Our Mentorship Program
            </h2>
            <p className="text-secondary-600 mb-6">
              Connect with experienced tech professionals who will guide you
              through your journey in technology. Our mentorship program pairs
              you with mentors who can help you achieve your career goals and
              develop your skills.
            </p>
            <Link
              href="/programs/mentorship/apply"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Program Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">
              What You Get
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: Calendar,
                  title: "1-on-1 Sessions",
                  description: "Regular one-on-one meetings with your mentor",
                },
                {
                  icon: Users,
                  title: "Network Growth",
                  description: "Access to a community of tech professionals",
                },
                {
                  icon: Target,
                  title: "Career Guidance",
                  description: "Personalized career development advice",
                },
                {
                  icon: Blocks,
                  title: "Skill Development",
                  description: "Structured learning paths and project guidance",
                },
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <benefit.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">
                      {benefit.title}
                    </h4>
                    <p className="text-secondary-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">
              Program Structure
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">
                  Duration
                </h4>
                <p className="text-secondary-600">
                  6-month commitment with possibility of extension
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">
                  Meeting Frequency
                </h4>
                <p className="text-secondary-600">
                  Bi-weekly 1-hour sessions with your mentor
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900 mb-2">
                  Program Components
                </h4>
                <ul className="list-disc list-inside text-secondary-600 space-y-2">
                  <li>Personal goal setting and tracking</li>
                  <li>Project-based learning</li>
                  <li>Technical skill development</li>
                  <li>Career planning and guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="bg-primary-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900">
            Eligibility Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-secondary-900 mb-4">
                Who Can Apply
              </h4>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Students and early-career professionals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Strong interest in technology
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Commitment to learning and growth
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Based in or around Africa
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900 mb-4">
                Requirements
              </h4>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Minimum 5 hours/week commitment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Access to computer and stable internet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Basic understanding of programming
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  Strong communication skills
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white border border-secondary-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900">
            Application Process
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description:
                    "Fill out our detailed application form sharing your background and goals",
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description:
                    "Our team reviews your application and assesses program fit",
                },
                {
                  step: "3",
                  title: "Interview",
                  description:
                    "Selected candidates participate in a brief interview",
                },
                {
                  step: "4",
                  title: "Matching",
                  description:
                    "Successful applicants are matched with suitable mentors",
                },
              ].map((phase, index) => (
                <div key={index} className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                      {phase.step}
                    </span>
                    <h4 className="font-semibold text-secondary-900">
                      {phase.title}
                    </h4>
                  </div>
                  <p className="text-secondary-600 ml-12">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Link
                href="/programs/mentorship/apply"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
