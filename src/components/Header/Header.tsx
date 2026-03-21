"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* HEADER */}
      <header className="w-full py-6 flex justify-center sticky top-0 z-50">
        <div className="w-full max-w-[90%] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] px-6 py-[18px] flex items-center justify-between border border-gray-50/50">

          {/* LOGO */}
          <Link href="/" className="flex w-[90px] md:w-[200px] items-center gap-1">
            <img src="/Logo.svg" alt="logo" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                scroll={true}
                className="text-[#4D4D4D] text-[15px] font-medium hover:text-[#2B3674] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* DESKTOP BUTTONS */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/login" className="text-[#2B3674] text-[15px] font-bold">
                Login
              </Link>
              <Link href="/trial" className="bg-[#2166F3] text-white px-4 py-2 rounded-[50px] text-[15px] font-semibold">
                Request free trial
              </Link>
            </div>

            {/* MOBILE MENU ICON */}
            <div className="lg:hidden">
              <MenuIcon
                sx={{ fontSize: 32, color: "#2B3674", cursor: "pointer" }}
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto bg-black/20" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* TOP DROPDOWN MENU */}
      <div
  className={`fixed top-0 left-0 md:mt-0 w-full z-50 transition-transform duration-300 ${
    sidebarOpen ? "translate-y-0 mt-20 " : "-translate-y-full "
  }`}
>
  <div className="w-full max-w-[90%] mx-auto mt-6 bg-white shadow-lg rounded-[20px] p-6">


    {/* NAV LINKS */}
    <nav className="flex flex-col gap-6 mb-6">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          scroll={true}
          onClick={toggleSidebar}
          className="text-[#1A1C1E] font-medium text-[16px]"
        >
          {link.name}
        </Link>
      ))}
    </nav>

    {/* MOBILE BUTTONS */}
    <div className="flex flex-col gap-4">
      <Link
        href="/login"
        onClick={toggleSidebar}
        className="text-center border border-none text-[#2B3674] py-2 rounded-full font-semibold"
      >
        Login
      </Link>

      <Link
        href="/trial"
        onClick={toggleSidebar}
        className="text-center bg-[#2166F3] text-white py-2 rounded-full font-semibold"
      >
        Request free trial
      </Link>
    </div>

  </div>
</div>
    </>
  );
};

export default Header;