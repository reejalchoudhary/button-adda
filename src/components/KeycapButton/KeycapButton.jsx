import { useEffect, useState } from "react";
import "./KeycapButton.css";

const KeycapButton = ({
  children = "Open Command",
  shortcut = "Ctrl K",

  width = 230,
  height = 58,

  backgroundColor = "#fafafa",
  hoverBackgroundColor = "#ffffff",
  textColor = "#18181b",

  borderColor = "#d4d4d8",
  borderBottomColor = "#a1a1aa",
  borderWidth = 1,
  borderBottomWidth = 5,

  radius = 13,

  fontSize = 14,
  fontWeight = 700,
  letterSpacing = "-0.01em",

  shadowColor = "#71717a",
  shadowOpacity = 0.18,
  shadowY = 5,
  shadowBlur = 20,

  hoverLift = 1,
  hoverShadowY = 6,
  hoverShadowBlur = 24,
  hoverShadowOpacity = 0.2,

  pressDistance = 4,
  pressedBorderBottomWidth = 1,
  pressedShadowY = 1,
  pressedShadowBlur = 8,

  showShortcut = true,
  shortcutBackgroundColor = "#e4e4e7",
  shortcutTextColor = "#52525b",
  shortcutBorderColor = "#d4d4d8",
  shortcutBorderBottomColor = "#a1a1aa",
  shortcutBorderWidth = 1,
  shortcutBorderBottomWidth = 3,
  shortcutRadius = 7,
  shortcutHeight = 32,
  shortcutMinWidth = 44,
  shortcutPaddingX = 9,
  shortcutFontSize = 12,
  shortcutFontWeight = 800,
  shortcutPressedDistance = 2,

  enableShortcut = true,

  pressDuration = 180,

  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  const triggerAction = () => {
    if (disabled) return;

    setPressed(true);

    setTimeout(() => {
      setPressed(false);
    }, pressDuration);

    onClick?.();
  };

  useEffect(() => {
    if (disabled || !enableShortcut) return;

    const handleKeyboard = (event) => {
      const keys = shortcut
        .toLowerCase()
        .split("+")
        .map((key) => key.trim());

      const key = keys[keys.length - 1];

      const needsCtrl = keys.includes("ctrl");
      const needsAlt = keys.includes("alt");
      const needsShift = keys.includes("shift");
      const needsMeta =
        keys.includes("cmd") ||
        keys.includes("⌘") ||
        keys.includes("meta");

      const keyMatches =
        event.key.toLowerCase() === key ||
        event.code.toLowerCase() === `key${key}`;

      if (
        keyMatches &&
        event.ctrlKey === needsCtrl &&
        event.altKey === needsAlt &&
        event.shiftKey === needsShift &&
        event.metaKey === needsMeta
      ) {
        event.preventDefault();
        triggerAction();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [
    shortcut,
    disabled,
    enableShortcut,
  ]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={triggerAction}
      className={`
        keycap-button
        ${pressed ? "keycap-pressed" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        "--keycap-bg": backgroundColor,
        "--keycap-hover-bg":
          hoverBackgroundColor,
        "--keycap-text":
          textColor,

        "--keycap-border":
          borderColor,
        "--keycap-bottom-border":
          borderBottomColor,

        "--keycap-border-width":
          `${borderWidth}px`,
        "--keycap-bottom-width":
          `${borderBottomWidth}px`,

        "--keycap-radius":
          `${radius}px`,

        "--keycap-font-size":
          `${fontSize}px`,
        "--keycap-font-weight":
          fontWeight,
        "--keycap-letter-spacing":
          letterSpacing,

        "--keycap-shadow-color":
          shadowColor,
        "--keycap-shadow-opacity":
          shadowOpacity,
        "--keycap-shadow-y":
          `${shadowY}px`,
        "--keycap-shadow-blur":
          `${shadowBlur}px`,

        "--keycap-hover-lift":
          `${hoverLift}px`,
        "--keycap-hover-shadow-y":
          `${hoverShadowY}px`,
        "--keycap-hover-shadow-blur":
          `${hoverShadowBlur}px`,
        "--keycap-hover-shadow-opacity":
          hoverShadowOpacity,

        "--keycap-press-distance":
          `${pressDistance}px`,
        "--keycap-pressed-bottom-width":
          `${pressedBorderBottomWidth}px`,
        "--keycap-pressed-shadow-y":
          `${pressedShadowY}px`,
        "--keycap-pressed-shadow-blur":
          `${pressedShadowBlur}px`,

        "--shortcut-bg":
          shortcutBackgroundColor,
        "--shortcut-text":
          shortcutTextColor,
        "--shortcut-border":
          shortcutBorderColor,
        "--shortcut-bottom-border":
          shortcutBorderBottomColor,

        "--shortcut-border-width":
          `${shortcutBorderWidth}px`,
        "--shortcut-bottom-width":
          `${shortcutBorderBottomWidth}px`,

        "--shortcut-radius":
          `${shortcutRadius}px`,
        "--shortcut-height":
          `${shortcutHeight}px`,
        "--shortcut-min-width":
          `${shortcutMinWidth}px`,
        "--shortcut-padding":
          `${shortcutPaddingX}px`,

        "--shortcut-font-size":
          `${shortcutFontSize}px`,
        "--shortcut-font-weight":
          shortcutFontWeight,

        "--shortcut-pressed-distance":
          `${shortcutPressedDistance}px`,
      }}
      {...props}
    >
      <span className="keycap-label">
        {children}
      </span>

      {showShortcut && (
        <span className="keycap-shortcut">
          {shortcut}
        </span>
      )}
    </button>
  );
};

export default KeycapButton;