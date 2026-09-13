import { useRef, useState } from "react";
import "./MagneticTextButton.css";

const MagneticTextButton = ({
  children = "Get Started",

  width = 210,
  height = 58,

  background = "#ffffff",
  textColor = "#111111",
  hoverBackground = "#111111",
  hoverTextColor = "#ffffff",

  radius = 12,

  strength = 0.25,
  maxMove = 0,

  characterTransition = 200,
  characterEase = "ease-out",
  characterXStart = 0.5,
  characterXEnd = 1,
  characterYStart = 0.5,
  characterYEnd = 0.8,

  showArrow = true,
  arrow = "→",
  arrowGap = 8,
  arrowMove = 4,
  arrowTransition = 300,

  borderWidth = 1,
  borderColor = "rgba(0, 0, 0, 0.08)",
  hoverBorderColor = "rgba(255, 255, 255, 0.2)",

  shadow = "0 8px 20px rgba(0, 0, 0, 0.12)",
  hoverShadow = "0 12px 30px rgba(0, 0, 0, 0.2)",

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  transitionDuration = 300,
  activeScale = 0.97,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const characters = String(children).split("");

  const handleMouseMove = (event) => {
    if (!buttonRef.current || disabled) return;

    const rect =
      buttonRef.current.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    let moveX = x * strength;
    let moveY = y * strength;

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
  };

  const handleMouseLeave = () => {
    setHovered(false);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-text-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,

        backgroundColor: hovered
          ? hoverBackground
          : background,

        color: hovered
          ? hoverTextColor
          : textColor,

        borderWidth: `${borderWidth}px`,
        borderColor: hovered
          ? hoverBorderColor
          : borderColor,

        boxShadow: hovered
          ? hoverShadow
          : shadow,

        fontSize: `${fontSize}px`,
        fontWeight,
        letterSpacing,

        "--magnetic-transition":
          `${transitionDuration}ms`,

        "--character-transition":
          `${characterTransition}ms`,

        "--character-ease":
          characterEase,

        "--arrow-gap":
          `${arrowGap}px`,

        "--arrow-move":
          `${arrowMove}px`,

        "--arrow-transition":
          `${arrowTransition}ms`,

        "--active-scale":
          activeScale,
      }}
      {...props}
    >

      <span className="magnetic-text-border" />

      <span className="magnetic-text-content">
        {characters.map((character, index) => {
          const offsetMultiplier =
            index /
            Math.max(
              characters.length - 1,
              1
            );

          const characterX =
            position.x *
            (
              characterXStart +
              offsetMultiplier *
                (characterXEnd - characterXStart)
            );

          const characterY =
            position.y *
            (
              characterYStart +
              offsetMultiplier *
                (characterYEnd - characterYStart)
            );

          return (
            <span
              key={`${character}-${index}`}
              className="magnetic-character"
              style={{
                transform: hovered
                  ? `translate(
                      ${characterX}px,
                      ${characterY}px
                    )`
                  : "translate(0, 0)",
              }}
            >
              {character === " "
                ? "\u00A0"
                : character}
            </span>
          );
        })}
      </span>

      {showArrow && (
        <span className="magnetic-text-arrow">
          {arrow}
        </span>
      )}
    </button>
  );
};

export default MagneticTextButton;