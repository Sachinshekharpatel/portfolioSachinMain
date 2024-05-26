import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../portfolio";
import "./about.css";
import portfolioPngImg from "./portfolio.png";

const About = () => {
  const { name, role, resume, social } = about;

  return (
    <div className="about">
      <div className="about__details">
        {name && (
          <h1>
            <span className="animate-text" style={{ animationDelay: "0.2s" }}>
              Hi,
            </span>{" "}
            <span className="animate-text" style={{ animationDelay: "0.4s" }}>
              I am
            </span>{" "}
            <span className="animate-text" style={{ animationDelay: "0.6s" }}>
              a ,
            </span>{" "}
            <span
              className="about__name animate-text"
              style={{ animationDelay: "0.8s" }}
            >
              {name}.
            </span>
          </h1>
        )}

        {role && <h2 className="about__role">A {role}.</h2>}
        <div className="about-section">
          <p className="section-description">
            Passionate <span className="highlight">frontend React developer</span>{" "}
            with a keen eye for detail and a love for creating{" "}
            <span className="highlight">beautiful user interfaces</span>.
          </p>
        </div>
        <div className="about__contact center">
          {resume && (
            <a href={resume}>
              <span type="button" className="btn btn--outline">
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="about__image">
        <img src={portfolioPngImg} alt="Portfolio" />
      </div>
    </div>
  );
};

export default About;
