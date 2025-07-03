const About: React.FC = () => {
  return (
    <section id="about" className="p-12 bg-white text-gray-800">
      <h3 className="text-4xl font-bold mb-6 border-b-2 border-yellow-400 inline-block">About Me</h3>
      <p className="text-lg max-w-3xl leading-relaxed">
        I'm a passionate full-stack Java developer with 2.7+ years of experience. I specialize in creating robust microservices
        using Spring Boot, and building interactive frontends with React Native and Angular. I'm also experienced in RESTful APIs,
        Kafka, Docker, and AWS. I love solving real-world problems through clean, scalable code.
      </p>
    </section>
  );
};

export default About;