import { motion } from 'framer-motion';
import DarkModeToggle from '../DarkModeToggle.tsx';
const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-gray-900 text-white p-5 shadow-lg sticky top-0 z-50 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        
      <h1 className="text-2xl font-bold tracking-wide">Amaresh Kumar</h1>
      <nav className="space-x-6 text-lg">
        <a href="#about" className="hover:text-yellow-400">About</a>
         <a href="#services" className="hover:text-yellow-400">Services</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#experience" className="hover:text-yellow-400">Experience</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </nav>
        <DarkModeToggle />
    </motion.header>
  );
};
export default Header;