import "./LiquidButton.css";

const LiquidButton = ({
  children = "Liquid Button",

  width = 190,
  height = 52,

  color = "#06b6d4",
  secondaryColor = "#8b5cf6",
  tertiaryColor = "#22d3ee",
  backgroundColor = "#07131c",
  glassColor = "#000000",
  textColor = "#ffffff",

  radius = 18,

  intensity = 1,
  blobWidth = 70,
  blobHeight = 100,
  blobBlur = 25,
  blobOpacity = 0.65,
  hoverBlobBlur = 18,
  hoverBlobOpacity = 0.85,

  flowBlur = 35,
  flowOpacity = 0.45,
  hoverFlowOpacity = 0.65,

  blobOneDuration = 5,
  blobTwoDuration = 6,
  blobThreeDuration = 4,
  flowDuration = 7,

  glassOpacity = 0.25,
  glassBlur = 4,
  reflectionOpacity = 0.1,
  reflectionTop = 5,
  reflectionHeight = 35,

  shineOpacity = 0.25,
  shineWidth = 33,
  shineSpeed = 700,
  shineAngle = 12,

  borderColor,
  borderOpacity = 0.6,
  borderWidth = 1,
  hoverGlow = 25,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 4,
  hoverScale = 1.02,
  activeScale = 0.95,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const finalBorderColor = borderColor || color;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`liquid-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,

        borderRadius: `${radius}px`,
        color: textColor,

        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        "--liquid-color": color,
        "--liquid-secondary-color": secondaryColor,
        "--liquid-tertiary-color": tertiaryColor,

        "--liquid-background": backgroundColor,
        "--liquid-glass-color": glassColor,

        "--liquid-radius": `${radius}px`,
        "--liquid-intensity": intensity,

        "--liquid-blob-width": `${blobWidth}%`,
        "--liquid-blob-height": `${blobHeight}%`,
        "--liquid-blob-blur": `${blobBlur}px`,
        "--liquid-blob-opacity": blobOpacity,
        "--liquid-hover-blob-blur": `${hoverBlobBlur}px`,
        "--liquid-hover-blob-opacity": hoverBlobOpacity,

        "--liquid-flow-blur": `${flowBlur}px`,
        "--liquid-flow-opacity": flowOpacity,
        "--liquid-hover-flow-opacity": hoverFlowOpacity,

        "--liquid-blob-one-duration": `${blobOneDuration}s`,
        "--liquid-blob-two-duration": `${blobTwoDuration}s`,
        "--liquid-blob-three-duration": `${blobThreeDuration}s`,
        "--liquid-flow-duration": `${flowDuration}s`,

        "--liquid-glass-opacity": glassOpacity,
        "--liquid-glass-blur": `${glassBlur}px`,

        "--liquid-reflection-opacity": reflectionOpacity,
        "--liquid-reflection-top": `${reflectionTop}px`,
        "--liquid-reflection-height": `${reflectionHeight}%`,

        "--liquid-shine-opacity": shineOpacity,
        "--liquid-shine-width": `${shineWidth}%`,
        "--liquid-shine-speed": `${shineSpeed}ms`,
        "--liquid-shine-angle": `${shineAngle}deg`,

        "--liquid-border-color": finalBorderColor,
        "--liquid-border-opacity": borderOpacity,
        "--liquid-border-width": `${borderWidth}px`,
        "--liquid-hover-glow": `${hoverGlow}px`,

        "--liquid-hover-lift": `${hoverLift}px`,
        "--liquid-hover-scale": hoverScale,
        "--liquid-active-scale": activeScale,
      }}
      {...props}
    >

      <span className="liquid-background" />

      <span
        className="liquid-blob liquid-blob-one"
        style={{
          backgroundColor: color,
        }}
      />

      <span
        className="liquid-blob liquid-blob-two"
        style={{
          backgroundColor: secondaryColor,
        }}
      />

      <span
        className="liquid-blob liquid-blob-three"
        style={{
          backgroundColor: tertiaryColor,
        }}
      />

      <span
        className="liquid-flow"
        style={{
          background: `
            radial-gradient(
              circle at 30% 40%,
              ${color} 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 70% 60%,
              ${secondaryColor} 0%,
              transparent 35%
            )
          `,
        }}
      />

      <span className="liquid-glass" />

      <span className="liquid-reflection" />

      <span className="liquid-shine" />

      <span className="liquid-border" />

      <span className="liquid-content">
        {children}
      </span>
    </button>
  );
};

export default LiquidButton;