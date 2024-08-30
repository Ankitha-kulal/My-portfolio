import React from 'react';
import './About.css'; // Make sure to create this CSS file

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h3>WELCOME TO MY PORTFOLIO <span className='line'>----</span></h3>
        <h1 className="main-heading">
          Hey, I'm A <br></br><span className="highlight"> Software Engineer</span>.
        </h1>
        <p>
          As a dedicated engineering professional, I excel in collaborative environments, emphasizing effective teamwork, communication, and a pragmatic, analytical approach for practical engineering solutions. Proficient in project management and leadership, I prioritize positive working relationships, ensuring successful outcomes with resilience and confidence in the dynamic engineering landscape.
        </p>
        <button className="contact-button">Contact me</button>
      </div>
      <div className="about-image">
        <img src="D:\Reactprojects\my-portfolio\src\Assets\Untitled design (25).png" alt="Profile" /> {/* Replace with your image path */}
      </div>
    </section>
  );
}

export default About;
