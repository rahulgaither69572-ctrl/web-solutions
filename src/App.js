import React, { useState } from "react";

import profile from "./profile.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">

      {/* NAVBAR */}
<nav className="navbar">

  <h2 className="logo">Web Solutions</h2>

  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>

  <div className={menuOpen ? "nav-links active" : "nav-links"}>

    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

  </div>

</nav>
      

      {/* HERO */}
<section id="home" className="hero">

  <img
    src={profile}
    alt="Rahul Kumar"
    className="profile-img"
  />

  <h1 data-aos="fade-up">Rahul Kumar</h1>

  <h3 data-aos="fade-up" data-aos-delay="200">
  Full Stack Web Developer 🚀
</h3>

  <p className="hero-tagline" data-aos="fade-up" data-aos-delay="400">
    Turning Ideas Into Powerful Digital Solutions
  </p>

  <p>
    I build modern, responsive and scalable websites
    for businesses, startups, gyms, salons, cafes and
    personal brands.
  </p>

  <div className="hero-stats" data-aos="zoom-in" data-aos-delay="600">

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
  data-aos="fade-up"
  data-aos-delay="800"
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

          <div className="card" data-aos="zoom-in">
            <h3>HTML5</h3>
            <p>Semantic & SEO Friendly Structure</p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>CSS3</h3>
            <p>Modern Responsive UI Design</p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>JavaScript</h3>
            <p>Interactive User Experience</p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>React JS</h3>
            <p>Fast & Dynamic Web Applications</p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>GitHub</h3>
            <p>Version Control & Deployment</p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>Vercel</h3>
            <p>Website Hosting & Deployment</p>
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section">

        <h2>Services</h2>

        <div className="cards">

          <div className="card" data-aos="zoom-in">
            <h3>Business Websites</h3>
            <p>
              Professional websites for companies,
              startups and local businesses.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>Portfolio Websites</h3>
            <p>
              Personal portfolio websites for
              freelancers and professionals.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>E-Commerce Websites</h3>
            <p>
              Online store and product showcase websites.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>Gym & Fitness Websites</h3>
            <p>
              Modern websites for gyms and fitness trainers.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
            <h3>Salon Websites</h3>
            <p>
              Premium websites for salons and barbers.
            </p>
          </div>

          <div className="card" data-aos="zoom-in">
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

          <div className="project-card" data-aos="fade-up">
            <img src={project1} alt="Skill Solutions" />
            <h3>Skill Solutions</h3>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={project2} alt="Gym Website" />
            <h3>Gym Website</h3>
          </div>

          <div className="project-card" data-aos="fade-up">
            <img src={project3} alt="Developers Site" />
            <h3>Developers Site</h3>
          </div>

        </div>

      </section>

{/* REVIEWS */}
<section id="reviews" className="section">

  <h2>Client Reviews</h2>

  <div className="cards">

    <div className="card" data-aos="zoom-in">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Rahul delivered an amazing website with a modern
        design and excellent performance. Highly recommended.
      </p>
      <h4 className="review-name">- Amit Kumar</h4>
    </div>

    <div className="card" data-aos="zoom-in">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Professional work, timely delivery and great
        communication throughout the project.
      </p>
      <h4 className="review-name">- Shubham Sharma</h4>
    </div>

    <div className="card" data-aos="zoom-in">
      <h3>⭐⭐⭐⭐⭐</h3>
      <p>
        Our business website looks fantastic and works
        perfectly on all devices.
      </p>
      <h4 className="review-name">- Harsh</h4>
    </div>

  </div>

</section>

{/* CONTACT */}
<section id="contact" className="section">

  <h2>Contact Me</h2>

  <div className="cards">

    <div className="card" data-aos="zoom-in">
      <h3>📍 Location</h3>
      <p>
  <a
    href="https://maps.app.goo.gl/6N7FMUJowvifGgC27"
    target="_blank"
    rel="noopener noreferrer"
    className="location-link"
  >
    Hisar, Haryana
  </a>
</p>
    </div>

    <div className="card" data-aos="zoom-in">
      <h3>📞 Phone</h3>
      <p>
  <a href="tel:+919996860411" className="phone-link">
    +91 9996860411
  </a>
</p>
    </div>

    <div className="card" data-aos="zoom-in">
      <h3>📧 Email</h3>
      <p>
  <a
    href="mailto:rahulgaither69572@gmail.com?subject=Website%20Inquiry&body=Hi%20Rahul,%0A%0AI%20visited%20your%20portfolio%20and%20I%20want%20a%20website.%0A%0AMy%20business%20details%20are:"
    className="email-link"
  >
    rahulgaither69572@gmail.com
  </a>
</p>
    </div>

  </div>
  
  <div className="contact-btn">
  <a
    href="https://wa.me/919996860411?text=Hi Rahul, I want a website."
    className="btn"
  >
    Chat on WhatsApp
  </a>
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
      <p>
  <a
    href="https://maps.app.goo.gl/6N7FMUJowvifGgC27"
    target="_blank"
    rel="noopener noreferrer"
    className="location-link"
  >
    Hisar, Haryana
  </a>
</p>
      <p>
  📞{" "}
  <a href="tel:+919996860411" className="phone-link">
    +91 9996860411
  </a>
</p>
      <p>
  <a
    href="mailto:rahulgaither69572@gmail.com?subject=Website%20Inquiry&body=Hi%20Rahul,%0A%0AI%20visited%20your%20portfolio%20and%20I%20want%20a%20website.%0A%0AMy%20business%20details%20are:"
    className="email-link"
  >
    📧 rahulgaither69572@gmail.com
  </a>
</p>
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