import { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? 'bg-tertiary shadow-xl' : 'bg-black-100 hover:bg-black-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#915EFF] flex items-center justify-center mr-4">
          <span className="text-white font-bold">{experience.company.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{experience.title}</h3>
          <p className="text-secondary">{experience.company}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-2">{experience.date}</p>
      
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <ul className="list-disc list-inside text-secondary space-y-2 ml-2">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers."
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      date: "Jun 2020 - Dec 2021",
      points: [
        "Built and maintained client websites using JavaScript, HTML, and CSS.",
        "Collaborated with the design team to implement responsive and accessible web designs.",
        "Optimized applications for maximum speed and scalability.",
        "Participated in agile development methodologies and sprint planning."
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      date: "Sep 2019 - May 2020",
      points: [
        "Assisted in developing user interfaces for web applications.",
        "Learned and applied modern frontend frameworks and libraries.",
        "Fixed bugs and implemented minor features under supervision.",
        "Participated in team meetings and contributed to project planning."
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base uppercase tracking-wider text-[#915EFF]">
            What I've done so far
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Work Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isActive={activeExperience === index}
              onClick={() => setActiveExperience(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

