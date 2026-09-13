import { useState } from "react";
import "./SpotlightButton.css";

const SpotlightButton = ({
  children = "Spotlight Button",

  width = 180,
  height = 52,

  color = "#8b5cf6",
  textColor = "#ffffff",
  backgroundColor = "#0b1020",

  radius = 12,
  borderWidth = 1,
  borderColor,

  spotlightSize = 120,
  spotlightOpacity = 0.55,
  spotlightBlur = 32,

  centerSize = 0.45,
  centerColor = "#ffffff",
  centerOpacity = 0.12,
  centerBlur = 24,

  showBorderGlow = true,
  borderGlowSize = 20,
  borderGlowOpacity = 0.27,

  shadowX = 0,
  shadowY = 8,
  shadowBlur = 30,
  shadowOpacity = 0.13,

  hoverLift = 4,
  hoverBrightness = 1,
  hoverBorderOpacity = 0.5,

  activeScale = 0.95,
  activeTranslateY = 0,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovering, setIsHovering] = useState(false);

  const safeBorderColor =
    borderColor || `${color}66`;

  const handleMouseMove = (event) => {
    if (disabled) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  const handleMouseEnter = () => {
    if (disabled) return;

    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    setMousePosition({
      x: 50,
      y: 50,
    });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`spotlight-button ${className}`}
      style={{
        "--spotlight-width": `${width}px`,
        "--spotlight-height": `${height}px`,

        "--spotlight-color": color,
        "--spotlight-text-color": textColor,
        "--spotlight-background": backgroundColor,

        "--spotlight-radius": `${radius}px`,
        "--spotlight-border-width": `${borderWidth}px`,
        "--spotlight-border-color": safeBorderColor,

        "--spotlight-size": `${spotlightSize}px`,
        "--spotlight-opacity": spotlightOpacity,
        "--spotlight-blur": `${spotlightBlur}px`,

        "--spotlight-center-size":
          `${spotlightSize * centerSize}px`,
        "--spotlight-center-color": centerColor,
        "--spotlight-center-opacity": centerOpacity,
        "--spotlight-center-blur":
          `${centerBlur}px`,

        "--spotlight-border-glow-size":
          `${borderGlowSize}px`,
        "--spotlight-border-glow-opacity":
          borderGlowOpacity,

        "--spotlight-shadow-x":
          `${shadowX}px`,
        "--spotlight-shadow-y":
          `${shadowY}px`,
        "--spotlight-shadow-blur":
          `${shadowBlur}px`,
        "--spotlight-shadow-opacity":
          shadowOpacity,

        "--spotlight-hover-lift":
          `${hoverLift}px`,
        "--spotlight-hover-brightness":
          hoverBrightness,
        "--spotlight-hover-border-opacity":
          hoverBorderOpacity,

        "--spotlight-active-scale":
          activeScale,
        "--spotlight-active-y":
          `${activeTranslateY}px`,

        "--spotlight-font-size":
          `${fontSize}px`,
        "--spotlight-font-weight":
          fontWeight,
        "--spotlight-letter-spacing":
          letterSpacing,

        "--spotlight-transition":
          `${transitionDuration}ms`,

        "--spotlight-x":
          `${mousePosition.x}%`,
        "--spotlight-y":
          `${mousePosition.y}%`,
      }}
      {...props}
    >

      <span
        className={`spotlight-light ${
          isHovering
            ? "spotlight-light-visible"
            : ""
        }`}
      />

      <span
        className={`spotlight-center ${
          isHovering
            ? "spotlight-center-visible"
            : ""
        }`}
      />

      {showBorderGlow && (
        <span
          className={`spotlight-border-glow ${
            isHovering
              ? "spotlight-border-glow-visible"
              : ""
          }`}
        />
      )}

      <span className="spotlight-content">
        {children}
      </span>
    </button>
  );
};

export default SpotlightButton;