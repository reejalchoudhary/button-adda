import "./GradientButton.css";

const GradientButton = ({
  children = "Gradient Button",

  width = 180,
  height = 52,

  color = "#8b5cf6",
  secondaryColor = "#ec4899",
  thirdColor = "#6366f1",

  radius = 12,

  gradientAngle = 120,
  gradientSize = "300% 300%",

  shadowOpacity = 0.33,

  animationDuration = 5000,
  animationTiming = "ease",
  animationIteration = "infinite",

  shineOpacity = 0.3,
  shineSpeed = 700,
  shineWidth = 25,

  hoverLift = 4,
  activeScale = 0.95,

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
      className={`gradient-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        borderRadius: `${radius}px`,

        color: "#ffffff",

        "--gradient-color": color,
        "--gradient-secondary": secondaryColor,
        "--gradient-third": thirdColor,

        "--gradient-angle": `${gradientAngle}deg`,
        "--gradient-size": gradientSize,

        "--gradient-shadow":
          `${color}${Math.round(
            shadowOpacity * 255
          )
            .toString(16)
            .padStart(2, "0")}`,

        "--gradient-animation-duration":
          `${animationDuration}ms`,
        "--gradient-animation-timing":
          animationTiming,
        "--gradient-animation-iteration":
          animationIteration,

        "--gradient-shine-opacity":
          shineOpacity,
        "--gradient-shine-speed":
          `${shineSpeed}ms`,
        "--gradient-shine-width":
          `${shineWidth}%`,

        "--gradient-hover-lift":
          `${hoverLift}px`,
        "--gradient-active-scale":
          activeScale,

        "--gradient-font-size":
          `${fontSize}px`,
        "--gradient-font-weight":
          fontWeight,
      }}
      {...props}
    >

      <span className="gradient-button__shine" />

      <span className="gradient-button__content">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;