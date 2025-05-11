import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero" id="home">
      <h1>Zack Swim</h1>
      <h2>Full-Stack Developer</h2>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>
    </header>
  );
};

export default Hero;