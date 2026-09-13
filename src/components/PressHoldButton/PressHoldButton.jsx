import { useState, useRef, useEffect } from "react";
import "./PressHoldButton.css";

const PressHoldButton = ({

  children = "Hold to unlock",
  holdingText = "keep holding...",
  successText = "Unlocked",

  normalIcon = "○",
  holdingIcon = "●",
  successIcon = "✓",

  width = 240,
  height = 64,

  background = "#0fe3c3",
  accentColor = "#f472b6",
  successColor = "#1135e6",

  textColor = "#ffffff",
  holdingTextColor = null,
  successTextColor = "#ffffff",

  iconColor = "#eb0994",
  successIconColor = "#ffffff",

  radius = 18,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.1)",

  ringSize = 48,
  ringRadius = 25,
  ringStrokeWidth = 3,
  ringBackgroundColor = "rgba(255,255,255,0.12)",
  ringColor = accentColor,
  ringGlow = 4,

  iconSize = 32,
  iconFontSize = 12,
  iconBackground = "rgba(255,255,255,0.08)",
  iconHoldingBackground = null,
  iconRadius = 50,

  fontSize = 14,
  fontWeight = 700,
  holdingFontWeight = 700,
  successFontSize = 15,
  successFontWeight = 800,
  letterSpacing = "normal",

  gap = 12,
  successGap = 9,

  holdTime = 1500,
  ringTransitionDuration = 25,
  iconTransitionDuration = 180,
  buttonTransitionDuration = 250,
  successDuration = 300,

  holdingIconScale = 1.08,

  showSuccessIcon = true,
  successIconSize = 30,
  successIconBackground = "rgba(255,255,255,0.2)",

  resetOnComplete = false,
  resetDelay = 1500,
  cancelOnPointerLeave = false,

  onComplete,
  onHoldStart,
  onHoldCancel,
  onProgress,
  onReset,

  disabled = false,
  className = "",

  ...props
}) => {
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const [completed, setCompleted] = useState(false);

  const startTimeRef = useRef(null);
  const animationRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const resetButton = () => {
    if (animationRef.current) {
      cancelAnimationFrame(
        animationRef.current
      );
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    startTimeRef.current = null;

    setHolding(false);
    setCompleted(false);
    setProgress(0);

    onReset?.();
  };

  const animate = (timestamp) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed =
      timestamp - startTimeRef.current;

    const currentProgress = Math.min(
      elapsed / holdTime,
      1
    );

    setProgress(currentProgress);

    onProgress?.(currentProgress);

    if (currentProgress >= 1) {
      setHolding(false);
      setCompleted(true);
      setProgress(1);

      startTimeRef.current = null;
      animationRef.current = null;

      onComplete?.();

      if (resetOnComplete) {
        resetTimeoutRef.current =
          setTimeout(() => {
            resetButton();
          }, resetDelay);
      }

      return;
    }

    animationRef.current =
      requestAnimationFrame(animate);
  };

  const startHolding = (event) => {
    if (disabled || completed || holding) {
      return;
    }

    if (
      event.currentTarget.setPointerCapture
    ) {
      try {
        event.currentTarget.setPointerCapture(
          event.pointerId
        );
      } catch {

      }
    }

    setHolding(true);
    setProgress(0);

    startTimeRef.current = null;

    onHoldStart?.(event);

    animationRef.current =
      requestAnimationFrame(animate);
  };

  const stopHolding = (event) => {
    if (completed) return;

    if (animationRef.current) {
      cancelAnimationFrame(
        animationRef.current
      );

      animationRef.current = null;
    }

    startTimeRef.current = null;

    setHolding(false);
    setProgress(0);

    onHoldCancel?.(event);
  };

  const handlePointerLeave = (event) => {
    if (
      cancelOnPointerLeave &&
      holding &&
      !completed
    ) {
      stopHolding(event);
    }
  };

  const circumference =
    2 * Math.PI * ringRadius;

  const dashOffset =
    circumference -
    circumference * progress;

  const currentHoldingTextColor =
    holdingTextColor || accentColor;

  const currentIconHoldingBackground =
    iconHoldingBackground ||
    `color-mix(
      in srgb,
      ${accentColor} 25%,
      transparent
    )`;

  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        press-hold-button
        ${holding ? "press-holding" : ""}
        ${completed ? "press-completed" : ""}
        ${className}
      `}
      style={{

        "--press-width": `${width}px`,
        "--press-height": `${height}px`,
        "--press-background": background,
        "--press-accent": accentColor,
        "--press-success": successColor,
        "--press-text": textColor,
        "--press-holding-text":
          currentHoldingTextColor,
        "--press-success-text":
          successTextColor,
        "--press-icon": iconColor,
        "--press-success-icon":
          successIconColor,

        "--press-radius": `${radius}px`,
        "--press-border-width":
          `${borderWidth}px`,
        "--press-border-color":
          borderColor,

        "--press-ring-size":
          `${ringSize}px`,
        "--press-ring-radius":
          ringRadius,
        "--press-ring-stroke":
          ringStrokeWidth,
        "--press-ring-background":
          ringBackgroundColor,
        "--press-ring-color":
          ringColor,
        "--press-ring-glow":
          `${ringGlow}px`,

        "--press-icon-size":
          `${iconSize}px`,
        "--press-icon-font-size":
          `${iconFontSize}px`,
        "--press-icon-background":
          iconBackground,
        "--press-icon-holding-background":
          currentIconHoldingBackground,
        "--press-icon-radius":
          `${iconRadius}%`,
        "--press-icon-scale":
          holdingIconScale,

        "--press-font-size":
          `${fontSize}px`,
        "--press-font-weight":
          fontWeight,
        "--press-holding-font-weight":
          holdingFontWeight,
        "--press-success-font-size":
          `${successFontSize}px`,
        "--press-success-font-weight":
          successFontWeight,
        "--press-letter-spacing":
          letterSpacing,

        "--press-gap":
          `${gap}px`,
        "--press-success-gap":
          `${successGap}px`,

        "--press-ring-transition":
          `${ringTransitionDuration}ms`,
        "--press-icon-transition":
          `${iconTransitionDuration}ms`,
        "--press-button-transition":
          `${buttonTransitionDuration}ms`,
        "--press-success-duration":
          `${successDuration}ms`,

        "--press-success-icon-size":
          `${successIconSize}px`,
        "--press-success-icon-background":
          successIconBackground,
      }}
      onPointerDown={startHolding}
      onPointerUp={stopHolding}
      onPointerCancel={stopHolding}
      onPointerLeave={handlePointerLeave}
      {...props}
    >

      {!completed && (
        <div className="press-circle">
          <svg
            className="press-ring"
            viewBox="0 0 60 60"
            aria-hidden="true"
          >
            <circle
              className="press-ring-background"
              cx="30"
              cy="30"
              r={ringRadius}
            />

            <circle
              className="press-ring-progress"
              cx="30"
              cy="30"
              r={ringRadius}
              style={{
                strokeDasharray:
                  circumference,
                strokeDashoffset:
                  dashOffset,
              }}
            />
          </svg>

          <span className="press-icon">
            {holding
              ? holdingIcon
              : normalIcon}
          </span>
        </div>
      )}

      {!completed && (
        <span className="press-text">
          {holding
            ? holdingText
            : children}
        </span>
      )}

      {completed && (
        <div className="press-success">
          {showSuccessIcon && (
            <span className="press-success-icon">
              {successIcon}
            </span>
          )}

          <span>{successText}</span>
        </div>
      )}
    </button>
  );
};

export default PressHoldButton;