"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="#home" className="text-white font-bold text-xl">
            Pradnyal Gandhi
          </Link>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-white uppercase font-semibold py-2 px-3 hover:text-blue-500"
                >
                  {section}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 py-4 px-6 z-40">
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white uppercase font-semibold hover:text-blue-400"
                >
                  {section}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
