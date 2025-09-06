import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <motion.section
      id="hero"
      className="h-screen bg-gradient-to-br from-blue-900 via-black to-gray-800 text-white flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Hello, I'm Amaresh Kumar
      </motion.h1>

      <h2 className="text-xl md:text-3xl mb-6 text-gray-300">
        <Typewriter
          words={[
            'Java Developer',
            'Spring Boot Expert',
            'React Native Mobile Dev',
            'Freelancer for Hire 🚀'
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      <div className="flex space-x-6 text-3xl">
        <a href="https://github.com/kramaresh1" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-yellow-400 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/amaresh-kumar-0b9211257" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition-colors" />
        </a>
      </div>

      <a
        href="#contact"
        className="mt-8 inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Hire Me
      </a>
      <a
  href="/Amaresh_Kumar_Resume.pdf"
  download
  className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold border-2 border-white hover:bg-gray-200 transition"
>
  Download Resume
</a>
    </motion.section>
  );
};

export default Hero;