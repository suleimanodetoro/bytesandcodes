"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface SubItem {
  href: string;
  label: string;
}

interface NavItemProps {
  href: string;
  label: string;
  subItems?: SubItem[];
}

const NavItem: React.FC<NavItemProps> = ({ href, label, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={dropdownRef}>
      <Link 
        href={href} 
        className="mx-2 hover:underline flex items-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        {subItems && <ChevronDown size={16} className="ml-1" />}
      </Link>
      {subItems && isOpen && (
        <div 
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg"
          onMouseLeave={() => setIsOpen(false)}
        >
          {subItems.map((item) => (
            <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  const navItems: NavItemProps[] = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/programs", label: "Programs", subItems: [
      { href: "/programs/scholarship", label: "Uni Scholarship" },
      { href: "/programs/hackathon", label: "Hackathon" }
    ]},
    { href: "/contact", label: "Contact" },
    { href: "/donate", label: "Donate" }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">NonProfit</Link>
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-blue-500 shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden">
          <div className="flex flex-col h-full p-6">
            <button onClick={() => setIsOpen(false)} className="self-end focus:outline-none mb-6">
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 flex-grow justify-start mt-8">
              {navItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="text-2xl font-bold">{item.label}</Link>
                    {item.subItems && (
                      <button onClick={() => setOpenSubMenu(openSubMenu === item.href ? null : item.href)}>
                        <ChevronRight size={24} className="ml-2" />
                      </button>
                    )}
                  </div>
                  {item.subItems && openSubMenu === item.href && (
                    <div className="ml-4 mt-2">
                      {item.subItems.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href} className="block py-2 text-xl underline">
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;