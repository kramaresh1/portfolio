import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import DarkModeToggle from '../DarkModeToggle.tsx';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-gray-900 text-white p-5 shadow-lg sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">Amaresh Kumar</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            <FaBars />
          </button>
          <DarkModeToggle />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm lg:text-lg items-center">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#experience" className="hover:text-yellow-400">Experience</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <DarkModeToggle />
        </nav>

      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <>
        <nav className="flex flex-col mt-4 space-y-2 md:hidden">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#experience" className="hover:text-yellow-400">Experience</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
         
        </nav>
        
         </>
      )}
     
    </motion.header>
  );
};

export default Header;
