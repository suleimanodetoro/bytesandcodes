"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">NonProfit</Link>
        <div className="hidden md:flex">
          <Link href="/about" className="mx-2 hover:underline">About</Link>
          <Link href="/hackathon" className="mx-2 hover:underline">Hackathon</Link>
          <Link href="/gallery" className="mx-2 hover:underline">Gallery</Link>
          <Link href="/donate" className="mx-2 hover:underline">Donate</Link>
          <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/about" className="block py-2 px-4 hover:bg-blue-600">About</Link>
          <Link href="/hackathon" className="block py-2 px-4 hover:bg-blue-600">Hackathon</Link>
          <Link href="/gallery" className="block py-2 px-4 hover:bg-blue-600">Gallery</Link>
          <Link href="/donate" className="block py-2 px-4 hover:bg-blue-600">Donate</Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;