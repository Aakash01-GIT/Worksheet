import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base uppercase tracking-wider text-[#915EFF]">
            Introduction
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-[350px] bg-tertiary rounded-2xl overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-r from-purple-800 to-indigo-900 flex items-center justify-center">
                <span className="text-white text-xl">Profile Image</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#915EFF] rounded-full" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Passionate Developer & Designer
            </h3>
            <p className="text-secondary text-base sm:text-lg mb-6">
              I'm a dedicated software developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With a background in 
              both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-secondary text-base sm:text-lg mb-6">
              Throughout my career, I've worked on a diverse range of projects, from 
              responsive web applications to interactive user interfaces. I'm constantly 
              exploring new technologies and techniques to enhance my skills and deliver 
              better solutions.
            </p>
            <p className="text-secondary text-base sm:text-lg">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or enjoying outdoor activities 
              to maintain a healthy work-life balance.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-tertiary px-6 py-3 rounded-lg">
                <span className="text-white font-bold text-2xl">3+</span>
                <p className="text-secondary text-sm mt-1">Years of Experience</p>
              </div>
              <div className="bg-tertiary px-6 py-3 rounded-lg">
                <span className="text-white font-bold text-2xl">20+</span>
                <p className="text-secondary text-sm mt-1">Projects Completed</p>
              </div>
              <div className="bg-tertiary px-6 py-3 rounded-lg">
                <span className="text-white font-bold text-2xl">10+</span>
                <p className="text-secondary text-sm mt-1">Technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

