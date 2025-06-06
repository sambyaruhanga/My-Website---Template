import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191661] w-full text-white py-8 px-4 mt-10 shadow-inner cursor-default select-none">
      {/* Changed max-w-7xl to max-w-6xl and removed mx-auto */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 ml-4 lg:ml-8">
       
        {/* Branding - Removed all margins/padding from this div */}
        <div className="pl-0 gap-2">
          <h2 className="text-xl font-bold mb-2">BYARUHANGA SAM</h2>
          <p className="text-sm">Data Scientist | Developer | Mentor</p>
        </div>

        {/* Navigation (unchanged) */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">Home</Link></li>
            <li><Link to="/about" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">About</Link></li>
            <li><Link to="/Skills" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">Skills</Link></li>
            <li><Link to="/Posts" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">Posts</Link></li>
            <li><Link to="/hire-me" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">Hire Me</Link></li>
            <li><Link to="/contact" className="rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media (unchanged) */}
        <div>
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <div className="flex space-x-6 mt-2">
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaLinkedin size={24}  /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaGithub  size={24} /></a>
            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaMedium size={24}  /></a>
          </div>
        </div>

        {/* Contact (unchanged) */}
        <div className="mt-4 md:mt-0">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:byaruhangasam30@gmail.com
"className="hover:underline">byaruhangasam30@gmail.com
          </a>
          </p>
          <p className="text-sm">Location: Kampala, Uganda</p>
        </div>
      </div>

      {/* Bottom bar (unchanged) */}
      <div className="mt-8 text-center text-xs text-gray-300 border-t border-blue-500 pt-4">
        © {new Date().getFullYear()} BYARUHANGA SAM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;