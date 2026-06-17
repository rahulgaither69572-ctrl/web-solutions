import React from "react";

import profile from "./profile.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Web Solutions</h2>

        <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#services">Services</a>
  <a href="#projects">Projects</a>
  <a href="#reviews">Reviews</a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      {/* HERO */}
<section id="home" className="hero">

  <img
    src={profile}
    alt="Rahul Kumar"
    className="profile-img"
  />

  <h1>Rahul Kumar</h1>

  <h3>Full Stack Web Developer 🚀</h3>

  <p className="hero-tagline">
    Turning Ideas Into Powerful Digital Solutions
  </p>

  <p>
    I build modern, responsive and scalable websites
    for businesses, startups, gyms, salons, cafes and
    personal brands.
  </p>

  <div className="hero-stats">

    <div className="stat-box">
      <h2>10+</h2>
      <span>Projects</span>
    </div>

    <div className="stat-box">
      <h2>100%</h2>
      <span>Responsive</span>
    </div>

    <div className="stat-box">
      <h2>24/7</h2>
      <span>Support</span>
    </div>

  </div>

  <a
    href="https://wa.me/919996860411?text=Hi Rahul, I am interested in getting a website for my business."
    className="btn"
  >
    Hire Me
  </a>

</section>

      {/* ABOUT */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p className="about-text">
          I am a passionate Frontend React Developer who
          specializes in building modern websites for
          businesses, gyms, salons, cafes and personal brands.
          My goal is to help clients establish a strong
          online presence with fast, responsive and attractive websites.
        </p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <h2>Technical Skills</h2>

        <div className="cards">

          <div className="card">
            <h3>HTML5</h3>
            <p>Semantic & SEO Friendly Structure</p>
          </div>

          <div className="card">
            <h3>CSS3</h3>
            <p>Modern Responsive UI Design</p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>Interactive User Experience</p>
          </div>

          <div className="card">
            <h3>React JS</h3>
            <p>Fast & Dynamic Web Applications</p>
          </div>

          <div className="card">
            <h3>GitHub</h3>
            <p>Version Control & Deployment</p>
          </div>

          <div className="card">
            <h3>Vercel</h3>
            <p>Website Hosting & Deployment</p>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section">

        <h2>Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Business Websites</h3>
            <p>
              Professional websites for companies,
              startups and local businesses.
            </p>
          </div>

          <div className="card">
            <h3>Portfolio Websites</h3>
            <p>
              Personal portfolio websites for
              freelancers and professionals.
            </p>
          </div>

          <div className="card">
            <h3>E-Commerce Websites</h3>
            <p>
              Online store and product showcase websites.
            </p>
          </div>

          <div className="card">
            <h3>Gym & Fitness Websites</h3>
            <p>
              Modern websites for gyms and fitness trainers.
            </p>
          </div>

          <div className="card">
            <h3>Salon Websites</h3>
            <p>
              Premium websites for salons and barbers.
            </p>
          </div>

          <div className="card">
            <h3>Restaurant & Cafe Websites</h3>
            <p>
              Beautiful websites for cafes and restaurants.
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <h2>My Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <img src={project1} alt="Skill Solutions" />
            <h3>Skill Solutions</h3>
          </div>

          <div className="project-card">
            <img src={project2} alt="Gym Website" />
            <h3>Gym Website</h3>
          </div>

          <div className="project-card">
            <img src={project3} alt="Developers Site" />
            <h3>Developers Site</h3>
          </div>

        </div>

      </section>

{/* REVIEWS */}
<section id="reviews" className="section">

  <h2>Client Reviews</h2>

  <div className="cards">

    <div className="card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Rahul delivered an amazing website with a modern
        design and excellent performance. Highly recommended.
      </p>
    </div>

    <div className="card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Professional work, timely delivery and great
        communication throughout the project.
      </p>
    </div>

    <div className="card">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Our business website looks fantastic and works
        perfectly on all devices.
      </p>
    </div>

  </div>

</section>


      
<footer className="footer">

  <div className="footer-container">

    <div className="footer-col">
      <h2>Web Solutions</h2>
      <p>
        Professional Website Development,
        Landing Pages, Business Websites
        and Modern Web Solutions.
      </p>
    </div>

    <div className="footer-col">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
    </div>

    <div className="footer-col">
      <h3>Services</h3>
      <a href="#services">Business Website</a>
      <a href="#services">Portfolio Website</a>
      <a href="#services">Landing Page</a>
      <a href="#services">Website Redesign</a>
    </div>

    <div className="footer-col">
      <h3>Contact</h3>
      <p>📍 Hisar, Haryana</p>
      <p>📞 +91 9996860411</p>
      <p>📧rahulgaither69572@gmail.com</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Web Solutions. All Rights Reserved.
  </div>

</footer>

    </div>
  );
}

export default App;