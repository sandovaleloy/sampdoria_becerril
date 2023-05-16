import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="container_footer">
      <section className="container_footer-section">
        <a className="container_footer-a1"
          href="https://www.facebook.com/profile.php?id=100089906415781"
          target="_blank"
        >
          <i className='bx bxl-facebook-square'></i>
        </a>
        <a className="container_footer-a2"
          href="https://www.instagram.com/clubsampdoria1/?fbclid=IwAR1K83d5MRKfITCYQzaj_2KA_-2HVFdSj8moGCXzJPIG21-HBswIj9rHOSM"
          target="_blank"
        >
          <i className='bx bxl-instagram'></i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
