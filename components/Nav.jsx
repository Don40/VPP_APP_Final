"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaYoutube } from "react-icons/fa"; // Example for using react-icons

const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({}); // Track each dropdown's state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownId) => {
    setDropdownState((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 bg-navbarBgColor content-center bg-opacity-75 p-2 ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/images/vpp flag.webp"
            alt="Logo"
            className="h-8 md:h-10 lg:h-12 mr-3"
          />
          <Link
            href="/"
            className="font-playfair text-white tracking-widest text-base md:text-xl lg:text-[1.5rem] xl:text-xl"
          >
            VOICE OF THE PEOPLE PARTY
          </Link>
        </div>


  {/* Responsive Navigation Menu */}
        <div className="xl:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

 {/* Navigation Links */}
        <div
          className={`hidden gap-12 xl:flex space-x-4 ${
            isMobileMenuOpen ? "md:hidden" : ""
          }`}
        >
          <div
            className={`hidden justify-between xl:flex space-x-4 ${
              isMobileMenuOpen ? "md:hidden" : ""
            }`}
          >

          <Link
            href="/"
            className="text-white font-grotesque text-lg tracking-widest"
          >
            Home
          </Link>
          

    {/* VPP MDC List */}
<div className="relative inline-block text-left">
  <button
    onClick={() => toggleDropdown("vppMDCList")}
    className="text-white font-grotesque text-lg tracking-widest flex items-center"
  >
    <div className="flex items-center">
      VPP 2025 MDC List
      {/* Flashing Hot Badge */}
      <span className="ml-2 text-xs font-bold text-white-200 bg-red-500 px-2 py-0.5 rounded-full animate-pulse">
        HOT
      </span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
        dropdownState.vppMDCList ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>
  {dropdownState.vppMDCList && (
    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
         <Link
          href="/video/mdc"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Videos
        </Link>
         <Link
              href="/dashboard"
             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
               MLA 2023 Analysis
            </Link> 
        
       {/* <Link
          href="/photo"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Photos
        </Link> */}
        {/* <Link
          href="/photo/gallery"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Vids and Photos
        </Link> */}
      </div>
    </div>
  )}
</div>


          {/* Gallery */}

          <div className="relative inline-block text-left">
            <button
              onClick={() => toggleDropdown("gallery")}
              className="text-white font-grotesque text-lg tracking-widest flex items-center"
            >
              Gallery
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  dropdownState.gallery ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {dropdownState.gallery && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    href="/video"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Videos
                  </Link>
                  <Link
                    href="/photo"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Photos
                  </Link>
                  <Link
                    href="/photo/gallery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Vids and Photos
                  </Link>
                  
                </div>
              </div>
            )}
            </div>  

          <Link
              href="/download"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Download
            </Link>
            {/* <Link
              href="/infogram"
              className="text-white font-grotesque text-lg tracking-widest" >
              Infogram
            </Link> */}
            
          
          <Link
              href="/scheme"
              className="text-white font-grotesque text-lg tracking-widest" >
              Schemes
            </Link>

             <Link
              href="/contact"
              className="text-white font-grotesque text-lg tracking-widest" >
              Join Us
            </Link>
            
            <Link
              href="/contactus"
              className="text-white font-grotesque text-lg tracking-widest"
            >
              Contact Us
              </Link>           
          </div>   
            <Link
            href="/login"
            className="text-white font-grotesque text-lg tracking-widest border border-solid w-24 h-9 text-center"
          >
            LOGIN
          </Link>     
        </div>       

       
        </nav>

 {/* Mobile Sidebar */}
 {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-full bg-navbarBgColor bg-opacity-75 z-50">
          <div className="container mx-auto flex p-4">
            {/* Close Button */}
            <button
              className="text-white focus:outline-none absolute top-4 right-4"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

  {/* Mobile Menu Links */}
<div className="flex flex-col space-y-4 mt-8 content-center mx-auto">
  <Link href="/" className="text-white self-center">
    Home
  </Link>  

 

{/* VPP MDC List in Mobile View */}
<div className="relative mx-auto w-full">
  <button
    onClick={() => toggleDropdown("vppMDCList")}
    className="text-white font-grotesque text-lg tracking-widest flex items-center justify-center w-full"
  >
    <div className="flex items-center justify-center">
      VPP 2025 MDC List
      {/* Flashing Hot Badge */}
      <span className="ml-2 text-xs font-bold text-red-200 bg-red-500 px-2 py-0.5 rounded-full animate-pulse">
        HOT
      </span>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
        dropdownState.vppMDCList ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </button>
  {dropdownState.vppMDCList && (
    <div className="mt-2 w-full bg-white rounded-md shadow-lg z-50">
      <div className="py-1 flex flex-col space-y-1">
        <Link
          href="/video/mdc"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Videos
        </Link>
            
        
        {/* <Link
          href="/photo"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Photos
        </Link> */}
        {/* <Link
          href="/photo/gallery"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          Vids and Photos
        </Link> */}
      </div>
    </div>
  )}
</div>

   {/* Gallery Dropdown */}
   <div className="relative mx-auto w-full">
    <button
      onClick={() => toggleDropdown("gallery")}
      className="text-white font-grotesque text-lg tracking-widest flex items-center justify-center w-full"
    >
      Gallery
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-5 h-5 ml-2 transition-transform duration-200 ${
          dropdownState.gallery ? "rotate-180" : "rotate-0"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
    {dropdownState.gallery && (
      <div className="mt-2 w-full bg-white rounded-md shadow-lg z-50">
        <div className="py-1 flex flex-col space-y-1">
          <Link
            href="/video"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Videos
          </Link>
          <Link
            href="/photo"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Photos
          </Link>
          <Link
            href="/photo/gallery"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Vids and Photos
          </Link>
        </div>
      </div>
    )}
  </div>

  {/* Additional Links */}
  <Link href="/download" className="text-white self-center">
    Download
  </Link>
  {/* <Link href="/infogram" className="text-white self-center">
    Infogram
  </Link> */}
   <Link href="/dashboard" className="text-white self-center">
    MLA 2023 result Analysis
  </Link>

  <Link href="/scheme" className="text-white self-center">
    Schemes
  </Link>

  <Link href="/contact" className="text-white self-center">
    Join Us
  </Link>

  <Link href="/contactus" className="text-white self-center">
    Contact Us
  </Link>

  <Link
    href="/login"
    className="text-white self-center text-center border border-solid p-2"
    style={{ width: "90vw" }}
    onClick={toggleMobileMenu}
  >
    LOGIN
  </Link>
</div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Nav;
