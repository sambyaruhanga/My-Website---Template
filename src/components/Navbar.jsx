
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveLink('Home');
    else setActiveLink(path.slice(1).split('/').filter(Boolean).map(s => s.replace('-', ' ')).join(' ').replace(/\b\w/g, c => c.toUpperCase()));
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProjects = () => setProjectsOpen(!projectsOpen);
  const closeMenus = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = (
    <>
      <Link to='/' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Home' ? 'bg-blue-700 text-white' : ''}`}>Home</Link>
      <Link to='/about' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'About' ? 'bg-blue-700 text-white' : ''}`}>About</Link>

      <div ref={dropdownRef} className="relative group">
        <button
          onClick={toggleProjects}
          aria-expanded={projectsOpen}
          aria-controls="projects-menu"
          className="flex items-center gap-1 px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105"
        >
          Projects <ChevronDown className="w-4 h-4" />
        </button>
        {projectsOpen && (
          <div id="projects-menu" role="menu" className="absolute left-0 mt-2 bg-gradient-to-br from-blue-200 to-blue-400 text-black rounded-lg shadow-lg w-60 z-10 p-3 space-y-2">
            <Link to='/projects/machine-learning' onClick={closeMenus} className="block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1">Machine Learning</Link>
            <Link to='/projects/data-analysis' onClick={closeMenus} className="block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1">Data Analysis</Link>
            <Link to='/projects/web-development' onClick={closeMenus} className="block px-2 py-1 rounded transition-all duration-300 hover:bg-blue-500 hover:text-white hover:translate-x-1">Web Development</Link>
          </div>
        )}
      </div>
      <Link to='/Skills' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Skills' ? 'bg-blue-700 text-white' : ''}`}>Skills</Link>
      <Link to='/Posts' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Posts' ? 'bg-blue-700 text-white' : ''}`}>Posts</Link>
      <Link to='/hire-me' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Hire Me' ? 'bg-blue-700 text-white' : ''}`}>Hire Me</Link>
      <Link to='/Contact' onClick={closeMenus} className={`px-2 py-1 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 ${activeLink === 'Contact' ? 'bg-blue-700 text-white' : ''}`}>Contact</Link>
    </>
  );

  return (
    <nav role="navigation" className="bg-[#191661] text-white p-4 fixed top-0 w-full z-50 shadow-md cursor-default select-none">

      <div className="max-w-6xl flex justify-end">
        {/* Brand/Logo - stays on the left */}
        <div className="text-3xl font-bold hover:text-blue-600 hover:scale-105 cursor-default mr-auto select-none">
          BYARUHANGA SAM
        </div>
        
        {/* Navigation links - pushed to the right */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
        </div>
        
        {/* Mobile menu button - stays on the right */}
        <button className="md:hidden ml-4" onClick={toggleMenu} aria-expanded={menuOpen} aria-label="Toggle Menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          {navLinks}
        </div>
      )}
    </nav>
  );

};

export default Navbar;

