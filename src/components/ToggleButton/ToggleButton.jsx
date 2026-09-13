import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({

  checked,
  defaultChecked = false,
  onChange,

  onText = "ON",
  offText = "OFF",

  width = 110,
  height = 52,

  onColor = "#22c55e",
  offColor = "#374151",
  knobColor = "#ffffff",

  radius = 999,

  knobSize,

  knobOffset = 5,

  knobIndicatorSize = 8,

  knobShadow =
    "0 5px 12px rgba(0, 0, 0, 0.25)",

  knobHoverScale = 1.03,

  knobActiveScale = 0.96,

  fontSize = 12,

  fontWeight = 700,

  letterSpacing = "0.08em",

  textOffset = 12,

  showGlow = true,

  glowOpacity = 0.27,

  glowSize = 20,

  onGlowOpacity = 0.35,

  offGlowOpacity = 0.27,

  hoverScale = 1.03,

  hoverBrightness = 1,

  activeScale = 0.95,

  transitionDuration = 300,

  knobTransitionDuration = 300,

  textTransitionDuration = 300,

  disabled = false,

  className = "",

  ...props
}) => {

  const safeKnobSize =
    knobSize ?? Math.max(10, height - 10);

  const [internalChecked, setInternalChecked] =
    useState(defaultChecked);

  const isControlled =
    checked !== undefined;

  const isChecked = isControlled
    ? Boolean(checked)
    : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newValue = !isChecked;

    if (!isControlled) {
      setInternalChecked(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const checkedLeft =
    width -
    safeKnobSize -
    knobOffset;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        toggle-button
        ${isChecked ? "toggle-on" : "toggle-off"}
        ${disabled ? "toggle-disabled" : ""}
        ${className}
      `}
      style={{

        "--toggle-width":
          `${width}px`,

        "--toggle-height":
          `${height}px`,

        "--toggle-on-color":
          onColor,

        "--toggle-off-color":
          offColor,

        "--toggle-knob-color":
          knobColor,

        "--toggle-radius":
          `${radius}px`,

        "--toggle-knob-size":
          `${safeKnobSize}px`,

        "--toggle-knob-offset":
          `${knobOffset}px`,

        "--toggle-knob-left":
          `${checkedLeft}px`,

        "--toggle-knob-shadow":
          knobShadow,

        "--toggle-knob-hover-scale":
          knobHoverScale,

        "--toggle-knob-active-scale":
          knobActiveScale,

        "--toggle-indicator-size":
          `${knobIndicatorSize}px`,

        "--toggle-font-size":
          `${fontSize}px`,

        "--toggle-font-weight":
          fontWeight,

        "--toggle-letter-spacing":
          letterSpacing,

        "--toggle-text-offset":
          `${textOffset}px`,

        "--toggle-glow-opacity":
          glowOpacity,

        "--toggle-glow-size":
          `${glowSize}px`,

        "--toggle-on-glow-opacity":
          onGlowOpacity,

        "--toggle-off-glow-opacity":
          offGlowOpacity,

        "--toggle-hover-scale":
          hoverScale,

        "--toggle-hover-brightness":
          hoverBrightness,

        "--toggle-active-scale":
          activeScale,

        "--toggle-transition":
          `${transitionDuration}ms`,

        "--toggle-knob-transition":
          `${knobTransitionDuration}ms`,

        "--toggle-text-transition":
          `${textTransitionDuration}ms`,
      }}
      {...props}
    >

      {showGlow && (
        <span className="toggle-glow" />
      )}

      <span className="toggle-off-text">
        {offText}
      </span>

      <span className="toggle-on-text">
        {onText}
      </span>

      <span className="toggle-knob">
        <span className="toggle-indicator" />
      </span>
    </button>
  );
};

export default ToggleButton;