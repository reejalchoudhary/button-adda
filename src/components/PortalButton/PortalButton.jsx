import { useState } from "react";
import "./PortalButton.css";

const PortalButton = ({
  children = "Open Portal",

  width = 230,
  height = 62,

  backgroundColor = "#070b16",
  primaryColor = "#60a5fa",
  secondaryColor = "#818cf8",
  innerColor = "#c084fc",
  textColor = "#f8fafc",
  arrowColor = "#93c5fd",

  radius = 18,
  borderWidth = 1,
  borderOpacity = 0.22,
  hoverBorderOpacity = 0.6,

  showBackground = true,
  backgroundOpacity = 1,
  backgroundHoverScale = 1.7,
  backgroundColorOpacity = 0.12,
  backgroundDuration = 700,

  showRings = true,

  outerRingSize = 105,
  outerRingHoverSize = 130,
  outerRingBorderColor = "rgba(96,165,250,.22)",
  outerRingHoverOpacity = 0.9,
  outerRingOpacity = 1,
  outerRingDuration = 12,

  middleRingSize = 76,
  middleRingHoverSize = 92,
  middleRingOpacity = 0.55,
  middleRingHoverOpacity = 0.9,
  middleRingDuration = 5,

  innerRingSize = 52,
  innerRingHoverSize = 62,
  innerRingDuration = 3,

  showCore = true,
  coreSize = 29,
  coreDotSize = 7,
  coreBackground = "#020617",
  coreDotColor = "#93c5fd",
  coreGlowColor = "#60a5fa",
  corePulseDuration = 1.5,
  coreHoverScale = 1.25,

  showRays = true,
  rayColor = "#93c5fd",
  rayWidth = 3,
  rayHeight = 18,
  rayOpacity = 0.7,
  rayAnimationDuration = 1.2,

  showArrow = true,
  arrow = "↗",
  arrowGap = 10,
  arrowSize = 17,

  contentPaddingX = 18,
  contentPaddingY = 9,
  contentRadius = 11,
  contentBackground = "rgba(7,11,22,.88)",
  contentBlur = 8,

  fontSize = 14,
  fontWeight = 800,
  letterSpacing = "0.025em",

  portalDuration = 900,
  contentAnimationDuration = 900,

  contentCollapseScale = 0.08,

  contentEmergenceScale = 1.12,

  contentCollapseRotation = -6,
  contentEmergenceRotation = 2,

  hoverLift = 3,
  hoverContentScale = 1,
  arrowHoverX = 4,
  arrowHoverY = -4,

  activeScale = 0.97,
  transitionDuration = 300,

  onClick,
  onPortalComplete,
  disabled = false,
  className = "",

  ...props
}) => {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    if (disabled || active) return;

    setActive(true);

    onClick?.(event);

    window.setTimeout(() => {
      setActive(false);
      onPortalComplete?.(event);
    }, portalDuration);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`portal-button ${
        active ? "portal-active" : ""
      } ${className}`}
      style={{

        "--portal-width": `${width}px`,
        "--portal-height": `${height}px`,

        "--portal-background":
          backgroundColor,

        "--portal-primary":
          primaryColor,

        "--portal-secondary":
          secondaryColor,

        "--portal-inner":
          innerColor,

        "--portal-text":
          textColor,

        "--portal-arrow":
          arrowColor,

        "--portal-radius":
          `${radius}px`,

        "--portal-border-width":
          `${borderWidth}px`,

        "--portal-border-opacity":
          borderOpacity,

        "--portal-hover-border-opacity":
          hoverBorderOpacity,

        "--portal-background-opacity":
          backgroundOpacity,

        "--portal-background-hover-scale":
          backgroundHoverScale,

        "--portal-background-color-opacity":
          backgroundColorOpacity,

        "--portal-background-duration":
          `${backgroundDuration}ms`,

        "--portal-outer-size":
          `${outerRingSize}px`,

        "--portal-outer-hover-size":
          `${outerRingHoverSize}px`,

        "--portal-outer-border":
          outerRingBorderColor,

        "--portal-outer-opacity":
          outerRingOpacity,

        "--portal-outer-hover-opacity":
          outerRingHoverOpacity,

        "--portal-outer-duration":
          `${outerRingDuration}s`,

        "--portal-middle-size":
          `${middleRingSize}px`,

        "--portal-middle-hover-size":
          `${middleRingHoverSize}px`,

        "--portal-middle-opacity":
          middleRingOpacity,

        "--portal-middle-hover-opacity":
          middleRingHoverOpacity,

        "--portal-middle-duration":
          `${middleRingDuration}s`,

        "--portal-inner-size":
          `${innerRingSize}px`,

        "--portal-inner-hover-size":
          `${innerRingHoverSize}px`,

        "--portal-inner-duration":
          `${innerRingDuration}s`,

        "--portal-core-size":
          `${coreSize}px`,

        "--portal-core-dot-size":
          `${coreDotSize}px`,

        "--portal-core-background":
          coreBackground,

        "--portal-core-dot-color":
          coreDotColor,

        "--portal-core-glow-color":
          coreGlowColor,

        "--portal-core-pulse-duration":
          `${corePulseDuration}s`,

        "--portal-core-hover-scale":
          coreHoverScale,

        "--portal-ray-color":
          rayColor,

        "--portal-ray-width":
          `${rayWidth}px`,

        "--portal-ray-height":
          `${rayHeight}px`,

        "--portal-ray-opacity":
          rayOpacity,

        "--portal-ray-duration":
          `${rayAnimationDuration}s`,

        "--portal-content-padding-x":
          `${contentPaddingX}px`,

        "--portal-content-padding-y":
          `${contentPaddingY}px`,

        "--portal-content-radius":
          `${contentRadius}px`,

        "--portal-content-background":
          contentBackground,

        "--portal-content-blur":
          `${contentBlur}px`,

        "--portal-font-size":
          `${fontSize}px`,

        "--portal-font-weight":
          fontWeight,

        "--portal-letter-spacing":
          letterSpacing,

        "--portal-arrow-gap":
          `${arrowGap}px`,

        "--portal-arrow-size":
          `${arrowSize}px`,

        "--portal-duration":
          `${portalDuration}ms`,

        "--portal-content-duration":
          `${contentAnimationDuration}ms`,

        "--portal-collapse-scale":
          contentCollapseScale,

        "--portal-emergence-scale":
          contentEmergenceScale,

        "--portal-collapse-rotation":
          `${contentCollapseRotation}deg`,

        "--portal-emergence-rotation":
          `${contentEmergenceRotation}deg`,

        "--portal-hover-lift":
          `${hoverLift}px`,

        "--portal-hover-content-scale":
          hoverContentScale,

        "--portal-arrow-hover-x":
          `${arrowHoverX}px`,

        "--portal-arrow-hover-y":
          `${arrowHoverY}px`,

        "--portal-active-scale":
          activeScale,

        "--portal-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      {showBackground && (
        <span className="portal-background" />
      )}

      {showRings && (
        <>
          <span className="portal-ring portal-ring-outer" />

          <span className="portal-ring portal-ring-middle" />

          <span className="portal-ring portal-ring-inner" />
        </>
      )}

      {showCore && (
        <span className="portal-core">
          <span />
        </span>
      )}

      {showRays && (
        <>
          <span className="portal-ray ray-1" />
          <span className="portal-ray ray-2" />
          <span className="portal-ray ray-3" />
          <span className="portal-ray ray-4" />
          <span className="portal-ray ray-5" />
          <span className="portal-ray ray-6" />
        </>
      )}

      <span className="portal-content">
        <span className="portal-label">
          {children}
        </span>

        {showArrow && (
          <span className="portal-arrow">
            {arrow}
          </span>
        )}
      </span>
    </button>
  );
};

export default PortalButton;