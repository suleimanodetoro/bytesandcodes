"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const newsItems = [
  {
    title: "Annual Fundraiser Success",
    content: "Our recent fundraiser exceeded expectations, raising over $100,000 for local initiatives.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New Education Program Launched",
    content: "We're excited to announce our new after-school tutoring program for underprivileged students.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Volunteer Appreciation Day",
    content: "Join us next month as we celebrate the hard work and dedication of our amazing volunteers.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Garden Project",
    content: "Our urban gardening initiative has now expanded to five new locations across the city.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-start gap-6 p-6"
          >
            {/* Image Content - Only displayed on medium and larger screens */}
            {item.image && (
              <div className="hidden md:block md:w-1/3 h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            )}
            {/* Text Content */}
            <div className="w-full md:w-2/3 flex flex-col justify-start">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="mb-4 text-gray-700 line-clamp-3">{item.content}</p>
              <button className="bg-blue-500 text-white w-32 px-4 py-2 rounded hover:bg-blue-600 transition-colors mt-2">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
