import { useEffect, useState } from "react";
import "./ProgressButton.css";

const ProgressButton = ({
  children = "Upload",

  width = 200,
  height = 52,

  progress = 0,

  color = "#6366f1",
  secondaryColor = "#8b5cf6",
  textColor = "#ffffff",
  backgroundColor = "#111827",

  progressStartColor = color,
  progressEndColor = `${color}cc`,
  progressGlowColor = color,

  radius = 12,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.08)",
  hoverBorderColor = "rgba(255,255,255,0.18)",

  showPercentage = true,
  progressText,

  percentageFontSize = 14,
  percentageOpacity = 0.8,

  progressDuration = 500,
  progressEasing = "cubic-bezier(0.22, 1, 0.36, 1)",

  animateProgress = true,

  showProgressShine = true,
  shineWidth = 45,
  shineOpacity = 0.28,
  shineSpeed = 1100,

  showProgressGlow = true,
  progressGlowOpacity = 0.45,
  progressGlowBlur = 14,

  completeText = "Complete",
  completeIcon = "✓",

  showCompleteIcon = true,
  completeScale = 1.05,
  completeDuration = 300,

  completeColor = "#22c55e",
  completeBackgroundColor = backgroundColor,

  showHoverOverlay = true,
  hoverOverlayOpacity = 0.1,

  hoverLift = 4,
  hoverGlowOpacity = 0.25,
  hoverGlowSize = 30,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  activeScale = 0.98,

  onClick,
  onComplete,

  disabled = false,
  className = "",

  ...props
}) => {
  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  const isComplete = safeProgress >= 100;

  const [animatedProgress, setAnimatedProgress] =
    useState(safeProgress);

  useEffect(() => {
    if (!animateProgress) {
      setAnimatedProgress(safeProgress);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setAnimatedProgress(safeProgress);
    });

    return () => cancelAnimationFrame(frame);
  }, [safeProgress, animateProgress]);

  const previousProgress = useState(
    safeProgress
  )[0];

  useEffect(() => {
    if (
      safeProgress >= 100 &&
      previousProgress < 100
    ) {
      onComplete?.();
    }
  }, [safeProgress, previousProgress, onComplete]);

  const handleClick = (event) => {
    if (disabled) return;

    onClick?.(event);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`
        progress-button
        ${isComplete ? "progress-complete" : ""}
        ${className}
      `}
      style={{

        "--progress-width": `${width}px`,
        "--progress-height": `${height}px`,

        "--progress-color": color,
        "--progress-secondary": secondaryColor,
        "--progress-text-color": textColor,
        "--progress-background":
          backgroundColor,

        "--progress-start":
          progressStartColor,
        "--progress-end":
          progressEndColor,
        "--progress-glow-color":
          progressGlowColor,

        "--progress-radius": `${radius}px`,
        "--progress-border-width":
          `${borderWidth}px`,
        "--progress-border-color":
          borderColor,
        "--progress-hover-border-color":
          hoverBorderColor,

        "--progress-value":
          `${animatedProgress}%`,
        "--progress-duration":
          `${progressDuration}ms`,
        "--progress-easing":
          progressEasing,

        "--progress-percentage-size":
          `${percentageFontSize}px`,
        "--progress-percentage-opacity":
          percentageOpacity,

        "--progress-shine-width":
          `${shineWidth}%`,
        "--progress-shine-opacity":
          shineOpacity,
        "--progress-shine-speed":
          `${shineSpeed}ms`,

        "--progress-glow-opacity":
          progressGlowOpacity,
        "--progress-glow-blur":
          `${progressGlowBlur}px`,

        "--progress-complete-color":
          completeColor,
        "--progress-complete-background":
          completeBackgroundColor,
        "--progress-complete-scale":
          completeScale,
        "--progress-complete-duration":
          `${completeDuration}ms`,

        "--progress-hover-overlay-opacity":
          hoverOverlayOpacity,
        "--progress-hover-lift":
          `${hoverLift}px`,
        "--progress-hover-glow-opacity":
          hoverGlowOpacity,
        "--progress-hover-glow-size":
          `${hoverGlowSize}px`,

        "--progress-font-size":
          `${fontSize}px`,
        "--progress-font-weight":
          fontWeight,
        "--progress-letter-spacing":
          letterSpacing,

        "--progress-active-scale":
          activeScale,
      }}
      {...props}
    >

      <span
        className="progress-fill"
        aria-hidden="true"
      />

      {showProgressGlow && (
        <span
          className="progress-fill-glow"
          aria-hidden="true"
        />
      )}

      {showProgressShine && (
        <span
          className="progress-shine"
          aria-hidden="true"
        />
      )}

      {showHoverOverlay && (
        <span
          className="progress-hover-overlay"
          aria-hidden="true"
        />
      )}

      <span className="progress-content">
        {isComplete ? (
          <span className="progress-complete-content">
            {showCompleteIcon && (
              <span className="progress-complete-icon">
                {completeIcon}
              </span>
            )}

            <span>
              {progressText || completeText}
            </span>
          </span>
        ) : (
          <>
            <span>{children}</span>

            {showPercentage && (
              <span className="progress-percentage">
                {Math.round(animatedProgress)}%
              </span>
            )}
          </>
        )}
      </span>
    </button>
  );
};

export default ProgressButton;