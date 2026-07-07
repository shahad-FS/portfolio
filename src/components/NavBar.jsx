import React from "react";
import { navLinks } from "@/constants";
import { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Shahad Alsaneea
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/shahad-FS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
              >
                <SiGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shahad-alsaneea-58a886346"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group ">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
}
