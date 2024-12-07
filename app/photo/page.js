import React from "react";
import PhotoGallery from "@/components/PhotoGallery";
import Nav from '@/components/Nav';


const page = () => {
  const photos = [
    { src: "/images/photo 1.webp", alt: "Photo 1" },
    { src: "/images/photo 2.webp", alt: "Photo 2" },
    { src: "/images/1.webp", alt: "Photo 1" },
    { src: "/images/2.webp", alt: "Photo 2" },
    { src: "/images/3.webp", alt: "Photo 3" },
    { src: "/images/4.webp", alt: "Photo 4" },
    { src: "/images/5.webp", alt: "Photo 5" },
    { src: "/images/6.webp", alt: "Photo 6" },
  ];

  return (
   
   <>

   <Nav />
   <div>
      <h1 className="text-center text-3xl font-bold mb-4 font-playfair mt-8 text-white">Photo Gallery</h1>
      <PhotoGallery photos={photos} />
    </div>

    </>

  );
};

export default page;
