import React from "react";
import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";


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
   <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-3">
        <div>
            <h1 className="text-center text-3xl font-bold mb-4 font-playfair text-blue-800">Photo Gallery</h1>
            <PhotoGallery photos={photos} />

                {/* Functional 'See More' button */}
                <Link href="/photo/gallery">
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

export default page;
