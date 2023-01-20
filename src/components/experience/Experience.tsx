import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import React from "react";

interface Props {}

interface Skill {
  name: string;
  level: string;
}

const Experience: React.FC<Props> = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React JS", level: "Experienced" },
    { name: "Vue JS", level: "Experienced" },
    { name: "TypeScript", level: "Experienced" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node JS", level: "Intermediate" },
    { name: "MongoDB", level: "Experienced" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Rest API", level: "Experienced" },
    { name: "GraphQL", level: "Intermediate" },
  ];

  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill) => (
              <article className="experience__details" key={skill.name}>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>{skill.name}</h4>
                <small className="text-light">{skill.level}</small>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill) => (
              <article className="experience__details" key={skill.name}>
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>{skill.name}</h4>
                <small className="text-light">{skill.level}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
