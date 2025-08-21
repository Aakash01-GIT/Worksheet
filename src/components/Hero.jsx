import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-black-100 to-transparent opacity-30" />
      
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1 
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-[#915EFF]">Aakash</span>
          </motion.h1>
          
          <motion.p 
            className="text-secondary text-[16px] sm:text-[18px] lg:text-[20px] mt-2 max-w-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I develop user interfaces, web applications, and software solutions.
            Passionate about creating elegant, efficient, and user-friendly digital experiences.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all duration-300"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="ml-4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold border border-white hover:bg-white hover:text-tertiary transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

