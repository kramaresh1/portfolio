const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-12 bg-white text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Experience</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-semibold">Java Developer – UBQ Technologies</h4>
          <p className="text-gray-600">May 2023 – Present | Bangalore</p>
          <p>
            Built microservices for lead management and expense tracking. Integrated Kafka, secured APIs with JWT, and delivered
            cross-platform apps via React Native.
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