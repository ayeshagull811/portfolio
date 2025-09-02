import React from "react";

export default function MySkills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Responsive Design",
    "RESTful APIs",
    "Bootstrap",
  ];

  return (
    <div id="skills">
      <h1 className="text-3xl mt-25 md:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
        My <span className="text-gray-300">Skills</span>
      </h1>
      <div className="grid md:grid-cols-5 lg:grid-cols-4 mb-10 gap-3">
        {skills.map((skill) => (
          <div className="bg-cyan-400/5 backdrop-blur-lg border-2 border-cyan-400/30 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400/70 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="text-gray-300 text-lg font-mono">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
