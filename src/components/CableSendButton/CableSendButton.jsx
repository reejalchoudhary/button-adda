import { useEffect, useRef, useState } from "react";
import "./CableSendButton.css";

export default function CableSendButton({
  children = "Send Message",

  width = 290,
  height = 76,

  color = "#8b5cf6",
  cableColor = "#30313a",
  textColor = "#f4f4f5",
  radius = 24,

  snapDistance = 65,

  onClick,

  disabled = false,
  className = "",

  ...props
}) {
  const buttonRef = useRef(null);
  const resetTimer = useRef(null);
  const sentTimer = useRef(null);

  const numericWidth =
    typeof width === "number"
      ? width
      : parseFloat(width) || 340;

  const numericHeight =
    typeof height === "number"
      ? height
      : parseFloat(height) || 76;

  const [plug, setPlug] = useState({
    x: 45,
    y: numericHeight / 2,
  });

  const [dragging, setDragging] =
    useState(false);

  const [connected, setConnected] =
    useState(false);

  const [sent, setSent] =
    useState(false);

  const socket = {
    x: numericWidth - 48,
    y: numericHeight / 2,
  };

  const originalPlug = {
    x: 45,
    y: numericHeight / 2,
  };

  useEffect(() => {
    setPlug({
      x: 45,
      y: numericHeight / 2,
    });
  }, [numericWidth, numericHeight]);

  const getPosition = (e) => {
    if (!buttonRef.current) {
      return originalPlug;
    }

    const rect =
      buttonRef.current.getBoundingClientRect();

    return {
      x: Math.max(
        12,
        Math.min(
          numericWidth - 12,
          e.clientX - rect.left
        )
      ),

      y: Math.max(
        12,
        Math.min(
          numericHeight - 12,
          e.clientY - rect.top
        )
      ),
    };
  };

  const handleDown = (e) => {
    if (
      disabled ||
      connected ||
      sent
    ) {
      return;
    }

    e.preventDefault();

    e.currentTarget.setPointerCapture(
      e.pointerId
    );

    setDragging(true);
  };

  const handleMove = (e) => {
    if (
      disabled ||
      !dragging ||
      connected
    ) {
      return;
    }

    const pos = getPosition(e);

    const dx =
      socket.x - pos.x;

    const dy =
      socket.y - pos.y;

    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );

    if (
      distance < snapDistance
    ) {
      const strength =
        1 -
        distance /
          snapDistance;

      setPlug({
        x:
          pos.x +
          dx *
            strength *
            0.65,

        y:
          pos.y +
          dy *
            strength *
            0.65,
      });
    } else {
      setPlug(pos);
    }
  };

  const handleUp = (e) => {
    if (
      disabled ||
      !dragging
    ) {
      return;
    }

    const pos = getPosition(e);

    const dx =
      socket.x - pos.x;

    const dy =
      socket.y - pos.y;

    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );

    setDragging(false);

    if (
      distance <= snapDistance
    ) {
      connect();
    } else {
      setPlug(originalPlug);
    }
  };

  const connect = () => {
    if (
      disabled ||
      connected ||
      sent
    ) {
      return;
    }

    setPlug(socket);
    setConnected(true);

    clearTimeout(
      sentTimer.current
    );

    sentTimer.current =
      setTimeout(() => {
        setSent(true);

        onClick?.();

        resetTimer.current =
          setTimeout(() => {
            setSent(false);
            setConnected(false);
            setPlug(originalPlug);
          }, 2200);
      }, 550);
  };

  useEffect(() => {
    return () => {
      clearTimeout(
        resetTimer.current
      );

      clearTimeout(
        sentTimer.current
      );
    };
  }, []);

  const cableStart =
    originalPlug;

  const cableEnd =
    connected
      ? socket
      : plug;

  const middleX =
    (cableStart.x +
      cableEnd.x) /
    2;

  const cablePath = `
    M ${cableStart.x} ${cableStart.y}
    C
    ${middleX - 35} ${cableStart.y + 4},
    ${middleX + 35} ${cableEnd.y - 4},
    ${cableEnd.x} ${cableEnd.y}
  `;

  return (
    <div
      ref={buttonRef}
      className={[
        "cable-send-button",

        dragging
          ? "dragging"
          : "",

        connected
          ? "connected"
          : "",

        sent
          ? "sent"
          : "",

        disabled
          ? "disabled"
          : "",

        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width:
          typeof width === "number"
            ? `${width}px`
            : width,

        height:
          typeof height === "number"
            ? `${height}px`
            : height,

        "--accent": color,
        "--cable": cableColor,
        "--button-text": textColor,
        "--button-radius":
          typeof radius === "number"
            ? `${radius}px`
            : radius,
      }}
      onPointerMove={handleMove}
      onPointerUp={handleUp}
      {...props}
    >

      <div
        className="ambient-light"
        aria-hidden="true"
      />

      <svg
        className="cable"
        width={numericWidth}
        height={numericHeight}
        viewBox={`0 0 ${numericWidth} ${numericHeight}`}
        aria-hidden="true"
      >
        <path
          d={cablePath}
          className="cable-shadow"
        />

        <path
          d={cablePath}
          className="cable-main"
        />

        {connected && (
          <path
            d={cablePath}
            className="energy"
          />
        )}
      </svg>

      <div
        className={[
          "socket",
          connected
            ? "socket-connected"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          left: socket.x,
          top: socket.y,
        }}
        aria-hidden="true"
      >
        <div className="socket-ring">
          <div className="socket-hole" />
        </div>
      </div>

      <div
        className={[
          "mini-plug",

          dragging
            ? "plug-dragging"
            : "",

          connected
            ? "plug-connected"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          left: plug.x,
          top: plug.y,
        }}
        onPointerDown={handleDown}
        role="button"
        aria-label="Drag plug to socket"
        tabIndex={disabled ? -1 : 0}
      >
        <div className="plug-handle" />

        <div className="plug-tip">
          <span />
          <span />
        </div>
      </div>

      <div className="button-content">
        <div className="message-icon">
          {sent ? "✓" : "➤"}
        </div>

        <span>
          {sent
            ? "Message Sent"
            : children}
        </span>
      </div>

      {!dragging &&
        !connected &&
        !sent &&
        !disabled && (
          <div className="drag-hint">
            connect
          </div>
        )}
    </div>
  );
}