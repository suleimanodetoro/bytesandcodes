
// -----------------------------------------------------------------
// File: /app/programs/hackathon/rules/page.tsx
// -----------------------------------------------------------------

import React from "react";
import Link from "next/link";

const RulesPage = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-600 mb-4">
          Hackathon Rules &amp; Guidelines
        </h1>
        <p className="text-secondary-600">
          All times are West Africa Time (WAT). <b>Dates are tentative and may adjust</b>; watch Discord or visit the Contact page for updates.
        </p>

        {/* 1. Eligibility */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">1. Eligibility</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li><b>Who can join?</b> University students in Nigeria (16+).</li>
            <li><b>Exclusions:</b> Organising volunteers, paid mentors, and judges may not compete.</li>
          </ul>
        </section>

        {/* 2. Team Formation */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">2. Team Formation</h2>
          <table className="w-full text-secondary-600 border border-secondary-200">
            <tbody>
              <tr className="border-b"><td className="font-semibold p-2">Size</td><td className="p-2">2 – 4 members</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">Pre‑formed vs Team‑up</td><td className="p-2">Register as a team or find teammates via our #team‑formation channel before hacking starts</td></tr>
              <tr><td className="font-semibold p-2">One team per person</td><td className="p-2">No cross‑team participation</td></tr>
            </tbody>
          </table>
        </section>

        {/* 3. Theme */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">3. Theme &amp; Challenge Areas</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li><b>Healthcare</b> – maternal care, clinic logistics, mental‑health tools…</li>
            <li><b>Sustainability &amp; Safety</b> – clean water, waste reduction, community alerts…</li>
            <li><b>Education</b> – low‑resource learning aids, vocational skills platforms…</li>
            <li>Projects must address <i>at least one</i> area in a Nigerian context.</li>
          </ul>
        </section>

        {/* 4. Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">4. Timeline (WAT)</h2>
          <table className="w-full text-secondary-600 border border-secondary-200 text-sm md:text-base">
            <thead className="bg-primary-100 text-secondary-900"><tr><th className="p-2">Date</th><th className="p-2">Time</th><th className="p-2">Milestone</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="p-2">Fri 16 May</td><td className="p-2">17:00</td><td className="p-2">Kick‑off &amp; Keynote (Discord Stage)</td></tr>
              <tr className="border-b"><td className="p-2">Fri 16 May</td><td className="p-2">19:00</td><td className="p-2">Hacking begins</td></tr>
              <tr className="border-b"><td className="p-2">Sun 18 May</td><td className="p-2">16:00</td><td className="p-2">Submission deadline</td></tr>
              <tr className="border-b"><td className="p-2">Sun 18 May</td><td className="p-2">16:00–19:00</td><td className="p-2">Judging window (private)</td></tr>
              <tr><td className="p-2">Sun 18 May</td><td className="p-2">20:00</td><td className="p-2">Winners announced (Discord Stage)</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-secondary-500 mt-2">All times tentative; subject to change.</p>
        </section>

        {/* 5. Submission package */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">5. Required Submission Package</h2>
          <table className="w-full text-secondary-600 border border-secondary-200">
            <tbody>
              <tr className="border-b"><td className="font-semibold p-2">Git repo</td><td className="p-2">Public/private link with commit history during event</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">Demo video</td><td className="p-2">≤ 5 min (see rules)</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">Slide deck</td><td className="p-2">PDF or Google Slides (max 10 slides)</td></tr>
              <tr><td className="font-semibold p-2">Devpost form</td><td className="p-2">4 text fields: Problem, Solution, Tech stack, Impact</td></tr>
            </tbody>
          </table>
        </section>

        {/* 6. Video rules */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">6. Demo Video Rules</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>≤ 5 : 00 (videos &gt; 5 : 00 = 0 pts for Presentation)</li>
            <li>Must follow order: Problem → Solution → one‑take live demo → Tech → Impact/ask</li>
            <li>English or Pidgin narration; captions encouraged</li>
            <li>File name: <code>teamname_hackathon2025.mp4</code> or same slug on YouTube/Vimeo</li>
            <li><b>One‑take demo rule:</b> main user journey recorded continuously</li>
          </ul>
        </section>

        {/* 7. Judging Criteria */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">7. Judging Criteria &amp; Weights (public)</h2>
          <table className="w-full text-secondary-600 border border-secondary-200">
            <tbody>
              <tr className="border-b"><td className="font-semibold p-2">Impact &amp; Theme Alignment</td><td className="p-2">25 pts</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">Innovation &amp; Technical Execution (includes teamwork)</td><td className="p-2">30 pts</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">User Experience &amp; Design</td><td className="p-2">15 pts</td></tr>
              <tr className="border-b"><td className="font-semibold p-2">Feasibility &amp; Sustainability</td><td className="p-2">15 pts</td></tr>
              <tr><td className="font-semibold p-2">Presentation &amp; Storytelling</td><td className="p-2">15 pts</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-secondary-500 mt-2">Internal sub‑criteria and detailed scoring rubric released post‑event.</p>
        </section>

        {/* 8. Prizes */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">8. Prizes</h2>
          <table className="w-full text-secondary-600 border border-secondary-200">
            <thead className="bg-primary-100 text-secondary-900"><tr><th className="p-2">Rank</th><th className="p-2">Cash</th><th className="p-2">Extras</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="p-2">🥇 1st</td><td className="p-2">₦1,500,000</td><td className="p-2">National media feature + detailed feedback report</td></tr>
              <tr className="border-b"><td className="p-2">🥈 2nd</td><td className="p-2">₦750,000</td><td className="p-2">Newspaper publication + detailed feedback</td></tr>
              <tr><td className="p-2">🥉 3rd</td><td className="p-2">₦500,000</td><td className="p-2">Newspaper publication + detailed feedback</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-secondary-500 mt-2">Prizes paid via Wise within 10 business days; at least one team‑member must provide a valid Nigerian bank account.</p>
        </section>

        {/* 9‑13 same as earlier */}
        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">9. Code of Conduct (short form)</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>Be respectful; zero tolerance for harassment</li>
            <li>Stick to project scope; no disallowed content (hate, adult, malware)</li>
            <li>Follow Discord etiquette: thread replies, mute if noisy</li>
            <li>Violation → warning or immediate disqualification at organiser’s discretion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">10. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>You own your code</li>
            <li>By submitting you grant the organiser a non‑exclusive right to showcase your project</li>
            <li>Third‑party libraries must respect their licences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">11. Disqualification Triggers</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>Late submission (&gt; 5‑min grace)</li>
            <li>Plagiarised code or “pre‑built” product</li>
            <li>Incomplete mandatory items (no video, no repo)</li>
            <li>Breach of CoC or eligibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">12. Appeals</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>Teams may request a score breakdown within 72 hours of results</li>
            <li>Appeals committee (lead organiser + 1 judge) will review; decisions final</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">13. Support &amp; Questions</h2>
          <ul className="list-disc list-inside space-y-1 text-secondary-600">
            <li>Discord #help‑desk: live moderators throughout hacking</li>
            <li>Email: <Link href="/contact" className="underline text-primary-600">see Contact page</Link></li>
            <li>Instagram DMs are <b>not</b> monitored for support</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RulesPage;