'use client'; // Mark this file as a Client Component

import Nav from '@/components/Nav';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const Gallery = () => {
  const router = useRouter(); // Initialize the Next.js router

  // Function to handle back navigation
  const handleBackButton = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <>
      <Nav />
      <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <iframe
          src="/JAlbum/index.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="jAlbum Gallery"
        ></iframe>
        <button 
          onClick={handleBackButton} 
          style={{
            position: 'absolute', 
            top: 120, 
            left: 10, 
            padding: '5px 10px', 
            backgroundColor: 'green', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          Back
        </button>
      </div>
    </>
  );
};

export default Gallery;
