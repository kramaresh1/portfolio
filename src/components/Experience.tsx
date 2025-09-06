import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-12 bg-white text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Experience</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-semibold">Java Developer – UBQ Technologies</h4>
          <p className="text-gray-600">May 2023 – Present | Bangalore</p>
          <p>
         
Designed secure RESTful APIs with Spring Boot and JWT-based authentication.
Integrated Feign Client for efficient service-to-service communication in
microservices.
Implemented JPA and Hibernate for optimized database management.
Developed responsive UI components using Angular and built cross-platform
mobile apps with React Native.
Engineered microservices integration with Eureka Server Gateway for scalable
routing.
Ensured system reliability using Circuit Breaker patterns for fault tolerance.
Built secure modules for expense tracking, lead generation, and retailer
onboarding.
Collaborated with QA, UI/UX, and product teams to deliver stable, feature-rich
backend services.
Awarded “Spot Award Q3 2023” for mastering new technologies and “Technology
Champ Q2 2024
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold">BDA – Byju's</h4>
          <p className="text-gray-600">Dec 2021 – Jun 2022 | Patna</p>
          <p>
            Developed strong communication and client relationship skills while managing educational sales processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;