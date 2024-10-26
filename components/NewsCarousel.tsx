"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/types';

interface NewsCarouselProps {
  initialPosts: BlogPost[];
}

const NewsCarousel = ({ initialPosts }: NewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % initialPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, initialPosts.length]);

  const navigateSlide = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? initialPosts.length - 1 : prevIndex - 1;
      }
      return (prevIndex + 1) % initialPosts.length;
    });
  };

  if (!initialPosts.length) {
    return (
      <div className="w-full h-96 bg-primary-50 rounded-lg flex items-center justify-center">
        <p className="text-secondary-600">No posts available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden w-full bg-white rounded-xl shadow-sm group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={() => navigateSlide('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 
                   text-secondary-600 hover:bg-white hover:text-primary-600 transition-colors
                   shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => navigateSlide('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 
                   text-secondary-600 hover:bg-white hover:text-primary-600 transition-colors
                   shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {initialPosts.map((post, index) => (
          <div
            key={post.slug}
            className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-8 p-8"
          >
            {/* Image */}
            <div className="w-full md:w-1/2 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={post.coverImage || '/images/default-blog-cover.jpg'}
                alt={post.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 text-primary-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                {post.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center px-6 py-2 bg-primary-600 
                         text-white rounded-lg hover:bg-primary-700 transition-colors w-fit"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {initialPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-6 bg-primary-600' 
                : 'bg-secondary-300 hover:bg-primary-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;