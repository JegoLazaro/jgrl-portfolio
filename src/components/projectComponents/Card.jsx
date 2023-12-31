import React, { useState } from "react";
import PropTypes from "prop-types";
import assets from "../../assets";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Card = ({
  title,
  imageSrc,
  demoLink,
  sourceCodeLink,
  cardClassName,
  IosQR,
  AndroidQR,
  projectOV
}) => {
  const [hover, setHover] = useState(false);
  const [hoverSource, setHoverSource] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);

  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  const [hoverIOS, setHoverIOS] = useState(false);
  const [hoverAndroid, setHoverAndroid] = useState(false);

  const handleIOSClick = () => {
    setShowIOSModal(true);
  };

  const handleIOSModal = () => {
    setShowIOSModal(false);
  };
  const handleAndroidClick = () => {
    setShowAndroidModal(true);
  };

  const handleAndroidModal = () => {
    setShowAndroidModal(false);
  };

  return (
    <div
      className={` ${cardClassName} max-w-md transition-transform transform ${
        hoverCard ? "scale-105" : ""
      } rounded overflow-hidden shadow-lg m-8 flex flex-col justify-between `}
      onMouseEnter={() => setHoverCard(true)}
      onMouseLeave={() => setHoverCard(false)}
    >
      <img
        className={`w-full h-auto `}
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-center">{title}</div>
        <p className=" text-justify leading-6 tracking-tighter ">
          {projectOV}
        </p>
      </div>
      <div className="">
        {cardClassName !== "max-w-xs" && (
          
          <div className="px-6 pb-4 flex flex-wrap items-center">
           
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className=" cursor-pointer font-bold py-2 px-4 rounded mr-2 flex-grow text-center"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                backgroundColor: hover ? "#6E7578" : "#0071A1",
                color: hover ? "#fff" : "#fff",
              }}>
              
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
        )}
        {cardClassName === "max-w-xs" && (
          <div className="px-6 pb-4 flex flex-wrap items-center">
            <a
              className="font-bold cursor-pointer py-2 m-1 px-4 rounded flex-grow text-center"
              onClick={handleIOSClick}
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
              className="font-bold cursor-pointer py-2 m-1 px-4 rounded flex-grow text-center"
              onMouseEnter={() => setHoverAndroid(true)}
              onMouseLeave={() => setHoverAndroid(false)}
              onClick={handleAndroidClick}
              style={{
                backgroundColor: hoverAndroid ? "#6E7578" : "#0071A1",
                color: hoverAndroid ? "#fff" : "#fff",
              }}
            >
              Android QR
            </a>
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
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
          </div>
        )}
      </div>

      {showIOSModal && cardClassName === "max-w-xs" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <img src={IosQR} alt="IOS QR Code" />
            <button
              className="text-blue-500 hover:underline mt-4"
              onClick={handleIOSModal}
            >
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
      {showAndroidModal && cardClassName === "max-w-xs" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <img src={AndroidQR} alt="Android QR Code" />
            <button
              className="text-blue-500 hover:underline mt-4"
              onClick={handleAndroidModal}
            >
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
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
