import { useState } from "react";
import "./ControlPanelButton.css";

const ControlPanelButton = ({

  children = "Activate",

  activeText = "ACTIVE",
  inactiveText = "READY",

  width = 220,
  height = 68,

  backgroundColor = "#151922",
  backgroundColorEnd = "#090b10",

  textColor = "#e5e7eb",
  statusColor = "#64748b",

  activeColor = "#a3e635",

  borderColor = "rgba(148,163,184,.16)",
  hoverBorderColor = "rgba(148,163,184,.3)",

  radius = 14,

  switchTrackColor = "#05070a",

  switchKnobColor = "#64748b",
  switchKnobActiveColor = "#d1d5db",

  switchWidth = 38,
  switchHeight = 30,

  indicatorColor = "#475569",
  indicatorActiveColor = "#a3e635",

  showScanEffect = true,
  showTopLine = true,

  scanColor = "rgba(255,255,255,.08)",

  glowIntensity = 1,

  hoverLift = 2,

  onClick,

  disabled = false,
  className = "",

  ...props
}) => {
  const [active, setActive] =
    useState(false);

  const handleClick = () => {
    if (disabled) {
      return;
    }

    setActive((prev) => {
      const next = !prev;

      onClick?.(next);

      return next;
    });
  };

  const cssWidth =
    typeof width === "number"
      ? `${width}px`
      : width;

  const cssHeight =
    typeof height === "number"
      ? `${height}px`
      : height;

  const cssRadius =
    typeof radius === "number"
      ? `${radius}px`
      : radius;

  const cssSwitchWidth =
    typeof switchWidth === "number"
      ? `${switchWidth}px`
      : switchWidth;

  const cssSwitchHeight =
    typeof switchHeight === "number"
      ? `${switchHeight}px`
      : switchHeight;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={[
        "control-panel-button",

        active
          ? "control-active"
          : "",

        disabled
          ? "control-disabled"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: cssWidth,
        height: cssHeight,

        "--control-bg-start":
          backgroundColor,

        "--control-bg-end":
          backgroundColorEnd,

        "--control-text":
          textColor,

        "--control-status":
          statusColor,

        "--control-active":
          activeColor,

        "--control-border":
          borderColor,

        "--control-border-hover":
          hoverBorderColor,

        "--control-radius":
          cssRadius,

        "--switch-track":
          switchTrackColor,

        "--switch-knob":
          switchKnobColor,

        "--switch-knob-active":
          switchKnobActiveColor,

        "--switch-width":
          cssSwitchWidth,

        "--switch-height":
          cssSwitchHeight,

        "--indicator":
          indicatorColor,

        "--indicator-active":
          indicatorActiveColor,

        "--scan-color":
          scanColor,

        "--glow-intensity":
          glowIntensity,

        "--hover-lift":
          `${hoverLift}px`,
      }}
      {...props}
    >

      {showTopLine && (
        <span
          className="control-top-line"
          aria-hidden="true"
        />
      )}

      <span
        className="control-switch"
        aria-hidden="true"
      >
        <span className="control-switch-track">
          <span className="control-switch-knob">
            <span />
          </span>
        </span>
      </span>

      <span className="control-info">
        <span className="control-label">
          {children}
        </span>

        <span className="control-status">
          {active
            ? activeText
            : inactiveText}
        </span>
      </span>

      <span
        className="control-indicator"
        aria-hidden="true"
      >
        <span />
      </span>

      {showScanEffect && (
        <span
          className="control-scan"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ControlPanelButton;