import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Code } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-8">
        Our Programs
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-3xl">
        Empowering the next generation of tech leaders through education, innovation, and hands-on experience.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Scholarship Card */}
        <Link href="/programs/scholarship">
          <div className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer">
            <div className="mb-6">
              <GraduationCap className="w-12 h-12 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">University Scholarship</h2>
            <p className="text-gray-600 mb-6">
              Supporting talented students pursuing degrees in technology-related fields. Our scholarship program covers tuition and provides mentorship opportunities.
            </p>
            <div className="flex items-center text-purple-500 font-semibold group-hover:translate-x-2 transition-transform">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Hackathon Card */}
        <Link href="/programs/hackathon">
          <div className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all cursor-pointer">
            <div className="mb-6">
              <Code className="w-12 h-12 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Tech Innovation Hackathon</h2>
            <p className="text-gray-600 mb-6">
              A 48-hour innovation challenge where teams collaborate to build solutions for real-world problems. Compete for prizes and get mentored by industry experts.
            </p>
            <div className="flex items-center text-purple-500 font-semibold group-hover:translate-x-2 transition-transform">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Impact Statistics */}
        <div className="md:col-span-2 mt-12">
          <div className="bg-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">50+</div>
                <div className="text-gray-600">Scholarships Awarded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">200+</div>
                <div className="text-gray-600">Hackathon Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">20+</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-2">85%</div>
                <div className="text-gray-600">Job Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;