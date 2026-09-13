import { useMemo, useState } from "react";
import "./StarfieldButton.css";

const StarfieldButton = ({
  children = "ENTER SPACE",

  width = 230,
  height = 62,

  color = "#ffffff",
  accentColor = "#60a5fa",
  textColor = "#ffffff",
  backgroundColor = "#02040a",

  radius = 16,
  borderWidth = 1,
  borderColor = "rgba(255, 255, 255, 0.10)",
  hoverBorderColor = "rgba(255, 255, 255, 0.25)",

  starCount = 45,
  speed = 1,

  starMinDistance = 20,
  starMaxDistance = 110,

  starMinDepth = 0.15,
  starMaxDepth = 1,

  smallStarSize = 1,
  mediumStarSize = 1.5,
  largeStarMinSize = 2.5,
  largeStarMaxSize = 4,

  starMinOpacity = 0.2,
  starMaxOpacity = 1,

  minStarDuration = 2.5,
  maxStarDuration = 6,
  maxStarDelay = 5,

  showCenterGlow = true,
  centerGlowSize = 80,
  centerGlowOpacity = 0.3,
  centerGlowBlur = 48,

  showVignette = true,
  vignetteMiddleOpacity = 0.25,
  vignetteOuterOpacity = 0.7,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "0.05em",
  contentHoverScale = 1.05,

  showIndicator = true,
  indicatorText = "",
  indicatorFontSize = 6,
  indicatorOpacity = 0.4,
  indicatorLetterSpacing = "0.25em",
  indicatorBottom = 8,
  indicatorRight = 12,

  hoverLift = 4,
  hoverGlowOpacity = 0.08,

  activeScale = 0.97,

  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  const safeSpeed = Math.max(0.05, Number(speed) || 1);

  const stars = useMemo(() => {
    const count = Math.max(
      0,
      Math.floor(Number(starCount) || 0)
    );

    return Array.from(
      { length: count },
      (_, index) => {
        const angle =
          Math.random() * Math.PI * 2;

        const depth =
          starMinDepth +
          Math.random() *
            (starMaxDepth - starMinDepth);

        const distance =
          starMinDistance +
          Math.random() *
            (starMaxDistance - starMinDistance);

        let size;

        if (depth < 0.35) {
          size = smallStarSize;
        } else if (depth < 0.7) {
          size = mediumStarSize;
        } else {
          size =
            largeStarMinSize +
            Math.random() *
              (largeStarMaxSize -
                largeStarMinSize);
        }

        const baseDuration =
          minStarDuration +
          Math.random() *
            (maxStarDuration -
              minStarDuration);

        const duration =
          baseDuration / (0.35 + depth);

        const delay =
          Math.random() * maxStarDelay;

        const opacity =
          starMinOpacity +
          depth *
            (starMaxOpacity -
              starMinOpacity);

        return {
          id: index,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          depth,
          size,
          duration,
          delay,
          opacity,
        };
      }
    );
  }, [
    starCount,
    starMinDistance,
    starMaxDistance,
    starMinDepth,
    starMaxDepth,
    smallStarSize,
    mediumStarSize,
    largeStarMinSize,
    largeStarMaxSize,
    starMinOpacity,
    starMaxOpacity,
    minStarDuration,
    maxStarDuration,
    maxStarDelay,
  ]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`starfield-button ${className}`}
      style={{
        "--star-width": `${width}px`,
        "--star-height": `${height}px`,

        "--star-color": color,
        "--star-accent": accentColor,
        "--star-text-color": textColor,
        "--star-background": backgroundColor,

        "--star-radius": `${radius}px`,
        "--star-border-width": `${borderWidth}px`,
        "--star-border-color": borderColor,
        "--star-hover-border-color":
          hoverBorderColor,

        "--star-speed": hovered
          ? safeSpeed * 0.45
          : safeSpeed,

        "--star-center-glow-size":
          `${centerGlowSize}px`,
        "--star-center-glow-opacity":
          centerGlowOpacity,
        "--star-center-glow-blur":
          `${centerGlowBlur}px`,

        "--star-vignette-middle-opacity":
          vignetteMiddleOpacity,
        "--star-vignette-outer-opacity":
          vignetteOuterOpacity,

        "--star-font-size":
          `${fontSize}px`,
        "--star-font-weight":
          fontWeight,
        "--star-letter-spacing":
          letterSpacing,
        "--star-content-hover-scale":
          contentHoverScale,

        "--star-indicator-font-size":
          `${indicatorFontSize}px`,
        "--star-indicator-opacity":
          indicatorOpacity,
        "--star-indicator-spacing":
          indicatorLetterSpacing,
        "--star-indicator-bottom":
          `${indicatorBottom}px`,
        "--star-indicator-right":
          `${indicatorRight}px`,

        "--star-hover-lift":
          `${hoverLift}px`,
        "--star-hover-glow-opacity":
          hoverGlowOpacity,

        "--star-active-scale":
          activeScale,

        "--star-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      <span className="starfield-space" />

      <span className="starfield-stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="starfield-star"
            style={{
              "--star-x": `${star.x}px`,
              "--star-y": `${star.y}px`,
              "--star-depth": star.depth,
              "--star-size": `${star.size}px`,
              "--star-duration":
                `${star.duration}s`,
              "--star-delay":
                `${star.delay}s`,
              "--star-opacity":
                star.opacity,
            }}
          />
        ))}
      </span>

      {showCenterGlow && (
        <span className="starfield-center-glow" />
      )}

      {showVignette && (
        <span className="starfield-vignette" />
      )}

      <span className="starfield-border" />

      <span className="starfield-content">
        {children}
      </span>

      {showIndicator && (
        <span className="starfield-indicator">
          {indicatorText}
        </span>
      )}
    </button>
  );
};

export default StarfieldButton;