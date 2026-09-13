import { useEffect, useState } from "react";
import "./InkButton.css";

export default function InkButton({
  children = "Create",

  width = 260,
  height = 78,

  inkColor = "#0b0b0b",
  paperColor = "#f4f9faf4",
  textColor = "#9308f0",

  radius = 18,

  fontSize = 19,
  fontWeight = 700,
  letterSpacing = ".02em",
  fontFamily = 'Georgia, "Times New Roman", serif',

  paperShadowOpacity = 0.18,
  paperHighlightOpacity = 0.7,
  textureOpacity = 0.22,
  textureSize = 5,

  blobSize = 75,
  blobLeft = 12,
  blobTransition = 700,
  blobColor = inkColor,

  blobOneSize = 48,
  blobTwoSize = 25,
  blobThreeSize = 18,

  blobOneDuration = 2500,
  blobTwoDuration = 1800,
  blobThreeDuration = 2100,

  hoverBlobLeft = 42,
  hoverBlobSpeed = 800,
  hoverTextScale = 1.04,
  hoverLetterSpacing = ".08em",

  showStrokes = true,
  strokeOpacity = 0.7,
  strokeOneWidth = 65,
  strokeTwoWidth = 38,
  strokeThreeWidth = 25,

  strokeOneDuration = 3000,
  strokeTwoDuration = 3500,

  showDroplets = true,
  dropletOpacity = 0.45,
  dropletSize = 4,
  dropletSpeed = 1,

  showBrush = true,
  brush = "✦",
  brushColor = inkColor,
  brushOpacity = 0.4,
  brushSize = 10,

  showSplash = true,
  splashSize = 7,
  splashDuration = 800,
  splashOpacity = 1,

  activeDuration = 1100,
  activeShakeDuration = 350,

  disabled = false,

  onClick,
  className = "",
  ...props
}) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!active) return;

    const timer = setTimeout(() => {
      setActive(false);
    }, activeDuration);

    return () => clearTimeout(timer);
  }, [active, activeDuration]);

  const handleClick = () => {
    if (disabled) return;

    setActive(true);
    onClick?.();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        ink-button
        ${hovered ? "ink-hovered" : ""}
        ${active ? "ink-active" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--ink-color": inkColor,
        "--ink-blob-color": blobColor,
        "--paper-color": paperColor,
        "--text-color": textColor,

        "--button-radius": `${radius}px`,

        "--ink-font-size": `${fontSize}px`,
        "--ink-font-weight": fontWeight,
        "--ink-letter-spacing": letterSpacing,
        "--ink-font-family": fontFamily,

        "--paper-shadow-opacity": paperShadowOpacity,
        "--paper-highlight-opacity": paperHighlightOpacity,
        "--paper-texture-opacity": textureOpacity,
        "--paper-texture-size": `${textureSize}px`,

        "--blob-size": `${blobSize}px`,
        "--blob-left": `${blobLeft}%`,
        "--blob-transition": `${blobTransition}ms`,

        "--blob-one-size": `${blobOneSize}px`,
        "--blob-two-size": `${blobTwoSize}px`,
        "--blob-three-size": `${blobThreeSize}px`,

        "--blob-one-duration": `${blobOneDuration}ms`,
        "--blob-two-duration": `${blobTwoDuration}ms`,
        "--blob-three-duration": `${blobThreeDuration}ms`,

        "--hover-blob-left": `${hoverBlobLeft}%`,
        "--hover-blob-speed": `${hoverBlobSpeed}ms`,
        "--hover-text-scale": hoverTextScale,
        "--hover-letter-spacing": hoverLetterSpacing,

        "--stroke-opacity": strokeOpacity,
        "--stroke-one-width": `${strokeOneWidth}px`,
        "--stroke-two-width": `${strokeTwoWidth}px`,
        "--stroke-three-width": `${strokeThreeWidth}px`,

        "--stroke-one-duration": `${strokeOneDuration}ms`,
        "--stroke-two-duration": `${strokeTwoDuration}ms`,

        "--droplet-opacity": dropletOpacity,
        "--droplet-size": `${dropletSize}px`,
        "--droplet-speed": dropletSpeed,

        "--brush-color": brushColor,
        "--brush-opacity": brushOpacity,
        "--brush-size": `${brushSize}px`,

        "--splash-size": `${splashSize}px`,
        "--splash-duration": `${splashDuration}ms`,
        "--splash-opacity": splashOpacity,

        "--active-shake-duration":
          `${activeShakeDuration}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      {...props}
    >

      <span className="ink-paper" />

      <span className="paper-noise" />

      <span className="ink-blob">
        <span />
        <span />
        <span />
      </span>

      {showStrokes && (
        <>
          <span className="ink-stroke stroke-one" />
          <span className="ink-stroke stroke-two" />
          <span className="ink-stroke stroke-three" />
        </>
      )}

      {showDroplets && (
        <span className="ink-droplets">
          <i className="drop-one" />
          <i className="drop-two" />
          <i className="drop-three" />
          <i className="drop-four" />
          <i className="drop-five" />
          <i className="drop-six" />
        </span>
      )}

      <span className="ink-label">
        {children}
      </span>

      {showSplash && (
        <span className="ink-splash">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      )}

      {showBrush && (
        <span className="ink-brush">
          {brush}
        </span>
      )}
    </button>
  );
}