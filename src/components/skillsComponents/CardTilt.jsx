import { useRef, useState } from "react";

export const CardTilt = ({ children, className, shadow_Color }) => {
  const [tilt, setTilt] = useState("");
  const [hover, setHover] = useState(false);
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;

    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeX - .3) * 50;
    const tiltY = (relativeY - .3) * -50;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;

    setTilt(newTransform);
  };

  const handleMouseLeave = () => {
    setTilt("");
    setHover(false);
  };

  return (
    <div
      className={className}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHover(true)}
      style={{
        transform: tilt,
        boxShadow: hover
          ? `1px 3px 20px 4px ${shadow_Color}`
          : "0.5px 1px 2px #000",
          color: hover
            ?  `${shadow_Color}`
            :  "#000",
          textShadow: !hover? "none" :"1px 0px 0.5px 0px #000"
      }}
    >
      {children}
    </div>
  );
};
