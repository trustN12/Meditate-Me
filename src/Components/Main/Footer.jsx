import React from 'react';
import { FaFacebook, FaEnvelope, FaPhoneAlt, FaHome } from 'react-icons/fa'; // Import the home icon

const Footer = () => {
  return (
    <footer className="bg-[#190a21be] text-white py-6 w-full h-full">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center mb-4 space-x-6">
          <a
            href="/home"
            className="text-white hover:text-[#F3F3B7]"
          >
            <FaHome size={24} />
          </a>
          <a
            href="https://www.facebook.com/n.biswas.144"
            className="text-white hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="mailto:nbiswas100@outlook.com"
            className="text-white hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+919679188394"
            className="text-white hover:text-green-500"
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          <p>&copy; 2025 Meditate-Me. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
