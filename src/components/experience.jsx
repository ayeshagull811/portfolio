export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Development (Course)",
      company: "Uptech Sol",
      duration: "Mar 2025 – Jun 2025",
      tasks: [
        "Completed a comprehensive Full Stack Development course.",
        "Gained hands-on experience with HTML, CSS, Tailwind CSS, and React.",
        "Worked with backend technologies like Node.js, Express, MongoDB, and Postman.",
      ],
    },
   {
      role: "Web Development Intern",
      company: "Uptech Sol",
      duration: "Aug 2025 – present",
      tasks: [
        "Learning and working with Next.js and MySQL.",
        "Collaborating with the development team on real-world projects.",
        "Enhancing skills in frontend and backend integration.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 text-white">
      <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        <span className="text-gray-300">My</span> Experience
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 mb-10 gap-3">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-xl bg-cyan-400/5 backdrop-blur-lg border-2 border-cyan-400/30  drop-shadow-2xl hover:scale-105 transition shadow-2xl hover:shadow-xl transition">
            <h3 className="text-2xl  bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl font-bold">{exp.role}</h3>
            <p className="text-gray-400 text-sm">{exp.company} • {exp.duration}</p>
            <ul className="list-disc list-inside mt-3 text-gray-100">
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
