import AuroraButton from "./components/AuroraButton/AuroraButton";
import BlackHoleButton from "./components/BlackHoleButton/BlackHoleButton";
import CableSendButton from "./components/CableSendButton/CableSendButton";
import ColorBurstButton from "./components/ColorBurstButton/ColorBurstButton";
import ControlPanelButton from "./components/ControlPanelButton/ControlPanelButton";

import CopyButton from "./components/CopyButton/CopyButton";
import CyberButton from "./components/CyberButton/CyberButton";
import DialButton from "./components/DialButton/DialButton";
import DiceButton from "./components/DiceButton/DiceButton";
import DNAButton from "./components/DNAButton/DNAButton";

import ElectricButton from "./components/ElectricButton/ElectricButton";
import FireButton from "./components/FireButton/FireButton";
import FuseGlowButton from "./components/FuseGlowButton/FuseGlowButton";
import GamepadButton from "./components/GamepadButton/GamepadButton";
import GhostButton from "./components/GhostButton/GhostButton";

import GlassButton from "./components/GlassButton/GlassButton";
import GlowButton from "./components/GlowButton/GlowButton";
import GradientButton from "./components/GradientButton/GradientButton";
import HologramButton from "./components/HologramButton/HologramButton";
import IceBreakButton from "./components/IceBreakButton/IceBreakButton";

import InkButton from "./components/InkButton/InkButton";
import KeycapButton from "./components/KeycapButton/KeycapButton";
import LiquidButton from "./components/LiquidButton/LiquidButton";
import LiquidGlassButton from "./components/LiquidGlassButton/LiquidGlassButton";
import LoadingButton from "./components/LoadingButton/LoadingButton";

import MagneticButton from "./components/MagneticButton/MagneticButton";
import MagneticGlowButton from "./components/MagneticGlowButton/MagneticGlowButton";
import MagneticTextButton from "./components/MagneticTextButton/MagneticTextButton";
import MoodButton from "./components/MoodButton/MoodButton";
import MorphButton from "./components/MorphButton/MorphButton";

import NeonButton from "./components/NeonButton/NeonButton";
import OrbitButton from "./components/OrbitButton/OrbitButton";
import ParticleButton from "./components/ParticleButton/ParticleButton";
import PlasmaButton from "./components/PlasmaButton/PlasmaButton";
import PortalButton from "./components/PortalButton/PortalButton";

import PressHoldButton from "./components/PressHoldButton/PressHoldButton";
import ProgressButton from "./components/ProgressButton/ProgressButton";
import PuppyButton from "./components/PuppyButton/PuppyButton";
import RainbowButton from "./components/RainbowButton/RainbowButton";
import RippleButton from "./components/RippleButton/RippleButton";

import RippleWaveButton from "./components/RippleWaveButton/RippleWaveButton";
import ShimmerButton from "./components/ShimmerButton/ShimmerButton";
import SplitButton from "./components/SplitButton/SplitButton";
import SpotlightButton from "./components/SpotlightButton/SpotlightButton";
import StarfieldButton from "./components/StarfieldButton/StarfieldButton";

import SwipeActionButton from "./components/SwipeActionButton/SwipeActionButton";
import ThreeDButton from "./components/ThreeDButton/ThreeDButton";
import TiltCardButton from "./components/TiltCardButton/TiltCardButton";
import ToggleButton from "./components/ToggleButton/ToggleButton";


const buttons = [
  ["Aurora", AuroraButton],
  ["Black Hole", BlackHoleButton],
  ["Cable Send", CableSendButton],
  ["Color Burst", ColorBurstButton],
  ["Control Panel", ControlPanelButton],

  ["Copy", CopyButton],
  ["Cyber", CyberButton],
  ["Dial", DialButton],
  ["Dice", DiceButton],
  ["DNA", DNAButton],

  ["Electric", ElectricButton],
  ["Fire", FireButton],
  ["Fuse Glow", FuseGlowButton],
  ["Gamepad", GamepadButton],
  ["Ghost", GhostButton],

  ["Glass", GlassButton],
  ["Glow", GlowButton],
  ["Gradient", GradientButton],
  ["Hologram", HologramButton],
  ["Ice Break", IceBreakButton],

  ["Ink", InkButton],
  ["Keycap", KeycapButton],
  ["Liquid", LiquidButton],
  ["Liquid Glass", LiquidGlassButton],
  ["Loading", LoadingButton],

  ["Magnetic", MagneticButton],
  ["Magnetic Glow", MagneticGlowButton],
  ["Magnetic Text", MagneticTextButton],
  ["Mood", MoodButton],
  ["Morph", MorphButton],

  ["Neon", NeonButton],
  ["Orbit", OrbitButton],
  ["Particle", ParticleButton],
  ["Plasma", PlasmaButton],
  ["Portal", PortalButton],

  ["Press Hold", PressHoldButton],
  ["Progress", ProgressButton],
  ["Puppy", PuppyButton],
  ["Rainbow", RainbowButton],
  ["Ripple", RippleButton],

  ["Ripple Wave", RippleWaveButton],
  ["Shimmer", ShimmerButton],
  ["Split", SplitButton],
  ["Spotlight", SpotlightButton],
  ["Starfield", StarfieldButton],

  ["Swipe Action", SwipeActionButton],
  ["3D", ThreeDButton],
  ["Tilt Card", TiltCardButton],
  ["Toggle", ToggleButton],
];


function App() {

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "white",
        padding: "60px 30px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            margin: 0,
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          ButtonAdda
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "12px",
            fontSize: "16px",
          }}
        >
          Animated React Buttons
        </p>

        <div
          style={{
            display: "inline-flex",
            marginTop: "20px",
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(99,102,241,.1)",
            border: "1px solid rgba(99,102,241,.25)",
            color: "#a5b4fc",
            fontSize: "13px",
          }}
        >
          {buttons.length} Buttons
        </div>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",

          gap: "28px",
        }}
      >

        {buttons.map(([name, Button]) => (

          <div
            key={name}
            style={{
              minHeight: "180px",

              display: "flex",
              flexDirection: "column",

              alignItems: "center",
              justifyContent: "center",

              gap: "25px",

              borderRadius: "20px",

              border:
                "1px solid rgba(255,255,255,.08)",

              background:
                "rgba(255,255,255,.025)",

              backdropFilter: "blur(10px)",

              padding: "25px",

              overflow: "hidden",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >

              <Button>
                {name}
              </Button>

            </div>

            <span
              style={{
                fontSize: "12px",
                color: "#64748b",
                letterSpacing: ".5px",
              }}
            >
              {name}Button
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;