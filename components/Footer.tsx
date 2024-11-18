"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const footerLinks = [
    {
      title: "Programs",
      links: [
        { label: "Scholarship", href: "/programs/scholarship" },
        { label: "Hackathon", href: "/programs/hackathon" },
        { label: "Workshops", href: "/programs/workshops" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Donate", href: "/donate" },
        { label: "Volunteer", href: "/volunteer" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/bytesandcodes",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/bytesandcodes",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/bytesandcodes",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:info@bytesandcodes.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Organization Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/favicon.png"
                alt="Bytes & Codes Initiative"
                width={150}
                height={40}
                className="w-auto h-10"
              />
            </Link>
            <p className="text-secondary-300 text-sm">
              Empowering the next generation of tech leaders through education,
              innovation, and community building.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-secondary-800 pt-8 pb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-secondary-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and
              opportunities.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 w-full mb-4"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary-600 px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <p className="text-secondary-300 text-sm mt-4">{message}</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-secondary-300 text-sm">
            © {new Date().getFullYear()} Bytes & Codes Initiative. All rights
            reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-secondary-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-secondary-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
