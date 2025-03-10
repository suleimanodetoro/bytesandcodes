//app/gallery/page.tsx
"use client"
import React, { useState } from 'react';
import { Masonry } from '@mui/lab';
import { BookOpen, Video, Users, Calendar } from 'lucide-react';

const GalleryGrid: React.FC = () => {
  return (
    <div>
      <p className="text-[35px] md:text-[60px] z-10 bg-white w-full text-purple-1 py-5 md:py-10 font-bold text-center">
        Previous Events
      </p>
  
      <div className="min-h-screen max-w-screen-xl mx-auto px-4 py-8">
        {/* Coming Soon Message */}
        <div className="bg-primary-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Our Event Gallery is Coming Soon!
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            We're currently collecting photos from our recent events. Check back soon to see our community in action!
          </p>
        </div>
        
        {/* Placeholder Events */}
        <h3 className="text-xl font-bold text-secondary-900 mb-6">Recent Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Tech Volunteers Empowering Communities",
              date: "Abuja | Friday, August 18, 2023",
              icon: Users
            },
            {
              title: "Digital Literacy Workshop for Secondary School Girls",
              date: "Kwara State | Tuesday, March 5, 2024",
              icon: BookOpen
            },
            {
              title: "Coding Bootcamp for Young Women in Tech",
              date: "Abuja | Saturday, July 15, 2023",
              icon: Video
            },
            {
              title: "Tech Leadership and Innovation Training",
              date: "Rivers State | Monday, October 9, 2023",
              icon: Calendar
            }
          ].map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-secondary-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <event.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-bold text-secondary-900">{event.title}</h4>
              </div>
              <p className="text-secondary-600 text-sm">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
  
export default GalleryGrid;