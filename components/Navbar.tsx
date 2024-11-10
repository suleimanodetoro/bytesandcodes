"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

interface SubItem {
  href: string;
  label: string;
}

interface NavItemProps {
  href: string;
  label: string;
  subItems?: SubItem[];
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  subItems,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Link
        href={href}
        className={`
          px-3 py-2 rounded-lg transition-colors duration-200 flex items-center
          ${
            isActive
              ? "text-primary-600 font-medium"
              : "text-secondary-600 hover:text-primary-600"
          }
        `}
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        {subItems && (
          <ChevronDown size={16} className="ml-1 text-secondary-400" />
        )}
      </Link>

      {subItems && isOpen && (
        <div
          className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-secondary-100 py-2 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          {subItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  const navItems: Omit<NavItemProps, "isActive">[] = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    {
      href: "/programs",
      label: "Programs",
      subItems: [
        { href: "/programs/scholarship", label: "University Scholarship" },
        { href: "/programs/hackathon", label: "Hackathon" },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full bg-white transition-shadow duration-300
        ${isScrolled ? "shadow-md" : "border-b border-secondary-100"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 text-primary-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center square */}
    <rect x="8" y="8" width="8" height="8" />

    {/* Circuit connections - horizontal and vertical */}
    <line x1="2" y1="12" x2="8" y2="12" />
    <line x1="16" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="8" />
    <line x1="12" y1="16" x2="12" y2="22" />

    {/* Circular nodes on circuit connections */}
    <circle cx="2" cy="12" r="1" />
    <circle cx="22" cy="12" r="1" />
    <circle cx="12" cy="2" r="1" />
    <circle cx="12" cy="22" r="1" />

    {/* Diagonal connections */}
    <line x1="4" y1="4" x2="8" y2="8" />
    <line x1="20" y1="4" x2="16" y2="8" />
    <line x1="4" y1="20" x2="8" y2="16" />
    <line x1="20" y1="20" x2="16" y2="16" />

    {/* Circular nodes on diagonal connections */}
    <circle cx="4" cy="4" r="1" />
    <circle cx="20" cy="4" r="1" />
    <circle cx="4" cy="20" r="1" />
    <circle cx="20" cy="20" r="1" />
  </svg>
  <span className="text-2xl font-bold text-secondary-900">Bytes & Codes</span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                {...item}
                isActive={pathname === item.href}
              />
            ))}
            {/* Donate Button */}
            <Link
              href="/donate"
              className="ml-4 px-6 py-2 bg-primary-600 text-white rounded-lg 
                         hover:bg-primary-700 transition-colors font-medium"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 text-secondary-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-2 rounded-lg hover:bg-secondary-100 text-secondary-600"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              {/* Mobile Menu Items */}
              <div className="mt-8 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={`text-lg font-medium ${
                          pathname === item.href
                            ? "text-primary-600"
                            : "text-secondary-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() =>
                            setOpenSubMenu(
                              openSubMenu === item.href ? null : item.href
                            )
                          }
                          className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600"
                        >
                          <ChevronRight size={20} />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {item.subItems && openSubMenu === item.href && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary-100 pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2 text-secondary-600 hover:text-primary-600"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Donate Button */}
                <Link
                  href="/donate"
                  className="mt-6 w-full px-6 py-3 bg-primary-600 text-white rounded-lg 
                           hover:bg-primary-700 transition-colors font-medium text-center"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
