import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import React from "react";
const me = require('../../assets/me-about.jpg');

interface Props {}

const About: React.FC<Props> = () => {
return (
<section id="about">
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className="container about__container">
<div className="about__me">
<div className="about__me-image">
<img src={me} alt="" />
</div>
</div>
<div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className="about__icon" />
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>
        <article className="about__card">
          <FiUsers className="about__icon" />
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>
        <article className="about__card">
          <VscFolderLibrary className="about__icon" />
          <h5>Projects</h5>
          <small>20+ Completed</small>
        </article>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        laudantium dolore, ea possimus nam odit autem nesciunt! Dicta
        repudiandae illum veniam molestiae rem rerum ut placeat commodi,
        quisquam odio culpa?
      </p>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  </div>
</section>
);
};

export default About;