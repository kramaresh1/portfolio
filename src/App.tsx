
import './App.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Services from './components/Services.tsx';
import Skills from './components/Skills.tsx';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';

const App: React.FC = () => {

  
    useEffect(() => {
      AOS.init({ once: true, duration: 1000 });
    }, []);
  return (
   <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">

      <Header />
      <Hero />
      <About />
       <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
