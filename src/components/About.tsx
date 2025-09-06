import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="p-12 bg-white text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">About Me</h3>
      <p className="text-lg max-w-3xl leading-relaxed">
      Passionate Software Developer with 2.5+ years of
       professional experience building web and mobile
        applications using Java, Spring Boot, Angular, and React Native.
         Graduated with a BCA in 2021, I thrive on quickly learning new 
         technologies and delivering scalable, efficient solutions.
      </p>
    </section>
  );
};

export default About;