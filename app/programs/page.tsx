import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Code } from 'lucide-react';

const ProgramsPage = () => {
    return (
      <div className="min-h-screen bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section - Now with green text */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
            Our Programs
          </h1>
          
          <p className="text-xl text-secondary-600 mb-16 max-w-3xl">
            Empowering the next generation of tech leaders through education, innovation, and hands-on experience.
          </p>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Scholarship Card */}
          <Link href="/programs/scholarship">
            <div className="group h-full bg-white border border-secondary-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-6">
                <GraduationCap className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                University Scholarship
              </h2>
              <p className="text-secondary-600 mb-6">
                Supporting talented students pursuing degrees in technology-related fields. 
                Our scholarship program covers tuition and provides mentorship opportunities.
              </p>
              <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Hackathon Card */}
          <Link href="/programs/hackathon">
            <div className="group h-full bg-white border border-secondary-200 rounded-lg p-8 hover:shadow-lg transition-all cursor-pointer">
              <div className="mb-6">
                <Code className="w-12 h-12 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">
                Tech Innovation Hackathon
              </h2>
              <p className="text-secondary-600 mb-6">
                A 48-hour innovation challenge where teams collaborate to build solutions 
                for real-world problems. Compete for prizes and get mentored by industry experts.
              </p>
              <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Impact Statistics */}
        <div className="bg-primary-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold mb-12 text-secondary-900">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-3">50+</div>
              <div className="text-secondary-600">Scholarships Awarded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-3">200+</div>
              <div className="text-secondary-600">Hackathon Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-3">20+</div>
              <div className="text-secondary-600">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-3">85%</div>
              <div className="text-secondary-600">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;