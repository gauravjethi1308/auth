import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const Project = () => {
  // Your projects data - easy to edit
  const projects = [
    {
      title: 'Blog Application',
      description: 'A full-featured blog app where users can sign up, log in, create, read, and comment on posts. Secure authentication with JWT.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'JWT'],
      features: ['User Authentication', 'Create & Read Blogs', 'Commenting System'],
      github: 'https://github.com/gauravjethi1308/Blog-website',
      image: 'https://github.com/gauravjethi1308/Blog-website/raw/74a5fe021a3077be0df1b7ed91679749e404b038/Screenshot%20(14).png',
      demo: 'http://localhost:3000' // Local demo - update if live
    },
    {
      title: 'Stay Hotel Booking Website',
      description: 'A modern hotel booking site with dynamic UI for room selection and real-time availability. Responsive design for all devices.',
      technologies: ['React JS', 'Tailwind CSS'],
      features: ['Room Booking', 'Real-time Updates', 'Responsive Layout'],
      github: 'https://github.com/gauravjethi1308/Stay-Hotel-Booking-Website',
      image: 'https://github.com/gauravjethi1308/Stay-Hotel-Booking-Website/raw/96c2f51ef04407b3c270cf3cd53eb6e301b6c64f/Screenshot%20(2).png', // Using first screenshot
      demo: '#' // No live demo mentioned
    },
    {
      title: 'To-Do List App',
      description: 'A simple yet powerful task manager that lets you add, edit, delete, and mark tasks as complete. Tasks persist with local storage.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      features: ['Add & Remove Tasks', 'Edit Tasks', 'Mark Complete', 'Responsive Design'],
      github: 'https://github.com/gauravjethi1308/To-do-list',
      image: '', // No screenshot in repo - you can add one later
      demo: '#' // No live demo
    },
    {
      title: 'URL Shortener',
      description: 'A clean tool to shorten long URLs (in development). Built with modern web tech for quick and easy link management.',
      technologies: ['EJS', 'Node.js' ,'Express.js'], // Assumed - add more if needed
      features: ['URL Shortening', 'Custom Links'], // Assumed - update as you build
      github: 'https://github.com/gauravjethi1308/Url-shortner',
      image: '', // No screenshot - add later
      demo: '#' // No live demo
    }
  ];

  return (
    <div className="min-h-screen  py-10 px-6 md:px-10">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#69ff64] text-center mb-12"
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#222224] border border-[#3D3D3D] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            {!project.image && (
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Preview Coming Soon</span>
              </div>
            )}

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-gray-400 text-xs font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-xs text-[#69ff64] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-gray-400 text-xs font-medium mb-2">Key Features</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#69ff64] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#69ff64] text-gray-900 font-medium rounded-lg hover:bg-green-500 transition-all"
                >
                  <FiGithub size={18} />
                  View Code
                </motion.a>
                {project.demo !== '#' && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;