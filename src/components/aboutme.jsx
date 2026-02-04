import React from "react";

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-3xl mt-25 md:text-5xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
        About <span className="text-gray-300">Me</span>
      </h1>
      <p className="text-md text-gray-300 max-w-2xl leading-relaxed font-mono">
        I completed my Intermediate education from Fazaia Inter College. After
        that, I pursued a Web Development course through NAVTTC, which was
        conducted by Uptech Sol. As part of this program, I gained both
        theoretical knowledge and practical skills in modern web technologies.<br/>
        Following the course, I was selected for a two week on the job training,
        where I gained hands on industry exposure. After successfully completing
        the training, I continued with a three month internship, during which I
        worked on real world projects. This experience helped me strengthen my
        problem solving skills, improve my coding practices, and understand how
        professional projects are developed and managed in a real working
        environment.<br/> Alongside my professional training, I applied to university
        and am currently studying Robotics and Intelligent Systems at the
        National University of Modern Languages (NUML). I chose this field
        because I had already built a strong foundation in web development
        through learning and consistent practice. Now, I aim to expand my
        knowledge by exploring Artificial Intelligence and Robotics.<br/> I strongly
        believe that technology is constantly evolving, and as a developer, it
        is essential to continuously learn, explore, and adapt. My passion lies
        in programming, emerging technologies, and building innovative solutions
        that combine creativity with technical expertise
      </p>
    </div>
  );
}
