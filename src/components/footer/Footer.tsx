import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/edgar-khojayan-8433631b1/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Edgar1995-15">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
