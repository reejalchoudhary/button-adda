import "./RainbowButton.css";

const RainbowButton = ({
  children = "Rainbow Button",
  onClick,
  disabled = false,
  className = "",

  width = 190,
  height = 52,

  textColor = "#ffffff",
  backgroundColor = "#080b16",

  radius = 12,

  speed = 4,
  glow = 1,

  rainbowColors = [
    "#ff0000",
    "#ff7a00",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0080ff",
    "#8b00ff",
    "#ff00ff",
    "#ff0000",
  ],

  borderOpacity = 0.95,

  innerOpacity = 0.3,
  innerHoverOpacity = 0.6,

  glowBlur = 12,
  glowHoverBlur = 16,
  glowOpacity = 0.35,
  glowHoverOpacity = 0.65,

  showShine = true,
  shineColor = "#ffffff",
  shineOpacity = 0.3,
  shineWidth = 25,
  shineAngle = 12,
  shineBlur = 6,
  shineSpeed = 700,
  shineEndPosition = 130,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 4,
  hoverScale = 1.03,
  activeScale = 0.95,

  contentGlow = "0 0 8px rgba(255,255,255,0.35)",

  ...props
}) => {
  const rainbowGradient = `conic-gradient(
    from 0deg,
    ${rainbowColors.join(", ")}
  )`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rainbow-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--rainbow-radius": `${radius}px`,
        "--rainbow-speed": `${speed}s`,
        "--rainbow-glow": glow,

        "--rainbow-text-color": textColor,
        "--rainbow-background": backgroundColor,

        "--rainbow-gradient": rainbowGradient,
        "--rainbow-border-opacity": borderOpacity,

        "--rainbow-inner-opacity": innerOpacity,
        "--rainbow-inner-hover-opacity": innerHoverOpacity,

        "--rainbow-glow-blur": `${glowBlur}px`,
        "--rainbow-glow-hover-blur": `${glowHoverBlur}px`,
        "--rainbow-glow-opacity": glowOpacity,
        "--rainbow-glow-hover-opacity": glowHoverOpacity,

        "--rainbow-shine-color": shineColor,
        "--rainbow-shine-opacity": shineOpacity,
        "--rainbow-shine-width": `${shineWidth}%`,
        "--rainbow-shine-angle": `${shineAngle}deg`,
        "--rainbow-shine-blur": `${shineBlur}px`,
        "--rainbow-shine-speed": `${shineSpeed}ms`,
        "--rainbow-shine-end": `${shineEndPosition}%`,

        "--rainbow-font-size": `${fontSize}px`,
        "--rainbow-font-weight": fontWeight,
        "--rainbow-letter-spacing": letterSpacing,

        "--rainbow-hover-lift": `${hoverLift}px`,
        "--rainbow-hover-scale": hoverScale,
        "--rainbow-active-scale": activeScale,

        "--rainbow-content-glow": contentGlow,
      }}
      {...props}
    >

      <span className="rainbow-glow" />

      <span className="rainbow-border" />

      <span className="rainbow-surface" />

      <span className="rainbow-inner" />

      {showShine && <span className="rainbow-shine" />}

      <span className="rainbow-content">
        {children}
      </span>
    </button>
  );
};

export default RainbowButton;