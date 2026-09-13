import { useRef, useState } from "react";
import "./MagneticButton.css";

const MagneticButton = ({
  children = "Magnetic Button",

  width = 180,
  height = 52,

  color = "#8b5cf6",
  textColor = "#ffffff",

  radius = 12,

  strength = 0.35,
  maxMove = 0,
  magneticEase = 300,

  shadowX = 0,
  shadowY = 10,
  shadowBlur = 35,
  shadowOpacity = 0.33,

  showGlow = true,
  glowOpacity = 0.1,
  glowHoverOpacity = 1,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 0,
  activeScale = 0.95,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    if (disabled || !buttonRef.current) return;

    const rect =
      buttonRef.current.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let x =
      (mouseX - centerX) * strength;

    let y =
      (mouseY - centerY) * strength;

    if (maxMove > 0) {
      x = Math.max(
        -maxMove,
        Math.min(maxMove, x)
      );

      y = Math.max(
        -maxMove,
        Math.min(maxMove, y)
      );
    }

    setPosition({
      x,
      y,
    });
  };

  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`magnetic-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        borderRadius: `${radius}px`,

        color: textColor,
        backgroundColor: color,

        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        "--magnetic-color": color,
        "--magnetic-text-color": textColor,

        "--magnetic-radius": `${radius}px`,

        "--magnetic-shadow-x": `${shadowX}px`,
        "--magnetic-shadow-y": `${shadowY}px`,
        "--magnetic-shadow-blur": `${shadowBlur}px`,
        "--magnetic-shadow-opacity":
          shadowOpacity,

        "--magnetic-glow-opacity":
          showGlow ? glowOpacity : 0,

        "--magnetic-glow-hover-opacity":
          glowHoverOpacity,

        "--magnetic-hover-lift":
          `${hoverLift}px`,

        "--magnetic-active-scale":
          activeScale,

        "--magnetic-ease":
          `${magneticEase}ms`,

        transform: `
          translate(
            ${position.x}px,
            ${position.y - hoverLift}px
          )
        `,
      }}
      {...props}
    >

      {showGlow && (
        <span className="magnetic-glow" />
      )}

      <span className="magnetic-content">
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;