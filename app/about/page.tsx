//app/about/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen bg-white py-24">
      {/* Mission Section */}
      <section className="mb-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-12 text-center">
            About Us
          </h1>

          <div className="space-y-6 text-secondary-600 text-lg">
            <p>
              At Bytes and Codes Educational Initiative, we envision a future
              where young people across Africa are empowered to leverage
              technology to make a difference in their communities and the
              world. Our mission is to bridge the digital divide and create
              accessible opportunities for the next generation of coders,
              builders, and changemakers.
            </p>

            <p>
              Since our founding, we have committed ourselves to inspiring,
              educating, and uplifting youth in the tech space. Our approach is
              rooted in community building, hands-on education, and mentorship.
              We believe that learning to code goes beyond just writing lines of
              syntax—it's about learning to solve problems, think creatively,
              and develop the confidence to tackle the challenges of today and
              tomorrow.
            </p>

            <p>
              Our programs are designed with inclusivity in mind, providing
              young people, particularly those from marginalized backgrounds,
              with the tools they need to succeed. From workshops to coding boot
              camps, we create safe and inspiring environments for young
              innovators to explore their interests in technology. Our flagship
              events connect youth with industry leaders, providing role models
              and building a network that supports growth, collaboration, and
              lifelong learning.
            </p>

            <p>
              We aim to spark a passion for technology that drives social
              good—because we believe that tech can and should be used to make a
              positive impact. Whether it's creating solutions for community
              issues, learning new skills, or collaborating with like-minded
              peers, Bytes and Codes Educational Initiative is here to support
              and guide every step of the way.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/join"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg 
                         hover:bg-primary-700 transition-colors font-semibold"
            >
              Join us today and be a part of this movement!
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-secondary-900 mb-16 text-center">
            Our Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Suleiman's Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-primary-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 text-primary-700 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-brain"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.96-4.18A2.5 2.5 0 0 1 9.5 2Z"></path>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.96-4.18A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    Suleiman Odetoro
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Founder & Visionary
                  </p>
                </div>
              </div>
              <p className="text-secondary-600">
                Leading our mission to bridge the digital divide in Africa,
                Suleiman combines technical expertise with a passion for
                inclusive tech education. His initiatives have empowered
                hundreds of young learners to develop crucial digital skills.
              </p>
            </div>

            {/* Kehinde's Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-primary-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 text-primary-700 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users-round"
                  >
                    <path d="M18 21a8 8 0 0 0-16 0"></path>
                    <circle cx="10" cy="8" r="5"></circle>
                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    Kehinde Abereoje
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Community Strategist
                  </p>
                </div>
              </div>
              <p className="text-secondary-600">
                With exceptional talent for building connections, Kehinde
                designs and implements our community engagement strategies. Her
                work has established vital partnerships with educational
                institutions and tech companies across Nigeria.
              </p>
            </div>

            {/* Fortune's Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-primary-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 text-primary-700 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    Fortune Obi
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Technical Director
                  </p>
                </div>
              </div>
              <p className="text-secondary-600">
                Fortune brings deep technical knowledge to our educational
                programs, developing curriculum that balances theoretical
                understanding with practical skills. His innovative teaching
                methods have helped countless students master complex technical
                concepts.
              </p>
            </div>

            {/* Osaode's Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-primary-600 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 text-primary-700 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-megaphone"
                  >
                    <path d="m3 11 18-5v12L3 13"></path>
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    Osaode Eghianruwa
                  </h3>
                  <p className="text-primary-600 font-medium">
                    Communications Specialist
                  </p>
                </div>
              </div>
              <p className="text-secondary-600">
                As our communications expert, Osaode crafts compelling
                narratives about our mission and impact. Her strategic approach
                to digital media has significantly expanded our reach and helped
                us connect with communities across Africa.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Together, our team brings diverse expertise united by a shared
              vision: empowering Africa's youth with the digital skills and
              opportunities they need to thrive in the global tech ecosystem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
