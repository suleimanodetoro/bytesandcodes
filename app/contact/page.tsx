'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, LoaderCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-600 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl">
            Have questions about our programs or want to get involved? 
            We'd love to hear from you. Reach out using the form below.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            {[
              {
                icon: Mail,
                title: 'Email',
                details: 'info@bytesandcodes.org',
                description: 'Write to us anytime'
              },
              {
                icon: Phone,
                title: 'Phone',
                details: '+234 123 456 7890',
                description: 'Mon-Fri from 9am to 5pm'
              },
              {
                icon: MapPin,
                title: 'Location',
                details: 'Lagos, Nigeria',
                description: 'Request a visit'
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-primary-600 font-medium mb-1">{item.details}</p>
                  <p className="text-secondary-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             placeholder-secondary-400"
                    placeholder="Your name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-secondary-200 
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             placeholder-secondary-400"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           placeholder-secondary-400"
                  placeholder="How can we help?"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           placeholder-secondary-400 resize-none"
                  placeholder="Tell us about your inquiry..."
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  Sorry, something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg
                         hover:bg-primary-700 transition-colors flex items-center justify-center
                         disabled:bg-primary-300"
              >
                {status === 'loading' ? (
                  <>
                    <LoaderCircle className="animate-spin mr-2" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;