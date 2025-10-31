import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  // Your skills – easy to edit
  const skills = {
    Languages: ['JavaScript', 'HTML', 'Java'],
    Frontend: ['React.js',  'React Native', 'Redux',  'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js'],
    Database: ['MongoDB', 'MySQL'],
    'Tools & Technologies': ['Git', 'GitHub', 'Docker', 'Postman'],
  };

  return (
    <div className="flex flex-col items-start justify-start gap-10 p-6 md:p-10">

      {/* === ABOUT ME === */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-[#69ff64]"
        >
          About me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-[1.2rem] font-normal text-[#ddeee7] tracking-wider mt-3"
        >
          <TypeAnimation
            sequence={[
              "Hi, I’m Gaurav, a Full Stack Developer who loves building user-friendly and efficient applications. I enjoy working on both the frontend and backend, bringing ideas to life with modern tools and technologies. I’m always eager to learn, solve problems, and build projects that make a difference. Whether it's improving functionality or enhancing the user experience, I love taking on new challenges and growing as a developer.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.p>
      </div>

      {/* === MY SKILLS TITLE === */}
      <motion.h1
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-4xl font-bold text-[#69ff64]"
      >
        My Skills
      </motion.h1>

      {/* === SKILLS SECTION === */}
      <div className="w-full bg-[#222224] rounded-2xl p-6 md:p-8 shadow-xl border border-[#3D3D3D]">
        {Object.entries(skills).map(([category, list], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            {/* Category Name */}
            <h3 className="text-lg font-medium text-gray-300 mb-3">
              {category}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {list.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb', color: '#111' }}
                  className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full cursor-default transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default About;