import React, { useEffect } from "react";

const MainContent = () => {
  useEffect(() => {
    // Dynamically load Tableau JS API script
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    script.onload = () => {
      console.log("Tableau JS API loaded.");
    };
    script.onerror = () => {
      console.error("Failed to load Tableau JS API.");
    };
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: "20px",
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "rgba(163, 164, 116, 0.8)",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "20px", marginBottom: "5px",color: "#003366"  }}>
       MLA 2023 Result Data Analysis
      </h1>
      <p style={{ textAlign: "center", marginBottom: "5px",color: "#003366"  }}>
        Tableau Dashboard will be displayed below:
      </p>
      <div
        id="tableauContainer"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Makes it take the full screen height
          overflow: "hidden",
          border: "1px solid #ccc",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        dangerouslySetInnerHTML={{
          __html: `
            <div class='tableauPlaceholder' id='viz1736685922646' style='width: 100%; height: 100%; position: relative;'>
              <noscript>
                <a href='#'>
                  <img
                    alt='Dashboard 1'
                    src='https://public.tableau.com/static/images/ML/MLA2023latest1/Dashboard1/1_rss.png'
                    style='border: none; width: 100%; height: auto;'
                  />
                </a>
              </noscript>
              <object class='tableauViz' style='width: 100%; height: 100%;'>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='MLA2023latest1/Dashboard1' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https://public.tableau.com/static/images/ML/MLA2023latest1/Dashboard1/1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en-US' />
                <param name='filter' value='publish=yes' />
              </object>
            </div>
            <script type='text/javascript'>
              var divElement = document.getElementById('viz1736685922646');
              var vizElement = divElement.getElementsByTagName('object')[0];
              vizElement.style.width = '100%';
              vizElement.style.height = '100%'; // Dynamically adjusts height to fill parent
              var scriptElement = document.createElement('script');
              scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
              vizElement.parentNode.insertBefore(scriptElement, vizElement);
            </script>
          `,
        }}
      ></div>
    </main>
  );
};

export default MainContent;
