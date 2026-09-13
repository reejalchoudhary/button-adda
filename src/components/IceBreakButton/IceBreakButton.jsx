import { useEffect, useRef, useState } from "react";
import "./IceBreakButton.css";

export default function IceBreakButton({
  children = "Download",

  width = 260,
  height = 70,

  color = "#67e8f9",
  backgroundColor = "#101217",
  bodyStartColor = "#191b22",
  bodyEndColor = "#0b0d12",
  textColor = "#f4f4f5",
  iconColor = "#d9dbe0",

  radius = 22,

  holdDuration = 1400,
  resetAfter = 2500,

  mainFontSize = 15,
  mainFontWeight = 700,
  subFontSize = 9,
  holdFontSize = 10,
  letterSpacing = ".28em",

  contentGap = 12,
  iconSize = 34,
  iconRadius = 10,

  iceOpacity = 1,
  iceBlur = 4,
  highlightOpacity = 0.18,

  progressLeft = 18,
  progressRight = 18,
  progressBottom = 7,
  progressHeight = 2,

  shardWidth = 24,
  shardHeight = 15,
  shardDuration = 850,

  downloadIcon = "↓",
  completedIcon = "✓",
  completedText = "Completed",
  holdText = "HOLD",

  showIcon = true,
  showHoldText = true,
  showProgress = true,
  showCracks = true,
  showShards = true,

  onComplete,

  disabled = false,
  className = "",
  ...props
}) {
  const buttonRef = useRef(null);
  const animationFrame = useRef(null);
  const resetTimer = useRef(null);

  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [broken, setBroken] = useState(false);

  const [origin, setOrigin] = useState({
    x: width / 2,
    y: height / 2,
  });

  const startTime = useRef(0);

  const getPointerPosition = (event) => {
    if (!buttonRef.current) {
      return {
        x: width / 2,
        y: height / 2,
      };
    }

    const rect = buttonRef.current.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startHold = (event) => {
    if (disabled || broken) return;

    event.preventDefault();

    const position = getPointerPosition(event);

    setOrigin(position);
    setHolding(true);

    startTime.current = performance.now();
  };

  const updateHold = (time) => {
    if (!holding || broken) return;

    const elapsed = time - startTime.current;

    const value = Math.min(
      elapsed / holdDuration,
      1
    );

    setProgress(value);

    if (value >= 1) {
      breakIce();
      return;
    }

    animationFrame.current =
      requestAnimationFrame(updateHold);
  };

  useEffect(() => {
    if (holding && !broken) {
      animationFrame.current =
        requestAnimationFrame(updateHold);
    }

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [holding, broken]);

  const stopHold = () => {
    if (broken) return;

    setHolding(false);

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    setProgress(0);
  };

  const breakIce = () => {
    if (broken) return;

    setHolding(false);
    setProgress(1);
    setBroken(true);

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    onComplete?.();

    resetTimer.current = setTimeout(() => {
      setBroken(false);
      setProgress(0);
    }, resetAfter);
  };

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const crackLines = [
    `M ${origin.x} ${origin.y}
     L ${origin.x - 25} ${origin.y - 15}
     L ${origin.x - 58} ${origin.y - 8}
     L ${origin.x - 105} ${origin.y - 32}`,

    `M ${origin.x} ${origin.y}
     L ${origin.x + 26} ${origin.y - 18}
     L ${origin.x + 62} ${origin.y - 10}
     L ${origin.x + 108} ${origin.y - 30}`,

    `M ${origin.x} ${origin.y}
     L ${origin.x - 20} ${origin.y + 22}
     L ${origin.x - 55} ${origin.y + 32}
     L ${origin.x - 105} ${origin.y + 52}`,

    `M ${origin.x} ${origin.y}
     L ${origin.x + 22} ${origin.y + 24}
     L ${origin.x + 58} ${origin.y + 33}
     L ${origin.x + 108} ${origin.y + 54}`,

    `M ${origin.x - 25} ${origin.y - 15}
     L ${origin.x - 42} ${origin.y - 40}
     L ${origin.x - 78} ${origin.y - 50}`,

    `M ${origin.x + 26} ${origin.y - 18}
     L ${origin.x + 43} ${origin.y - 42}
     L ${origin.x + 80} ${origin.y - 52}`,
  ];

  const shards = [
    { x: "-180px", y: "-95px", r: -35, s: 0.9 },
    { x: "-120px", y: "-135px", r: 25, s: 0.75 },
    { x: "-45px", y: "-145px", r: -20, s: 1 },
    { x: "45px", y: "-150px", r: 35, s: 0.8 },
    { x: "125px", y: "-115px", r: -30, s: 0.9 },
    { x: "185px", y: "-65px", r: 40, s: 0.75 },

    { x: "-205px", y: "-10px", r: 55, s: 0.8 },
    { x: "205px", y: "10px", r: -45, s: 1 },

    { x: "-185px", y: "70px", r: -25, s: 0.85 },
    { x: "-120px", y: "120px", r: 35, s: 0.75 },
    { x: "-45px", y: "145px", r: -45, s: 0.95 },
    { x: "45px", y: "140px", r: 25, s: 0.8 },
    { x: "120px", y: "125px", r: -35, s: 0.9 },
    { x: "185px", y: "75px", r: 45, s: 0.75 },
  ];

  return (
    <div
      ref={buttonRef}
      className={`ice-button-wrapper ${
        holding ? "is-holding" : ""
      } ${
        broken ? "is-broken" : ""
      } ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--ice-color": color,
        "--ice-background": backgroundColor,
        "--ice-body-start": bodyStartColor,
        "--ice-body-end": bodyEndColor,

        "--ice-text-color": textColor,
        "--ice-icon-color": iconColor,

        "--ice-radius": `${radius}px`,
        "--ice-opacity": iceOpacity,
        "--ice-blur": `${iceBlur}px`,

        "--ice-highlight-opacity":
          highlightOpacity,

        "--ice-main-font-size":
          `${mainFontSize}px`,

        "--ice-main-font-weight":
          mainFontWeight,

        "--ice-sub-font-size":
          `${subFontSize}px`,

        "--ice-hold-font-size":
          `${holdFontSize}px`,

        "--ice-letter-spacing":
          letterSpacing,

        "--ice-content-gap":
          `${contentGap}px`,

        "--ice-icon-size":
          `${iconSize}px`,

        "--ice-icon-radius":
          `${iconRadius}px`,

        "--ice-progress-left":
          `${progressLeft}px`,

        "--ice-progress-right":
          `${progressRight}px`,

        "--ice-progress-bottom":
          `${progressBottom}px`,

        "--ice-progress-height":
          `${progressHeight}px`,

        "--ice-shard-width":
          `${shardWidth}px`,

        "--ice-shard-height":
          `${shardHeight}px`,

        "--ice-shard-duration":
          `${shardDuration}ms`,

        "--crack-opacity": broken
          ? 1
          : progress * 1.4,

        "--ice-progress":
          progress,
      }}
    >
      <button
        type="button"
        className="ice-button"
        disabled={disabled}
        onPointerDown={startHold}
        onPointerUp={stopHold}
        onPointerCancel={stopHold}
        onPointerLeave={() => {
          if (holding) {
            stopHold();
          }
        }}
        {...props}
      >

        <div className="ice-body">
          <div className="body-shine" />

          <div className="body-content">
            {showIcon && (
              <div className="body-icon">
                {broken
                  ? completedIcon
                  : downloadIcon}
              </div>
            )}

            <div className="body-text">
              <span className="main-text">
                {broken
                  ? completedText
                  : children}
              </span>

              <span className="sub-text">
                {holding
                  ? `${Math.round(
                      progress * 100
                    )}%`
                  : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="ice-layer">
          <div className="ice-highlight" />

          {!broken && showHoldText && (
            <div className="hold-text">
              <span>{holdText}</span>

              <div className="hold-dots">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}

          <div
            className="ice-core"
            style={{
              left: origin.x,
              top: origin.y,
            }}
          />

          {showCracks && (
            <svg
              className="cracks"
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
            >
              {crackLines.map(
                (path, index) => (
                  <path
                    key={index}
                    d={path}
                  />
                )
              )}
            </svg>
          )}
        </div>

        {showProgress && (
          <div className="hold-progress">
            <div
              className="hold-progress-bar"
              style={{
                transform:
                  `scaleX(${progress})`,
              }}
            />
          </div>
        )}
      </button>

      {showShards && (
        <div className="shatter-layer">
          {shards.map(
            (shard, index) => (
              <span
                key={index}
                className="ice-shard"
                style={{
                  "--x": shard.x,
                  "--y": shard.y,
                  "--rotation":
                    `${shard.r}deg`,
                  "--scale": shard.s,
                  "--delay":
                    `${index * 22}ms`,
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}