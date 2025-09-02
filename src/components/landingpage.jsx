import React, { useEffect, useRef, useState } from 'react';

import AboutMe from './aboutme';
import MySkills from './skills';
import MyProject from './myProject';
import Experience from './experience';
import Qualification from './qualification';


const TechPortfolioBackground = () => {
  const canvasRef = useRef(null);
 
  const [binaryCode, setBinaryCode] = useState([]);

  // Generate random binary code
  const generateBinaryCode = () => {
    const lines = [];
    for (let i = 0; i < 100; i++) {
      let line = '';
      for (let j = 0; j < 100; j++) {
        line += Math.random() > 0.5 ? '1' : '0';
      }
      lines.push(line);
    }
    setBinaryCode(lines);
  };

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
      // Horizontal circuits
      for (let i = 0; i < 10; i++) {
        this.circuits.push({
          type: 'horizontal',
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          length: Math.random() * 300 + 100,
          pulse: Math.random() * Math.PI * 2
        });
      }
      // Vertical circuits
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
          // Add connection nodes
          for (let i = 0; i < 3; i++) {
            const nodeX = circuit.x + (circuit.length / 3) * i;
            this.ctx.moveTo(nodeX, circuit.y - 10);
            this.ctx.lineTo(nodeX, circuit.y + 10);
          }
        } else {
          this.ctx.moveTo(circuit.x, circuit.y);
          this.ctx.lineTo(circuit.x, circuit.y + circuit.length);
          // Add connection nodes
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

  // Gear Component
  const Gear = ({ size, rotation, x, y, speed }) => (
    <div 
      className="absolute border-4 border-cyan-400 rounded-full opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
        animation: `spin ${speed}s linear infinite`,
        background: 'radial-gradient(circle, rgba(0,191,255,0.1) 0%, transparent 70%)'
      }}
    >
      {/* Gear teeth */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-6 bg-cyan-400 opacity-60"
          style={{
            left: '50%',
            top: '-12px',
            transformOrigin: '50% calc(100% + ' + (size/2) + 'px)',
            transform: `translateX(-50%) rotate(${i * 45}deg)`
          }}
        />
      ))}
    </div>
  );

  // Circuit Lines Component
  const CircuitLines = () => (
    <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 200">
        <path
          d="M0,150 L200,150 L220,130 L250,130 L270,110 L400,110 L420,90 L600,90 L620,110 L800,110 L820,130 L950,130 L970,150 L1200,150"
          stroke="#00bfff"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
          style={{ filter: 'drop-shadow(0 0 10px #00bfff)' }}
        />
        <path
          d="M0,170 L150,170 L170,150 L300,150 L320,130 L500,130 L520,150 L700,150 L720,170 L1200,170"
          stroke="#0080ff"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ 
            filter: 'drop-shadow(0 0 8px #0080ff)',
            animationDelay: '0.5s'
          }}
        />
      </svg>
    </div>
  );

  // Binary Code Rain Component
  const BinaryRain = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {binaryCode.map((line, index) => (
        <div
          key={index}
          className="absolute text-cyan-400 text-xs font-mono opacity-20 whitespace-nowrap"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float 10s linear infinite`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );

  // HUD Elements Component
  const HUDElements = () => (
    <>
      {/* Top Left HUD */}
      <div className="absolute top-8 left-8 text-cyan-400 font-mono text-sm opacity-60">
        <div>STATUS: ONLINE</div>
        <div>BUILD: v2.1.4</div>
        <div>PING: 12ms</div>
        <div>CPU: 45%</div>
      </div>

      {/* Top Right Circular HUD */}
      <div className="absolute top-8 right-8 w-32 h-32">
        <div className="w-full h-full border-2 border-cyan-400 rounded-full opacity-40 animate-spin-slow">
          <div className="absolute top-2 left-1/2 w-1 h-4 bg-cyan-400 transform -translate-x-1/2"></div>
          <div className="absolute bottom-2 left-1/2 w-1 h-4 bg-cyan-400 transform -translate-x-1/2"></div>
          <div className="absolute left-2 top-1/2 w-4 h-1 bg-cyan-400 transform -translate-y-1/2"></div>
          <div className="absolute right-2 top-1/2 w-4 h-1 bg-cyan-400 transform -translate-y-1/2"></div>
          <div className="absolute right-2 top-1/2 w-4 h-1 bg-cyan-400 transform -translate-y-1/2"></div>
          <div className="absolute right-2 top-1/2 w-4 h-1 bg-cyan-400 transform -translate-y-1/2"></div>
          <div className="absolute right-2 top-1/2 w-4 h-1 bg-cyan-400 transform -translate-y-1/2"></div>
        </div>
      </div>

      {/* Bottom Right Data Circles */}
      <div className="absolute bottom-32 right-8 space-y-4">
        <div className="w-20 h-20 border border-cyan-400 rounded-full opacity-40 flex items-center justify-center">
          <div className="w-12 h-12 border border-cyan-400 rounded-full animate-pulse"></div>
        </div>
        <div className="w-16 h-16 border border-cyan-400 rounded-full opacity-30 flex items-center justify-center">
          <div className="w-8 h-8 border border-cyan-400 rounded-full animate-ping"></div>
        </div>
        <div className="w-24 h-24 border-2 border-cyan-400 rounded-full opacity-50">
          <div className="w-full h-full relative">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-cyan-400 opacity-60"
                style={{
                  left: '50%',
                  top: '2px',
                  transformOrigin: '50% 46px',
                  transform: `translateX(-50%) rotate(${i * 30}deg)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    let circuitAnimation;
    
    if (canvasRef.current) {
      circuitAnimation = new CircuitAnimation(canvasRef.current);
    }

    generateBinaryCode();
    
    // Update binary code periodically
    const binaryInterval = setInterval(generateBinaryCode, 3000);

    // Animate stats
    const animateStats = () => {
      const targets = { projects: 50, experience: 5, clients: 100 };
      const increments = {
        projects: targets.projects / 50,
        experience: targets.experience / 50,
        clients: targets.clients / 50
      };

      let current = { projects: 0, experience: 0, clients: 0 };

      const timer = setInterval(() => {
        let allComplete = true;

        Object.keys(current).forEach(key => {
          if (current[key] < targets[key]) {
            current[key] += increments[key];
            allComplete = false;
          } else {
            current[key] = targets[key];
          }
        });

        // setStats({
        //   projects: Math.floor(current.projects),
        //   experience: Math.floor(current.experience),
        //   clients: Math.floor(current.clients)
        // });

        if (allComplete) {
          clearInterval(timer);
        }
      }, 50);
    };

    const statsTimeout = setTimeout(animateStats, 1000);

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      @keyframes float {
        0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(-50px); opacity: 0; }
      }
    `;
    
    if (!document.head.querySelector('[data-tech-portfolio]')) {
      style.setAttribute('data-tech-portfolio', 'true');
      document.head.appendChild(style);
    }

    return () => {
      if (binaryInterval) clearInterval(binaryInterval);
      if (statsTimeout) clearTimeout(statsTimeout);
      const existingStyle = document.head.querySelector('[data-tech-portfolio]');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  return (
    <div id='home'>
      
       <div  className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white font-sans relative">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      
      {/* Binary Code Rain */}
      <BinaryRain />
      
      {/* Animated Gears */}
      <Gear size={80} rotation={0} x={15} y={20} speed={10} />
      <Gear size={120} rotation={45} x={8} y={60} speed={15} />
      <Gear size={60} rotation={90} x={25} y={75} speed={8} />
      
      {/* Circuit Lines */}
      <CircuitLines />
      
      {/* HUD Elements */}
      <HUDElements />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-10 flex flex-col justify-center items-center text-center">
        {/* Portfolio Header */}
        <div className="mb-10 animate-pulse">
          <h1 className="text-6xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
          Hi, [I’m Ayesha],
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-mono">
            a web developer with experience in [React],[ Node.js], and [database-driven] applications. I enjoy solving real-world problems by designing and building full-stack solutions that deliver value and impact
          </p>
        </div>
      
       <AboutMe/>
       <MySkills/>
       <MyProject/>
       <Experience/>
       <Qualification/>
        <div className="mt-16 font-mono text-cyan-400 text-sm opacity-70">
          <div className="animate-pulse">{'>'} SYSTEM_STATUS: OPERATIONAL</div>
          <div className="animate-pulse delay-100">{'>'} PORTFOLIO_LOADED: TRUE</div>
          <div className="animate-pulse delay-200">{'>'} READY_FOR_COLLABORATION: TRUE</div>
        </div>
      </div>
    </div>
  
    </div>
    
  );
};

export default TechPortfolioBackground;