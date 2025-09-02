import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id='contact' className="bg-gradient-to-r from-[#0a0e27] to-[#16213e] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
        <div className="text-center md:text-left space-y-2">
          <p className="text-lg font-semibold text-white">📞 Contact Me</p>
          <p>Phone: +92 3475681821</p>
          <p>Email: agull6414@gmail.com</p>
        </div>

        <div className= "flex gap-4 text-2xl">
          <a
            href="https://github.com/ayeshagull811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
               <FaGithub />
          </a>
         
          <a
            href="https://www.linkedin.com/in/ayesha-gull-075b75325/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
               <FaLinkedin />
          </a>
        </div>
      </div>

    
      <div className="mt-6 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AYESHA. All Rights Reserved.
      </div>
    </footer>
  );
}
