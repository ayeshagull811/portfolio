import React from "react";
import jobportal from "../assets/jobportal.png";
import task from "../assets/task.png";
import book from "../assets/image1.png";
import game from "../assets/image2.png";


export default function MyProject() {
  const projects = [
    {
      name: "Book Store",
      img: book,
      des: " A simple book management app built with React, where users can add and view books.",
      demo: "https://book-stores-psi.vercel.app/",
      code: "https://github.com/ayeshagull811/Book-Stores",
    },
    // {
    //   name: "Figma",
    //   img: figma,
    //   des: "A creative design project showcasing clean layouts and user-friendly interface prototypes built in Figma.",
    //   demo: "https://book-stores-psi.vercel.app/",
    //   code: "https://github.com/ayeshagull811/figma",
    // },
    {
      name: "Guess Number",
      img: game,
      des: "A fun game made with HTML, CSS, and JavaScript, where players guess a random number with hints.",
      demo: "https://guess-number-green-three.vercel.app/",
      code: "https://github.com/ayeshagull811/guess-number",
    },
    {
      name: "Job Portal",
      img: jobportal,
      des: " Developed a scalable Job Portal web app enabling companies to manage job postings and candidates to access personalized dashboards. Built with React, Tailwind CSS, Node.js, and MongoDB.",
     
      demo: "https://job-portal-eta-umber.vercel.app/",
      code: "https://github.com/ayeshagull811/Job-portal/tree/master/src",
    },
    {
      name: "To-Do List",
      img: task,
      des: "Developed a role-based To-Do Application where users can add and manage personal tasks, while admins have a dedicated dashboard to monitor and manage tasks of all users. Built with React,Tailwind CSS, Node.js, and MongoDB.",
       demo: "https://tasks-manager-gamma.vercel.app/",
      code: "https://github.com/ayeshagull811/tasks-manager/tree/main/src",
    },
  ];
  return (
    <div>
      <section id="projects" className="py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl mt-25 md:text-5xl font-bold text-gray-300 mb-8 text-center">
            {" "}
            My{" "}
            <span className=" mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
              Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div className=" p-6 rounded-2xl drop-shadow-2xl bg-cyan-400/5 backdrop-blur-lg border-2 border-cyan-400/30 hover:scale-105 transition">
                <img
                  src={project.img}
                  alt="Project Thumbnail"
                  className="rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.des}</p>
                <div className="flex space-x-4 justify-between">
                  <button
                    className="relative overflow-hidden px-5 py-2 rounded-2xl border  bg-blue-500 text-blue-200 border-blue-700 hover:text-blue-100
  transition-all duration-500 group"
                  >
                    <span className="relative z-10">
                      {" "}
                      <a href={project.demo} target="_blank">
                        Live Demo
                      </a>
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-700 text-blue-700 transition-all duration-500 group-hover:w-full"></span>
                  </button>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800"
                  >
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
