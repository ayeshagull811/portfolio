
import React from "react";

export default function Qualification() {
  const qualification = [
    {
      name: "Matriculation",
      School: "Fazaia Inter College Jinnah Camp Nur Khan",
      year: "Jun 2020 – Jun 2022",
      subject: "Biology",
    },
    {
      name: "Intermediate",
      School: "Fazaia Inter College Jinnah Camp Nur Khan",
      year: "Jun 2022 – Jun 2024",
      subject: "Pre-Engineering",
    },
    {
      name: "Bachelor",
      School: "NUML",
      year: "Sep 2025 – Present",
      subject: "BS Robotics and Intelligent Systems",
    },
  ];
  return (
    <section id="qualification">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
          Qualification
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 mb-10 gap-3">
  {
    qualification.map((e, index) => (
      <div key={index} className="p-6 rounded-xl bg-cyan-400/5 backdrop-blur-lg border-2 border-cyan-400/30 drop-shadow-2xl hover:scale-105 transition shadow-2xl hover:shadow-xl">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">{e.name}</h1>
        <p className="text-gray-400 text-sm">{e.year}</p>
        <p className="text-blue-200">{e.School}</p>
        <p className="text-blue-400">{e.subject}</p>
      </div>
    ))

  }
        </div>
      </div>
    </section>
  );
}
