"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  { title: "Annual Fundraiser Success", content: "Our recent fundraiser exceeded expectations, raising over $100,000 for local initiatives." },
  { title: "New Education Program Launched", content: "We're excited to announce our new after-school tutoring program for underprivileged students." },
  { title: "Volunteer Appreciation Day", content: "Join us next month as we celebrate the hard work and dedication of our amazing volunteers." },
  { title: "Community Garden Project", content: "Our urban gardening initiative has now expanded to five new locations across the city." }
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-xl font-bold">{newsItems[currentIndex].title}</h3>
        <p className="mt-2">{newsItems[currentIndex].content}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 bg-gray-200 rounded-full">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;