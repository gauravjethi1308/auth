import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

// Import the components
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";

const Portfolio = () => {
  const [active, setActive] = useState("home");

  const sections = {
    home: <Hero setActive={setActive} />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen bg-[#1E1E1F] text-gray-300 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-center gap-6 py-6 bg-neutral-800 fixed top-0 w-full z-10 border-b border-gray-700">
        {[
          { id: "home", icon: <FaHome />, label: "Home" },
          { id: "about", icon: <FaUser />, label: "About" },
          { id: "projects", icon: <FaCode />, label: "Projects" },
          { id: "contact", icon: <FaEnvelope />, label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
              active === item.id
                ? "text-[#64ffda] border-b-2 border-[#64ffda]"
                : "hover:text-[#64ffda]"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Section */}
      <div className="pt-24 px-4 flex-1 flex items-center justify-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl"
        >
          {sections[active]}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
