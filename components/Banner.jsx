import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const Banner = ({ message, bgColor, textColor, icon }) => {
  const [isVisible, setIsVisible] = useState(true); // State to toggle visibility

  return (
    isVisible && ( // Only render if `isVisible` is true
      <div
        className={`fixed top-0 left-0 w-full py-4 text-center ${bgColor} ${textColor} flex justify-between items-center z-50`}
        style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}
        onClick={() => setIsVisible(false)} // Hide banner when clicked
      >
        <div className="flex items-center justify-center w-full">
          {icon && <span className="mr-2">{icon}</span>}
          <span
            dangerouslySetInnerHTML={{
              __html: message, // This allows the <br> tag to be parsed and rendered
            }}
          />
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-transparent border-none text-white text-xl"
        >
          &times; {/* Close icon */}
        </button>
      </div>
    )
  );
};

export default function App() {
  return (
    <Banner
      message={`JOIN VPP TO ENSURE CHANGE!!! <br> Click  to hide`}
      bgColor="bg-yellow-200 "
      textColor="text-red-500 font-playfair mt-10 p-50 "
      icon={<FaExclamationCircle />}
    />
  );
}
