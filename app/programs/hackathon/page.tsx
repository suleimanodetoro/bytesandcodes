// app/programs/hackathon/page.tsx

import React from "react";
import { Zap, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const HackathonPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <Zap className="w-20 h-20 text-primary-500 mx-auto mb-6"/>

        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          Future Hackathons
        </h1>

        <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-12">
          We are passionate about bringing the community together for intense, creative, and collaborative coding challenges. While we don't have an event scheduled right now, hackathons are a key part of our future plans.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-primary-50 p-6 rounded-lg">
                <Lightbulb className="w-8 h-8 text-primary-600 mb-3"/>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">Innovate</h3>
                <p className="text-secondary-600">Tackle real-world problems in Nigeria with creative tech solutions.</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
                <Users className="w-8 h-8 text-primary-600 mb-3"/>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">Collaborate</h3>
                <p className="text-secondary-600">Form teams, learn from peers, and connect with industry mentors.</p>
            </div>
             <div className="bg-primary-50 p-6 rounded-lg">
                <Zap className="w-8 h-8 text-primary-600 mb-3"/>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">Build</h3>
                <p className="text-secondary-600">Bring an idea to life in a fast-paced, supportive environment.</p>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-secondary-800 mb-4">Stay Tuned!</h2>
            <p className="text-secondary-600 mb-6">
                Follow us on social media or check back here for future announcements.
            </p>
             <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
        </div>

      </div>
    </div>
  );
};

export default HackathonPage;
