import React, { useState } from 'react';
import Contact from '../Contact.tsx';

const galleryImages = [
  { src: "/p1.jpg", alt: "Project 1", border: "border-pink-300" },
  { src: "/p2.jpg", alt: "Project 2", border: "border-yellow-300" },
  { src: "/p3.jpg", alt: "Project 3", border: "border-purple-300" },
  { src: "/p4.jpg", alt: "Project 4", border: "border-yellow-300" },
  { src: "/p5.jpg", alt: "Project 5", border: "border-yellow-300" },
  { src: "/p6.jpg", alt: "Project 6", border: "border-yellow-300" },
];

const testimonials = [
  {
    name: "Alekhya, Student",
    text: "Code Junoon helped me build my final year project and learn real-world skills. Highly recommended!",
  },
  {
    name: "Kalyani, Student",
    text: "Our mobile app was delivered on time and exceeded expectations. Great team for small businesses!",
  },
];

const ProjectRequirement: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-sans">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 dark:text-yellow-300 mb-4 tracking-tight">Code Junoon Solutions</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-pink-600 dark:text-yellow-200 mb-2">Your Partner for Student & Startup Success</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-200">
          We build custom projects and solutions using <span className="font-bold text-blue-600">Java</span>, <span className="font-bold text-pink-500">Angular</span>, and <span className="font-bold text-green-600">React Native</span> for mobile development. Whether you are a student looking for guidance or a company seeking digital transformation, we help you innovate and grow.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition">Contact Us</a>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-4 md:px-20">
        <h3 className="text-3xl font-bold mb-6 text-purple-700 dark:text-yellow-200">Our Technology Stack</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
            <h4 className="text-xl font-bold text-blue-600 mb-2">Java</h4>
            <p className="text-gray-700 dark:text-gray-200">Robust backend development, microservices, REST APIs, Spring Boot, and secure authentication.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
            <h4 className="text-xl font-bold text-pink-500 mb-2">Angular</h4>
            <p className="text-gray-700 dark:text-gray-200">Modern web apps, dashboards, admin panels, and interactive UI for seamless user experience.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-64 hover:scale-105 transition">
            <h4 className="text-xl font-bold text-green-600 mb-2">React Native</h4>
            <p className="text-gray-700 dark:text-gray-200">Cross-platform mobile apps for Android & iOS, fast development, and beautiful interfaces.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 px-4 md:px-20">
        <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-yellow-200">Our Work & Events</h3>
        <div className="w-full flex justify-center py-4">
          <div className="flex gap-6 px-4">
            {galleryImages.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                style={{ display: idx === currentIdx ? 'block' : 'none' }}
                className={`rounded-xl w-40 h-40 object-cover shadow border-2 ${img.border} cursor-pointer transition-transform hover:scale-105`}
                onClick={() => setModalImg(img.src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for full image view */}
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <img
              src={modalImg}
              alt="Full"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-yellow-400"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 bg-white text-pink-600 rounded-full px-4 py-2 font-bold shadow hover:bg-pink-100"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-12 px-4 md:px-20">
        <h3 className="text-3xl font-bold mb-6 text-pink-600 dark:text-yellow-200">What We Offer</h3>
        <ul className="max-w-3xl mx-auto space-y-6 text-left">
          <li className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <span className="font-bold text-blue-700">Project Guidance for Students:</span> Get help with academic projects, coding assignments, and hands-on workshops.
          </li>
          <li className="bg-pink-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <span className="font-bold text-pink-600">Custom Software for Startups:</span> We design and develop scalable web and mobile solutions tailored to your business needs.
          </li>
          <li className="bg-yellow-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <span className="font-bold text-yellow-600">Training & Internships:</span> Learn the latest technologies with our expert-led training programs and real-world internships.
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-20">
        <h3 className="text-3xl font-bold mb-6 text-green-600 dark:text-yellow-200">Testimonials</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-80">
              <p className="italic text-gray-700 dark:text-gray-200 mb-2">"{t.text}"</p>
              <span className="block text-right font-bold text-blue-600 dark:text-yellow-300">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
       <section  id="contact">
 <Contact />
       </section>


      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Code Junoon Solutions. Crafted with Java, Angular, and React Native.
      </footer>
    </div>
  );
};

export default ProjectRequirement;