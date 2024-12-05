// components/Footer.js
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"; // Import the YouTube icon

const Footer = () => {
  return (
    <>
      {/* Social Media Icons (centered on all screen sizes) */}
      <div className="flex items-center justify-center space-x-6 mb-6 mt-6">
        <Link href="https://facebook.com" target="_blank" className="text-white">
          <FaFacebook className="h-6 w-6" />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-white">
          <FaTwitter className="h-6 w-6" />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="text-white">
          <FaInstagram className="h-6 w-6" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-white">
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Link href="https://youtu.be/8yjwoFtsckA?si=sgkRXBeg_2ZB1KQ5" target="_blank" className="text-white">
          <FaYoutube className="h-6 w-6" />
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
