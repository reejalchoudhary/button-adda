import { useEffect, useRef, useState } from "react";
import "./LoadingButton.css";

const LoadingButton = ({
  children = "Submit",

  loading = false,
  loadingText = "Loading...",
  progressText = true,
  loadingDuration = 2000,
  progressStep = 2,

  width = 180,
  height = 52,

  color = "#6366f1",
  textColor = "#ffffff",
  progressColor = "#ffffff",
  progressTrackColor = "rgba(255,255,255,0.25)",

  radius = 12,

  spinnerSize = 18,
  spinnerBorderWidth = 2,

  fontSize = 16,
  fontWeight = 600,
  gap = 8,

  shadowOpacity = 0.33,
  hoverLift = 4,
  hoverGlowOpacity = 0.1,
  activeScale = 0.95,

  autoStart = true,
  resetAfter = 0,
  onStart,
  onProgress,
  onComplete,
  onClick,

  disabled = false,
  className = "",
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef(null);
  const progressRef = useRef(0);

  const isControlledLoading = loading === true;
  const isLoading = isControlledLoading || internalLoading;

  const clearProgressTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startLoading = () => {
    if (disabled || isLoading) return;

    if (!autoStart) {
      onClick?.();
      return;
    }

    setInternalLoading(true);
    setProgress(0);
    progressRef.current = 0;

    onStart?.();

    const intervalTime =
      loadingDuration / (100 / progressStep);

    timerRef.current = setInterval(() => {
      progressRef.current += progressStep;

      if (progressRef.current >= 100) {
        progressRef.current = 100;

        setProgress(100);
        onProgress?.(100);

        clearProgressTimer();

        setTimeout(() => {
          setInternalLoading(false);

          onComplete?.();

          onClick?.();

          if (resetAfter > 0) {
            setTimeout(() => {
              setProgress(0);
              progressRef.current = 0;
            }, resetAfter);
          } else {
            setProgress(0);
            progressRef.current = 0;
          }
        }, 0);

        return;
      }

      setProgress(progressRef.current);
      onProgress?.(progressRef.current);
    }, intervalTime);
  };

  useEffect(() => {
    return () => {
      clearProgressTimer();
    };
  }, []);

  const displayText =
    isLoading
      ? progressText
        ? `${loadingText} ${Math.round(progress)}%`
        : loadingText
      : children;

  const isButtonDisabled =
    disabled || isLoading;

  return (
    <button
      type="button"
      onClick={startLoading}
      disabled={isButtonDisabled}
      className={`loading-button ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minHeight: `${height}px`,

        borderRadius: `${radius}px`,

        color: textColor,
        backgroundColor: color,

        fontSize: `${fontSize}px`,
        fontWeight,
        gap: `${gap}px`,

        "--loading-color": color,
        "--loading-text-color": textColor,
        "--loading-progress-color": progressColor,
        "--loading-track-color": progressTrackColor,

        "--loading-radius": `${radius}px`,
        "--loading-shadow-opacity": shadowOpacity,

        "--loading-hover-lift": `${hoverLift}px`,
        "--loading-hover-glow-opacity":
          hoverGlowOpacity,

        "--loading-active-scale": activeScale,

        "--loading-spinner-size":
          `${spinnerSize}px`,
        "--loading-spinner-border":
          `${spinnerBorderWidth}px`,

        "--loading-progress":
          `${progress}%`,
      }}
      {...props}
    >

      <span className="loading-hover-glow" />

      {isLoading && (
        <span className="loading-progress-track">
          <span className="loading-progress-fill" />
        </span>
      )}

      {isLoading ? (
        <>

          <span className="loading-spinner" />

          <span className="loading-content">
            {displayText}
          </span>
        </>
      ) : (
        <span className="loading-content">
          {displayText}
        </span>
      )}
    </button>
  );
};

export default LoadingButton;