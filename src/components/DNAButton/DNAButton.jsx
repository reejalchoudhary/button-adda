import { useState } from "react";
import "./DNAButton.css";

const DNAButton = ({

  children = "Explore",
  icon = "◈",
  arrow = "→",

  width = 220,
  height = 62,

  color = "#818cf8",
  secondaryColor = "#c084fc",
  textColor = "#f8fafc",
  iconColor = "#a5b4fc",
  arrowColor = "#a5b4fc",
  backgroundColor = "#0f172a",
  backgroundColorEnd = "#111827",

  radius = 18,

  fontSize = 14,
  fontWeight = 800,
  letterSpacing = 0.03,

  contentGap = 9,
  contentPadding = 20,

  scanDuration = 2500,
  nodeDuration = 1800,
  connectorDuration = 1800,
  iconDuration = 4000,
  activeDuration = 850,
  hoverLift = 3,
  hoverScale = 1.015,

  showScan = true,
  showDNA = true,
  showConnectors = true,
  showBurst = true,

  onClick,

  disabled = false,
  className = "",
  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (disabled || active) return;

    setActive(true);

    onClick?.();

    setTimeout(() => {
      setActive(false);
    }, activeDuration);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`
        dna-button
        ${active ? "dna-active" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--dna-color": color,
        "--dna-secondary-color": secondaryColor,
        "--dna-text-color": textColor,
        "--dna-icon-color": iconColor,
        "--dna-arrow-color": arrowColor,

        "--dna-bg-start": backgroundColor,
        "--dna-bg-end": backgroundColorEnd,

        "--dna-radius": `${radius}px`,

        "--dna-font-size": `${fontSize}px`,
        "--dna-font-weight": fontWeight,
        "--dna-letter-spacing": letterSpacing,

        "--dna-content-gap": `${contentGap}px`,
        "--dna-content-padding": `${contentPadding}px`,

        "--dna-scan-duration": `${scanDuration}ms`,
        "--dna-node-duration": `${nodeDuration}ms`,
        "--dna-connector-duration": `${connectorDuration}ms`,
        "--dna-icon-duration": `${iconDuration}ms`,
        "--dna-active-duration": `${activeDuration}ms`,

        "--dna-hover-lift": `${hoverLift}px`,
        "--dna-hover-scale": hoverScale,

        "--dna-show-scan": showScan ? 1 : 0,
      }}
      {...props}
    >

      {showScan && <span className="dna-scan" />}

      {showDNA && (
        <span className="dna-strand dna-strand-left">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      )}

      {showDNA && (
        <span className="dna-strand dna-strand-right">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      )}

      {showConnectors && (
        <span className="dna-connectors">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      )}

      <span className="dna-content">
        <span className="dna-icon">
          {icon}
        </span>

        <span className="dna-text">
          {children}
        </span>

        <span className="dna-arrow">
          {arrow}
        </span>
      </span>

      {showBurst && (
        <span className="dna-burst">
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
    </button>
  );
};

export default DNAButton;