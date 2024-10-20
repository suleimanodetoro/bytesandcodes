"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

const newsItems = [
  { 
    title: "Annual Fundraiser Success", 
    content: "Our recent fundraiser exceeded expectations, raising over $100,000 for local initiatives.",
    image: "/images/fundraiser.jpg"
  },
  { 
    title: "New Education Program Launched", 
    content: "We're excited to announce our new after-school tutoring program for underprivileged students.",
    image: "/images/education.jpg"
  },
  { 
    title: "Volunteer Appreciation Day", 
    content: "Join us next month as we celebrate the hard work and dedication of our amazing volunteers.",
    image: "/images/volunteers.jpg"
  },
  { 
    title: "Community Garden Project", 
    content: "Our urban gardening initiative has now expanded to five new locations across the city.",
    image: "/images/garden.jpg"
  }
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = newsItems[currentIndex];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <h3 className="text-xl font-bold mb-2">{currentItem.title}</h3>
          <p className="mb-4">{currentItem.content}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Read More
          </button>
        </div>
        {currentItem.image && (
          <div className="md:w-1/2 mt-4 md:mt-0">
            <Image 
              src={currentItem.image} 
              alt={currentItem.title}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCarousel;