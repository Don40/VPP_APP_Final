// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"; // Import the YouTube icon

const Footer = () => {
  return (
    <>
      {/* Social Media Icons (centered on all screen sizes) */}
      <div className="flex items-center justify-center space-x-6 mb-6 mt-6">
  <Link
    href="https://facebook.com"
    target="_blank"
    className="p-2 rounded hover:bg-gray-100 transition-transform duration-300"
  >
    <FaFacebook className="h-6 w-6 text-[#1877F2]" /> {/* Facebook blue */}
  </Link>

  <Link
    href="https://twitter.com"
    target="_blank"
    className="p-2 rounded hover:bg-gray-100 transition-transform duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="black" /* Twitter blue */
    >
      <path d="M22.167 0H15.5l-3.5 6.02L8.5 0H1.833L10.5 11.98 0 24h6.667l4.333-5.998L15.333 24H22l-9.832-12.02z" />
    </svg>
  </Link>

  <Link
    href="https://instagram.com"
    target="_blank"
    className="p-2 rounded hover:bg-gray-100 transition-transform duration-300"
  >
    <FaInstagram className="h-6 w-6 text-gradient" /> {/* Gradient text */}
  </Link>

  <Link
    href="https://linkedin.com"
    target="_blank"
    className="p-2 rounded hover:bg-gray-100 transition-transform duration-300"
  >
    <FaLinkedin className="h-6 w-6 text-[#0A66C2]" /> {/* LinkedIn blue */}
  </Link>

  <Link
    href="https://youtu.be/8yjwoFtsckA?si=sgkRXBeg_2ZB1KQ5"
    target="_blank"
    className="p-2 rounded hover:bg-gray-100 transition-transform duration-300"
  >
    <FaYoutube className="h-6 w-6 text-[#FF0000]" /> {/* YouTube red */}
  </Link>
</div>


      {/* Footer */}
      <footer className="bg-navbarBgColor text-white py-8 px-4">
        <div className="container mx-auto text-center">
          {/* Copyright Text */}
          <div className="font-montserrat text-sm">
            <p>&copy; 2024 THE VOICE OF THE PEOPLE PARTY. <br />All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
