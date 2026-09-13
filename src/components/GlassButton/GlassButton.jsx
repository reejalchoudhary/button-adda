import "./GlassButton.css";

const GlassButton = ({
  children = "Glass Button",

  width = 180,
  height = 52,

  color = "#8b5cf6",
  textColor = "#ffffff",

  radius = 14,

  blur = 12,
  opacity = 0.12,
  borderOpacity = 0.4,

  shadowOpacity = 0.13,
  shineOpacity = 0.25,

  hoverLift = 4,
  hoverGlowOpacity = 0.4,

  reflectionWidth = 33.333,
  reflectionSpeed = 700,

  fontSize = 16,
  fontWeight = 600,

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
      className={`glass-button ${className}`}
      style={{
        width: `${width}px`,
        minHeight: `${height}px`,

        "--glass-color": color,
        "--glass-text-color": textColor,

        "--glass-radius": `${radius}px`,
        "--glass-blur": `${blur}px`,
        "--glass-opacity": opacity,
        "--glass-border-opacity": borderOpacity,

        "--glass-shadow-opacity": shadowOpacity,
        "--glass-shine-opacity": shineOpacity,

        "--glass-hover-lift": `${hoverLift}px`,
        "--glass-hover-glow": hoverGlowOpacity,

        "--glass-reflection-width": `${reflectionWidth}%`,
        "--glass-reflection-speed": `${reflectionSpeed}ms`,

        "--glass-font-size": `${fontSize}px`,
        "--glass-font-weight": fontWeight,
      }}
      {...props}
    >

      <span className="glass-button__shine-top" />

      <span className="glass-button__glow" />

      <span className="glass-button__reflection" />

      <span className="glass-button__content">
        {children}
      </span>
    </button>
  );
};

export default GlassButton;