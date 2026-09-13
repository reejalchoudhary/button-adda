import { useState } from "react";
import "./DiceButton.css";

const DiceButton = ({

  children = "Roll the Dice",

  width = 220,
  height = 64,

  backgroundColor = "#18181b",
  backgroundColorEnd = "#09090b",
  textColor = "#fafafa",
  borderColor = "rgba(255,255,255,0.1)",
  hoverBorderColor = "rgba(255,255,255,0.2)",

  radius = 18,

  fontSize = 14,
  fontWeight = 800,
  letterSpacing = 0.02,

  diceSize = 26,
  diceRadius = 6,
  diceFaceColor = "#fafafa",
  diceFaceColorEnd = "#a1a1aa",
  diceTextColor = "#18181b",

  gap = 13,

  showArrow = true,
  arrow = "↗",
  arrowOpacity = 0.55,

  rollDuration = 850,
  rollTextDuration = 420,
  hoverLift = 3,

  showShadow = true,
  showSparks = true,
  sparkColor = "#ffffff",
  shadowOpacity = 0.55,

  onRoll,

  disabled = false,
  className = "",
  ...props
}) => {
  const [rolling, setRolling] = useState(false);
  const [value, setValue] = useState(1);

  const rollDice = () => {
    if (disabled || rolling) return;

    setRolling(true);

    const finalValue = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setValue(finalValue);
    }, Math.min(rollTextDuration, rollDuration));

    setTimeout(() => {
      setRolling(false);
      onRoll?.(finalValue);
    }, rollDuration);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={rollDice}
      className={`
        dice-button
        ${rolling ? "dice-button-rolling" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--dice-bg-start": backgroundColor,
        "--dice-bg-end": backgroundColorEnd,
        "--dice-text-color": textColor,
        "--dice-border-color": borderColor,
        "--dice-hover-border-color": hoverBorderColor,

        "--dice-radius": `${radius}px`,

        "--dice-font-size": `${fontSize}px`,
        "--dice-font-weight": fontWeight,
        "--dice-letter-spacing": letterSpacing,

        "--dice-size": `${diceSize}px`,
        "--dice-face-radius": `${diceRadius}px`,
        "--dice-face-start": diceFaceColor,
        "--dice-face-end": diceFaceColorEnd,
        "--dice-face-text": diceTextColor,

        "--dice-gap": `${gap}px`,

        "--dice-arrow-opacity": arrowOpacity,

        "--dice-roll-duration": `${rollDuration}ms`,
        "--dice-text-duration": `${rollTextDuration}ms`,

        "--dice-hover-lift": `${hoverLift}px`,

        "--dice-shadow-opacity": shadowOpacity,
        "--dice-spark-color": sparkColor
      }}
      {...props}
    >
      <span className="dice-button-inner">

        <span
          className="dice-scene"
          style={{
            "--dice-scene-size": `${diceSize + 4}px`
          }}
        >
          <span className={`dice-cube dice-face-${value}`}>

            <span className="dice-face front">
              {value}
            </span>

            <span className="dice-face back">
              {value}
            </span>

            <span className="dice-face right">
              {value}
            </span>

            <span className="dice-face left">
              {value}
            </span>

            <span className="dice-face top">
              {value}
            </span>

            <span className="dice-face bottom">
              {value}
            </span>

          </span>
        </span>

        <span className="dice-label">
          {rolling ? "Rolling..." : children}
        </span>

        {showArrow && (
          <span className="dice-arrow">
            {arrow}
          </span>
        )}

      </span>

      {showShadow && <span className="dice-shadow" />}

      {showSparks && (
        <>
          <span className="dice-spark spark-1" />
          <span className="dice-spark spark-2" />
          <span className="dice-spark spark-3" />
          <span className="dice-spark spark-4" />
        </>
      )}
    </button>
  );
};

export default DiceButton;