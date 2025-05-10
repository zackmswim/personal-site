import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      
      <div className="about-grid">
        {/* Education */}
        <div className="about-card">
          <h3>Education</h3>
          <p><strong>Western Governors University</strong></p>
          <p>B.S. Software Engineering</p>
        </div>

        {/* Technical Skills */}
        <div className="about-card">
          <h3>Technical Skills</h3>
          <ul>
            <li>Java • Python • JavaScript</li>
            <li>HTML5 • CSS3 • React</li>
            <li>Git • VS Code • MySQL</li>
            <li>AWS Cloud Practitioner</li>
          </ul>
        </div>

        {/* Work Highlights */}
        <div className="about-card">
          <h3>Professional Highlights</h3>
          <ul>
            <li>Built tools that reduced admin tasks by 20-40%</li>
            <li>Achieved 90%+ client retention through UX-focused solutions</li>
            <li>Managed complex inventory systems using data analysis</li>
          </ul>
        </div>
      </div>

      {/* Career Transition Statement */}
      <div className="transition-statement">
        <p>
          Former fitness professional transitioning to software development. 
          I bring a unique perspective on <strong>user experience</strong> and 
          <strong> process optimization</strong> from years of client-focused work.
        </p>
      </div>
    </section>
  );
};

export default About;