// app/programs/page.tsx

import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, HeartHandshake, Zap } from 'lucide-react';

const ProgramsPage = () => {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
            Our Programs
          </h1>
          <p className="text-xl text-secondary-600 mb-16 max-w-3xl">
            We are dedicated to building a vibrant tech ecosystem in Nigeria by empowering students with the resources, mentorship, and support they need to succeed.
          </p>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Tech Grant Program Card */}
          <Link href="/programs/grant">
            <div className="group h-full bg-white border border-secondary-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer flex flex-col">
              <div className="mb-6">
                <GraduationCap className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                Tech Grant Program
              </h2>
              <p className="text-secondary-600 mb-6 flex-grow">
                Our biannual grant provides financial support to students and innovators with promising tech-focused projects or academic goals.
              </p>
              <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform mt-4">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* University Student Mentor Program Card */}
          <Link href="/programs/mentorship">
            <div className="group h-full bg-white border border-secondary-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer flex flex-col">
              <div className="mb-6">
                <Users className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                University Mentorship
              </h2>
              <p className="text-secondary-600 mb-6 flex-grow">
                We connect university students across Nigeria with experienced industry professionals for guidance, support, and career development.
              </p>
              <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform mt-4">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
          
          {/* Hackathon Card */}
          <Link href="/programs/hackathon">
            <div className="group h-full bg-white border border-secondary-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer flex flex-col">
              <div className="mb-6">
                <Zap className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                Future Hackathons
              </h2>
              <p className="text-secondary-600 mb-6 flex-grow">
                We're planning intense, collaborative coding challenges to tackle real-world problems. Stay tuned for future events.
              </p>
              <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform mt-4">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Impact Section */}
        <div className="bg-primary-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold mb-12 text-center text-secondary-900">
            Building Futures, Together
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-12 h-12 text-primary-600 mb-4" />
              <div className="text-4xl font-bold text-primary-600 mb-3">20+</div>
              <div className="text-secondary-600">Partner Universities Across Nigeria</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary-600 mb-4" />
              <div className="text-4xl font-bold text-primary-600 mb-3">100+</div>
              <div className="text-secondary-600">Students & Mentors in our Network</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
