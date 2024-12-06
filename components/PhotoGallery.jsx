import React from "react";
import styles from "./PhotoGallery.module.css"; // Import the CSS module

const PhotoGallery = ({ photos }) => {
  return (
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoContainer}>
          <img src={photo.src} alt={photo.alt || `Photo ${index + 1}`} className={styles.photo} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
