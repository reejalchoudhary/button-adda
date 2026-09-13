import { useEffect, useRef, useState } from "react";
import "./BlackHoleButton.css";

const BlackHoleButton = ({
  children = "Send",

  width = 110,
  height = 110,

  color = "#8b5cf6",
  textColor = "#ffffff",
  radius = "50%",

  gravityRadius = 190,
  attractionStrength = 0.18,
  snapDistance = 32,
  autoClickDelay = 700,

  onClick,

  disabled = false,
  className = "",

  ...props
}) => {
  const buttonRef = useRef(null);

  const animationRef = useRef(null);
  const autoClickTimer = useRef(null);
  const activationTimer = useRef(null);

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const positionRef = useRef({
    x: 0,
    y: 0,
  });

  const [isAttracting, setIsAttracting] =
    useState(false);

  const [isSnapping, setIsSnapping] =
    useState(false);

  const [isActivated, setIsActivated] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const toCssSize = (value) => {
    return typeof value === "number"
      ? `${value}px`
      : value;
  };

  const toCssRadius = (value) => {
    return typeof value === "number"
      ? `${value}px`
      : value;
  };

  const triggerClick = () => {
    if (disabled || isActivated) {
      return;
    }

    setIsActivated(true);

    onClick?.();

    clearTimeout(
      activationTimer.current
    );

    activationTimer.current =
      setTimeout(() => {
        setIsActivated(false);
        setIsSnapping(false);

        autoClickTimer.current = null;
      }, 900);
  };

  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [disabled]);

  useEffect(() => {
    if (disabled) {
      return;
    }

    const updateGravity = () => {
      if (!buttonRef.current) {
        animationRef.current =
          requestAnimationFrame(
            updateGravity
          );

        return;
      }

      const rect =
        buttonRef.current.getBoundingClientRect();

      const centerX =
        rect.left +
        rect.width / 2;

      const centerY =
        rect.top +
        rect.height / 2;

      const dx =
        centerX -
        mouseRef.current.x;

      const dy =
        centerY -
        mouseRef.current.y;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      if (
        distance >
        gravityRadius
      ) {
        setIsAttracting(false);
        setProgress(0);

        positionRef.current.x *= 0.82;
        positionRef.current.y *= 0.82;

        buttonRef.current.style.setProperty(
          "--gravity-x",
          `${positionRef.current.x}px`
        );

        buttonRef.current.style.setProperty(
          "--gravity-y",
          `${positionRef.current.y}px`
        );

        animationRef.current =
          requestAnimationFrame(
            updateGravity
          );

        return;
      }

      setIsAttracting(true);

      const gravityProgress =
        Math.max(
          0,
          Math.min(
            1,
            1 -
              distance /
                gravityRadius
          )
        );

      setProgress(
        gravityProgress
      );

      const force =
        attractionStrength *
        (
          0.4 +
          gravityProgress * 1.8
        );

      positionRef.current.x +=
        dx * force;

      positionRef.current.y +=
        dy * force;

      const maxMovement = 18;

      positionRef.current.x =
        Math.max(
          -maxMovement,
          Math.min(
            maxMovement,
            positionRef.current.x
          )
        );

      positionRef.current.y =
        Math.max(
          -maxMovement,
          Math.min(
            maxMovement,
            positionRef.current.y
          )
        );

      buttonRef.current.style.setProperty(
        "--gravity-x",
        `${positionRef.current.x}px`
      );

      buttonRef.current.style.setProperty(
        "--gravity-y",
        `${positionRef.current.y}px`
      );

      if (
        distance <= snapDistance &&
        !isSnapping &&
        !isActivated
      ) {
        setIsSnapping(true);

        if (
          !autoClickTimer.current
        ) {
          autoClickTimer.current =
            setTimeout(() => {
              triggerClick();
            }, autoClickDelay);
        }
      }

      animationRef.current =
        requestAnimationFrame(
          updateGravity
        );
    };

    animationRef.current =
      requestAnimationFrame(
        updateGravity
      );

    return () => {
      cancelAnimationFrame(
        animationRef.current
      );

      clearTimeout(
        autoClickTimer.current
      );

      clearTimeout(
        activationTimer.current
      );

      autoClickTimer.current = null;
      activationTimer.current = null;
    };
  }, [
    disabled,
    gravityRadius,
    attractionStrength,
    snapDistance,
    autoClickDelay,
    isSnapping,
    isActivated,
  ]);

  useEffect(() => {
    if (!isSnapping) {
      return;
    }

    const checkMouse = () => {
      if (!buttonRef.current) {
        return;
      }

      const rect =
        buttonRef.current.getBoundingClientRect();

      const centerX =
        rect.left +
        rect.width / 2;

      const centerY =
        rect.top +
        rect.height / 2;

      const dx =
        centerX -
        mouseRef.current.x;

      const dy =
        centerY -
        mouseRef.current.y;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );

      if (
        distance >
        snapDistance * 1.8
      ) {
        clearTimeout(
          autoClickTimer.current
        );

        autoClickTimer.current = null;

        setIsSnapping(false);
      }
    };

    window.addEventListener(
      "mousemove",
      checkMouse
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        checkMouse
      );
    };
  }, [
    isSnapping,
    snapDistance,
  ]);

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={triggerClick}
      className={[
        "blackhole-button",
        isAttracting
          ? "gravity-active"
          : "",
        isSnapping
          ? "gravity-snapping"
          : "",
        isActivated
          ? "gravity-activated"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--blackhole-width":
          toCssSize(width),

        "--blackhole-height":
          toCssSize(height),

        "--blackhole-radius":
          toCssRadius(radius),

        "--blackhole-color":
          color,

        "--blackhole-text-color":
          textColor,

        "--gravity-progress":
          progress,
      }}
      {...props}
    >

      <span
        className="gravity-field"
        aria-hidden="true"
      />

      <span
        className="gravity-orbit"
        aria-hidden="true"
      >
        <i />
      </span>

      <span
        className="gravity-hole"
        aria-hidden="true"
      >
        <span className="gravity-hole-core" />
      </span>

      <span className="gravity-content">
        <span className="gravity-label">
          {children}
        </span>

        {isSnapping && (
          <span className="gravity-ready">
            RELEASE
          </span>
        )}
      </span>

      <span
        className="gravity-burst"
        aria-hidden="true"
      >
        {Array.from({
          length: 12,
        }).map((_, index) => (
          <i key={index} />
        ))}
      </span>
    </button>
  );
};

export default BlackHoleButton;