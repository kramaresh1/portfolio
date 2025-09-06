import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaDatabase } from 'react-icons/fa';

const services = [
  { icon: <FaCode />, title: "Full Stack Development", desc: "React, Angular, Spring Boot APIs" },
  { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "React Native for Android & iOS" },
  { icon: <FaCloud />, title: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes deployment" },
  { icon: <FaDatabase />, title: "Database Design", desc: "SQL, MySQL, performance tuning" },
];

const Services: React.FC = () => {
  return (
   <section id="services" className="p-12 bg-gray-100 text-gray-800" data-aos="fade-up">
      <h3 className="text-4xl font-bold mb-8 border-b-2 border-yellow-400 inline-block">Services</h3>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition">
            <div className="text-3xl text-yellow-500 mb-3">{s.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;