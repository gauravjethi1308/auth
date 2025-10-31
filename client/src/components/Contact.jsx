import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-[#222224] rounded-2xl shadow-2xl p-8 border border-[#3D3D3D]"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-yellow-400 text-center mb-8"
        >
          Get in Touch
        </motion.h2>

        {/* Contact Info */}
        <div className="space-y-6">
          {/* Email */}
          <motion.a
            href="mailto:anshulwadhwa439@gmail.com"
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-4 p-3 rounded-lg bg-[#2B2B2C] hover:bg-gray-750 transition-all cursor-pointer group"
          >
            <div className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
              <FiMail className="text-yellow-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">EMAIL</p>
              <p className="text-white font-medium">gauravjethi1308@gmail.com</p>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+919115680702"
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-4 p-3 rounded-lg bg-[#2B2B2C]  border-[#9b9999] hover:bg-gray-750 transition-all cursor-pointer group"
          >
            <div className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
              <FiPhone className="text-yellow-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">PHONE</p>
              <p className="text-white font-medium">+91 9389035287</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-4 p-3 rounded-lg bg-[#2B2B2C] border-[#3D3D3D] cursor-default group"
          >
            <div className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
              <FiMapPin className="text-yellow-400 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">LOCATION</p>
              <p className="text-white font-medium">Uttarakhand, India</p>
                            <p className="text-white font-medium">Noida</p>

            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6">
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: '#0A66C2' }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiLinkedin size={28} />
          </motion.a>

          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: '#1DA1F2' }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiTwitter size={28} />
          </motion.a>

          <motion.a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: '#fff' }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub size={28} />
          </motion.a>
        </div>

        {/* Optional: Small note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Feel free to reach out — I'm always open to new opportunities!
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;