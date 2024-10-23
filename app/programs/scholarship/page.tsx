import React from 'react';

const ScholarshipPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-8">
        Tech University Scholarship
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Main Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Empowering Future Tech Leaders</h2>
          <p className="text-gray-600 mb-6">
            Our scholarship program supports promising students pursuing degrees in technology-related fields, with a focus on increasing diversity in tech education.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold mb-3">Scholarship Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Full tuition coverage for the academic year
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Mentorship from industry professionals
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Internship placement assistance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Tech equipment allowance
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Requirements & Application */}
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Eligibility Requirements</h3>
            <ul className="space-y-3">
              <li>✓ Currently enrolled/accepted in a tech-related program</li>
              <li>✓ Demonstrated academic excellence (3.0 GPA or higher)</li>
              <li>✓ Strong interest in technology and innovation</li>
              <li>✓ Commitment to diversity in tech</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Application Process</h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Complete the online application form</li>
              <li>Submit academic transcripts</li>
              <li>Provide two letters of recommendation</li>
              <li>Write a personal statement</li>
            </ol>
            <button className="w-full bg-purple-500 text-white py-3 rounded-lg mt-6 hover:bg-purple-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;