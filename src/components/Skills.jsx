import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-tertiary rounded-full p-6 flex items-center justify-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
        <div className="text-[#915EFF] text-2xl font-bold">{skill.icon}</div>
      </div>
      <div className="ml-4">
        <h3 className="text-white font-medium text-[18px]">{skill.name}</h3>
        <p className="text-secondary text-[14px]">{skill.level}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: "JS",
      level: "Expert",
    },
    {
      name: "TypeScript",
      icon: "TS",
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: "Advanced",
    },
    {
      name: "HTML5",
      icon: "🌐",
      level: "Expert",
    },
    {
      name: "CSS3",
      icon: "🎨",
      level: "Advanced",
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      level: "Advanced",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: "🔄",
      level: "Advanced",
    },
    {
      name: "Redux",
      icon: "🔄",
      level: "Intermediate",
    },
    {
      name: "Next.js",
      icon: "N",
      level: "Intermediate",
    },
    {
      name: "GraphQL",
      icon: "◢",
      level: "Basic",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base uppercase tracking-wider text-[#915EFF]">
            My Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Skills
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto">
            I've worked with a range of technologies in the web development world.
            From front-end design to back-end development, I'm constantly expanding my skillset
            to stay at the forefront of the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-tertiary rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Skill Categories</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[#915EFF] text-xl font-semibold mb-4">Frontend Development</h4>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> UI/UX Implementation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Frontend Frameworks
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> State Management
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#915EFF] text-xl font-semibold mb-4">Backend Development</h4>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> RESTful APIs
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Database Design
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Server Architecture
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Authentication
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[#915EFF] text-xl font-semibold mb-4">Other Skills</h4>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Version Control
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Testing & Debugging
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Deployment & CI/CD
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

