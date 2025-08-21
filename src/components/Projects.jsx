import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
    >
      <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-purple-700 to-blue-900 flex items-center justify-center">
          <span className="text-white text-xl">Project Image</span>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag} className="text-[14px] text-[#915EFF]">
            #{tag}
          </p>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transition-colors duration-300"
        >
          <FiGithub size={24} />
        </a>
        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transition-colors duration-300"
        >
          <FiExternalLink size={24} />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution with product management, shopping cart, and payment processing capabilities. Features responsive design and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
    {
      name: "Task Management App",
      description:
        "A collaborative task management application that allows teams to organize projects, assign tasks, and track progress. Includes real-time updates and notifications.",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
    {
      name: "Weather Dashboard",
      description:
        "An interactive weather application that provides real-time weather data, forecasts, and location-based services. Features beautiful visualizations and responsive design.",
      tags: ["JavaScript", "API", "CSS", "Chart.js"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
    {
      name: "Social Media Analytics",
      description:
        "A data visualization platform for social media metrics, allowing users to track engagement, growth, and audience demographics across multiple platforms.",
      tags: ["React", "D3.js", "Node.js", "Express"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
    {
      name: "Fitness Tracker",
      description:
        "A mobile-responsive fitness application that helps users track workouts, set goals, and monitor progress. Includes data visualization and achievement system.",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
    {
      name: "Recipe Finder",
      description:
        "A culinary application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine preferences. Features user accounts and favorites.",
      tags: ["JavaScript", "API", "CSS", "LocalStorage"],
      source_code_link: "https://github.com",
      live_link: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base uppercase tracking-wider text-[#915EFF]">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Projects
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto">
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories and live demos. 
            They reflect my ability to solve complex problems, work with different technologies, 
            and manage projects effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

