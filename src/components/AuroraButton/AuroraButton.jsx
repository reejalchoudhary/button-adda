import "./AuroraButton.css";

const AuroraButton = ({
  children = "Aurora Button",

  width = 180,
  height = 52,

  color = "#8b5cf6",
  textColor = "#ffffff",

  radius = 14,
  intensity = 1,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const toCssSize = (value) =>
    typeof value === "number" ? `${value}px` : value;

  const toCssRadius = (value) =>
    typeof value === "number" ? `${value}px` : value;

  const safeIntensity = Math.max(0, Number(intensity) || 0);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button-adda-aurora ${className}`}
      style={{
        "--aurora-width": toCssSize(width),
        "--aurora-height": toCssSize(height),

        "--aurora-color": color,
        "--aurora-text-color": textColor,

        "--aurora-radius": toCssRadius(radius),
        "--aurora-intensity": safeIntensity,
      }}
      {...props}
    >
      <span
        className="button-adda-aurora__background"
        aria-hidden="true"
      />

      <span
        className="button-adda-aurora__gradient"
        aria-hidden="true"
      />

      <span
        className="button-adda-aurora__glass"
        aria-hidden="true"
      />

      <span
        className="button-adda-aurora__border"
        aria-hidden="true"
      />

      <span
        className="button-adda-aurora__shimmer"
        aria-hidden="true"
      />

      <span className="button-adda-aurora__content">
        {children}
      </span>
    </button>
  );
};

export default AuroraButton;