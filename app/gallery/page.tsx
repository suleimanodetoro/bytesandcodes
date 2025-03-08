//app/gallery/page.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import CircularProgress from '@mui/material/CircularProgress';

const galleryData = [
    {
      id: 1,
      title: 'Tech Volunteers Empowering Communities',
      date: 'Abuja | Friday, August 18, 2023',
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      id: 2,
      title: 'Digital Literacy Workshop for Secondary School Girls',
      date: 'Kwara State | Tuesday, March 5, 2024', 
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    },
    {
      id: 3,
      title: 'Coding Bootcamp for Young Women in Tech',
      date: 'Abuja | Saturday, July 15, 2023',
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    },
    {
      id: 4,
      title: 'Tech Leadership and Innovation Training',
      date: 'Rivers State | Monday, October 9, 2023',
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
    {
      id: 5,
      title: 'Building Digital Solutions Together',
      date: 'Kaduna | Thursday, November 2, 2023',
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    },
    {
      id: 6,
      title: 'STEM Education Outreach Program',
      date: 'Rivers State | Monday, October 9, 2023',
      organization: 'Bytes and Codes',
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    }
   ];
   

   const GalleryGrid: React.FC = () => {
    // Define the loading state type
    const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(
      galleryData.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
      }, {} as Record<number, boolean>) // Explicitly typing the initial value
    );
  
    // Properly type the handleImageLoad function
    const handleImageLoad = (id: number): void => {
      setLoadingStates((prev) => ({
        ...prev,
        [id]: false,
      }));
    };
  
    return (
      <div>
        <p className="text-[35px] md:text-[60px] z-10 bg-white w-full text-purple-1 py-5 md:py-10 font-bold text-center">
          Previous Events
        </p>
  
        <div className="min-h-screen max-w-screen-xl mx-auto px-2">
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ margin: 0 }}>
            {galleryData.map((item, index) => (
              <div key={item.id} style={{ order: (index % 2) + 1 }}>
                <div className="relative hover:scale-105 transition-transform duration-300 ease-in-out mb-2">
                  {loadingStates[item.id] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <CircularProgress />
                    </div>
                  )}
  
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={300}
                    className={`w-full rounded-md ${
                      loadingStates[item.id] ? 'opacity-0' : 'opacity-100'
                    } transition-opacity duration-500`}
                    onLoadingComplete={() => handleImageLoad(item.id)}
                    style={{
                      display: 'block',
                      width: '100%',
                    }}
                  />
  
                  <div className="absolute p-3 inset-0 flex flex-col justify-end text-white text-lg font-bold bg-gradient-to-b from-transparent to-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 rounded-md">
                    <div>
                      <p className="text-xl mb-1">{item.title}</p>
                      <p className="text-[12px] font-light leading-snug">{item.date}</p>
                      <p className="text-[12px] font-light leading-snug">{item.organization}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    );
  };
  
  export default GalleryGrid;