import { useRef, useState } from "react";
import "./MagneticGlowButton.css";

const MagneticGlowButton = ({
  children = "Magnetic Button",

  width = 200,
  height = 54,

  color = "#8b5cf6",
  textColor = "#ffffff",
  backgroundColor = "#080b16",

  radius = 14,

  strength = 0.25,
  maxMove = 0,

  glowSize = 180,
  glowOpacity = 0.35,
  glowBlur = 32,

  glassOpacity = 0.03,
  glassBlur = 4,

  borderColor,
  borderOpacity = 0.5,
  borderWidth = 1,
  borderGlow = 0.27,
  borderGlowSize = 15,

  showShine = true,
  shineWidth = 25,
  shineOpacity = 0.2,
  shineAngle = 12,
  shineSpeed = 700,
  shineHoverPosition = 130,

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",
  contentGlow = 10,

  transitionDuration = 200,
  hoverLift = 0,
  activeScale = 0.97,

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

  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (event) => {
    if (!buttonRef.current || disabled) return;

    const rect =
      buttonRef.current.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let moveX =
      (mouseX - centerX) * strength;

    let moveY =
      (mouseY - centerY) * strength;

    if (maxMove > 0) {
      moveX = Math.max(
        -maxMove,
        Math.min(maxMove, moveX)
      );

      moveY = Math.max(
        -maxMove,
        Math.min(maxMove, moveY)
      );
    }

    setPosition({
      x: moveX,
      y: moveY,
    });

    setGlow({
      x: (mouseX / rect.width) * 100,
      y: (mouseY / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);

    setPosition({
      x: 0,
      y: 0,
    });

    setGlow({
      x: 50,
      y: 50,
    });
  };

  const finalBorderColor =
    borderColor || color;

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={`magnetic-glow-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        borderRadius: `${radius}px`,

        color: textColor,
        backgroundColor,

        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        transform: `
          translate3d(
            ${position.x}px,
            ${position.y - hoverLift}px,
            0
          )
        `,

        borderColor: `color-mix(
          in srgb,
          ${finalBorderColor}
          ${borderOpacity * 100}%,
          transparent
        )`,

        boxShadow: hovered
          ? `0 0 30px color-mix(
              in srgb,
              ${color} 21%,
              transparent
            )`
          : "0 0 0 transparent",

        "--magnetic-color": color,
        "--magnetic-text-color": textColor,

        "--glow-size": `${glowSize}px`,
        "--glow-x": `${glow.x}%`,
        "--glow-y": `${glow.y}%`,
        "--glow-opacity": glowOpacity,
        "--glow-blur": `${glowBlur}px`,

        "--glass-opacity": glassOpacity,
        "--glass-blur": `${glassBlur}px`,

        "--border-width": `${borderWidth}px`,
        "--border-glow": borderGlow,
        "--border-glow-size":
          `${borderGlowSize}px`,

        "--shine-width": `${shineWidth}%`,
        "--shine-opacity": shineOpacity,
        "--shine-angle": `${shineAngle}deg`,
        "--shine-speed": `${shineSpeed}ms`,
        "--shine-hover-position":
          `${shineHoverPosition}%`,

        "--content-glow":
          `${contentGlow}px`,

        "--transition-duration":
          `${transitionDuration}ms`,

        "--active-scale": activeScale,
      }}
      {...props}
    >

      <span className="magnetic-cursor-glow" />

      <span className="magnetic-glass" />

      <span className="magnetic-border-glow" />

      {showShine && (
        <span className="magnetic-shine" />
      )}

      <span className="magnetic-content">
        {children}
      </span>
    </button>
  );
};

export default MagneticGlowButton;