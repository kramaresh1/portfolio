const skills = ["Java", "Spring Boot", "React Native", "Angular", "Kafka", "Docker", "MySQL", "AWS"];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-12 bg-white text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">Skills</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-yellow-200 text-black px-4 py-2 rounded-full shadow-md hover:bg-yellow-300 transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;  