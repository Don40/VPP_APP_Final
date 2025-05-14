"use client";

import React, { useEffect, useState } from "react";
import VideoGallery from "@/components/VideoGallery"; // Import the VideoGallery component
import Nav from "@/components/Nav"; // Import the Nav component

const Page = () => {
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
      {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/3Tk39DnglcY?si=jSQmxyF07MkB_HS6",
      },
      {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/Fe8B_Zww8U4?si=b_qz6bU1aTx0qxe9",
      },
      {
        id: 7,
        videoUrl: "https://www.youtube.com/embed/kwwgrktJUpM?si=sQPhIMbaJvQHpKy4",
      },
      {
        id: 8,
        videoUrl: "https://www.youtube.com/embed/qmJTNDnEdW0?si=Q8jQAyZyJRxfjl2P",
      },
      {
        id: 9,
        videoUrl: "https://www.youtube.com/embed/GkH6a-9WpZI?si=ICy75yWt5ww2Bn65",
      },
      {
        id: 10,
        videoUrl: "https://www.youtube.com/embed/YDZ7j_Hke6Y?si=WJFtQckx05Wvf_9e",
      },
      {
        id: 11,
        videoUrl: "https://www.youtube.com/embed/KuVKtyiqC9A?si=9dnID4zdMHmi1gXi",
      },
      {
        id: 12,
        videoUrl: "https://www.youtube.com/embed/eLxmfn5BJ9M?si=fE1VpBnhyf1-byd_",
      },
      {
        id: 13,
        videoUrl: "https://www.youtube.com/embed/0qSnNvuzMHc?si=JE-A9dPuizR56wTY",
      },
      {
        id: 14,
        videoUrl: "https://www.youtube.com/embed/HaIO5cjP6XM?si=H5P5uutuJ1pofrUO",
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
      <Nav />
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 font-playfair mt-2 text-blue-800">
          VPP MDC CANDIDATES 2025 Video Gallery
        </h1>
        <VideoGallery videos={videosWithDetails} /> {/* Pass videos with details */}
      </div>
      </div>
    </>
  );
};

export default Page;
