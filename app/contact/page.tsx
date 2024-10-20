'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    setSubmitted(true);
  };

  return (
    <section className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      {submitted ? (
        <p className="text-center text-green-500">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-4 py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border px-4 py-2"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              className="w-full border px-4 py-2"
              rows={5}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
