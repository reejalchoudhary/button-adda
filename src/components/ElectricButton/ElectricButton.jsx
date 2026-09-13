import "./ElectricButton.css";

const ElectricButton = ({

  children = "Electric Button",

  width = 180,
  height = 52,

  color = "#06b6d4",
  textColor = "#ffffff",
  backgroundColor = "#07111f",

  radius = 12,

  borderWidth = 2,
  borderSpeed = 2,

  glowIntensity = 1,
  glowOpacity = 0.4,
  hoverGlowOpacity = 0.8,
  glowBlur = 30,

  showStreak = true,
  streakColor = "rgba(255,255,255,0.3)",
  streakSpeed = 500,
  streakWidth = 50,
  streakAngle = 12,
  streakBlur = 6,
  streakStart = -50,
  streakEnd = 120,

  hoverLift = 4,
  activeScale = 0.95,

  fontSize = 14,
  fontWeight = 600,
  letterSpacing = "normal",

  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const electricGlow =
    `${color}55`;

  const electricInset =
    `${color}15`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`electric-button ${
        disabled
          ? "electric-button-disabled"
          : ""
      } ${className}`}
      style={{

        "--electric-width":
          typeof width === "number"
            ? `${width}px`
            : width,

        "--electric-height":
          typeof height === "number"
            ? `${height}px`
            : height,

        "--electric-color":
          color,

        "--electric-text-color":
          textColor,

        "--electric-background":
          backgroundColor,

        "--electric-radius":
          typeof radius === "number"
            ? `${radius}px`
            : radius,

        "--electric-border-width":
          typeof borderWidth === "number"
            ? `${borderWidth}px`
            : borderWidth,

        "--electric-border-speed":
          typeof borderSpeed === "number"
            ? `${borderSpeed}s`
            : borderSpeed,

        "--electric-glow-opacity":
          glowOpacity,

        "--electric-hover-glow-opacity":
          hoverGlowOpacity,

        "--electric-glow-blur":
          typeof glowBlur === "number"
            ? `${glowBlur}px`
            : glowBlur,

        "--electric-streak-color":
          streakColor,

        "--electric-streak-speed":
          typeof streakSpeed === "number"
            ? `${streakSpeed}ms`
            : streakSpeed,

        "--electric-streak-width":
          typeof streakWidth === "number"
            ? `${streakWidth}%`
            : streakWidth,

        "--electric-streak-angle":
          `${streakAngle}deg`,

        "--electric-streak-blur":
          typeof streakBlur === "number"
            ? `${streakBlur}px`
            : streakBlur,

        "--electric-streak-start":
          typeof streakStart === "number"
            ? `${streakStart}%`
            : streakStart,

        "--electric-streak-end":
          typeof streakEnd === "number"
            ? `${streakEnd}%`
            : streakEnd,

        "--electric-hover-lift":
          typeof hoverLift === "number"
            ? `${hoverLift}px`
            : hoverLift,

        "--electric-active-scale":
          activeScale,

        "--electric-font-size":
          typeof fontSize === "number"
            ? `${fontSize}px`
            : fontSize,

        "--electric-font-weight":
          fontWeight,

        "--electric-letter-spacing":
          letterSpacing,

        "--electric-transition":
          typeof transitionDuration === "number"
            ? `${transitionDuration}ms`
            : transitionDuration,

        boxShadow: `
          0 0 ${15 * glowIntensity}px ${electricGlow},
          inset 0 0 ${15 * glowIntensity}px ${electricInset}
        `,
      }}
      {...props}
    >

      <span
        className="electric-border"
        aria-hidden="true"
      />

      <span
        className="electric-inner"
        aria-hidden="true"
      />

      <span
        className="electric-glow"
        aria-hidden="true"
      />

      {showStreak && (
        <span
          className="electric-streak"
          aria-hidden="true"
        />
      )}

      <span className="electric-content">
        {children}
      </span>
    </button>
  );
};

export default ElectricButton;