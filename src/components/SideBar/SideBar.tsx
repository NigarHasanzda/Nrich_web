"use client";
import React, { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar}>
          <img src="/MenuIcon.svg" alt="menu" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-6">
          <button onClick={toggleSidebar}>
            <CloseIcon sx={{ fontSize: 28 }} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll={true}
              onClick={toggleSidebar}
              className="text-[#1A1C1E] font-medium text-[16px] hover:text-[#2B3674] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;