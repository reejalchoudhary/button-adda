import { useState } from "react";
import "./PlasmaButton.css";

const PlasmaButton = ({
  children = "PLASMA",

  width = 220,
  height = 60,

  color = "#00e5ff",
  secondaryColor = "#7c3aed",
  textColor = "#ffffff",
  backgroundColor = "#060914",

  radius = 14,
  borderWidth = 1,
  borderOpacity = 0.3,
  hoverBorderOpacity = 0.8,

  intensity = 1,

  showPlasma = true,
  arcWidth = 2,
  arcBlur = 1,
  arcGlow = 5,
  arcOpacity = 0.15,
  activeArcOpacity = 0.9,

  arcOneDuration = 2.2,
  arcTwoDuration = 1.8,
  arcThreeDuration = 2.7,
  arcFourDuration = 2,
  arcFiveDuration = 3.2,

  showNodes = true,
  nodeSize = 5,
  nodeOpacity = 0.6,
  nodePulseDuration = 1.5,
  activeNodeDuration = 0.7,
  nodeBlur = 0.5,
  nodeGlow = 6,

  showCore = true,
  coreOpacity = 0.6,
  corePulseDuration = 2,
  activeCoreDuration = 0.8,
  coreSize = 65,

  showStatus = true,
  statusText = "",
  statusColor = textColor,
  statusFontSize = 6,
  statusOpacity = 0.4,
  statusLetterSpacing = "0.2em",

  fontSize = 16,
  fontWeight = 700,
  letterSpacing = "0.15em",

  hoverLift = 4,
  activeScale = 0.97,
  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`plasma-button ${
        active ? "plasma-active" : ""
      } ${className}`}
      style={{

        "--plasma-width": `${width}px`,
        "--plasma-height": `${height}px`,

        "--plasma-primary": color,
        "--plasma-secondary": secondaryColor,
        "--plasma-text": textColor,
        "--plasma-background": backgroundColor,

        "--plasma-radius": `${radius}px`,
        "--plasma-border-width":
          `${borderWidth}px`,
        "--plasma-border-opacity":
          borderOpacity,
        "--plasma-hover-border-opacity":
          hoverBorderOpacity,

        "--plasma-intensity": intensity,

        "--plasma-arc-width":
          `${arcWidth}px`,
        "--plasma-arc-blur":
          `${arcBlur}px`,
        "--plasma-arc-glow":
          `${arcGlow}px`,
        "--plasma-arc-opacity":
          arcOpacity,
        "--plasma-active-arc-opacity":
          activeArcOpacity,

        "--plasma-arc-one-duration":
          `${arcOneDuration}s`,
        "--plasma-arc-two-duration":
          `${arcTwoDuration}s`,
        "--plasma-arc-three-duration":
          `${arcThreeDuration}s`,
        "--plasma-arc-four-duration":
          `${arcFourDuration}s`,
        "--plasma-arc-five-duration":
          `${arcFiveDuration}s`,

        "--plasma-node-size":
          `${nodeSize}px`,
        "--plasma-node-opacity":
          nodeOpacity,
        "--plasma-node-duration":
          `${nodePulseDuration}s`,
        "--plasma-active-node-duration":
          `${activeNodeDuration}s`,
        "--plasma-node-blur":
          `${nodeBlur}px`,
        "--plasma-node-glow":
          `${nodeGlow}px`,

        "--plasma-core-opacity":
          coreOpacity,
        "--plasma-core-duration":
          `${corePulseDuration}s`,
        "--plasma-active-core-duration":
          `${activeCoreDuration}s`,
        "--plasma-core-size":
          `${coreSize}%`,

        "--plasma-status-color":
          statusColor,
        "--plasma-status-size":
          `${statusFontSize}px`,
        "--plasma-status-opacity":
          statusOpacity,
        "--plasma-status-spacing":
          statusLetterSpacing,

        "--plasma-font-size":
          `${fontSize}px`,
        "--plasma-font-weight":
          fontWeight,
        "--plasma-letter-spacing":
          letterSpacing,

        "--plasma-hover-lift":
          `${hoverLift}px`,
        "--plasma-active-scale":
          activeScale,
        "--plasma-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      {showPlasma && (
        <span className="plasma-field">
          <span className="plasma-arc plasma-arc-1" />
          <span className="plasma-arc plasma-arc-2" />
          <span className="plasma-arc plasma-arc-3" />
          <span className="plasma-arc plasma-arc-4" />
          <span className="plasma-arc plasma-arc-5" />
        </span>
      )}

      {showNodes && (
        <>
          <span
            className="plasma-node plasma-node-1"
            style={{
              backgroundColor: color,
            }}
          />

          <span
            className="plasma-node plasma-node-2"
            style={{
              backgroundColor: secondaryColor,
            }}
          />

          <span
            className="plasma-node plasma-node-3"
            style={{
              backgroundColor: color,
            }}
          />

          <span
            className="plasma-node plasma-node-4"
            style={{
              backgroundColor: secondaryColor,
            }}
          />
        </>
      )}

      {showCore && (
        <>
          <span className="plasma-core" />

          <span className="plasma-core-border" />
        </>
      )}

      <span className="plasma-content">
        {children}
      </span>

      {showStatus && (
        <span className="plasma-status">
          {statusText}
        </span>
      )}
    </button>
  );
};

export default PlasmaButton;