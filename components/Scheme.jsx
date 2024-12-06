import React from "react";
import styles from "./PhotoGallery.module.css"; // Import the CSS module

const Scheme = () => {
  return (
    <>
      <div className={styles.underConstruction}>
        <img 
          src="/images/Under_Construction.gif" // Replace with your image path
          alt="Under Construction"
          className={styles.constructionImage} 
        />
        <p className={styles.message}>This page is under construction. Stay tuned!</p>
      </div>
    </>
  );
};

export default Scheme;
