import React from "react";
import PropTypes from "prop-types";
import assets from "../../assets";

const Card = ({ title, imageSrc, demoLink, sourceCodeLink }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-auto" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pb-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Demo
        </a>
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
};

export default Card;
