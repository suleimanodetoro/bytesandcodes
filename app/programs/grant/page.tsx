// app/programs/grant/page.tsx

import React from 'react';
import { Target, Award, Calendar, BookOpen, UserCheck, Cloud, Link as LinkIcon, Handshake } from 'lucide-react';
import Link from 'next/link';

const GrantProgramPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-4">
            Early Kickstart Grant
            </h1>
            <p className="text-xl text-secondary-500">A Bytes and Codes Initiative</p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
            <p className="text-lg text-secondary-600">
                To empower skilled Nigerian students and recent graduates by providing access to high-demand cloud and networking certifications. We aim to bridge the skills gap, enhance employability, and provide a crucial 'kickstart' for careers in the global tech landscape.
            </p>
        </div>
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Grant Tiers */}
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Grant Offerings</h2>
                <div className="space-y-8">
                    {/* Tier 1 Card */}
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                            <Award className="w-8 h-8 text-primary-600 mr-4"/>
                            <h3 className="text-2xl font-bold text-secondary-900">Tier 1: Full Certification Jumpstart</h3>
                        </div>
                        <p className="text-secondary-600 mb-4">For highly motivated applicants ready for certification, this tier provides the resources to get industry-recognized credentials.</p>
                        <ul className="space-y-2 list-disc list-inside text-secondary-700">
                            <li>One high-quality Udemy prep course voucher.</li>
                            <li>One full exam voucher for either <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> or <strong>Microsoft Azure Fundamentals (AZ-900)</strong>.</li>
                        </ul>
                    </div>
                    {/* Tier 2 Card */}
                    <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
                         <div className="flex items-center mb-3">
                            <BookOpen className="w-8 h-8 text-secondary-700 mr-4"/>
                            <h3 className="text-2xl font-bold text-secondary-900">Tier 2: Foundational Course Grant</h3>
                        </div>
                        <p className="text-secondary-600 mb-4">For applicants needing to build base skills, this tier provides access to essential foundational knowledge in cloud or networking.</p>
                        <ul className="space-y-2 list-disc list-inside text-secondary-700">
                            <li>One high-quality Udemy course voucher for cloud fundamentals or networking basics.</li>
                        </ul>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-secondary-900 mb-6">Expected Impact</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                            <Handshake className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-secondary-800">Address Skills Gaps</h4>
                                <p className="text-secondary-600">Provide tangible, recognized qualifications relevant to the global tech job market.</p>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <Target className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-semibold text-secondary-800">Overcome Financial Barriers</h4>
                                <p className="text-secondary-600">Empower individuals to pursue education they couldn't otherwise afford.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Eligibility & Application */}
            <div className="space-y-8">
                 <div className="bg-white border border-secondary-200 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-secondary-900">Eligibility</h3>
                    <ul className="space-y-3 text-secondary-600">
                        <li className="flex items-start"><UserCheck className="w-5 h-5 mr-2 mt-1 text-primary-600 flex-shrink-0"/><span>Nigerian student or recent graduate (within 5 years).</span></li>
                        <li className="flex items-start"><Cloud className="w-5 h-5 mr-2 mt-1 text-primary-600 flex-shrink-0"/><span>Demonstrate existing tech skills and clear motivation.</span></li>
                        <li className="flex items-start"><UserCheck className="w-5 h-5 mr-2 mt-1 text-primary-600 flex-shrink-0"/><span>Must articulate financial barriers preventing self-funding.</span></li>
                         <li className="flex items-start"><UserCheck className="w-5 h-5 mr-2 mt-1 text-primary-600 flex-shrink-0"/><span>Provide a university email (e.g., ending in .edu.ng).</span></li>
                    </ul>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4 text-secondary-900">Apply Now</h3>
                    <div className="flex items-center justify-center text-secondary-700 mb-4">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>Applications are now open!</span>
                    </div>
                    <p className="text-secondary-600 mb-6">
                        Ready to kickstart your career? Apply through our Google Form. The process is straightforward and focuses on your skills, motivation, and need.
                    </p>
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeyx0i08yFeheKCg0IhJICQzNANbf5ZBhUtPrrb0dqc9b1UtA/viewform?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center bg-primary-600 text-white py-3 rounded-lg mt-2 hover:bg-primary-700 transition-colors font-semibold"
                    >
                        Go to Application Form <LinkIcon className="w-4 h-4 ml-2"/>
                    </Link>
                    <p className="text-xs text-secondary-500 mt-4">Selected applicants must commit to completing the course/certification within 3-4 months.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GrantProgramPage;
