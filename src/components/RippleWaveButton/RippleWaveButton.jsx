import { useState } from "react";
import "./RippleWaveButton.css";

const RippleWaveButton = ({
  children = "Ripple Wave",

  width = 210,
  height = 56,

  color = "#6366f1",
  textColor = "#ffffff",
  backgroundColor = "#090b18",

  radius = 14,

  waveCount = 3,
  waveDuration = 900,
  waveDelay = 130,
  waveStartSize = 20,
  waveBorderWidth = 2,
  secondaryWaveBorderWidth = 1,
  secondaryWaveOpacity = 0.6,

  waveGlowSize = 10,
  waveOuterGlowSize = 30,
  waveInnerGlowSize = 10,

  showAmbientGlow = true,
  ambientGlowOpacity = 0.4,
  ambientGlowBlur = 20,
  ambientGlowDuration = 500,

  showGrid = true,
  gridOpacity = 0.08,
  gridSize = 14,
  gridLineOpacity = 0.25,

  showCenterFlash = true,
  flashSize = 12,
  flashPingDuration = 1000,
  flashGlowSize = 20,

  showBorder = true,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.10)",
  hoverBorderColor = "rgba(255,255,255,0.20)",

  fontSize = 16,
  fontWeight = 600,
  letterSpacing = "normal",

  hoverLift = 4,
  activeScale = 0.97,
  transitionDuration = 300,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const [waves, setWaves] = useState([]);

  const createRipple = (event) => {
    if (disabled) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const id = `${Date.now()}-${Math.random()}`;

    const newWave = {
      id,
      x,
      y,
    };

    setWaves((previous) => [
      ...previous,
      newWave,
    ]);

    setTimeout(() => {
      setWaves((previous) =>
        previous.filter(
          (wave) => wave.id !== id
        )
      );
    }, waveDuration + waveDelay * waveCount + 100);

    onClick?.(event);
  };

  const waveShadow = `
    0 0 ${waveGlowSize}px ${color},
    0 0 ${waveOuterGlowSize}px ${color},
    inset 0 0 ${waveInnerGlowSize}px ${color}
  `;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={createRipple}
      className={`ripple-wave-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--ripple-color": color,
        "--ripple-text-color": textColor,
        "--ripple-background": backgroundColor,

        "--ripple-radius": `${radius}px`,

        "--wave-duration":
          `${waveDuration}ms`,

        "--wave-delay":
          `${waveDelay}ms`,

        "--wave-start-size":
          `${waveStartSize}px`,

        "--wave-border-width":
          `${waveBorderWidth}px`,

        "--secondary-wave-border-width":
          `${secondaryWaveBorderWidth}px`,

        "--secondary-wave-opacity":
          secondaryWaveOpacity,

        "--wave-shadow":
          waveShadow,

        "--ambient-opacity":
          ambientGlowOpacity,

        "--ambient-blur":
          `${ambientGlowBlur}px`,

        "--ambient-duration":
          `${ambientGlowDuration}ms`,

        "--grid-opacity":
          gridOpacity,

        "--grid-size":
          `${gridSize}px`,

        "--grid-line-opacity":
          gridLineOpacity,

        "--flash-size":
          `${flashSize}px`,

        "--flash-duration":
          `${flashPingDuration}ms`,

        "--flash-glow":
          `${flashGlowSize}px`,

        "--border-width":
          `${borderWidth}px`,

        "--border-color":
          borderColor,

        "--hover-border-color":
          hoverBorderColor,

        "--font-size":
          `${fontSize}px`,

        "--font-weight":
          fontWeight,

        "--letter-spacing":
          letterSpacing,

        "--hover-lift":
          `${hoverLift}px`,

        "--active-scale":
          activeScale,

        "--transition-duration":
          `${transitionDuration}ms`,
      }}
      {...props}
    >

      {showAmbientGlow && (
        <span
          className="ripple-wave-ambient"
          style={{
            opacity: ambientGlowOpacity,
          }}
        />
      )}

      {showGrid && (
        <span className="ripple-grid" />
      )}

      {waves.map((wave) => (
        <div
          key={wave.id}
          className="ripple-wave-group"
        >

          <span
            className="ripple-wave ripple-wave-primary"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`,
            }}
          />

          {Array.from({
            length: Math.max(0, waveCount - 1),
          }).map((_, index) => (
            <span
              key={`${wave.id}-${index}`}
              className="ripple-wave ripple-wave-secondary"
              style={{
                left: `${wave.x}px`,
                top: `${wave.y}px`,
                animationDelay:
                  `${(index + 1) * waveDelay}ms`,
              }}
            />
          ))}

          {showCenterFlash && (
            <span
              className="ripple-wave-flash"
              style={{
                left: `${wave.x}px`,
                top: `${wave.y}px`,
              }}
            />
          )}
        </div>
      ))}

      {showBorder && (
        <span className="ripple-wave-border" />
      )}

      <span className="ripple-wave-content">
        {children}
      </span>
    </button>
  );
};

export default RippleWaveButton;