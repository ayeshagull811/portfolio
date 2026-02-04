import React from "react";

export default function MySkills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "React.js", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Express.js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "MySQL", level: 60 },
    { name: "Git", level: 70 },
    { name: "GitHub", level: 75 },
    { name: "Postman", level: 70 },
    { name: "VS Code", level: 85 },
    { name: "Responsive Design", level: 80 },
    { name: "RESTful APIs", level: 70 },
    { name: "Bootstrap", level: 75 },
    { name: "Excel Data Entry", level: 90 },
    { name: "Excel Formula", level: 85 },
    { name: "Excel Sorting", level: 88 },
    { name: "Debugging", level: 70 },
  ];

  return (
    <div id="skills">
      <h1 className="text-3xl mt-25 md:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
        My <span className="text-gray-300">Skills</span>
      </h1>

      <div className="grid md:grid-cols-5 lg:grid-cols-4 mb-10 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-cyan-400/5 backdrop-blur-lg border-2 border-cyan-400/30 rounded-lg p-3 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-400/70 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>

            {/* Skill Name */}
            <div className="text-gray-300 text-lg font-mono">
              {skill.name}
            </div>

            {/* Percentage */}
            <div className="text-cyan-400 text-sm mt-1 font-semibold">
              {skill.level}%
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div
                className="bg-cyan-400 h-2 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
