import { useEffect, useRef, useState } from "react";
import "./PuppyButton.css";

const ACTIVITIES = [
  "walk",
  "sniff",
  "sit",
  "look",
  "wag",
  "idle",
];

function randomActivity() {
  return ACTIVITIES[Math.floor(Math.random() * ACTIVITIES.length)];
}

function randomDuration(min, max) {
  return min + Math.random() * (max - min);
}

export default function PuppyButton({
  children = "Send Message",
  onClick,
  disabled = false,
  className = "",

  width = 270,
  height = 80,

  color1 = "#F2B36F",
  color2 = "#E38A4F",
  color3 = "#C9683D",

  radius = 24,
  shadow = "0 18px 40px rgba(0, 0, 0, 0.28)",
  hoverShadow = "0 23px 50px rgba(0, 0, 0, 0.35)",

  textColor = "#ffffff",
  fontSize = 16,
  fontWeight = 800,
  letterSpacing = "-0.01em",
  textShadow = "0 2px 8px rgba(74, 35, 17, 0.2)",

  puppyPosition = 12,
  puppyScale = 1,
  puppySpeed = 0.7,
  puppyMinPosition = 5,
  puppyMaxPosition = 43,
  puppyWidth = 55,
  puppyHeight = 40,

  activityMinDuration = 1200,
  activityMaxDuration = 3400,

  walkInterval = 45,

  jumpDuration = 1650,
  jumpHeight = -31,

  puppyBodyColor = "#C87945",
  puppyHeadColor = "#D98B50",
  puppyBellyColor = "#E7AA75",
  puppyEarColor = "#874C2B",
  puppyLegColor = "#A85F35",
  puppyFrontLegColor = "#C87945",
  puppyTailColor = "#8B4F2B",
  puppyMuzzleColor = "#F0BD88",
  puppyEyeColor = "#17110D",
  puppyNoseColor = "#241710",
  puppySmileColor = "#402317",
  puppyTongueColor = "#EF7D88",

  lightOpacity = 0.14,
  lightBlur = 25,
  showLights = true,

  cloudColor = "rgba(255, 255, 255, 0.15)",
  cloudOpacity = 1,
  showClouds = true,

  grassColor = "rgba(80, 43, 22, 0.28)",
  showGrass = true,

  showCelebration = true,
  celebrationColor = "#ffffff",
  celebrationSize = 13,

  showPawprints = true,
  pawColor = "rgba(80, 43, 22, 0.35)",
  pawSize = 10,

  showShadow = true,
  shadowOpacity = 0.2,

  hoverLift = -3,
  activeScale = 0.975,

  ...props
}) {
  const [activity, setActivity] = useState("walk");
  const [position, setPosition] = useState(puppyPosition);
  const [direction, setDirection] = useState(1);
  const [jumping, setJumping] = useState(false);

  const activityTimer = useRef(null);
  const walkTimer = useRef(null);
  const jumpTimer = useRef(null);

  useEffect(() => {
    if (jumping) return;

    const nextActivity = () => {
      const next = randomActivity();

      if (next === "walk") {
        setDirection((current) =>
          Math.random() > 0.5 ? current * -1 : current
        );
      }

      setActivity(next);

      activityTimer.current = setTimeout(
        nextActivity,
        randomDuration(activityMinDuration, activityMaxDuration)
      );
    };

    activityTimer.current = setTimeout(
      nextActivity,
      randomDuration(activityMinDuration, activityMaxDuration)
    );

    return () => {
      clearTimeout(activityTimer.current);
    };
  }, [
    jumping,
    activityMinDuration,
    activityMaxDuration,
  ]);

  useEffect(() => {
    if (jumping || activity !== "walk") {
      clearInterval(walkTimer.current);
      return;
    }

    walkTimer.current = setInterval(() => {
      setPosition((current) => {
        const step = puppySpeed * direction;
        let next = current + step;

        if (next > puppyMaxPosition) {
          setDirection(-1);
          next = puppyMaxPosition;
        }

        if (next < puppyMinPosition) {
          setDirection(1);
          next = puppyMinPosition;
        }

        return next;
      });
    }, walkInterval);

    return () => {
      clearInterval(walkTimer.current);
    };
  }, [
    activity,
    direction,
    jumping,
    puppySpeed,
    puppyMinPosition,
    puppyMaxPosition,
    walkInterval,
  ]);

  useEffect(() => {
    return () => {
      clearTimeout(activityTimer.current);
      clearInterval(walkTimer.current);
      clearTimeout(jumpTimer.current);
    };
  }, []);

  const handleClick = () => {
    if (disabled || jumping) return;

    clearTimeout(activityTimer.current);
    clearInterval(walkTimer.current);

    setJumping(true);

    onClick?.();

    jumpTimer.current = setTimeout(() => {
      setJumping(false);
      setActivity(randomActivity());
    }, jumpDuration);
  };

  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,

    "--color-1": color1,
    "--color-2": color2,
    "--color-3": color3,
    
    "--button-width": `${width}px`,
    "--button-height": `${height}px`,
    "--button-radius": `${radius}px`,

    "--puppy-position": `${position}%`,
    "--puppy-direction": direction,
    "--puppy-scale": puppyScale,

    "--puppy-width": `${puppyWidth}px`,
    "--puppy-height": `${puppyHeight}px`,

    "--puppy-body-color": puppyBodyColor,
    "--puppy-head-color": puppyHeadColor,
    "--puppy-belly-color": puppyBellyColor,
    "--puppy-ear-color": puppyEarColor,
    "--puppy-leg-color": puppyLegColor,
    "--puppy-front-leg-color": puppyFrontLegColor,
    "--puppy-tail-color": puppyTailColor,
    "--puppy-muzzle-color": puppyMuzzleColor,
    "--puppy-eye-color": puppyEyeColor,
    "--puppy-nose-color": puppyNoseColor,
    "--puppy-smile-color": puppySmileColor,
    "--puppy-tongue-color": puppyTongueColor,

    "--puppy-light-opacity": lightOpacity,
    "--puppy-light-blur": `${lightBlur}px`,

    "--cloud-color": cloudColor,
    "--cloud-opacity": cloudOpacity,

    "--grass-color": grassColor,

    "--celebration-color": celebrationColor,
    "--celebration-size": `${celebrationSize}px`,

    "--paw-color": pawColor,
    "--paw-size": `${pawSize}px`,

    "--puppy-shadow-opacity": shadowOpacity,

    "--button-shadow": shadow,
    "--button-hover-shadow": hoverShadow,

    "--button-text-color": textColor,
    "--button-font-size": `${fontSize}px`,
    "--button-font-weight": fontWeight,
    "--button-letter-spacing": letterSpacing,
    "--button-text-shadow": textShadow,

    "--hover-lift": `${hoverLift}px`,
    "--active-scale": activeScale,

    "--jump-height": `${jumpHeight}px`,
  };

  return (
    <button
      type="button"
      className={`puppy-button ${
        jumping ? "puppy-is-jumping" : ""
      } ${disabled ? "puppy-disabled" : ""} ${className}`}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >

      <span className="puppy-background" />

      {showLights && (
        <>
          <span className="puppy-light puppy-light-one" />
          <span className="puppy-light puppy-light-two" />
        </>
      )}

      {showClouds && (
        <>
          <span className="tiny-cloud cloud-one" />
          <span className="tiny-cloud cloud-two" />
        </>
      )}

      {showGrass && (
        <>
          <span className="tiny-grass grass-one" />
          <span className="tiny-grass grass-two" />
          <span className="tiny-grass grass-three" />
          <span className="tiny-grass grass-four" />
        </>
      )}

      <span
        className={`tiny-puppy puppy-${activity}`}
        style={{
          "--puppy-position": `${position}%`,
          "--puppy-direction": direction,
        }}
      >
        <svg
          viewBox="0 0 90 65"
          className="tiny-puppy-svg"
          aria-hidden="true"
        >

          {showShadow && (
            <ellipse
              className="tiny-puppy-shadow"
              cx="43"
              cy="58"
              rx="22"
              ry="3.5"
            />
          )}

          <g className="tiny-puppy-tail">
            <path
              d="M69 35 C80 26 86 32 79 40"
              fill="none"
              stroke="var(--puppy-tail-color)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          <ellipse
            cx="46"
            cy="39"
            rx="21"
            ry="14"
            fill="var(--puppy-body-color)"
          />

          <ellipse
            cx="43"
            cy="42"
            rx="12"
            ry="9"
            fill="var(--puppy-belly-color)"
          />

          <g className="tiny-back-legs">
            <path
              d="M56 47 L59 57"
              stroke="var(--puppy-leg-color)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            <path
              d="M63 45 L66 56"
              stroke="var(--puppy-leg-color)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          <g className="tiny-front-legs">
            <path
              d="M32 46 L30 57"
              stroke="var(--puppy-front-leg-color)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            <path
              d="M38 47 L37 57"
              stroke="var(--puppy-front-leg-color)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          <g className="tiny-puppy-head">

            <path
              className="tiny-ear-left"
              d="M20 22 C12 11 14 7 21 11 C27 14 29 20 27 25"
              fill="var(--puppy-ear-color)"
            />

            <path
              className="tiny-ear-right"
              d="M40 19 C46 8 52 10 49 19 C47 25 43 27 39 25"
              fill="var(--puppy-ear-color)"
            />

            <ellipse
              cx="31"
              cy="27"
              rx="18"
              ry="16"
              fill="var(--puppy-head-color)"
            />

            <ellipse
              cx="32"
              cy="31"
              rx="10"
              ry="8"
              fill="var(--puppy-muzzle-color)"
            />

            <circle
              cx="25"
              cy="25"
              r="2.2"
              fill="var(--puppy-eye-color)"
            />

            <circle
              cx="38"
              cy="25"
              r="2.2"
              fill="var(--puppy-eye-color)"
            />

            <circle
              cx="25.7"
              cy="24.3"
              r=".7"
              fill="white"
            />

            <circle
              cx="38.7"
              cy="24.3"
              r=".7"
              fill="white"
            />

            <ellipse
              cx="32"
              cy="30"
              rx="3"
              ry="2"
              fill="var(--puppy-nose-color)"
            />

            <path
              d="M32 32 C29 36 26 34 25 33"
              fill="none"
              stroke="var(--puppy-smile-color)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              d="M32 32 C35 36 38 34 39 33"
              fill="none"
              stroke="var(--puppy-smile-color)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              className="tiny-tongue"
              d="M32 35 C30 39 34 40 35 36"
              fill="var(--puppy-tongue-color)"
            />
          </g>
        </svg>
      </span>

      <span className="puppy-button-label">
        {children}
      </span>

      {showCelebration && (
        <span className="puppy-celebration">
          <i>✦</i>
          <i>♥</i>
          <i>✦</i>
          <i>♥</i>
          <i>✦</i>
        </span>
      )}

      {showPawprints && (
        <span className="puppy-pawprints">
          <i>•</i>
          <i>•</i>
          <i>•</i>
        </span>
      )}
    </button>
  );
}