import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    minHeight: '80vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  section: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  contentContainer: {
    maxWidth: '800px',
    width: '100%',
  },
  title: {
    fontSize: '2.5rem',
    color: '#8A7CE0',
    textAlign: 'center' as 'center',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '2rem',
    color: '#8A7CE0',
    textAlign: 'center' as 'center',
    marginBottom: '20px',
  },
  link: {
    color: '#8A7CE0',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  teamMember: {
    textAlign: 'center' as 'center',
  },
  memberImage: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
  memberName: {
    fontSize: '1.2rem',
    margin: '5px 0',
  },
  memberRole: {
    fontSize: '1rem',
    color: '#8A7CE0',
    margin: '0',
  },
};

const About = () => {
  return (
    <div style={styles.mainContainer}>
      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h1 style={styles.title}>About Us</h1>
          
          <p>
            At Bytes and Codes Educational Initiative, we envision a future where young people across Africa are empowered to leverage technology to make a difference in their communities and the world. Our mission is to bridge the digital divide and create accessible opportunities for the next generation of coders, builders, and changemakers.
          </p>
          
          <p>
            Since our founding, we have committed ourselves to inspiring, educating, and uplifting youth in the tech space. Our approach is rooted in community building, hands-on education, and mentorship. We believe that learning to code goes beyond just writing lines of syntax—it's about learning to solve problems, think creatively, and develop the confidence to tackle the challenges of today and tomorrow.
          </p>
          
          <p>
            Our programs are designed with inclusivity in mind, providing young people, particularly those from marginalized backgrounds, with the tools they need to succeed. From workshops to coding boot camps, we create safe and inspiring environments for young innovators to explore their interests in technology. Our flagship events connect youth with industry leaders, providing role models and building a network that supports growth, collaboration, and lifelong learning.
          </p>
          
          <p>
            We aim to spark a passion for technology that drives social good—because we believe that tech can and should be used to make a positive impact. Whether it’s creating solutions for community issues, learning new skills, or collaborating with like-minded peers, Bytes and Codes Educational Initiative is here to support and guide every step of the way.
          </p>
          
          <Link href="/join" style={styles.link}>
            Join us today and be a part of this movement!
          </Link>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.contentContainer}>
          <h2 style={styles.subtitle}>Meet Our Team</h2>
          
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.teamMember}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  style={styles.memberImage}
                />
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  { name: 'Suleiman Odetoro', role: 'Founder & Leader', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Kehinde Abereoje', role: 'Community Builder ', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Fortune Obi', role: 'Tech Enthusiast & Mentor', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Osaode Eghianruwa', role: 'Social Media & Communications Specialist', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default About;
