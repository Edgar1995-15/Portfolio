import React from "react";
const cv = require("../../assets/my-cv.pdf");

interface Props {}

const CTA: React.FC<Props> = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
