"use client";

import Nav from '@/components/Nav';
import React from "react";
import DownloadableFiles from "../../components/DownloadableFiles";


const files = [
  { label: "Constituition", fileName: "Form B.pdf" },
  { label: "FAQs", fileName: "document1.pdf" },
  // { label: "Image 1 (JPG)", fileName: "image1.jpg" },
  // { label: "Spreadsheet 1 (Excel)", fileName: "spreadsheet1.xlsx" },
  // { label: "Presentation 1 (PPT)", fileName: "presentation1.pptx" },
];

const DownloadPage = () => {
  return (
    <>
    
    <Nav />
    <main className="min-h-screen bg-gray-50 py-10">
      <DownloadableFiles files={files} />
    </main>
    </>
  );
};

export default DownloadPage;
