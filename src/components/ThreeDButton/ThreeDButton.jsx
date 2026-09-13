import "./ThreeDButton.css";

const ThreeDButton = ({
  children = "3D Button",

  width = 180,
  height = 52,

  color = "#6366f1",
  textColor = "#ffffff",
  depthColor,

  radius = 12,

  depth = 8,
  hoverLift = 4,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  showHighlight = true,
  highlightHeight = 50,
  highlightOpacity = 0.1,

  showHoverShine = true,
  hoverShineOpacity = 0.1,

  shadowOpacity = 0.6,

  transitionDuration = 150,
  shineDuration = 200,

  activeScale = 1,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const safeDepthColor =
    depthColor || color;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button-adda-3d ${className}`}
      style={{
        "--button-width": `${width}px`,
        "--button-height": `${height}px`,

        "--button-color": color,
        "--button-text-color": textColor,
        "--button-depth-color":
          safeDepthColor,

        "--button-radius": `${radius}px`,

        "--button-depth": `${depth}px`,
        "--button-hover-lift":
          `${hoverLift}px`,

        "--button-font-size":
          `${fontSize}px`,
        "--button-font-weight":
          fontWeight,
        "--button-letter-spacing":
          letterSpacing,

        "--button-highlight-height":
          `${highlightHeight}%`,
        "--button-highlight-opacity":
          highlightOpacity,

        "--button-hover-shine-opacity":
          hoverShineOpacity,

        "--button-shadow-opacity":
          shadowOpacity,

        "--button-transition":
          `${transitionDuration}ms`,
        "--button-shine-duration":
          `${shineDuration}ms`,

        "--button-active-scale":
          activeScale,
      }}
      {...props}
    >

      {showHighlight && (
        <span className="button-adda-3d-highlight" />
      )}

      {showHoverShine && (
        <span className="button-adda-3d-shine" />
      )}

      <span className="button-adda-3d-content">
        {children}
      </span>
    </button>
  );
};

export default ThreeDButton;