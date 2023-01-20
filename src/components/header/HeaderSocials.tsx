import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeaderSocials: React.FC = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/edgar-khojayan-8433631b1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Edgar1995-15"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
