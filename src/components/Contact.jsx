import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm sm:text-base uppercase tracking-wider text-[#915EFF]">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Contact
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me using the form below or through any of the provided contact methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mr-4">
                  <FiMail className="text-[#915EFF] text-xl" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Email</p>
                  <a href="mailto:contact@aakashthakur.com" className="text-white hover:text-[#915EFF] transition-colors">
                    contact@aakashthakur.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mr-4">
                  <FiPhone className="text-[#915EFF] text-xl" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-[#915EFF] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center mr-4">
                  <FiMapPin className="text-[#915EFF] text-xl" />
                </div>
                <div>
                  <p className="text-secondary text-sm">Location</p>
                  <p className="text-white">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-colors"
                >
                  <span className="text-white">Li</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-colors"
                >
                  <span className="text-white">Gh</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-colors"
                >
                  <span className="text-white">Tw</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-colors"
                >
                  <span className="text-white">Ig</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send me a message
              </h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6 text-center"
                >
                  <FiSend className="text-green-500 text-4xl mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-secondary">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-white block mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your name?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-white block mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-white block mb-2">Your Message</label>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What would you like to say?"
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#915EFF] hover:bg-[#7d4fd6] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 flex items-center"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <FiSend className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

