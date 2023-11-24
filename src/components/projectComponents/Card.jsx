import React, { useState } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, imageSrc, demoLink, sourceCodeLink }) => {
  const [hover, setHover] = useState(false);

  const [hoverSource, setHoverSource] = useState(false);

  const [hoverCard, setHoverCard] = useState(false);

  return (
    <div
      className={`max-w-md rounded overflow-hidden shadow-lg m-4 flex flex-col justify-between transition-transform transform ${
        hoverCard ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <img className="w-full h-auto" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
      </div>
      <div className="px-6 pb-4 flex items-center">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold py-2 px-4 rounded mr-2 flex-grow text-center"
          onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#6E7578" : "#0071A1",
            color: hover ? "#fff" : "#fff",
          }}
        >
          Demo
        </a>
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold py-2 px-4 rounded flex-grow text-center"
          onMouseEnter={() => setHoverSource(true)}
      onMouseLeave={() => setHoverSource(false)}
          style={{
            backgroundColor: hoverSource ? "#6E7578" : "#0071A1",
            color: hoverSource ? "#fff" : "#fff",
          }}
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
};

export default ProjectCard;
