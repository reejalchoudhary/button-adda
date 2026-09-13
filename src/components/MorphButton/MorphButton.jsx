import "./MorphButton.css";

const MorphButton = ({
  children = "Hover Me",
  hoverText = "Let's Go →",

  width = 180,
  height = 52,
  hoverWidth = 220,

  color = "#6366f1",
  hoverColor = "#8b5cf6",
  textColor = "#ffffff",

  radius = 14,
  hoverRadius = 30,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  morphDuration = 500,
  morphEasing = "cubic-bezier(0.68, -0.55, 0.27, 1.55)",

  hoverLift = 4,
  activeScale = 0.95,

  showHoverBackground = true,
  hoverBackgroundAngle = 135,
  backgroundDuration = 500,
  hoverBackgroundOpacity = 1,

  showExpandingCircle = true,
  circleColor = "#ffffff",
  circleOpacity = 0.1,
  circleSize = 300,
  circleDuration = 700,

  showGlow = true,
  glowOpacity = 0.7,
  glowBlur = 6,
  glowDuration = 500,
  glowY = 10,
  glowBlurSpread = 30,
  glowOuterSize = 45,
  glowMixOpacity = 35,

  textDuration = 300,
  textMove = 32,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const cssVariables = {
    "--morph-width": `${width}px`,
    "--morph-height": `${height}px`,
    "--morph-hover-width": `${hoverWidth}px`,

    "--morph-color": color,
    "--morph-hover-color": hoverColor,
    "--morph-text-color": textColor,

    "--morph-radius": `${radius}px`,
    "--morph-hover-radius": `${hoverRadius}px`,

    "--morph-font-size": `${fontSize}px`,
    "--morph-font-weight": fontWeight,
    "--morph-letter-spacing": letterSpacing,

    "--morph-duration": `${morphDuration}ms`,
    "--morph-easing": morphEasing,

    "--morph-hover-lift": `${hoverLift}px`,
    "--morph-active-scale": activeScale,

    "--morph-background-duration": `${backgroundDuration}ms`,
    "--morph-background-opacity": hoverBackgroundOpacity,
    "--morph-background-angle": `${hoverBackgroundAngle}deg`,

    "--morph-circle-color": circleColor,
    "--morph-circle-opacity": circleOpacity,
    "--morph-circle-size": `${circleSize}%`,
    "--morph-circle-duration": `${circleDuration}ms`,

    "--morph-glow-opacity": glowOpacity,
    "--morph-glow-blur": `${glowBlur}px`,
    "--morph-glow-duration": `${glowDuration}ms`,
    "--morph-glow-y": `${glowY}px`,
    "--morph-glow-spread": `${glowBlurSpread}px`,
    "--morph-glow-outer-size": `${glowOuterSize}px`,
    "--morph-glow-mix-opacity": `${glowMixOpacity}%`,

    "--morph-text-duration": `${textDuration}ms`,
    "--morph-text-move": `${textMove}px`,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`morph-button ${className}`}
      style={cssVariables}
      {...props}
    >

      {showHoverBackground && (
        <span className="morph-background">
          <span
            className="morph-background-gradient"
            style={{
              background: `linear-gradient(
                ${hoverBackgroundAngle}deg,
                ${hoverColor},
                ${color}
              )`,
            }}
          />
        </span>
      )}

      {showExpandingCircle && (
        <span className="morph-circle" />
      )}

      {showGlow && (
        <span
          className="morph-glow"
          style={{
            backgroundColor: hoverColor,
          }}
        />
      )}

      <span className="morph-text morph-text-normal">
        {children}
      </span>

      <span className="morph-text morph-text-hover">
        {hoverText}
      </span>
    </button>
  );
};

export default MorphButton;