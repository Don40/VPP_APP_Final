'use client';  // Add this line to mark the component as a Client Component

import React from "react";

const DownloadableFiles = ({ files }) => {
  const handleDownload = (fileName) => {
    // Create a download link for the file
    const link = document.createElement("a");
    link.href = `/${fileName}`; // Assuming files are in the public folder
    link.download = fileName; // Set the file name for downloading
    document.body.appendChild(link);
    link.click(); // Simulate a click to start download
    document.body.removeChild(link); // Remove the link after download
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Downloadable Files</h1>
      <ul className="space-y-4">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow"
          >
            {/* File Label */}
            <span className="text-lg font-medium text-gray-700">
              {file.label}
            </span>
            {/* Download Button */}
            <button
              onClick={() => handleDownload(file.fileName)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadableFiles;
