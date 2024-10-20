"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l text-gray-800"
              required
            />
            <button type="submit" className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
            <p>Copyright © {currentYear} Bytes & Codes Initiative. All Rights Reserved.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <Link href="/privacy-policy" className="font-bold underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;