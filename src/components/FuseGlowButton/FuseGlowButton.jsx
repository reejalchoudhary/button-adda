import { useEffect, useRef, useState } from "react";
import "./FuseGlowButton.css";

export default function FuseGlowButton({
  children = "Features",
  onClick,
  disabled = false,
  className = "",

  width = 220,
  height = 60,

  color = "#ff941f",
  textColor = "#f5f5f5",

  radius = 12,
  borderColor = "rgba(255, 255, 255, 0.12)",

  fontSize = 16,
  fontWeight = 700,
  letterSpacing = "-0.01em",

  flickerSpeed = 280,
  onDuration = 5000,
  offDuration = 3000,
  breatheDuration = 2500,

  ...props
}) {
  const [lightState, setLightState] = useState("off");

  const timers = useRef([]);
  const clickTimer = useRef(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const startCycle = () => {
    clearTimers();

    setLightState("flicker-1");

    const secondFlicker = setTimeout(() => {
      setLightState("flicker-2");
    }, flickerSpeed);

    const turnOn = setTimeout(() => {
      setLightState("on");
    }, flickerSpeed * 2);

    const turnOff = setTimeout(() => {
      setLightState("off");
    }, flickerSpeed * 2 + onDuration);

    const nextCycle = setTimeout(() => {
      startCycle();
    }, flickerSpeed * 2 + onDuration + offDuration);

    timers.current.push(
      secondFlicker,
      turnOn,
      turnOff,
      nextCycle
    );
  };

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      startCycle();
    }, 1000);

    timers.current.push(initialTimer);

    return () => {
      clearTimers();

      if (clickTimer.current) {
        clearTimeout(clickTimer.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (disabled) return;

    clearTimers();

    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    setLightState("on");

    onClick?.();

    clickTimer.current = setTimeout(() => {
      setLightState("off");

      clickTimer.current = setTimeout(() => {
        startCycle();
      }, offDuration);
    }, onDuration);
  };

  return (
    <button
      type="button"
      className={`fuse-button fuse-${lightState} ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--fuse-color": color,
        "--fuse-text-color": textColor,
        "--fuse-radius": `${radius}px`,
        "--fuse-border-color": borderColor,

        "--fuse-font-size": `${fontSize}px`,
        "--fuse-font-weight": fontWeight,
        "--fuse-letter-spacing": letterSpacing,

        "--fuse-flicker-speed": `${flickerSpeed}ms`,
        "--fuse-breathe-duration": `${breatheDuration}ms`,
      }}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <span className="fuse-surface" />

      <span className="fuse-highlight" />

      <span className="fuse-text">
        {children}
      </span>
    </button>
  );
}