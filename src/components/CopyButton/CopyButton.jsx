import { useEffect, useRef, useState } from "react";
import "./CopyButton.css";

const CopyButton = ({

  text = "",
  children = "Copy",
  copiedText = "Copied!",

  width = 140,
  height = 48,

  radius = 11,

  color = "#fafafa",
  backgroundColor = "#18181b",
  hoverBackgroundColor = "#27272a",

  borderColor = "#27272a",
  hoverBorderColor = "#3f3f46",

  copiedColor = "#bbf7d0",
  copiedBackgroundColor = "#14231a",
  copiedHoverBackgroundColor = "#17291e",

  copiedBorderColor =
    "rgba(74, 222, 128, 0.35)",

  copiedHoverBorderColor =
    "rgba(74, 222, 128, 0.5)",

  showIcon = true,

  copyIcon = null,

  successIcon = "✓",

  iconColor = "#d4d4d8",

  successIconColor = "#4ade80",

  iconSize = 19,

  fontSize = 14,

  fontWeight = 700,

  gap = 9,

  resetTime = 1800,

  onCopy,

  disabled = false,

  className = "",

  ...props
}) => {
  const [copied, setCopied] =
    useState(false);

  const resetTimer =
    useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(
        resetTimer.current
      );
    };
  }, []);

  const handleCopy = async () => {
    if (
      disabled ||
      copied
    ) {
      return;
    }

    if (
      typeof text !== "string" ||
      text.length === 0
    ) {
      console.warn(
        "CopyButton: No text provided."
      );

      return;
    }

    try {
      await navigator.clipboard.writeText(
        text
      );

      setCopied(true);

      onCopy?.(text);

      clearTimeout(
        resetTimer.current
      );

      resetTimer.current =
        setTimeout(() => {
          setCopied(false);
        }, resetTime);
    } catch (error) {

      try {
        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value = text;

        textarea.style.position =
          "fixed";

        textarea.style.opacity = "0";

        textarea.style.pointerEvents =
          "none";

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

        setCopied(true);

        onCopy?.(text);

        clearTimeout(
          resetTimer.current
        );

        resetTimer.current =
          setTimeout(() => {
            setCopied(false);
          }, resetTime);
      } catch (fallbackError) {
        console.error(
          "Copy failed:",
          fallbackError
        );
      }
    }
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

  const cssIconSize =
    typeof iconSize === "number"
      ? `${iconSize}px`
      : iconSize;

  const renderCopyIcon = () => {
    if (copyIcon) {
      return copyIcon;
    }

    return (
      <>
        <span
          className="copy-sheet copy-sheet-back"
          aria-hidden="true"
        />

        <span
          className="copy-sheet copy-sheet-front"
          aria-hidden="true"
        />
      </>
    );
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={disabled}
      aria-label={
        copied
          ? copiedText
          : children
      }
      className={[
        "copy-button",

        copied
          ? "copy-button-copied"
          : "",

        disabled
          ? "copy-button-disabled"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: cssWidth,
        height: cssHeight,

        "--copy-radius":
          cssRadius,

        "--copy-color":
          color,

        "--copy-background":
          backgroundColor,

        "--copy-background-hover":
          hoverBackgroundColor,

        "--copy-border":
          borderColor,

        "--copy-border-hover":
          hoverBorderColor,

        "--copy-copied-color":
          copiedColor,

        "--copy-copied-background":
          copiedBackgroundColor,

        "--copy-copied-background-hover":
          copiedHoverBackgroundColor,

        "--copy-copied-border":
          copiedBorderColor,

        "--copy-copied-border-hover":
          copiedHoverBorderColor,

        "--copy-icon-color":
          iconColor,

        "--copy-success-color":
          successIconColor,

        "--copy-icon-size":
          cssIconSize,

        "--copy-font-size":
          typeof fontSize === "number"
            ? `${fontSize}px`
            : fontSize,

        "--copy-font-weight":
          fontWeight,

        "--copy-gap":
          typeof gap === "number"
            ? `${gap}px`
            : gap,
      }}
      {...props}
    >

      {showIcon && (
        <span
          className="copy-icon-wrapper"
          aria-hidden="true"
        >

          <span className="copy-icon copy-icon-default">
            {renderCopyIcon()}
          </span>

          <span className="copy-icon copy-icon-success">
            {successIcon}
          </span>
        </span>
      )}

      <span className="copy-text">
        {copied
          ? copiedText
          : children}
      </span>
    </button>
  );
};

export default CopyButton;