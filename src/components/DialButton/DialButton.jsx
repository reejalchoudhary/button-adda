import { useEffect, useRef, useState } from "react";
import "./DialButton.css";

const DialButton = ({

  children = "Continue",
  inactiveText = "Rotate to activate",
  activeText = "Action confirmed",
  completedText = "Completed",

  width = 260,
  height = 70,

  color = "#8b5cf6",
  textColor = "#ffffff",
  subtitleColor = "#94a3b8",
  backgroundColor = "#111318",
  borderColor = "rgba(255,255,255,0.1)",

  radius = 18,

  knobSize = 52,
  knobColor = "#18181b",
  knobCenterColor = "#8b5cf6",

  progressColor = "#8b5cf6",
  progressTrackColor = "rgba(255,255,255,0.12)",
  progressWidth = 4,

  threshold = 360,
  resetAfter = 2200,

  titleFontSize = 15,
  subtitleFontSize = 11,

  showGlow = true,
  glowIntensity = 1,

  statusColor = "#475569",
  statusActiveColor = "#8b5cf6",

  onComplete,

  disabled = false,
  className = "",
  ...props
}) => {
  const knobRef = useRef(null);
  const resetTimer = useRef(null);

  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [completed, setCompleted] = useState(false);

  const lastAngle = useRef(null);
  const accumulated = useRef(0);

  const getAngle = (event) => {
    if (!knobRef.current) return 0;

    const rect = knobRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
      Math.atan2(
        event.clientY - centerY,
        event.clientX - centerX
      ) *
      (180 / Math.PI)
    );
  };

  const complete = () => {
    if (completed) return;

    setCompleted(true);
    setDragging(false);

    onComplete?.();

    clearTimeout(resetTimer.current);

    resetTimer.current = setTimeout(() => {
      accumulated.current = 0;
      lastAngle.current = null;

      setRotation(0);
      setCompleted(false);
    }, resetAfter);
  };

  const handlePointerDown = (event) => {
    if (disabled || completed) return;

    event.preventDefault();

    event.currentTarget.setPointerCapture(event.pointerId);

    lastAngle.current = getAngle(event);

    setDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!dragging || completed || disabled) return;

    const currentAngle = getAngle(event);

    let delta = currentAngle - lastAngle.current;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    if (delta > 0) {
      accumulated.current += delta;

      const nextRotation = Math.min(
        accumulated.current,
        threshold
      );

      setRotation(nextRotation);

      if (nextRotation >= threshold) {
        complete();
      }
    }

    lastAngle.current = currentAngle;
  };

  const handlePointerUp = () => {
    setDragging(false);
    lastAngle.current = null;
  };

  useEffect(() => {
    return () => clearTimeout(resetTimer.current);
  }, []);

  const radiusValue = 22;
  const circumference = 2 * Math.PI * radiusValue;

  const progress = Math.min(rotation / threshold, 1);

  const dashOffset =
    circumference - circumference * progress;

  return (
    <div
      className={[
        "dial-button",
        dragging ? "dial-dragging" : "",
        completed ? "dial-completed" : "",
        disabled ? "dial-disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,

        "--dial-color": color,
        "--dial-text": textColor,
        "--dial-subtitle": subtitleColor,
        "--dial-background": backgroundColor,
        "--dial-border": borderColor,
        "--dial-radius": typeof radius === "number" ? `${radius}px` : radius,

        "--dial-knob-size": typeof knobSize === "number" ? `${knobSize}px` : knobSize,
        "--dial-knob": knobColor,
        "--dial-knob-center": knobCenterColor,

        "--dial-progress": progressColor,
        "--dial-progress-track": progressTrackColor,
        "--dial-progress-width": progressWidth,

        "--dial-title-size": typeof titleFontSize === "number" ? `${titleFontSize}px` : titleFontSize,
        "--dial-subtitle-size": typeof subtitleFontSize === "number" ? `${subtitleFontSize}px` : subtitleFontSize,

        "--dial-glow": glowIntensity,
        "--dial-status": statusColor,
        "--dial-status-active": statusActiveColor,
      }}
      {...props}
    >
      {showGlow && <div className="dial-glow" />}

      <div
        ref={knobRef}
        className="dial-area"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <svg
          className="progress-ring"
          viewBox="0 0 56 56"
        >
          <circle
            className="progress-background"
            cx="28"
            cy="28"
            r={radiusValue}
          />

          <circle
            className="progress-value"
            cx="28"
            cy="28"
            r={radiusValue}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>

        <div
          className="knob"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="knob-line" />

          <div className="knob-center">
            {completed ? "✓" : "↻"}
          </div>
        </div>
      </div>

      <div className="dial-content">
        <span className="dial-title">
          {completed ? completedText : children}
        </span>

        <span className="dial-subtitle">
          {completed
            ? activeText
            : dragging
              ? `${Math.round(progress * 100)}%`
              : inactiveText}
        </span>
      </div>

      <div
        className={`dial-status ${
          completed ? "active" : ""
        }`}
      >
        <span />
      </div>
    </div>
  );
};

export default DialButton;