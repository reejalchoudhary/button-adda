import { useEffect, useRef, useState } from "react";
import "./ColorBurstButton.css";

const DEFAULT_MODES = [
  {
    name: "HAPPY",
    color: "#FFD93D",
    emoji: "☀️",
  },
  {
    name: "ENERGY",
    color: "#FF5C8A",
    emoji: "⚡",
  },
  {
    name: "CHILL",
    color: "#5B8CFF",
    emoji: "🌊",
  },
  {
    name: "DREAM",
    color: "#B66DFF",
    emoji: "🌙",
  },
  {
    name: "FRESH",
    color: "#43E97B",
    emoji: "🍃",
  },
];

function ColorBurstButton({
  children = "Choose Mood",

  width = 270,
  height = 70,

  color = "#B66DFF",
  textColor = "#ffffff",
  backgroundColor = "#111827",

  radius = 30,

  orbitColors = [
    "#A855F7",
    "#3B82F6",
    "#FACC15",
    "#EC4899",
    "#22C55E",
  ],

  orbitSize = 34,

  cursorLightSize = 160,
  cursorLightOpacity = 0.13,

  animationDuration = 0.85,

  particleColor = "#ffffff",
  showParticles = true,

  showOrbits = true,
  showCursorLight = true,

  moods = DEFAULT_MODES,

  onChange,

  disabled = false,
  className = "",

  ...props
}) {
  const [active, setActive] =
    useState(false);

  const [selected, setSelected] =
    useState(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const buttonRef = useRef(null);

  const animationTimer =
    useRef(null);

  const handleMouseMove = (event) => {
    if (
      disabled ||
      !buttonRef.current
    ) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    setMouse({
      x,
      y,
    });
  };

  const handleClick = () => {
    if (
      disabled ||
      active
    ) {
      return;
    }

    if (
      !Array.isArray(moods) ||
      moods.length === 0
    ) {
      return;
    }

    setActive(true);

    clearTimeout(
      animationTimer.current
    );

    animationTimer.current =
      setTimeout(() => {
        const random =
          moods[
            Math.floor(
              Math.random() *
                moods.length
            )
          ];

        setSelected(random);

        onChange?.(random);

        setActive(false);
      }, animationDuration * 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(
        animationTimer.current
      );
    };
  }, []);

  const safeOrbitColors =
    Array.isArray(orbitColors)
      ? orbitColors
      : [];

  const getOrbitColor = (
    index,
    fallback
  ) => {
    return (
      safeOrbitColors[index] ||
      fallback
    );
  };

  const style = {
    width:
      typeof width === "number"
        ? `${width}px`
        : width,

    height:
      typeof height === "number"
        ? `${height}px`
        : height,

    "--burst-color":
      color,

    "--burst-text-color":
      textColor,

    "--burst-background":
      backgroundColor,

    "--burst-radius":
      typeof radius === "number"
        ? `${radius}px`
        : radius,

    "--orbit-size":
      typeof orbitSize === "number"
        ? `${orbitSize}px`
        : orbitSize,

    "--cursor-light-size":
      typeof cursorLightSize === "number"
        ? `${cursorLightSize}px`
        : cursorLightSize,

    "--cursor-light-opacity":
      cursorLightOpacity,

    "--burst-duration":
      `${animationDuration}s`,

    "--particle-color":
      particleColor,

    "--mouse-x":
      `${mouse.x}%`,

    "--mouse-y":
      `${mouse.y}%`,

    "--orbit-purple":
      getOrbitColor(
        0,
        "#A855F7"
      ),

    "--orbit-blue":
      getOrbitColor(
        1,
        "#3B82F6"
      ),

    "--orbit-yellow":
      getOrbitColor(
        2,
        "#FACC15"
      ),

    "--orbit-pink":
      getOrbitColor(
        3,
        "#EC4899"
      ),

    "--orbit-green":
      getOrbitColor(
        4,
        "#22C55E"
      ),

    "--selected-color":
      selected?.color ||
      color,
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      className={[
        "color-burst-button",

        active
          ? "color-burst-active"
          : "",

        selected
          ? "color-burst-selected"
          : "",

        disabled
          ? "color-burst-disabled"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >

      <span
        className="burst-background"
        aria-hidden="true"
      />

      {showCursorLight && (
        <span
          className="cursor-light"
          aria-hidden="true"
        />
      )}

      {showOrbits && (
        <>
          <span className="color-orbit orbit-purple">
            <span />
          </span>

          <span className="color-orbit orbit-blue">
            <span />
          </span>

          <span className="color-orbit orbit-yellow">
            <span />
          </span>

          <span className="color-orbit orbit-pink">
            <span />
          </span>

          <span className="color-orbit orbit-green">
            <span />
          </span>
        </>
      )}

      <span className="burst-center">
        <span className="center-ring" />

        <span className="burst-icon">
          {selected
            ? selected.emoji
            : "✦"}
        </span>
      </span>

      <span className="burst-text">
        {selected
          ? selected.name
          : children}
      </span>

      {showParticles && (
        <span
          className="burst-particles"
          aria-hidden="true"
        >
          {Array.from({
            length: 10,
          }).map((_, index) => (
            <i key={index} />
          ))}
        </span>
      )}

      <span
        className="tiny-dot dot-1"
        aria-hidden="true"
      />

      <span
        className="tiny-dot dot-2"
        aria-hidden="true"
      />

      <span
        className="tiny-dot dot-3"
        aria-hidden="true"
      />

      <span
        className="tiny-dot dot-4"
        aria-hidden="true"
      />
    </button>
  );
}

export default ColorBurstButton;