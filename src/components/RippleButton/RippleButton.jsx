import { useState } from "react";
import "./RippleButton.css";

const RippleButton = ({
  children = "Ripple Button",

  width = 180,
  height = 52,

  color = "#6366f1",
  textColor = "#ffffff",

  radius = 12,

  rippleColor = "rgba(255,255,255,0.45)",
  rippleDuration = 600,
  rippleMultiplier = 2,

  showHoverGlow = true,
  hoverGlowColor = "#ffffff",
  hoverGlowOpacity = 0.1,
  hoverLift = 4,

  shadowColor = color,
  shadowOpacity = 0.33,
  shadowY = 8,
  shadowBlur = 30,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  activeScale = 0.95,
  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (event) => {
    if (disabled) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const diameter =
      Math.max(rect.width, rect.height) *
      rippleMultiplier;

    const newRipple = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
      size: diameter,
    };

    setRipples((current) => [
      ...current,
      newRipple,
    ]);

    setTimeout(() => {
      setRipples((current) =>
        current.filter(
          (ripple) => ripple.id !== newRipple.id
        )
      );
    }, rippleDuration);

    onClick?.(event);
  };

  const shadow =
    `0 ${shadowY}px ${shadowBlur}px ` +
    `${shadowColor}${Math.round(
      shadowOpacity * 255
    )
      .toString(16)
      .padStart(2, "0")}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`ripple-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--ripple-radius": `${radius}px`,

        "--ripple-color": rippleColor,
        "--ripple-duration": `${rippleDuration}ms`,

        "--ripple-background": color,
        "--ripple-text-color": textColor,

        "--ripple-hover-color":
          hoverGlowColor,
        "--ripple-hover-opacity":
          hoverGlowOpacity,

        "--ripple-shadow": shadow,

        "--ripple-font-size":
          `${fontSize}px`,
        "--ripple-font-weight":
          fontWeight,
        "--ripple-letter-spacing":
          letterSpacing,

        "--ripple-hover-lift":
          `${hoverLift}px`,
        "--ripple-active-scale":
          activeScale,

        "--ripple-transition":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-effect"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
          }}
        />
      ))}

      {showHoverGlow && (
        <span className="ripple-hover-glow" />
      )}

      <span className="ripple-content">
        {children}
      </span>
    </button>
  );
};

export default RippleButton;