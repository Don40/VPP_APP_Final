"use client";

import React, { useEffect } from "react";

const InfogramEmbed = () => {
  useEffect(() => {
    // Dynamically load the Infogram embed script after the component is mounted
    const script = document.createElement("script");
    script.src = "https://e.infogram.com/js/dist/embed.js";
    script.type = "text/javascript";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this runs only once, after initial mount

  return (
    <div>
     
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script id="infogram_0_94d4c7d5-9bd2-40f4-a381-52236eb9c135" title="Contact Tracing Case in Jirang Block" 
          src="https://e.infogram.com/js/dist/embed.js?AGt" type="text/javascript"></script>
          <div style="padding:8px 0;font-family:Arial!important;font-size:13px!important;line-height:15px!important;
          text-align:center;border-top:1px solid #dadada;margin:0 30px"><a href="https://infogram.com/94d4c7d5-9bd2-40f4-a381-52236eb9c135" 
          style="color:#989898!important;text-decoration:none!important;" target="_blank">Contact Tracing Case in Jirang Block</a><br>
          <a href="https://infogram.com" 
          style="color:#989898!important;text-decoration:none!important;" target="_blank" rel="nofollow">Infogram</a></div>`,
        }}
      />
    </div>
  );
};

export default InfogramEmbed;
