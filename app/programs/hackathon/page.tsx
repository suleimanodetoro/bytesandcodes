// =============================================================
// HACKATHON PAGES – UPDATED WITH FINAL DATES & RULES (APR 2025)
// =============================================================

// -----------------------------------------------------------------
// File: /app/programs/hackathon/page.tsx
// -----------------------------------------------------------------

import React from "react";
import Link from "next/link";

const HackathonPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-8">
          Tech Innovation Hackathon
        </h1>

        {/* Hero Section */}
        <div className="bg-primary-50 p-8 rounded-lg mb-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-secondary-900">
              Join Our Next Hackathon – <b>16–18 May 2025</b>
            </h2>
            <p className="text-secondary-600">
              Build solutions that move Nigeria forward in <span className="font-semibold">Health</span>, <span className="font-semibold">Sustainability &amp; Safety</span>, and <span className="font-semibold">Education</span>. Work for 48&nbsp;hours with mentors, develop a prototype, and compete for cash&nbsp;&amp;&nbsp;creative in‑kind prizes.
            </p>
            <p className="text-sm text-secondary-500 italic">
              *Dates are <span className="font-semibold">tentative</span> and may be adjusted. Check the Rules page or contact us for the latest schedule.*
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="https://devpost.com/" // TODO: replace with live registration link
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center"
              >
                Register Now
              </Link>
              <Link
                href="/programs/hackathon/rules"
                className="text-primary-600 font-semibold underline underline-offset-4 hover:text-primary-700"
              >
                Rules &amp; Guidelines
              </Link>
            </div>
          </div>
        </div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* left column */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">Event Details</h3>
            <ul className="space-y-3 text-secondary-600">
              <li className="flex items-center"><span className="font-bold mr-2">Date:</span> 16 → 18 May 2025 (Fri–Sun)</li>
              <li className="flex items-center"><span className="font-bold mr-2">Location:</span> 100 % Online (WAT)</li>
              <li className="flex items-center"><span className="font-bold mr-2">Duration:</span> 48 Hours</li>
              <li className="flex items-center"><span className="font-bold mr-2">Team Size:</span> 2‑4 Members</li>
            </ul>
          </div>
          {/* right column */}
          <div className="bg-white border border-secondary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary-900">Prizes</h3>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-2xl mr-2">🥇</span><div><p className="font-bold text-secondary-900">First Place</p><p className="text-secondary-600">₦1,500,000 cash + national media feature + detailed feedback dossier</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-2">🥈</span><div><p className="font-bold text-secondary-900">Second Place</p><p className="text-secondary-600">₦750,000 cash + newspaper publication + detailed feedback</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-2">🥉</span><div><p className="font-bold text-secondary-900">Third Place</p><p className="text-secondary-600">₦500,000 cash + newspaper publication + detailed feedback</p></div></li>
              <li className="flex items-start"><span className="text-2xl mr-2">🎁</span><div><p className="font-bold text-secondary-900">Creative Extras</p><p className="text-secondary-600">Cloud credits, online course vouchers, productivity tool licences</p></div></li>
            </ul>
          </div>
        </div>

        {/* Precise Timeline Section */}
        <div className="bg-primary-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary-900">Key Schedule (WAT)</h3>
          <div className="space-y-4 text-secondary-600">
            <div className="flex items-start"><div className="w-32 font-bold text-secondary-900">Fri 16 May</div><div><p className="font-bold text-secondary-900">17:00 — Kick‑off &amp; Keynote</p><p>Discord Stage broadcast + welcome pack email</p></div></div>
            <div className="flex items-start"><div className="w-32 font-bold text-secondary-900">Fri 16 May</div><div><p className="font-bold text-secondary-900">19:00 — Hacking Begins</p><p>Idea pitching, repo creation, mentor lobby opens</p></div></div>
            <div className="flex items-start"><div className="w-32 font-bold text-secondary-900">Sun 18 May</div><div><p className="font-bold text-secondary-900">16:00 — Submission Deadline</p><p>Devpost form locks; late edits not accepted</p></div></div>
            <div className="flex items-start"><div className="w-32 font-bold text-secondary-900">Sun 18 May</div><div><p className="font-bold text-secondary-900">16:00‑19:00 — Judging</p><p>Private scoring window</p></div></div>
            <div className="flex items-start"><div className="w-32 font-bold text-secondary-900">Sun 18 May</div><div><p className="font-bold text-secondary-900">20:00 — Winners Announced</p><p>Discord Stage + social media blast</p></div></div>
          </div>
          <p className="text-xs text-secondary-500 mt-4">Schedule is tentative and may change. For updates, see the Rules page or email via our Contact page.</p>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
