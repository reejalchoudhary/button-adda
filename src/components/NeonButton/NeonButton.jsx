import "./NeonButton.css";

const NeonButton = ({
  children = "Neon Button",

  width = 180,
  height = 52,

  color = "#00ffff",
  textColor = "#ffffff",
  backgroundColor = "#050816",

  radius = 10,
  borderWidth = 1,

  glow = 25,
  glowOpacity = 0.6,
  innerGlowOpacity = 0.2,
  innerGlowHoverOpacity = 0.4,

  borderGlowOpacity = 0.7,
  borderGlowHoverOpacity = 1,
  borderGlowSize = 12,
  borderGlowHoverSize = 12,
  borderBlur = 4,
  borderHoverBlur = 8,

  innerGlowBlur = 18,

  showStreak = true,
  streakColor = "#ffffff",
  streakOpacity = 0.4,
  streakWidth = 33.333,
  streakAngle = 12,
  streakBlur = 8,
  streakSpeed = 700,
  streakEndPosition = 130,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 4,
  activeScale = 0.95,

  showTextGlow = true,
  textGlowSize = 8,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`neon-button ${className}`}
      style={{
        "--neon-width": `${width}px`,
        "--neon-height": `${height}px`,

        "--neon-color": color,
        "--neon-text-color": textColor,
        "--neon-background": backgroundColor,

        "--neon-radius": `${radius}px`,
        "--neon-border-width": `${borderWidth}px`,

        "--neon-glow": `${glow}px`,
        "--neon-glow-opacity": glowOpacity,

        "--neon-inner-opacity": innerGlowOpacity,
        "--neon-inner-hover-opacity": innerGlowHoverOpacity,

        "--neon-border-opacity": borderGlowOpacity,
        "--neon-border-hover-opacity": borderGlowHoverOpacity,

        "--neon-border-glow-size": `${borderGlowSize}px`,
        "--neon-border-hover-size": `${borderGlowHoverSize}px`,

        "--neon-border-blur": `${borderBlur}px`,
        "--neon-border-hover-blur": `${borderHoverBlur}px`,

        "--neon-inner-blur": `${innerGlowBlur}px`,

        "--neon-streak-color": streakColor,
        "--neon-streak-opacity": streakOpacity,
        "--neon-streak-width": `${streakWidth}%`,
        "--neon-streak-angle": `${streakAngle}deg`,
        "--neon-streak-blur": `${streakBlur}px`,
        "--neon-streak-speed": `${streakSpeed}ms`,
        "--neon-streak-end": `${streakEndPosition}%`,

        "--neon-font-size": `${fontSize}px`,
        "--neon-font-weight": fontWeight,
        "--neon-letter-spacing": letterSpacing,

        "--neon-hover-lift": `${hoverLift}px`,
        "--neon-active-scale": activeScale,

        "--neon-text-glow-size": `${textGlowSize}px`,
      }}
      {...props}
    >

      <span className="neon-border-glow" />

      <span className="neon-inner-glow" />

      {showStreak && <span className="neon-streak" />}

      <span
        className={`neon-content ${
          showTextGlow ? "neon-content-glow" : ""
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default NeonButton;