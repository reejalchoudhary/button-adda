import { useState } from "react";
import "./GhostButton.css";

const GhostButton = ({
  children = "Ghost Button",

  width = 180,
  height = 52,

  color = "#ffffff",
  textColor = "#ffffff",

  radius = 10,

  fillOpacity = 0.12,
  borderOpacity = 0.3,

  ghost = "👻",
  ghostSize = 28,
  ghostSpeed = 420,
  ghostOpacity = 1,
  ghostDirection = "left-to-right",

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const [ghostKey, setGhostKey] = useState(0);
  const [showGhost, setShowGhost] = useState(false);

  const handleClick = (event) => {
    if (disabled) return;

    setGhostKey((prev) => prev + 1);
    setShowGhost(true);

    onClick?.(event);

    setTimeout(() => {
      setShowGhost(false);
    }, ghostSpeed);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`ghost-button ${className}`}
      style={{
        width: `${width}px`,
        minHeight: `${height}px`,
        borderRadius: `${radius}px`,

        color: textColor,
        borderColor: `rgba(255,255,255,${borderOpacity})`,

        "--ghost-color": color,
        "--ghost-fill": fillOpacity,

        "--ghost-size": `${ghostSize}px`,
        "--ghost-speed": `${ghostSpeed}ms`,
        "--ghost-opacity": ghostOpacity,
      }}
      {...props}
    >

      <span className="ghost-button__fill" />

      <span className="ghost-button__glow" />

      <span className="ghost-button__shine" />

      {showGhost && (
        <span
          key={ghostKey}
          className={`ghost-button__flying-ghost ${
            ghostDirection === "right-to-left"
              ? "ghost-button__flying-ghost--reverse"
              : ""
          }`}
        >
          {ghost}
        </span>
      )}

      <span className="ghost-button__content">
        {children}
      </span>
    </button>
  );
};

export default GhostButton;