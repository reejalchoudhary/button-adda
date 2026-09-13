import { useState, useRef, useEffect } from "react";
import "./SplitButton.css";

const SplitButton = ({
  children = "Save",
  options = ["Save as Draft", "Save & Publish", "Save as Template"],

  width = 200,
  height = 52,

  color = "#6366f1",
  textColor = "#ffffff",
  dividerColor,

  radius = 10,

  hoverBrightness = 1.1,
  activeScale = 0.98,

  arrow = "▼",
  arrowSize = 18,
  arrowOpenRotation = 180,

  dropdownGap = 8,
  dropdownBackground = "rgba(11, 16, 32, 0.95)",
  dropdownBorderColor = "rgba(255, 255, 255, 0.1)",
  dropdownRadius = 12,
  dropdownPadding = 6,
  dropdownBlur = 20,
  dropdownShadow =
    "0 25px 50px -12px rgba(0, 0, 0, 0.45)",

  optionTextColor = "#d1d5db",
  optionHoverBackground = "rgba(255, 255, 255, 0.1)",
  optionHoverTextColor = "#ffffff",
  optionFontSize = 14,
  optionPaddingX = 16,
  optionPaddingY = 12,
  optionRadius = 8,

  showHoverGlow = true,
  hoverGlowOpacity = 0.1,

  animationDuration = 300,
  dropdownAnimationDuration = 200,

  onClick,
  onOptionClick,

  disabled = false,
  className = "",
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const safeDividerColor = dividerColor || color;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleOptionClick = (option) => {
    setOpen(false);

    if (onOptionClick) {
      onOptionClick(option);
    }
  };

  const toggleDropdown = () => {
    if (disabled) return;

    setOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className={`split-button-wrapper ${className}`}
      style={{
        "--split-width": `${width}px`,
        "--split-height": `${height}px`,
        "--split-color": color,
        "--split-text-color": textColor,
        "--split-divider-color": safeDividerColor,
        "--split-radius": `${radius}px`,
        "--split-hover-brightness": hoverBrightness,
        "--split-active-scale": activeScale,
        "--split-animation-duration": `${animationDuration}ms`,
        "--split-dropdown-gap": `${dropdownGap}px`,
        "--split-dropdown-background": dropdownBackground,
        "--split-dropdown-border": dropdownBorderColor,
        "--split-dropdown-radius": `${dropdownRadius}px`,
        "--split-dropdown-padding": `${dropdownPadding}px`,
        "--split-dropdown-blur": `${dropdownBlur}px`,
        "--split-dropdown-shadow": dropdownShadow,
        "--split-option-color": optionTextColor,
        "--split-option-hover-background":
          optionHoverBackground,
        "--split-option-hover-color": optionHoverTextColor,
        "--split-option-font-size": `${optionFontSize}px`,
        "--split-option-padding-x": `${optionPaddingX}px`,
        "--split-option-padding-y": `${optionPaddingY}px`,
        "--split-option-radius": `${optionRadius}px`,
        "--split-hover-glow-opacity": hoverGlowOpacity,
        "--split-dropdown-animation-duration": `${dropdownAnimationDuration}ms`,
        "--split-arrow-size": `${arrowSize}px`,
        "--split-arrow-rotation": `${arrowOpenRotation}deg`,
      }}
    >

      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="split-button-main"
        {...props}
      >
        {showHoverGlow && (
          <span className="split-button-hover-glow" />
        )}

        <span className="split-button-main-content">
          {children}
        </span>
      </button>

      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        aria-label="Open options"
        aria-expanded={open}
        className="split-button-trigger"
      >
        <span
          className={`split-button-arrow ${
            open ? "split-button-arrow-open" : ""
          }`}
        >
          {arrow}
        </span>
      </button>

      <div
        className={`split-button-dropdown ${
          open
            ? "split-button-dropdown-open"
            : "split-button-dropdown-closed"
        }`}
      >
        {options.map((option, index) => (
          <button
            key={`${option}-${index}`}
            type="button"
            onClick={() => handleOptionClick(option)}
            className="split-button-option"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SplitButton;