"use client";
import Link from "next/link";
import React from "react";

const UpNav = () => {
  return (
    <header className="bg-gradient-to-b from-blue-50 to-blue-80 p-1">
      <div className="container mx-auto flex justify-between items-center text-black">
        {/* Left Side Links */}
        <div className="flex items-center space-x-6">
          {/* VPP Official Link only visible on mobile */}
          <Link 
            href="/contact" 
            className="font-grotesque font-bold text-lg block md:hidden bg-green-300 hover:bg-blue-700 p-0.5 rounded"
          >
            Join us
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {/* VPP Official Link only visible on mobile */}
          <Link 
            href="/contactus" 
            className="font-grotesque font-bold  text-lg block md:hidden bg-green-300 hover:bg-blue-700 p-0.5 rounded"
          >
            Contact us
          </Link>
        </div>

        {/* You can add additional content for the rest of the navigation */}
      </div>
    </header>
  );
};

export default UpNav;
