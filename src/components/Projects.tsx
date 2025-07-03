const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-12 bg-gray-100 text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-2">Supply Chain Management</h4>
          <p>
            Developed a secure, scalable microservice-based application with JWT, Kafka, and real-time mobile sync using React Native.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
          <h4 className="text-2xl font-semibold mb-2">Document Management System</h4>
          <p>
            Built a system to securely store and retrieve documents with Angular frontend, Spring Boot backend, and optimized queries.
          </p>
        </div>
      </div> 
    </section>
  );
};

export default Projects;