import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ setActive }) => {
  return (
    <div className="flex flex-col items-center text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-[#64ffda]"
      >
        Hey, I'm Gaurav 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 mt-4 text-lg md:text-xl"
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            2000,
            "React & Node.js Enthusiast ⚛️",
            2000,
            "Learning. Building. Improving. 🚀",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.p>

      <motion.button
        onClick={() => setActive("projects")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mt-8 px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all"
      >
        View My Work
      </motion.button>
    </div>
  );
};

export default Hero;
