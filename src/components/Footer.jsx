import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white font-bold text-2xl">Aakash Thakur</h2>
            <p className="text-secondary mt-2">
              Building digital experiences that make a difference
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-secondary hover:text-[#915EFF] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-secondary hover:text-[#915EFF] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-secondary hover:text-[#915EFF] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-secondary hover:text-[#915EFF] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Social</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-secondary hover:text-[#915EFF] transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-secondary hover:text-[#915EFF] transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-secondary hover:text-[#915EFF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-secondary hover:text-[#915EFF] transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Aakash Thakur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

