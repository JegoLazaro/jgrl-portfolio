import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  imageSrc,
  demoLink,
  sourceCodeLink,
  cardClassName,
}) => {
  const [hover, setHover] = useState(false);
  const [hoverSource, setHoverSource] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);

  const [hoverIOS, setHoverIOS] = useState(false);
  const [hoverAndroid, setHoverAndroid] = useState(false);


  return (
    <div
      className={` ${cardClassName} max-w-md rounded overflow-hidden shadow-lg m-8 flex flex-col justify-between transition-transform transform ${
        hoverCard ? "scale-105" : ""
      }`}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <img className="w-full h-auto" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-center">{title}</div>
      </div>
      <div className="px-6 pb-4 flex flex-wrap items-center">
        {cardClassName !== "max-w-xs" && (
          <>
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
          </>
        )}
        {cardClassName === "max-w-xs" && (
          <>
            <a
              href="#ios_qr_button_link"
              className="font-bold py-2 m-1 px-4 rounded flex-grow text-center"
              onMouseEnter={() => setHoverIOS(true)}
              onMouseLeave={() => setHoverIOS(false)}
              style={{
                backgroundColor: hoverIOS ? "#6E7578" : "#0071A1",
                color: hoverIOS ? "#fff" : "#fff",
              }}
            >
              IOS QR
            </a>
            <a
              href="#android_qr_button_link"
              className="font-bold py-2 m-1 px-4 rounded flex-grow text-center"
              onMouseEnter={() => setHoverAndroid(true)}
              onMouseLeave={() => setHoverAndroid(false)}
              style={{
                backgroundColor: hoverAndroid ? "#6E7578" : "#0071A1",
                color: hoverAndroid ? "#fff" : "#fff",
              }}
            >
              Android QR
            </a>
            <a
              href="#your_third_button_link"
              className="font-bold py-2 m-1 px-4 rounded flex-grow text-center"
              onMouseEnter={() => setHoverSource(true)}
              onMouseLeave={() => setHoverSource(false)}
              style={{
                backgroundColor: hoverSource ? "#6E7578" : "#0071A1",
                color: hoverSource ? "#fff" : "#fff",
              }}
            >
              Source Code
            </a>
          </>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  sourceCodeLink: PropTypes.string.isRequired,
  cardClassName: PropTypes.string.isRequired,
};

export default Card;
