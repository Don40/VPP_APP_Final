"use client";

import React, { useEffect, useState } from "react";
import VideoGallery from "@/components/VideoGallery"; // Import the VideoGallery component
import Link from "next/link";

const MdcVids = () => {
  const [videosWithDetails, setVideosWithDetails] = useState([]);

  const videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/xiHzCJo-XSY?si=OCyKKhMfLsH75Trd",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/y1kjrIfl2NM?si=ug-2tb0pIGtN9Mrg",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/yih4-QkroDg?si=vezaLNrFMcktHTe5",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/p1RjJlfUEwA?si=_9FUu8Fd9N6veVnG",
    },
    // Add more videos here
  ];

  // Function to extract the video ID from the URL
  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S+\/videoseries\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  // Fetch video details from YouTube API
  const fetchVideoDetails = async () => {
    const API_KEY = "AIzaSyDz4GhdZFfgZPPJM7ILBhX4VtwfV7UJ9C0";  // Replace with your YouTube API Key
    const videoDetailsPromises = videos.map(async (video) => {
      const videoId = getVideoId(video.videoUrl);
      if (!videoId) return video; // Return original video if ID is not found

      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const { title, description } = data.items[0].snippet;
        return {
          ...video,
          title,
          // description,
          thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        };
      }

      return video; // If no data found, return original video
    });

    const videosWithDetails = await Promise.all(videoDetailsPromises);
    setVideosWithDetails(videosWithDetails);
  };

  useEffect(() => {
    fetchVideoDetails(); // Fetch video details when the component mounts
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
        <div>
          <h1 className="bg-navbarBgColor text-center text-2xl font-bold mb-4 font-playfair mt-1 text-white animate-blink">
            VPP MDC CANDIDATES 2025 Video Gallery
          </h1>

          <style jsx>{`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 0.8; }
            }
            .animate-blink {
              animation: blink 2s infinite;
            }
          `}</style>

          <VideoGallery videos={videosWithDetails} /> {/* Pass videos with details */}

          {/* Functional 'See More' button */}
          <Link href="/video/mdc">
            <button 
              style={{ marginLeft:"20px",marginTop: "20px", padding: "10px 20px", backgroundColor: "#007BFF", color: "white", borderRadius: "5px", cursor: "pointer" }}
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MdcVids;
