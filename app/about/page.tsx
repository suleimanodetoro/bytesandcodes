import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
              At Bytes and Codes Educational Initiative, we envision a future where young people 
              across Africa are empowered to leverage technology to make a difference in their 
              communities and the world. Our mission is to bridge the digital divide and create 
              accessible opportunities for the next generation of coders, builders, and changemakers.
            </p>
            
            <p>
              Since our founding, we have committed ourselves to inspiring, educating, and 
              uplifting youth in the tech space. Our approach is rooted in community building, 
              hands-on education, and mentorship. We believe that learning to code goes beyond 
              just writing lines of syntax—it's about learning to solve problems, think creatively, 
              and develop the confidence to tackle the challenges of today and tomorrow.
            </p>
            
            <p>
              Our programs are designed with inclusivity in mind, providing young people, 
              particularly those from marginalized backgrounds, with the tools they need to succeed. 
              From workshops to coding boot camps, we create safe and inspiring environments for 
              young innovators to explore their interests in technology. Our flagship events connect 
              youth with industry leaders, providing role models and building a network that supports 
              growth, collaboration, and lifelong learning.
            </p>
            
            <p>
              We aim to spark a passion for technology that drives social good—because we believe 
              that tech can and should be used to make a positive impact. Whether it's creating 
              solutions for community issues, learning new skills, or collaborating with like-minded 
              peers, Bytes and Codes Educational Initiative is here to support and guide every step 
              of the way.
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
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const teamMembers = [
  { 
    name: 'Suleiman Odetoro', 
    role: 'Founder & Leader', 
    image: '/images/avatars/suleiman.jpg'  
  },
  { 
    name: 'Kehinde Abereoje', 
    role: 'Community Builder', 
    image: '/images/avatars/kehinde.jpg'
  },
  { 
    name: 'Fortune Obi', 
    role: 'Tech Enthusiast & Mentor', 
    image: '/images/avatars/fortune.jpg'
  },
  { 
    name: 'Osaode Eghianruwa', 
    role: 'Social Media & Communications Specialist', 
    image: '/images/avatars/osaode.jpg'
  },
];

export default About;