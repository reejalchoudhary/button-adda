import { useEffect, useRef, useState } from "react";
import "./TiltCardButton.css";

const TiltCardButton = ({
  children = "View Project",

  width = 220,
  height = 64,

  background = "#18181b",
  textColor = "#ffffff",
  accentColor = "#8b5cf6",

  radius = 16,
  borderWidth = 1,
  borderColor = "rgba(255,255,255,0.10)",
  hoverBorderColor = "rgba(139,92,246,0.45)",

  maxTilt = 12,
  perspective = 700,
  tiltSmoothness = 0.16,

  depthX = 1,
  depthY = 8,
  hoverDepthY = 12,
  depthOpacity = 0.4,

  contentDepth = 24,
  hoverContentScale = 1,

  showArrow = true,
  arrow = "↗",
  arrowSize = 18,
  arrowMoveX = 4,

  showTopEdge = true,
  topEdgeLeft = 8,
  topEdgeRight = 8,
  topEdgeOpacity = 0.3,

  showCornerDetail = true,
  cornerSize = 6,
  cornerRight = 16,
  cornerTop = 12,
  cornerOpacity = 0.5,

  showLabel = true,
  label = "",
  labelFontSize = 6,
  labelOpacity = 0.3,
  labelLetterSpacing = "0.2em",
  labelBottom = 8,
  labelLeft = 16,

  shadowY = 15,
  shadowBlur = 30,
  shadowOpacity = 0.25,

  hoverShadowY = 25,
  hoverShadowBlur = 45,
  hoverShadowOpacity = 0.35,

  activeScale = 0.97,

  transitionDuration = 180,
  depthTransitionDuration = 220,

  onClick,
  disabled = false,
  className = "",

  ...props
}) => {
  const buttonRef = useRef(null);

  const animationRef = useRef(null);

  const targetTilt = useRef({
    x: 0,
    y: 0,
  });

  const currentTilt = useRef({
    x: 0,
    y: 0,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const animate = () => {
      const current = currentTilt.current;
      const target = targetTilt.current;

      current.x +=
        (target.x - current.x) *
        tiltSmoothness;

      current.y +=
        (target.y - current.y) *
        tiltSmoothness;

      if (buttonRef.current) {
        buttonRef.current.style.transform =
          `
          perspective(${perspective}px)
          rotateX(${current.x}deg)
          rotateY(${current.y}deg)
        `;
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [perspective, tiltSmoothness]);

  const handleMouseMove = (event) => {
    if (
      disabled ||
      !buttonRef.current
    ) {
      return;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const percentX =
      mouseX / rect.width;

    const percentY =
      mouseY / rect.height;

    const rotateX =
      (0.5 - percentY) *
      maxTilt *
      2;

    const rotateY =
      (percentX - 0.5) *
      maxTilt *
      2;

    targetTilt.current = {
      x: rotateX,
      y: rotateY,
    };
  };

  const handleMouseEnter = () => {
    if (disabled) return;

    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);

    targetTilt.current = {
      x: 0,
      y: 0,
    };
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        tilt-card-button
        ${hovered ? "tilt-hovered" : ""}
        ${disabled ? "tilt-disabled" : ""}
        ${className}
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,

        background: background,
        color: textColor,

        borderRadius:
          `${radius}px`,

        borderWidth:
          `${borderWidth}px`,

        borderColor:
          borderColor,

        "--tilt-accent":
          accentColor,

        "--tilt-depth-x":
          `${depthX}px`,

        "--tilt-depth-y":
          `${depthY}px`,

        "--tilt-hover-depth-y":
          `${hoverDepthY}px`,

        "--tilt-depth-opacity":
          depthOpacity,

        "--tilt-content-depth":
          `${contentDepth}px`,

        "--tilt-content-scale":
          hoverContentScale,

        "--tilt-arrow-size":
          `${arrowSize}px`,

        "--tilt-arrow-move":
          `${arrowMoveX}px`,

        "--tilt-top-left":
          `${topEdgeLeft}%`,

        "--tilt-top-right":
          `${topEdgeRight}%`,

        "--tilt-top-opacity":
          topEdgeOpacity,

        "--tilt-corner-size":
          `${cornerSize}px`,

        "--tilt-corner-right":
          `${cornerRight}px`,

        "--tilt-corner-top":
          `${cornerTop}px`,

        "--tilt-corner-opacity":
          cornerOpacity,

        "--tilt-label-size":
          `${labelFontSize}px`,

        "--tilt-label-opacity":
          labelOpacity,

        "--tilt-label-spacing":
          labelLetterSpacing,

        "--tilt-label-bottom":
          `${labelBottom}px`,

        "--tilt-label-left":
          `${labelLeft}px`,

        "--tilt-shadow-y":
          `${shadowY}px`,

        "--tilt-shadow-blur":
          `${shadowBlur}px`,

        "--tilt-shadow-opacity":
          shadowOpacity,

        "--tilt-hover-shadow-y":
          `${hoverShadowY}px`,

        "--tilt-hover-shadow-blur":
          `${hoverShadowBlur}px`,

        "--tilt-hover-shadow-opacity":
          hoverShadowOpacity,

        "--tilt-active-scale":
          activeScale,

        "--tilt-transition":
          `${transitionDuration}ms`,

        "--tilt-depth-transition":
          `${depthTransitionDuration}ms`,

        "--tilt-hover-border":
          hoverBorderColor,
      }}
      {...props}
    >

      <span
        className="tilt-depth"
        style={{
          backgroundColor:
            accentColor,
        }}
      />

      <span className="tilt-body" />

      {showTopEdge && (
        <span className="tilt-top-edge" />
      )}

      {showCornerDetail && (
        <span
          className="tilt-corner"
          style={{
            backgroundColor:
              accentColor,
          }}
        />
      )}

      <span className="tilt-content">
        <span className="tilt-text">
          {children}
        </span>

        {showArrow && (
          <span className="tilt-arrow">
            {arrow}
          </span>
        )}
      </span>

      {showLabel && (
        <span className="tilt-label">
          {label}
        </span>
      )}
    </button>
  );
};

export default TiltCardButton;