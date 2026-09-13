import "./LiquidGlassButton.css";

const LiquidGlassButton = ({
  children = "Liquid Glass",

  width = 210,
  height = 58,

  color = "#8b5cf6",
  secondaryColor = "#06b6d4",
  textColor = "#ffffff",

  radius = 18,

  intensity = 1,

  liquidBlur = 28,
  liquidOpacity = 0.55,
  hoverLiquidBlur = 20,
  hoverLiquidOpacity = 0.8,
  liquidInset = 40,

  liquidDuration = 7,

  distortionOpacity = 0.35,
  distortionSize = 2,
  distortionGap = 4,
  distortionDuration = 5,
  distortionMove = 3,
  distortionScale = 1.08,

  glassOpacity = 0.06,
  glassBlur = 20,

  reflectionLeft = 8,
  reflectionRight = 8,
  reflectionTop = 5,
  reflectionHeight = 35,
  reflectionOpacity = 0.12,
  reflectionBlur = 12,

  lightWidth = 25,
  lightHeight = 300,
  lightLeft = -50,
  lightTop = -100,
  lightAngle = 25,
  lightOpacity = 0.2,
  lightBlur = 12,
  lightSpeed = 1000,
  lightHoverLeft = 125,

  borderColor = "#ffffff",
  borderOpacity = 0.2,
  hoverBorderOpacity = 0.4,
  borderWidth = 1,

  showInnerGlow = true,
  innerGlowOpacity = 1,
  innerGlowDuration = 500,
  innerGlowSize = 25,
  innerGlowSecondarySize = 45,

  fontSize = 14,
  fontWeight = 600,
  letterSpacing = "0.025em",
  contentHoverScale = 1.05,
  contentGlow = 10,

  hoverLift = 4,
  activeScale = 0.97,

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
      className={`liquid-glass-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        borderRadius: `${radius}px`,
        color: textColor,

        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        "--glass-color": color,
        "--glass-secondary": secondaryColor,
        "--glass-intensity": intensity,

        "--glass-liquid-blur": `${liquidBlur}px`,
        "--glass-liquid-opacity": liquidOpacity,
        "--glass-hover-liquid-blur": `${hoverLiquidBlur}px`,
        "--glass-hover-liquid-opacity": hoverLiquidOpacity,
        "--glass-liquid-inset": `${liquidInset}%`,
        "--glass-liquid-duration": `${liquidDuration}s`,

        "--glass-distortion-opacity": distortionOpacity,
        "--glass-distortion-size": `${distortionSize}px`,
        "--glass-distortion-gap": `${distortionGap}px`,
        "--glass-distortion-duration": `${distortionDuration}s`,
        "--glass-distortion-move": `${distortionMove}%`,
        "--glass-distortion-scale": distortionScale,

        "--glass-opacity": glassOpacity,
        "--glass-blur": `${glassBlur}px`,

        "--glass-reflection-left": `${reflectionLeft}%`,
        "--glass-reflection-right": `${reflectionRight}%`,
        "--glass-reflection-top": `${reflectionTop}%`,
        "--glass-reflection-height": `${reflectionHeight}%`,
        "--glass-reflection-opacity": reflectionOpacity,
        "--glass-reflection-blur": `${reflectionBlur}px`,

        "--glass-light-width": `${lightWidth}%`,
        "--glass-light-height": `${lightHeight}%`,
        "--glass-light-left": `${lightLeft}%`,
        "--glass-light-top": `${lightTop}%`,
        "--glass-light-angle": `${lightAngle}deg`,
        "--glass-light-opacity": lightOpacity,
        "--glass-light-blur": `${lightBlur}px`,
        "--glass-light-speed": `${lightSpeed}ms`,
        "--glass-light-hover-left": `${lightHoverLeft}%`,

        "--glass-border-color": borderColor,
        "--glass-border-opacity": borderOpacity,
        "--glass-hover-border-opacity": hoverBorderOpacity,
        "--glass-border-width": `${borderWidth}px`,

        "--glass-inner-opacity": showInnerGlow
          ? innerGlowOpacity
          : 0,
        "--glass-inner-duration": `${innerGlowDuration}ms`,
        "--glass-inner-size": `${innerGlowSize}px`,
        "--glass-inner-secondary-size": `${innerGlowSecondarySize}px`,

        "--glass-content-scale": contentHoverScale,
        "--glass-content-glow": `${contentGlow}px`,

        "--glass-hover-lift": `${hoverLift}px`,
        "--glass-active-scale": activeScale,
      }}
      {...props}
    >

      <span
        className="liquid-glass-liquid"
        style={{
          background: `
            radial-gradient(
              circle at 25% 35%,
              ${color},
              transparent 32%
            ),
            radial-gradient(
              circle at 75% 65%,
              ${secondaryColor},
              transparent 32%
            )
          `,
        }}
      />

      <span className="liquid-glass-base" />

      <span className="liquid-glass-distortion" />

      <span className="liquid-glass-reflection" />

      <span className="liquid-glass-light" />

      <span className="liquid-glass-edge" />

      <span className="liquid-glass-inner-glow" />

      <span className="liquid-glass-content">
        {children}
      </span>
    </button>
  );
};

export default LiquidGlassButton;