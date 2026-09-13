import { useEffect, useState } from "react";
import "./MoodButton.css";

const MoodButton = ({
  children = "make it happen",

  width = 220,
  height = 60,

  background = "linear-gradient(135deg, #f9a8d4 0%, #e9d5ff 50%, #c4b5fd 100%)",
  successBackground = "linear-gradient(135deg, #86efac, #67e8f9)",
  textColor = "#18181b",
  borderColor = "rgba(255, 255, 255, 0.55)",
  hoverShadowColor = "rgba(168, 85, 247, 0.22)",
  successShadowColor = "rgba(34, 197, 94, 0.25)",

  radius = 16,
  borderWidth = 1,

  idleEmoji = "✨",
  hoverEmoji = "👀",
  hoverText = "you sure?",
  successText = "LET'S GOOOO",
  successEmoji = "🚀",
  arrow = "→",

  fontSize = 16,
  fontWeight = 800,
  successFontWeight = 900,
  letterSpacing = "normal",
  successLetterSpacing = "0.02em",

  hoverLift = 3,
  hoverRotate = -1,
  hoverArrowMove = 4,

  activeScale = 0.96,

  stateTransition = 220,
  successDuration = 1000,

  blinkDuration = 2,

  showDecorations = true,
  decorationOne = "✨",
  decorationTwo = "💫",
  decorationThree = "⭐",

  decorationOneLeft = 18,
  decorationOneTop = 8,
  decorationTwoRight = 20,
  decorationTwoTop = 8,
  decorationThreeRight = 12,
  decorationThreeBottom = 10,

  decorationOpacity = 1,
  decorationTransition = 450,
  decorationPopDuration = 700,

  showCaption = false,
  caption = "",

  onClick,
  onSuccess,
  disabled = false,
  className = "",
  ...props
}) => {
  const [state, setState] = useState("idle");

  const handleClick = () => {
    if (disabled || state === "success") return;

    setState("success");

    onSuccess?.();
    onClick?.();
  };

  const handleMouseEnter = () => {
    if (state === "idle") {
      setState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (state === "hover") {
      setState("idle");
    }
  };

  useEffect(() => {
    if (state !== "success") return;

    const timer = setTimeout(() => {
      setState("idle");
    }, successDuration);

    return () => clearTimeout(timer);
  }, [state, successDuration]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        mood-button
        ${state === "success" ? "mood-button-success" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        borderWidth: `${borderWidth}px`,

        background:
          state === "success"
            ? successBackground
            : background,

        color: textColor,

        "--mood-border-color": borderColor,
        "--mood-hover-shadow-color":
          hoverShadowColor,
        "--mood-success-shadow-color":
          successShadowColor,

        "--mood-hover-lift":
          `${hoverLift}px`,
        "--mood-hover-rotate":
          `${hoverRotate}deg`,
        "--mood-active-scale":
          activeScale,

        "--mood-state-transition":
          `${stateTransition}ms`,

        "--mood-decoration-transition":
          `${decorationTransition}ms`,
        "--mood-decoration-pop-duration":
          `${decorationPopDuration}ms`,

        "--mood-font-size":
          `${fontSize}px`,
        "--mood-font-weight":
          fontWeight,
        "--mood-letter-spacing":
          letterSpacing,

        "--mood-success-font-weight":
          successFontWeight,
        "--mood-success-letter-spacing":
          successLetterSpacing,

        "--mood-blink-duration":
          `${blinkDuration}s`,

        "--mood-arrow-move":
          `${hoverArrowMove}px`,

        "--mood-decoration-opacity":
          decorationOpacity,

        "--mood-decoration-one-left":
          `${decorationOneLeft}px`,
        "--mood-decoration-one-top":
          `${decorationOneTop}px`,

        "--mood-decoration-two-right":
          `${decorationTwoRight}px`,
        "--mood-decoration-two-top":
          `${decorationTwoTop}px`,

        "--mood-decoration-three-right":
          `${decorationThreeRight}px`,
        "--mood-decoration-three-bottom":
          `${decorationThreeBottom}px`,
      }}
      {...props}
    >

      {showDecorations && (
        <>
          <span className="mood-decoration mood-decoration-one">
            {decorationOne}
          </span>

          <span className="mood-decoration mood-decoration-two">
            {decorationTwo}
          </span>

          <span className="mood-decoration mood-decoration-three">
            {decorationThree}
          </span>
        </>
      )}

      <span className="mood-content">

        <span
          className={`
            mood-state
            mood-idle
            ${state === "idle"
              ? "mood-state-visible"
              : ""}
          `}
        >
          <span>{idleEmoji}</span>
          <span>{children}</span>
        </span>

        <span
          className={`
            mood-state
            mood-hover
            ${state === "hover"
              ? "mood-state-visible"
              : ""}
          `}
        >
          <span className="mood-eyes">
            {hoverEmoji}
          </span>

          <span>{hoverText}</span>

          <span className="mood-arrow">
            {arrow}
          </span>
        </span>

        <span
          className={`
            mood-state
            mood-success
            ${state === "success"
              ? "mood-state-visible"
              : ""}
          `}
        >
          <span>{successText}</span>
          <span>{successEmoji}</span>
        </span>

      </span>

      {showCaption && caption && (
        <span className="mood-caption">
          {caption}
        </span>
      )}
    </button>
  );
};

export default MoodButton;