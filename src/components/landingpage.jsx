import React, { useEffect, useRef } from 'react';

import AboutMe from './aboutme';
import MySkills from './skills';
import MyProject from './myProject';
import Experience from './experience';
import Qualification from './qualification';
import ResumeButton from './resumeButton';

const TechPortfolioBackground = () => {
  const canvasRef = useRef(null);

  // Circuit Board Canvas Animation
  class CircuitAnimation {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.circuits = [];
      this.time = 0;

      this.init();
      this.animate();
    }

    init() {
      this.resize();
      this.createCircuits();
      this.createParticles();
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    createCircuits() {
      this.circuits = [];

      for (let i = 0; i < 10; i++) {
        this.circuits.push({
          type: 'horizontal',
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          length: Math.random() * 300 + 100,
          pulse: Math.random() * Math.PI * 2
        });
      }

      for (let i = 0; i < 10; i++) {
        this.circuits.push({
          type: 'vertical',
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          length: Math.random() * 200 + 50,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    createParticles() {
      this.particles = [];
      for (let i = 0; i < 30; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          glow: Math.random() * 20 + 10
        });
      }
    }

    drawCircuits() {
      this.circuits.forEach(circuit => {
        const opacity = (Math.sin(this.time + circuit.pulse) + 1) / 2;
        this.ctx.strokeStyle = `rgba(0, 191, 255, ${opacity * 0.8})`;
        this.ctx.lineWidth = 2;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#00bfff';

        this.ctx.beginPath();
        if (circuit.type === 'horizontal') {
          this.ctx.moveTo(circuit.x, circuit.y);
          this.ctx.lineTo(circuit.x + circuit.length, circuit.y);

          for (let i = 0; i < 3; i++) {
            const nodeX = circuit.x + (circuit.length / 3) * i;
            this.ctx.moveTo(nodeX, circuit.y - 10);
            this.ctx.lineTo(nodeX, circuit.y + 10);
          }
        } else {
          this.ctx.moveTo(circuit.x, circuit.y);
          this.ctx.lineTo(circuit.x, circuit.y + circuit.length);

          for (let i = 0; i < 3; i++) {
            const nodeY = circuit.y + (circuit.length / 3) * i;
            this.ctx.moveTo(circuit.x - 10, nodeY);
            this.ctx.lineTo(circuit.x + 10, nodeY);
          }
        }
        this.ctx.stroke();
      });
    }

    drawParticles() {
      this.particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

        this.ctx.fillStyle = '#00bfff';
        this.ctx.shadowBlur = particle.glow;
        this.ctx.shadowColor = '#00bfff';

        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
      });
    }

    animate() {
      this.time += 0.02;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawCircuits();
      this.drawParticles();
      requestAnimationFrame(() => this.animate());
    }
  }

  const Gear = ({ size, x, y, speed }) => (
    <div
      className="absolute border-4 border-cyan-400 rounded-full opacity-20"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        animation: `spin ${speed}s linear infinite`
      }}
    />
  );

  const CircuitLines = () => (
    <div className="absolute bottom-0 left-0 w-full h-32">
      <svg className="w-full h-full" viewBox="0 0 1200 200">
        <path
          d="M0,150 L1200,150"
          stroke="#00bfff"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  const HUDElements = () => (
    <div className="absolute top-8 left-8 text-cyan-400 font-mono text-sm opacity-60">
      <div>STATUS: ONLINE</div>
      <div>BUILD: v2.1.4</div>
      <div>PING: 12ms</div>
      <div>CPU: 45%</div>
    </div>
  );

  useEffect(() => {
    if (canvasRef.current) {
      new CircuitAnimation(canvasRef.current);
    }

    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <div id="home">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden text-white">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />

        <Gear size={80} x={15} y={20} speed={10} />
        <Gear size={120} x={8} y={60} speed={15} />
        <Gear size={60} x={25} y={75} speed={8} />

        <CircuitLines />
        <HUDElements />

        <div className="relative z-10 min-h-screen p-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hi, I’m Ayesha
          </h1>

          <p className="text-gray-300 max-w-2xl font-mono">
            A passionate Web Developer with a strong focus on creating
          modern, responsive, and user-friendly websites. I specialize in React,
          Tailwind CSS, and JavaScript, and enjoy turning ideas into clean,
          functional code. My goal is to build digital experiences that are both
          visually appealing and highly efficient. With hands-on experience in
          frontend development and a growing knowledge of backend technologies,
          I aim to deliver full-stack solutions that add real value. I’m
          constantly learning, exploring new technologies, and improving my
          skills to stay ahead in the ever evolving tech world. Beyond coding, I
          enjoy problem-solving, designing intuitive interfaces, and working on
          projects that challenge me to think creatively
          </p>
<ResumeButton/>
          <AboutMe />
          <MySkills />
          <MyProject />
          <Experience />
          <Qualification />
        </div>
      </div>
    </div>
  );
};

export default TechPortfolioBackground;
