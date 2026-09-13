import { useState } from "react";
import "./OrbitButton.css";

const OrbitButton = ({
  children = "Orbit",

  width = 210,
  height = 58,

  color = "#06b6d4",
  secondaryColor = "#8b5cf6",
  textColor = "#ffffff",
  backgroundColor = "#080b16",

  radius = 14,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.10)",
  hoverBorderColor = "rgba(255,255,255,0.20)",

  orbitSize = 85,
  speed = 8,
  hoverSpeedMultiplier = 0.5,

  showRings = true,
  ringColor = color,
  secondaryRingColor = secondaryColor,
  ringBorderWidth = 1,
  ringOpacity = 0.3,
  ringHoverOpacity = 0.7,
  outerRingOpacity = 0.2,
  outerRingHoverOpacity = 0.5,
  outerRingInset = -12,
  ringTilt = 65,
  outerRingRotation = 45,

  showSatellites = true,
  satelliteSize = 7,
  satelliteSmallSize = 4,
  satelliteColor = color,
  satelliteSecondaryColor = secondaryColor,
  satelliteThirdColor = "#ffffff",

  satelliteGlowSize = 8,
  satelliteOuterGlowSize = 18,
  smallSatelliteGlowSize = 6,
  smallSatelliteOuterGlowSize = 14,

  showAtmosphere = true,
  atmosphereOpacity = 0,
  atmosphereHoverOpacity = 1,
  atmosphereColor = color,
  atmosphereSize = 65,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",
  contentScale = 1.05,

  hoverLift = 4,
  activeScale = 0.97,
  transitionDuration = 300,
  ringTransitionDuration = 500,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const currentSpeed = hovered
    ? speed * hoverSpeedMultiplier
    : speed;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`orbit-button ${className}`}
      style={{
        "--orbit-width": `${width}px`,
        "--orbit-height": `${height}px`,

        "--orbit-color": color,
        "--orbit-secondary": secondaryColor,
        "--orbit-text-color": textColor,
        "--orbit-background": backgroundColor,

        "--orbit-radius": `${radius}px`,
        "--orbit-border-width": `${borderWidth}px`,
        "--orbit-border-color": borderColor,
        "--orbit-hover-border-color": hoverBorderColor,

        "--orbit-size": `${orbitSize}px`,
        "--orbit-speed": `${currentSpeed}s`,
        "--orbit-speed-third": `${currentSpeed * 1.35}s`,

        "--orbit-ring-color": ringColor,
        "--orbit-secondary-ring": secondaryRingColor,
        "--orbit-ring-border-width": `${ringBorderWidth}px`,
        "--orbit-ring-opacity": ringOpacity,
        "--orbit-ring-hover-opacity": ringHoverOpacity,
        "--orbit-outer-opacity": outerRingOpacity,
        "--orbit-outer-hover-opacity": outerRingHoverOpacity,
        "--orbit-outer-inset": `${outerRingInset}px`,
        "--orbit-ring-tilt": `${ringTilt}deg`,
        "--orbit-outer-rotation": `${outerRingRotation}deg`,

        "--orbit-satellite-size": `${satelliteSize}px`,
        "--orbit-small-satellite-size": `${satelliteSmallSize}px`,
        "--orbit-satellite-color": satelliteColor,
        "--orbit-satellite-secondary": satelliteSecondaryColor,
        "--orbit-satellite-third": satelliteThirdColor,

        "--orbit-glow-size": `${satelliteGlowSize}px`,
        "--orbit-outer-glow": `${satelliteOuterGlowSize}px`,
        "--orbit-small-glow": `${smallSatelliteGlowSize}px`,
        "--orbit-small-outer-glow": `${smallSatelliteOuterGlowSize}px`,

        "--orbit-atmosphere-opacity": atmosphereOpacity,
        "--orbit-atmosphere-hover-opacity": atmosphereHoverOpacity,
        "--orbit-atmosphere-color": atmosphereColor,
        "--orbit-atmosphere-size": `${atmosphereSize}%`,

        "--orbit-font-size": `${fontSize}px`,
        "--orbit-font-weight": fontWeight,
        "--orbit-letter-spacing": letterSpacing,
        "--orbit-content-scale": contentScale,

        "--orbit-hover-lift": `${hoverLift}px`,
        "--orbit-active-scale": activeScale,
        "--orbit-transition": `${transitionDuration}ms`,
        "--orbit-ring-transition": `${ringTransitionDuration}ms`,
      }}
      {...props}
    >

      <span
        className={`orbit-system ${
          showSatellites ? "" : "orbit-no-satellites"
        }`}
      >

        {showRings && (
          <span className="orbit-ring orbit-ring-one" />
        )}

        {showRings && (
          <span className="orbit-ring orbit-ring-two" />
        )}

        {showSatellites && (
          <span className="orbit-satellite orbit-one">
            <span className="orbit-dot orbit-dot-one" />
          </span>
        )}

        {showSatellites && (
          <span className="orbit-satellite orbit-two">
            <span className="orbit-dot orbit-dot-two" />
          </span>
        )}

        {showSatellites && (
          <span className="orbit-satellite orbit-three">
            <span className="orbit-dot orbit-dot-three" />
          </span>
        )}
      </span>

      <span className="orbit-surface" />

      {showAtmosphere && (
        <span className="orbit-atmosphere" />
      )}

      <span className="orbit-content">
        {children}
      </span>
    </button>
  );
};

export default OrbitButton;