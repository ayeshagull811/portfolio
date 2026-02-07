import React from "react";

export default function AboutMe() {
  return (
    <div className="px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
        About <span className="text-gray-300">Me</span>
      </h1>
      <p className="text-md text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono text-justify">
        I completed my Intermediate education from Fazaia Inter College. After that, I pursued a Web Development course through NAVTTC conducted by Uptech Sol, gaining both theoretical knowledge and practical skills in modern web technologies. Following the course, I was selected for a two-week on-the-job training, gaining hands-on industry exposure. After completing the training, I continued with a three-month internship, working on real-world projects that strengthened my problem-solving skills, improved my coding practices, and taught me how professional projects are developed and managed. Alongside professional training, I applied to university and am currently studying Robotics and Intelligent Systems at the National University of Modern Languages (NUML). I chose this field because I had already built a strong foundation in web development through learning and consistent practice. Now, I aim to expand my knowledge by exploring Artificial Intelligence and Robotics. I strongly believe that technology is constantly evolving, and as a developer, it is essential to continuously learn, explore, and adapt. My passion lies in programming, emerging technologies, and building innovative solutions that combine creativity with technical expertise.
      </p>
    </div>
  );
}
