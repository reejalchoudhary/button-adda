import { useState } from "react";
import "./HologramButton.css";

const HologramButton = ({
  children = "HOLOGRAM",

  width = 220,
  height = 60,

  color = "#22d3ee",
  secondaryColor = "#a855f7",
  textColor = "#ffffff",

  radius = 8,
  borderWidth = 1,

  fontSize = 16,
  fontWeight = 700,
  letterSpacing = "0.18em",

  intensity = 1,
  projectionOpacity = 0.12,
  rgbOpacity = 0.5,
  scanlineOpacity = 0.08,
  glitchOpacity = 0.5,

  projectionDuration = 2500,
  rgbDuration = 1800,
  scanlineDuration = 1500,
  bandOneDuration = 2100,
  bandTwoDuration = 1700,
  bandThreeDuration = 2800,
  textDuration = 2800,

  showProjection = true,
  showRGB = true,
  showScanlines = true,
  showGlitchBands = true,
  showFrame = true,
  showCorners = true,
  showStatus = true,

  statusText = "",
  statusOpacity = 0.5,
  statusFontSize = 6,

  hoverLift = 3,
  activeScale = 0.97,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`hologram-button ${
        hovered ? "hologram-active" : ""
      } ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        borderWidth: `${borderWidth}px`,
        color: textColor,
        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        "--holo-primary": color,
        "--holo-secondary": secondaryColor,
        "--holo-intensity": intensity,

        "--holo-projection-opacity": projectionOpacity,
        "--holo-rgb-opacity": rgbOpacity,
        "--holo-scanline-opacity": scanlineOpacity,
        "--holo-glitch-opacity": glitchOpacity,

        "--holo-projection-duration": `${projectionDuration}ms`,
        "--holo-rgb-duration": `${rgbDuration}ms`,
        "--holo-scanline-duration": `${scanlineDuration}ms`,
        "--holo-band-one-duration": `${bandOneDuration}ms`,
        "--holo-band-two-duration": `${bandTwoDuration}ms`,
        "--holo-band-three-duration": `${bandThreeDuration}ms`,
        "--holo-text-duration": `${textDuration}ms`,

        "--holo-hover-lift": `${hoverLift}px`,
        "--holo-active-scale": activeScale,

        "--holo-status-opacity": statusOpacity,
        "--holo-status-size": `${statusFontSize}px`,
      }}
      {...props}
    >

      {showProjection && (
        <span className="hologram-projection" />
      )}

      {showRGB && (
        <span className="hologram-rgb" />
      )}

      {showScanlines && (
        <span className="hologram-scanlines" />
      )}

      {showGlitchBands && (
        <span className="hologram-bands">
          <span className="holo-band holo-band-one" />
          <span className="holo-band holo-band-two" />
          <span className="holo-band holo-band-three" />
        </span>
      )}

      {showFrame && (
        <span className="hologram-frame" />
      )}

      {showCorners && (
        <>
          <span className="hologram-corner hologram-corner-tl" />
          <span className="hologram-corner hologram-corner-tr" />
          <span className="hologram-corner hologram-corner-bl" />
          <span className="hologram-corner hologram-corner-br" />
        </>
      )}

      <span
        className="hologram-content"
        data-text={children}
      >
        {children}
      </span>

      {showStatus && (
        <span className="hologram-status">
          <span
            className="hologram-status-dot"
            style={{
              backgroundColor: color,
            }}
          />

          {statusText}
        </span>
      )}
    </button>
  );
};

export default HologramButton;