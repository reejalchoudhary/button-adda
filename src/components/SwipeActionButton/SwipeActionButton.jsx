import { useState } from "react";
import "./SwipeActionButton.css";

const SwipeActionButton = ({

  children = "Swipe to confirm",
  successText = "Done!",
  arrow = "→",
  successIcon = "✓",
  handleIcon = "→",

  width = 260,
  height = 58,

  color = "#18181b",
  accentColor = "#a78bfa",
  successColor = "#22c55e",
  textColor = "#ffffff",
  successTextColor = "#ffffff",
  handleBackground = "#ffffff",
  handleColor = "#18181b",

  radius = 14,
  borderWidth = 1,
  borderColor = "rgba(255, 255, 255, 0.08)",

  handleSize = 44,
  handleOffset = 4,
  handleRadius = 10,
  handleFontSize = 20,
  handleHoverScale = 1.04,
  handleDraggingScale = 1.08,

  progressColor = accentColor,
  completionThreshold = 0.95,
  progressOpacity = 1,

  fontSize = 14,
  fontWeight = 600,
  letterSpacing = "0.02em",
  contentGap = 8,

  arrowOpacity = 0.55,
  arrowAnimation = true,
  arrowAnimationDuration = 1200,
  arrowMoveDistance = 5,

  successFontSize = 15,
  successFontWeight = 800,
  successLetterSpacing = "0.03em",
  successGap = 9,
  successIconSize = 28,
  successIconBackground = "rgba(255, 255, 255, 0.2)",

  completionIconSize = 34,
  completionIconBackground = "rgba(255, 255, 255, 0.18)",
  completionIconFontSize = 18,

  shadowColor = "rgba(0, 0, 0, 0.25)",
  shadowX = 0,
  shadowY = 10,
  shadowBlur = 30,

  handleShadow = "rgba(0, 0, 0, 0.3)",
  handleHoverShadow = "rgba(0, 0, 0, 0.4)",
  handleDraggingShadow = "rgba(0, 0, 0, 0.45)",

  successShadowColor = "rgba(34, 197, 94, 0.25)",
  successShadowY = 12,
  successShadowBlur = 35,

  transitionDuration = 250,
  handleTransitionDuration = 120,
  successAnimationDuration = 300,

  resetOnRelease = true,

  onComplete,
  onSwipeStart,
  onSwipeCancel,
  onProgress,

  disabled = false,
  className = "",
  ...props
}) => {
  const [progress, setProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [completed, setCompleted] = useState(false);

  const updateProgress = (clientX, element) => {
    if (!element || completed || disabled) {
      return;
    }

    const rect = element.getBoundingClientRect();

    const safeHandleSize = Math.min(
      handleSize,
      Math.max(1, rect.width - handleOffset * 2)
    );

    const maxDistance =
      rect.width -
      safeHandleSize -
      handleOffset * 2;

    if (maxDistance <= 0) {
      return;
    }

    const start =
      rect.left +
      handleOffset +
      safeHandleSize / 2;

    let distance = clientX - start;

    distance = Math.max(
      0,
      Math.min(distance, maxDistance)
    );

    const newProgress =
      distance / maxDistance;

    setProgress(newProgress);

    if (onProgress) {
      onProgress(newProgress);
    }

    if (
      newProgress >= completionThreshold
    ) {
      setProgress(1);
      setCompleted(true);
      setDragging(false);

      if (onProgress) {
        onProgress(1);
      }

      if (onComplete) {
        onComplete();
      }
    }
  };

  const handlePointerDown = (event) => {
    if (disabled || completed) {
      return;
    }

    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setDragging(true);

    if (onSwipeStart) {
      onSwipeStart();
    }
  };

  const handlePointerMove = (event) => {
    if (!dragging || completed || disabled) {
      return;
    }

    const button =
      event.currentTarget.closest(
        ".swipe-action-button"
      );

    updateProgress(
      event.clientX,
      button
    );
  };

  const resetProgress = () => {
    setDragging(false);

    if (!completed && resetOnRelease) {
      setProgress(0);

      if (onProgress) {
        onProgress(0);
      }
    }
  };

  const handlePointerUp = (event) => {
    if (completed) {
      return;
    }

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {

    }

    if (
      progress < completionThreshold
    ) {
      if (onSwipeCancel) {
        onSwipeCancel(progress);
      }
    }

    resetProgress();
  };

  const handlePointerCancel = () => {
    if (completed) {
      return;
    }

    if (onSwipeCancel) {
      onSwipeCancel(progress);
    }

    resetProgress();
  };

  const handlePosition =
    handleOffset +
    progress *
      Math.max(
        0,
        width -
          handleSize -
          handleOffset * 2
      );

  return (
    <div
      className={`swipe-action-button ${
        completed
          ? "swipe-action-completed"
          : ""
      } ${
        disabled
          ? "swipe-action-disabled"
          : ""
      } ${className}`}
      style={{
        "--swipe-width": `${width}px`,
        "--swipe-height": `${height}px`,

        "--swipe-color": color,
        "--swipe-accent": progressColor,
        "--swipe-success": successColor,

        "--swipe-text-color": textColor,
        "--swipe-success-text-color":
          successTextColor,

        "--swipe-radius": `${radius}px`,
        "--swipe-border-width":
          `${borderWidth}px`,
        "--swipe-border-color":
          borderColor,

        "--swipe-handle-size":
          `${handleSize}px`,
        "--swipe-handle-offset":
          `${handleOffset}px`,
        "--swipe-handle-radius":
          `${handleRadius}px`,
        "--swipe-handle-background":
          handleBackground,
        "--swipe-handle-color":
          handleColor,
        "--swipe-handle-font-size":
          `${handleFontSize}px`,

        "--swipe-handle-hover-scale":
          handleHoverScale,
        "--swipe-handle-drag-scale":
          handleDraggingScale,

        "--swipe-progress-opacity":
          progressOpacity,

        "--swipe-font-size":
          `${fontSize}px`,
        "--swipe-font-weight":
          fontWeight,
        "--swipe-letter-spacing":
          letterSpacing,
        "--swipe-content-gap":
          `${contentGap}px`,

        "--swipe-arrow-opacity":
          arrowOpacity,
        "--swipe-arrow-duration":
          `${arrowAnimationDuration}ms`,
        "--swipe-arrow-distance":
          `${arrowMoveDistance}px`,

        "--swipe-success-font-size":
          `${successFontSize}px`,
        "--swipe-success-font-weight":
          successFontWeight,
        "--swipe-success-spacing":
          successLetterSpacing,
        "--swipe-success-gap":
          `${successGap}px`,

        "--swipe-success-icon-size":
          `${successIconSize}px`,
        "--swipe-success-icon-background":
          successIconBackground,

        "--swipe-completion-icon-size":
          `${completionIconSize}px`,
        "--swipe-completion-icon-background":
          completionIconBackground,
        "--swipe-completion-icon-font-size":
          `${completionIconFontSize}px`,

        "--swipe-shadow":
          `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`,

        "--swipe-handle-shadow-color":
          handleShadow,
        "--swipe-handle-hover-shadow-color":
          handleHoverShadow,
        "--swipe-handle-dragging-shadow-color":
          handleDraggingShadow,

        "--swipe-success-shadow-color":
          successShadowColor,
        "--swipe-success-shadow-y":
          `${successShadowY}px`,
        "--swipe-success-shadow-blur":
          `${successShadowBlur}px`,

        "--swipe-transition":
          `${transitionDuration}ms`,
        "--swipe-handle-transition":
          `${handleTransitionDuration}ms`,
        "--swipe-success-animation":
          `${successAnimationDuration}ms`,

        "--swipe-handle-left":
          `${handlePosition}px`,
      }}
      {...props}
    >

      {!completed && (
        <div
          className="swipe-progress"
          style={{
            width: `${progress * 100}%`,
            transition: dragging
              ? "none"
              : "width 200ms ease",
          }}
        />
      )}

      {!completed && (
        <div className="swipe-text">
          {arrowAnimation ? (
            <span className="swipe-arrow">
              {arrow}
            </span>
          ) : (
            <span className="swipe-arrow-static">
              {arrow}
            </span>
          )}

          <span>{children}</span>
        </div>
      )}

      {completed && (
        <div className="swipe-success-text">
          <span className="success-check">
            {successIcon}
          </span>

          <span>{successText}</span>
        </div>
      )}

      {!completed && (
        <div
          className={`swipe-handle ${
            dragging
              ? "swipe-dragging"
              : ""
          }`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {handleIcon}
        </div>
      )}

      {/* {completed && (
        <div className="swipe-complete-icon">
          {successIcon}
        </div>
      )} */}
    </div>
  );
};

export default SwipeActionButton;