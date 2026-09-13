import "./GlowButton.css";

const GlowButton = ({
  children = "Glow Button",

  width = 180,
  height = 48,

  color = "#a00bf0",
  hoverColor = "#fb0c6f",
  glowColor = "#06f3d0",
  secondaryGlowColor = "#f83a0b",
  textColor = "#ffffff",

  radius = 12,

  fontSize = 16,
  fontWeight = 600,

  glowOpacity = 0.45,
  hoverGlowOpacity = 0.75,
  layerOpacity = 0.7,

  shimmerWidth = 50,
  shimmerSpeed = 700,
  shimmerOpacity = 0.2,

  hoverLift = 2,
  activeScale = 0.95,

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
      className={`glow-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--glow-color": color,
        "--glow-hover-color": hoverColor,
        "--glow-main": glowColor,
        "--glow-secondary": secondaryGlowColor,
        "--glow-text": textColor,

        "--glow-radius": `${radius}px`,

        "--glow-font-size": `${fontSize}px`,
        "--glow-font-weight": fontWeight,

        "--glow-opacity": glowOpacity,
        "--glow-hover-opacity": hoverGlowOpacity,
        "--glow-layer-opacity": layerOpacity,

        "--glow-shimmer-width": `${shimmerWidth}%`,
        "--glow-shimmer-speed": `${shimmerSpeed}ms`,
        "--glow-shimmer-opacity": shimmerOpacity,

        "--glow-hover-lift": `${hoverLift}px`,
        "--glow-active-scale": activeScale,
      }}
      {...props}
    >

      <span className="glow-button__layer" />

      <span className="glow-button__shimmer" />

      <span className="glow-button__content">
        {children}
      </span>
    </button>
  );
};

export default GlowButton;