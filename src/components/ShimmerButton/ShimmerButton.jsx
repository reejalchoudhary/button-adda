import "./ShimmerButton.css";

const ShimmerButton = ({
  children = "Shimmer Button",

  width = 180,
  height = 52,

  color = "#6366f1",
  secondaryColor = "#8b5cf6",
  textColor = "#ffffff",

  radius = 12,

  shimmerColor = "#ffffff",
  shimmerOpacity = 0.5,
  shimmerWidth = 55,
  shimmerAngle = -20,
  shimmerSpeed = 700,

  showExtraShine = true,
  extraShineOpacity = 0.1,
  extraShineSpeed = 300,

  glowOpacity = 0.33,
  glowBlur = 25,
  hoverGlowOpacity = 0.5,
  hoverGlowBlur = 35,

  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.18)",
  hoverBorderColor = "rgba(255,255,255,0.4)",

  showGlass = true,
  glassOpacity = 0.08,
  glassBlur = 8,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 4,
  activeScale = 0.95,
  transitionDuration = 300,

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
      className={`shimmer-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--shimmer-radius":
          `${radius}px`,

        "--shimmer-color":
          color,

        "--shimmer-secondary":
          secondaryColor,

        "--shimmer-text":
          textColor,

        "--shimmer-color-gradient": `
          linear-gradient(
            135deg,
            ${color},
            ${secondaryColor}
          )
        `,

        "--shimmer-light":
          shimmerColor,

        "--shimmer-opacity":
          shimmerOpacity,

        "--shimmer-width":
          `${shimmerWidth}%`,

        "--shimmer-angle":
          `${shimmerAngle}deg`,

        "--shimmer-speed":
          `${shimmerSpeed}ms`,

        "--extra-opacity":
          extraShineOpacity,

        "--extra-speed":
          `${extraShineSpeed}ms`,

        "--shimmer-glow-opacity":
          glowOpacity,

        "--shimmer-glow-blur":
          `${glowBlur}px`,

        "--shimmer-hover-glow-opacity":
          hoverGlowOpacity,

        "--shimmer-hover-glow-blur":
          `${hoverGlowBlur}px`,

        "--shimmer-border-width":
          `${borderWidth}px`,

        "--shimmer-border-color":
          borderColor,

        "--shimmer-hover-border":
          hoverBorderColor,

        "--shimmer-glass-opacity":
          glassOpacity,

        "--shimmer-glass-blur":
          `${glassBlur}px`,

        "--shimmer-font-size":
          `${fontSize}px`,

        "--shimmer-font-weight":
          fontWeight,

        "--shimmer-letter-spacing":
          letterSpacing,

        "--shimmer-hover-lift":
          `${hoverLift}px`,

        "--shimmer-active-scale":
          activeScale,

        "--shimmer-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      <span className="shimmer-glow" />

      <span className="shimmer-surface" />

      {showGlass && (
        <span className="shimmer-glass" />
      )}

      <span className="shimmer-streak" />

      {showExtraShine && (
        <span className="shimmer-extra" />
      )}

      <span className="shimmer-border" />

      <span className="shimmer-content">
        {children}
      </span>
    </button>
  );
};

export default ShimmerButton;