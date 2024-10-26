import React from 'react';

const HackathonPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          Tech Innovation Hackathon
        </h1>

        {/* Hero Section */}
        <div className="bg-primary-50 p-8 rounded-lg mb-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary-900">Join Our Next Hackathon</h2>
            <p className="text-secondary-600 mb-6">
              Bring your ideas to life in our 48-hour hackathon. Collaborate with fellow innovators, 
              receive mentorship from industry experts, and compete for exciting prizes.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Register Now
            </button>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">Event Details</h3>
            <ul className="space-y-3 text-secondary-600">
              <li className="flex items-center">
                <span className="font-bold mr-2">Date:</span> Coming Soon
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Location:</span> Virtual & In-Person
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Duration:</span> 48 Hours
              </li>
              <li className="flex items-center">
                <span className="font-bold mr-2">Team Size:</span> 2-4 Members
              </li>
            </ul>
          </div>

          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">Prizes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-2">🥇</span>
                <div>
                  <p className="font-bold text-secondary-900">First Place</p>
                  <p className="text-secondary-600">$5,000 + Mentorship Program</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-2">🥈</span>
                <div>
                  <p className="font-bold text-secondary-900">Second Place</p>
                  <p className="text-secondary-600">$3,000 + Tech Equipment</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-2">🥉</span>
                <div>
                  <p className="font-bold text-secondary-900">Third Place</p>
                  <p className="text-secondary-600">$1,000 + Software Licenses</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-primary-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900">Event Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-24 font-bold text-secondary-900">Day 1</div>
              <div>
                <p className="font-bold text-secondary-900">Opening Ceremony & Team Formation</p>
                <p className="text-secondary-600">Project ideation and kickoff</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-24 font-bold text-secondary-900">Day 2</div>
              <div>
                <p className="font-bold text-secondary-900">Development & Mentorship</p>
                <p className="text-secondary-600">Core development and mentor sessions</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-24 font-bold text-secondary-900">Day 3</div>
              <div>
                <p className="font-bold text-secondary-900">Project Submission & Presentations</p>
                <p className="text-secondary-600">Final presentations and awards ceremony</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;