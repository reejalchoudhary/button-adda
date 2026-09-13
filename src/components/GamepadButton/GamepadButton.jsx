import { useRef, useState } from "react";
import "./GamepadButton.css";

const GamepadButton = ({
  children = "PLAY GAME",

  width = 230,
  height = 58,

  backgroundColor = "#111827",
  bodyColorStart = "#374151",
  bodyColorEnd = "#1f2937",
  textColor = "#f9fafb",
  triggerColor = "#030712",
  triggerDotColor = "#a78bfa",

  radius = 16,
  bodyRadius = 12,
  triggerSize = 28,
  triggerDotSize = 10,

  gap = 18,

  moveX = 0.12,
  moveY = 0.18,

  shadowOpacity = 0.3,
  triggerGlow = 0.7,

  fontSize = 14,
  fontWeight = 800,
  letterSpacing = "0.08em",

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [pressed, setPressed] = useState(false);

  const handlePointerMove = (event) => {
    if (disabled || !buttonRef.current) return;

    const rect =
      buttonRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    const maxX = rect.width * moveX;
    const maxY = rect.height * moveY;

    const normalizedX = Math.max(
      -maxX,
      Math.min(maxX, x * moveX)
    );

    const normalizedY = Math.max(
      -maxY,
      Math.min(maxY, y * moveY)
    );

    setPosition({
      x: normalizedX,
      y: normalizedY,
    });
  };

  const handlePointerLeave = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  const handlePointerDown = () => {
    if (disabled) return;

    setPressed(true);
  };

  const handlePointerUp = () => {
    if (disabled) return;

    setPressed(false);

    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      className={`
        gamepad-button
        ${pressed ? "gamepad-pressed" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--gamepad-background": backgroundColor,
        "--gamepad-body-start": bodyColorStart,
        "--gamepad-body-end": bodyColorEnd,
        "--gamepad-text": textColor,
        "--gamepad-trigger": triggerColor,
        "--gamepad-trigger-dot": triggerDotColor,

        "--gamepad-radius": `${radius}px`,
        "--gamepad-body-radius": `${bodyRadius}px`,
        "--gamepad-trigger-size": `${triggerSize}px`,
        "--gamepad-trigger-dot-size": `${triggerDotSize}px`,

        "--gamepad-gap": `${gap}px`,

        "--gamepad-shadow-opacity": shadowOpacity,
        "--gamepad-trigger-glow": triggerGlow,

        "--gamepad-font-size": `${fontSize}px`,
        "--gamepad-font-weight": fontWeight,
        "--gamepad-letter-spacing": letterSpacing,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      {...props}
    >
      <span
        className="gamepad-body"
        style={{
          transform: `
            translate(
              ${position.x}px,
              ${position.y}px
            )
          `,
        }}
      >
        <span className="gamepad-text">
          {children}
        </span>

        <span className="gamepad-trigger">
          <span className="gamepad-trigger-dot" />
        </span>
      </span>
    </button>
  );
};

export default GamepadButton;