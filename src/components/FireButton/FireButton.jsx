import "./FireButton.css";

const FireButton = ({
  children = "Fire Button",

  width = 180,
  height = 52,

  color = "#ff6b00",
  textColor = "#ffffff",
  backgroundColor = "#180806",
  glowColor = "#ffea00",
  secondaryColor = "#ffb000",
  redColor = "#ff2d00",
  darkFireColor = "#8f1700",

  radius = 12,
  borderWidth = 1,

  intensity = 1,

  glowOpacity = 0.6,
  movingFireOpacity = 0.8,
  innerFireOpacity = 0.9,
  streakOpacity = 0.7,
  shineOpacity = 0.3,

  glowDuration = 2000,
  spinDuration = 3000,
  pulseDuration = 1500,
  shineDuration = 700,

  hoverLift = 4,
  hoverScale = 1.02,
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
      className={`fire-button ${className}`}
      style={{
        width: `${width}px`,
        minHeight: `${height}px`,
        borderRadius: `${radius}px`,
        borderWidth: `${borderWidth}px`,
        color: textColor,
        borderColor: `${color}aa`,
        backgroundColor,

        "--fire-color": color,
        "--fire-glow-color": glowColor,
        "--fire-secondary-color": secondaryColor,
        "--fire-red-color": redColor,
        "--fire-dark-color": darkFireColor,

        "--fire-intensity": intensity,

        "--fire-glow-opacity": glowOpacity,
        "--fire-moving-opacity": movingFireOpacity,
        "--fire-inner-opacity": innerFireOpacity,
        "--fire-streak-opacity": streakOpacity,
        "--fire-shine-opacity": shineOpacity,

        "--fire-glow-duration": `${glowDuration}ms`,
        "--fire-spin-duration": `${spinDuration}ms`,
        "--fire-pulse-duration": `${pulseDuration}ms`,
        "--fire-shine-duration": `${shineDuration}ms`,

        "--fire-hover-lift": `${hoverLift}px`,
        "--fire-hover-scale": hoverScale,
        "--fire-active-scale": activeScale,

        "--fire-font-size": `${fontSize}px`,
        "--fire-font-weight": fontWeight,
      }}
      {...props}
    >

      <span
        className="fire-button__outer-glow"
        style={{
          background: `
            radial-gradient(
              circle,
              ${glowColor} 0%,
              ${color} 30%,
              ${redColor} 55%,
              transparent 75%
            )
          `,
          animation: `buttonAddaFireGlow ${glowDuration}ms ease-in-out infinite`,
        }}
      />

      <span
        className="fire-button__moving-fire"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent,
              ${redColor},
              ${color},
              ${glowColor},
              ${color},
              ${redColor},
              transparent
            )
          `,
          animation: `buttonAddaFireSpin ${spinDuration}ms linear infinite`,
        }}
      />

      <span
        className="fire-button__inner-fire"
        style={{
          background: `
            radial-gradient(
              circle at 50% 120%,
              ${glowColor} 0%,
              ${color} 25%,
              ${darkFireColor} 55%,
              ${backgroundColor} 80%
            )
          `,
          opacity: innerFireOpacity,
        }}
      />

      <span
        className="fire-button__flame-streak"
        style={{
          background: secondaryColor,
          animation: `buttonAddaFirePulse ${pulseDuration}ms ease-in-out infinite`,
        }}
      />

      <span className="fire-button__shine" />
      
      <span className="fire-button__content">
        {children}
      </span>
    </button>
  );
};

export default FireButton;