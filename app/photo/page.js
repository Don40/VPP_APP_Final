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
     { src: "/images/22.webp", alt: "Photo 1" },
    { src: "/images/33.webp", alt: "Photo 2" },
    { src: "/images/44.webp", alt: "Photo 3" },
    { src: "/images/66.webp", alt: "Photo 4" },
    { src: "/images/77.webp", alt: "Photo 5" },
    { src: "/images/88.webp", alt: "Photo 6" },
     { src: "/images/99.webp", alt: "Photo 1" },
    { src: "/images/111.webp", alt: "Photo 2" },
    { src: "/images/777.webp", alt: "Photo 3" },
  
  ];

  return (
   
   <>

   <Nav />
       <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
          	 <div>
     <h1 className="text-center text-3xl font-bold mb-4 font-playfair mt-1 text-blue-800">Photo Gallery</h1>
      <PhotoGallery photos={photos} />
    		</div>
     </div>
    </>

  );
};

export default page;
