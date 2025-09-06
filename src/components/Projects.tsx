import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-12 bg-gray-100 text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-2">Supply Chain Management</h4>
          <p>
          Developed and maintained Spring Boot microservices for lead management, expense
tracking, and onboarding workflows.
Implemented secure REST APIs with JWT authentication and RBAC.
Used Apache Kafka for real-time notifications, boosting user engagement.
Built Angular dashboards for admins and React Native apps for field reps.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-2">Document Management System</h4>
          <p>
          Engineered a secure document storage and retrieval platform using
microservices.
Integrated authentication, authorization, and metadata-driven document
processing.
Optimized database queries for high performance and low latency.
Designed a user-friendly, responsive UI for seamless access.

          </p>
        </div>
      </div> 
    </section>
  );
};

export default Projects;