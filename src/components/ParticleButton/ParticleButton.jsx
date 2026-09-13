import { useMemo, useState } from "react";
import "./ParticleButton.css";

const ParticleButton = ({
  children = "Particle Button",

  width = 210,
  height = 58,

  color = "#a855f7",
  particleColor = "#ffffff",
  textColor = "#ffffff",
  backgroundColor = color,

  radius = 12,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.10)",
  hoverBorderColor = "rgba(255,255,255,0.25)",

  particleCount = 28,
  particleDistance = 70,
  particleMinSize = 2,
  particleMaxSize = 5,
  particleOpacity = 0.85,
  particleBlur = 0,

  particleDuration = 600,
  particleExplosionDuration = 650,
  particleExplosionMultiplier = 2.4,
  particleDelayMax = 0.35,

  showEdge = true,
  edgeOpacity = 0.3,
  edgeHoverOpacity = 1,
  edgeStyle = "dashed",
  edgeWidth = 1,
  edgeColor = particleColor,

  showGlow = true,
  glowOpacity = 0.25,
  glowHoverOpacity = 0.35,
  glowSize = 25,
  hoverGlowSize = 35,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",
  contentScale = 0.97,

  hoverLift = 4,
  activeScale = 0.95,
  transitionDuration = 300,

  onClick,
  onBurst,
  disabled = false,
  className = "",

  ...props
}) => {
  const [active, setActive] = useState(false);
  const [burst, setBurst] = useState(false);

  const particles = useMemo(() => {
    return Array.from(
      { length: particleCount },
      (_, index) => {
        const angle =
          (360 / particleCount) * index;

        const radians =
          (angle * Math.PI) / 180;

        const distance =
          particleDistance *
          (0.65 + Math.random() * 0.7);

        const particleSize =
          particleMinSize +
          Math.random() *
            (particleMaxSize - particleMinSize);

        return {
          id: index,

          x: Math.cos(radians) * distance,
          y: Math.sin(radians) * distance,

          delay:
            Math.random() * particleDelayMax,

          size: particleSize,

          rotation:
            Math.random() * 360,
        };
      }
    );
  }, [
    particleCount,
    particleDistance,
    particleMinSize,
    particleMaxSize,
    particleDelayMax,
  ]);

  const handleClick = (event) => {
    if (disabled) return;

    setBurst(true);

    if (onBurst) {
      onBurst(event);
    }

    window.setTimeout(() => {
      setBurst(false);
    }, particleExplosionDuration + 50);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`particle-button ${className}`}
      style={{
        "--particle-width": `${width}px`,
        "--particle-height": `${height}px`,
        "--particle-main-color": color,
        "--particle-color": particleColor,
        "--particle-text-color": textColor,
        "--particle-background": backgroundColor,
        "--particle-radius": `${radius}px`,
        "--particle-border-width":
          `${borderWidth}px`,
        "--particle-border-color":
          borderColor,
        "--particle-hover-border-color":
          hoverBorderColor,
        "--particle-opacity":
          particleOpacity,
        "--particle-blur":
          `${particleBlur}px`,
        "--particle-duration":
          `${particleDuration}ms`,
        "--particle-explosion-duration":
          `${particleExplosionDuration}ms`,
        "--particle-explosion-multiplier":
          particleExplosionMultiplier,
        "--particle-edge-opacity":
          edgeOpacity,
        "--particle-edge-hover-opacity":
          edgeHoverOpacity,
        "--particle-edge-width":
          `${edgeWidth}px`,
        "--particle-edge-style":
          edgeStyle,
        "--particle-edge-color":
          edgeColor,
        "--particle-glow-opacity":
          glowOpacity,
        "--particle-glow-hover-opacity":
          glowHoverOpacity,
        "--particle-glow-size":
          `${glowSize}px`,
        "--particle-hover-glow-size":
          `${hoverGlowSize}px`,
        "--particle-font-size":
          `${fontSize}px`,
        "--particle-font-weight":
          fontWeight,
        "--particle-letter-spacing":
          letterSpacing,
        "--particle-content-scale":
          contentScale,
        "--particle-hover-lift":
          `${hoverLift}px`,
        "--particle-active-scale":
          activeScale,
        "--particle-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      <span className="particle-field">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`particle-dot ${
              active || burst
                ? "particle-active"
                : ""
            } ${
              burst
                ? "particle-burst"
                : ""
            }`}
            style={{
              width:
                `${particle.size}px`,
              height:
                `${particle.size}px`,

              backgroundColor:
                particleColor,

              "--particle-x":
                `${particle.x}px`,
              "--particle-y":
                `${particle.y}px`,
              "--particle-delay":
                `${particle.delay}s`,
              "--particle-rotation":
                `${particle.rotation}deg`,
            }}
          />
        ))}
      </span>

      {showEdge && (
        <span className="particle-edge" />
      )}

      {showGlow && (
        <span className="particle-glow" />
      )}

      <span className="particle-surface" />

      <span
        className={`particle-content ${
          active
            ? "particle-content-active"
            : ""
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default ParticleButton;