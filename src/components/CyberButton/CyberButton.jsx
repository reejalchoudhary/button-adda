import "./CyberButton.css";

const CyberButton = ({

  children = "Cyber Button",

  width = 190,
  height = 52,

  color = "#00f5ff",
  textColor = "#ffffff",
  backgroundColor = "#06121c",

  radius = 4,
  borderWidth = 1,

  fontSize = 14,
  fontWeight = 700,
  letterSpacing = "0.12em",

  glowIntensity = 1,

  showScanlines = true,
  scanlineOpacity = 0.2,

  showScanBeam = true,
  scanSpeed = 2.5,
  scanBeamHeight = 2,
  scanBeamOpacity = 0.7,

  glitchIntensity = 0.7,
  glitchSpeed = 0.35,

  showCorners = true,
  cornerSize = 12,
  cornerWidth = 2,

  showStatusLine = true,
  statusLineWidth = "33%",
  statusLineOpacity = 0.5,

  onClick,

  disabled = false,
  className = "",

  ...props
}) => {
  const css = {
    "--cyber-width":
      typeof width === "number"
        ? `${width}px`
        : width,

    "--cyber-height":
      typeof height === "number"
        ? `${height}px`
        : height,

    "--cyber-color":
      color,

    "--cyber-text-color":
      textColor,

    "--cyber-background":
      backgroundColor,

    "--cyber-radius":
      typeof radius === "number"
        ? `${radius}px`
        : radius,

    "--cyber-border-width":
      typeof borderWidth === "number"
        ? `${borderWidth}px`
        : borderWidth,

    "--cyber-font-size":
      typeof fontSize === "number"
        ? `${fontSize}px`
        : fontSize,

    "--cyber-font-weight":
      fontWeight,

    "--cyber-letter-spacing":
      typeof letterSpacing === "number"
        ? `${letterSpacing}px`
        : letterSpacing,

    "--cyber-glow":
      glowIntensity,

    "--cyber-scan-opacity":
      scanlineOpacity,

    "--cyber-scan-speed":
      `${scanSpeed}s`,

    "--cyber-beam-height":
      typeof scanBeamHeight === "number"
        ? `${scanBeamHeight}px`
        : scanBeamHeight,

    "--cyber-beam-opacity":
      scanBeamOpacity,

    "--cyber-glitch":
      glitchIntensity,

    "--cyber-glitch-speed":
      `${glitchSpeed}s`,

    "--cyber-corner-size":
      typeof cornerSize === "number"
        ? `${cornerSize}px`
        : cornerSize,

    "--cyber-corner-width":
      typeof cornerWidth === "number"
        ? `${cornerWidth}px`
        : cornerWidth,

    "--cyber-status-width":
      typeof statusLineWidth === "number"
        ? `${statusLineWidth}px`
        : statusLineWidth,

    "--cyber-status-opacity":
      statusLineOpacity,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "cyber-button",

        disabled
          ? "cyber-button-disabled"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={css}
      {...props}
    >

      <span
        className="cyber-background"
        aria-hidden="true"
      />

      <span
        className="cyber-border"
        aria-hidden="true"
      />

      {showScanlines && (
        <span
          className="cyber-scanlines"
          aria-hidden="true"
        />
      )}

      {showScanBeam && (
        <span
          className="cyber-scan-beam"
          aria-hidden="true"
        />
      )}

      {showCorners && (
        <>
          <span
            className="cyber-corner cyber-corner-left"
            aria-hidden="true"
          />

          <span
            className="cyber-corner cyber-corner-right"
            aria-hidden="true"
          />
        </>
      )}

      <span
        className="cyber-glitch cyber-glitch-one"
        aria-hidden="true"
      >
        {children}
      </span>

      <span
        className="cyber-glitch cyber-glitch-two"
        aria-hidden="true"
      >
        {children}
      </span>

      <span className="cyber-content">
        {children}
      </span>
      
      {showStatusLine && (
        <span
          className="cyber-status-line"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default CyberButton;