import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  className="w-full bg-transparent shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
 
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl leading-relaxed font-mono">Ayesha <span className="text-gray-300 max-w-xl text-xl leading-relaxed font-mono">Portfolio</span></h1>

     
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Home</a></li>
          <li><a href="#about" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">About Me</a></li>
          <li><a href="#skills" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Skills</a></li>
          <li><a href="#projects" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Projects</a></li>
          <li><a href="#experience" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Experience</a></li>
          <li><a href="#qualification" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Qualification</a></li>
          <li><a href="#contact" className="text-transparent drop-shadow-2xl leading-relaxed font-mono hover:text-blue-200 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Contact</a></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden  px-6 pb-4">
          <ul className="space-y-4 text-white font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About Me</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
