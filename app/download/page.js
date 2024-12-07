"use client";

import Nav from '@/components/Nav';
import React from "react";
import DownloadableFiles from "../../components/DownloadableFiles";


const files = [
  { label: "Constituition", fileName: "Constitution of VPP.pdf" },
  { label: "Vision for Meghalaya", fileName: "VPP - Vision for Meghalaya.pdf" },
  { label: "FAQs", fileName: "test.pdf" },
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
