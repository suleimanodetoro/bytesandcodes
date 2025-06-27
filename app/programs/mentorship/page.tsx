// app/programs/mentorship/page.tsx
"use client";

import React from "react";
import { Calendar, Users, Target, Blocks, School } from "lucide-react";
import Link from "next/link";

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          University Student Mentorship Program
        </h1>

        {/* Hero Section */}
        <div className="bg-primary-50 p-8 rounded-lg mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary-900">
              Guidance for Your Tech Journey
            </h2>
            <p className="text-secondary-600 mb-6">
              Our program connects ambitious university students from across Nigeria with experienced tech professionals. Get personalized guidance, grow your network, and build the skills you need to launch a successful career in technology.
            </p>
            <Link
              href="/programs/mentorship/apply"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Apply to be a Mentee
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
                  description: "Regular, dedicated meetings with your mentor.",
                },
                {
                  icon: Users,
                  title: "Network Growth",
                  description: "Access to a curated community of tech professionals and peers.",
                },
                {
                  icon: Target,
                  title: "Career Guidance",
                  description: "Personalized advice on career paths, resumes, and interviews.",
                },
                {
                  icon: Blocks,
                  title: "Skill Development",
                  description: "Structured learning paths and hands-on project guidance.",
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
              Who Should Apply?
            </h3>
             <ul className="space-y-3 text-secondary-600 list-disc list-inside">
                <li>Currently enrolled university students in Nigeria.</li>
                <li>Passionate about building a career in any technology field.</li>
                <li>Committed to learning, growth, and receiving constructive feedback.</li>
                <li>Willing to dedicate at least 4 hours per month to the program.</li>
              </ul>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white border border-secondary-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900 text-center">
            How to Apply
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description:
                    "Fill out our straightforward application form so we can understand your background and goals.",
                },
                {
                  step: "2",
                  title: "Application Review",
                  description:
                    "Our team carefully reviews your application to ensure alignment with the program.",
                },
                {
                  step: "3",
                  title: "Matching Process",
                  description:
                    "If selected, we search our network for a mentor whose experience matches your aspirations.",
                },
                {
                  step: "4",
                  title: "Program Kick-off",
                  description:
                    "You're introduced to your mentor and begin your collaborative journey.",
                },
              ].map((phase) => (
                <div key={phase.step} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-4">
                      {phase.step}
                  </div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    {phase.title}
                  </h4>
                   <p className="text-secondary-600 text-sm">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-10">
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
  );
};

export default MentorshipPage;
