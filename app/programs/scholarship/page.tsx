//app/programs/scholarship/page.tsx

import React from 'react';

const ScholarshipPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          Tech University Scholarship
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Main Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-secondary-900">
              Empowering Future Tech Leaders
            </h2>
            <p className="text-secondary-600 mb-6">
              Our scholarship program supports promising students pursuing degrees in technology-related fields, 
              with a focus on increasing diversity in tech education.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3 text-secondary-900">Scholarship Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  <span className="text-secondary-600">Full tuition coverage for the academic year</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  <span className="text-secondary-600">Mentorship from industry professionals</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  <span className="text-secondary-600">Internship placement assistance</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  <span className="text-secondary-600">Tech equipment allowance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Requirements & Application */}
          <div>
            <div className="bg-white border border-secondary-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-secondary-900">Eligibility Requirements</h3>
              <ul className="space-y-3 text-secondary-600">
                <li>✓ Currently enrolled/accepted in a tech-related program</li>
                <li>✓ Demonstrated academic excellence (3.0 GPA or higher)</li>
                <li>✓ Strong interest in technology and innovation</li>
                <li>✓ Commitment to diversity in tech</li>
              </ul>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-secondary-900">Application Process</h3>
              <ol className="space-y-3 list-decimal list-inside text-secondary-600">
                <li>Complete the online application form</li>
                <li>Submit academic transcripts</li>
                <li>Provide two letters of recommendation</li>
                <li>Write a personal statement</li>
              </ol>
              <button className="w-full bg-primary-600 text-white py-3 rounded-lg mt-6 hover:bg-primary-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;