import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import { useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import './index.css';//#region src/components/AuroraButton/AuroraButton.jsx
var s = ({ children: e = "Aurora Button", width: r = 180, height: i = 52, color: a = "#8b5cf6", textColor: o = "#ffffff", radius: s = 14, intensity: c = 1, onClick: l, disabled: u = !1, className: d = "", ...f }) => {
	let p = (e) => typeof e == "number" ? `${e}px` : e, m = (e) => typeof e == "number" ? `${e}px` : e, h = Math.max(0, Number(c) || 0);
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: l,
		disabled: u,
		className: `button-adda-aurora ${d}`,
		style: {
			"--aurora-width": p(r),
			"--aurora-height": p(i),
			"--aurora-color": a,
			"--aurora-text-color": o,
			"--aurora-radius": m(s),
			"--aurora-intensity": h
		},
		...f,
		children: [
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__background",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__gradient",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__glass",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__border",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__shimmer",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "button-adda-aurora__content",
				children: e
			})
		]
	});
}, c = ({ children: e = "Send", width: i = 110, height: s = 110, color: c = "#8b5cf6", textColor: l = "#ffffff", radius: u = "50%", gravityRadius: d = 190, attractionStrength: f = .18, snapDistance: p = 32, autoClickDelay: m = 700, onClick: h, disabled: g = !1, className: _ = "", ...v }) => {
	let y = a(null), b = a(null), x = a(null), S = a(null), C = a({
		x: 0,
		y: 0
	}), w = a({
		x: 0,
		y: 0
	}), [T, E] = o(!1), [D, O] = o(!1), [k, A] = o(!1), [j, M] = o(0), N = (e) => typeof e == "number" ? `${e}px` : e, P = (e) => typeof e == "number" ? `${e}px` : e, F = () => {
		g || k || (A(!0), h?.(), clearTimeout(S.current), S.current = setTimeout(() => {
			A(!1), O(!1), x.current = null;
		}, 900));
	};
	return r(() => {
		if (g) return;
		let e = (e) => {
			C.current = {
				x: e.clientX,
				y: e.clientY
			};
		};
		return window.addEventListener("mousemove", e), () => {
			window.removeEventListener("mousemove", e);
		};
	}, [g]), r(() => {
		if (g) return;
		let e = () => {
			if (!y.current) {
				b.current = requestAnimationFrame(e);
				return;
			}
			let t = y.current.getBoundingClientRect(), n = t.left + t.width / 2, r = t.top + t.height / 2, i = n - C.current.x, a = r - C.current.y, o = Math.sqrt(i * i + a * a);
			if (o > d) {
				E(!1), M(0), w.current.x *= .82, w.current.y *= .82, y.current.style.setProperty("--gravity-x", `${w.current.x}px`), y.current.style.setProperty("--gravity-y", `${w.current.y}px`), b.current = requestAnimationFrame(e);
				return;
			}
			E(!0);
			let s = Math.max(0, Math.min(1, 1 - o / d));
			M(s);
			let c = f * (.4 + s * 1.8);
			w.current.x += i * c, w.current.y += a * c, w.current.x = Math.max(-18, Math.min(18, w.current.x)), w.current.y = Math.max(-18, Math.min(18, w.current.y)), y.current.style.setProperty("--gravity-x", `${w.current.x}px`), y.current.style.setProperty("--gravity-y", `${w.current.y}px`), o <= p && !D && !k && (O(!0), x.current ||= setTimeout(() => {
				F();
			}, m)), b.current = requestAnimationFrame(e);
		};
		return b.current = requestAnimationFrame(e), () => {
			cancelAnimationFrame(b.current), clearTimeout(x.current), clearTimeout(S.current), x.current = null, S.current = null;
		};
	}, [
		g,
		d,
		f,
		p,
		m,
		D,
		k
	]), r(() => {
		if (!D) return;
		let e = () => {
			if (!y.current) return;
			let e = y.current.getBoundingClientRect(), t = e.left + e.width / 2, n = e.top + e.height / 2, r = t - C.current.x, i = n - C.current.y;
			Math.sqrt(r * r + i * i) > p * 1.8 && (clearTimeout(x.current), x.current = null, O(!1));
		};
		return window.addEventListener("mousemove", e), () => {
			window.removeEventListener("mousemove", e);
		};
	}, [D, p]), /* @__PURE__ */ n("button", {
		ref: y,
		type: "button",
		disabled: g,
		onClick: F,
		className: [
			"blackhole-button",
			T ? "gravity-active" : "",
			D ? "gravity-snapping" : "",
			k ? "gravity-activated" : "",
			_
		].filter(Boolean).join(" "),
		style: {
			"--blackhole-width": N(i),
			"--blackhole-height": N(s),
			"--blackhole-radius": P(u),
			"--blackhole-color": c,
			"--blackhole-text-color": l,
			"--gravity-progress": j
		},
		...v,
		children: [
			/* @__PURE__ */ t("span", {
				className: "gravity-field",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "gravity-orbit",
				"aria-hidden": "true",
				children: /* @__PURE__ */ t("i", {})
			}),
			/* @__PURE__ */ t("span", {
				className: "gravity-hole",
				"aria-hidden": "true",
				children: /* @__PURE__ */ t("span", { className: "gravity-hole-core" })
			}),
			/* @__PURE__ */ n("span", {
				className: "gravity-content",
				children: [/* @__PURE__ */ t("span", {
					className: "gravity-label",
					children: e
				}), D && /* @__PURE__ */ t("span", {
					className: "gravity-ready",
					children: "RELEASE"
				})]
			}),
			/* @__PURE__ */ t("span", {
				className: "gravity-burst",
				"aria-hidden": "true",
				children: Array.from({ length: 12 }).map((e, n) => /* @__PURE__ */ t("i", {}, n))
			})
		]
	});
};
//#endregion
//#region src/components/CableSendButton/CableSendButton.jsx
function l({ children: e = "Send Message", width: i = 290, height: s = 76, color: c = "#8b5cf6", cableColor: l = "#30313a", textColor: u = "#f4f4f5", radius: d = 24, snapDistance: f = 65, onClick: p, disabled: m = !1, className: h = "", ...g }) {
	let _ = a(null), v = a(null), y = a(null), b = typeof i == "number" ? i : parseFloat(i) || 340, x = typeof s == "number" ? s : parseFloat(s) || 76, [S, C] = o({
		x: 45,
		y: x / 2
	}), [w, T] = o(!1), [E, D] = o(!1), [O, k] = o(!1), A = {
		x: b - 48,
		y: x / 2
	}, j = {
		x: 45,
		y: x / 2
	};
	r(() => {
		C({
			x: 45,
			y: x / 2
		});
	}, [b, x]);
	let M = (e) => {
		if (!_.current) return j;
		let t = _.current.getBoundingClientRect();
		return {
			x: Math.max(12, Math.min(b - 12, e.clientX - t.left)),
			y: Math.max(12, Math.min(x - 12, e.clientY - t.top))
		};
	}, N = (e) => {
		m || E || O || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), T(!0));
	}, P = (e) => {
		if (m || !w || E) return;
		let t = M(e), n = A.x - t.x, r = A.y - t.y, i = Math.sqrt(n * n + r * r);
		if (i < f) {
			let e = 1 - i / f;
			C({
				x: t.x + n * e * .65,
				y: t.y + r * e * .65
			});
		} else C(t);
	}, F = (e) => {
		if (m || !w) return;
		let t = M(e), n = A.x - t.x, r = A.y - t.y, i = Math.sqrt(n * n + r * r);
		T(!1), i <= f ? I() : C(j);
	}, I = () => {
		m || E || O || (C(A), D(!0), clearTimeout(y.current), y.current = setTimeout(() => {
			k(!0), p?.(), v.current = setTimeout(() => {
				k(!1), D(!1), C(j);
			}, 2200);
		}, 550));
	};
	r(() => () => {
		clearTimeout(v.current), clearTimeout(y.current);
	}, []);
	let L = j, R = E ? A : S, z = (L.x + R.x) / 2, B = `
    M ${L.x} ${L.y}
    C
    ${z - 35} ${L.y + 4},
    ${z + 35} ${R.y - 4},
    ${R.x} ${R.y}
  `;
	return /* @__PURE__ */ n("div", {
		ref: _,
		className: [
			"cable-send-button",
			w ? "dragging" : "",
			E ? "connected" : "",
			O ? "sent" : "",
			m ? "disabled" : "",
			h
		].filter(Boolean).join(" "),
		style: {
			width: typeof i == "number" ? `${i}px` : i,
			height: typeof s == "number" ? `${s}px` : s,
			"--accent": c,
			"--cable": l,
			"--button-text": u,
			"--button-radius": typeof d == "number" ? `${d}px` : d
		},
		onPointerMove: P,
		onPointerUp: F,
		...g,
		children: [
			/* @__PURE__ */ t("div", {
				className: "ambient-light",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ n("svg", {
				className: "cable",
				width: b,
				height: x,
				viewBox: `0 0 ${b} ${x}`,
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ t("path", {
						d: B,
						className: "cable-shadow"
					}),
					/* @__PURE__ */ t("path", {
						d: B,
						className: "cable-main"
					}),
					E && /* @__PURE__ */ t("path", {
						d: B,
						className: "energy"
					})
				]
			}),
			/* @__PURE__ */ t("div", {
				className: ["socket", E ? "socket-connected" : ""].filter(Boolean).join(" "),
				style: {
					left: A.x,
					top: A.y
				},
				"aria-hidden": "true",
				children: /* @__PURE__ */ t("div", {
					className: "socket-ring",
					children: /* @__PURE__ */ t("div", { className: "socket-hole" })
				})
			}),
			/* @__PURE__ */ n("div", {
				className: [
					"mini-plug",
					w ? "plug-dragging" : "",
					E ? "plug-connected" : ""
				].filter(Boolean).join(" "),
				style: {
					left: S.x,
					top: S.y
				},
				onPointerDown: N,
				role: "button",
				"aria-label": "Drag plug to socket",
				tabIndex: m ? -1 : 0,
				children: [/* @__PURE__ */ t("div", { className: "plug-handle" }), /* @__PURE__ */ n("div", {
					className: "plug-tip",
					children: [/* @__PURE__ */ t("span", {}), /* @__PURE__ */ t("span", {})]
				})]
			}),
			/* @__PURE__ */ n("div", {
				className: "button-content",
				children: [/* @__PURE__ */ t("div", {
					className: "message-icon",
					children: O ? "✓" : "➤"
				}), /* @__PURE__ */ t("span", { children: O ? "Message Sent" : e })]
			}),
			!w && !E && !O && !m && /* @__PURE__ */ t("div", {
				className: "drag-hint",
				children: "connect"
			})
		]
	});
}
//#endregion
//#region src/components/ColorBurstButton/ColorBurstButton.jsx
var u = [
	{
		name: "HAPPY",
		color: "#FFD93D",
		emoji: "☀️"
	},
	{
		name: "ENERGY",
		color: "#FF5C8A",
		emoji: "⚡"
	},
	{
		name: "CHILL",
		color: "#5B8CFF",
		emoji: "🌊"
	},
	{
		name: "DREAM",
		color: "#B66DFF",
		emoji: "🌙"
	},
	{
		name: "FRESH",
		color: "#43E97B",
		emoji: "🍃"
	}
];
function d({ children: i = "Choose Mood", width: s = 270, height: c = 70, color: l = "#B66DFF", textColor: d = "#ffffff", backgroundColor: f = "#111827", radius: p = 30, orbitColors: m = [
	"#A855F7",
	"#3B82F6",
	"#FACC15",
	"#EC4899",
	"#22C55E"
], orbitSize: h = 34, cursorLightSize: g = 160, cursorLightOpacity: _ = .13, animationDuration: v = .85, particleColor: y = "#ffffff", showParticles: b = !0, showOrbits: x = !0, showCursorLight: S = !0, moods: C = u, onChange: w, disabled: T = !1, className: E = "", ...D }) {
	let [O, k] = o(!1), [A, j] = o(null), [M, N] = o({
		x: 50,
		y: 50
	}), P = a(null), F = a(null), I = (e) => {
		if (T || !P.current) return;
		let t = P.current.getBoundingClientRect(), n = (e.clientX - t.left) / t.width * 100, r = (e.clientY - t.top) / t.height * 100;
		N({
			x: n,
			y: r
		});
	}, L = () => {
		T || O || !Array.isArray(C) || C.length === 0 || (k(!0), clearTimeout(F.current), F.current = setTimeout(() => {
			let e = C[Math.floor(Math.random() * C.length)];
			j(e), w?.(e), k(!1);
		}, v * 1e3));
	};
	r(() => () => {
		clearTimeout(F.current);
	}, []);
	let R = Array.isArray(m) ? m : [], z = (e, t) => R[e] || t, B = {
		width: typeof s == "number" ? `${s}px` : s,
		height: typeof c == "number" ? `${c}px` : c,
		"--burst-color": l,
		"--burst-text-color": d,
		"--burst-background": f,
		"--burst-radius": typeof p == "number" ? `${p}px` : p,
		"--orbit-size": typeof h == "number" ? `${h}px` : h,
		"--cursor-light-size": typeof g == "number" ? `${g}px` : g,
		"--cursor-light-opacity": _,
		"--burst-duration": `${v}s`,
		"--particle-color": y,
		"--mouse-x": `${M.x}%`,
		"--mouse-y": `${M.y}%`,
		"--orbit-purple": z(0, "#A855F7"),
		"--orbit-blue": z(1, "#3B82F6"),
		"--orbit-yellow": z(2, "#FACC15"),
		"--orbit-pink": z(3, "#EC4899"),
		"--orbit-green": z(4, "#22C55E"),
		"--selected-color": A?.color || l
	};
	return /* @__PURE__ */ n("button", {
		ref: P,
		type: "button",
		disabled: T,
		className: [
			"color-burst-button",
			O ? "color-burst-active" : "",
			A ? "color-burst-selected" : "",
			T ? "color-burst-disabled" : "",
			E
		].filter(Boolean).join(" "),
		style: B,
		onMouseMove: I,
		onClick: L,
		...D,
		children: [
			/* @__PURE__ */ t("span", {
				className: "burst-background",
				"aria-hidden": "true"
			}),
			S && /* @__PURE__ */ t("span", {
				className: "cursor-light",
				"aria-hidden": "true"
			}),
			x && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", {
					className: "color-orbit orbit-purple",
					children: /* @__PURE__ */ t("span", {})
				}),
				/* @__PURE__ */ t("span", {
					className: "color-orbit orbit-blue",
					children: /* @__PURE__ */ t("span", {})
				}),
				/* @__PURE__ */ t("span", {
					className: "color-orbit orbit-yellow",
					children: /* @__PURE__ */ t("span", {})
				}),
				/* @__PURE__ */ t("span", {
					className: "color-orbit orbit-pink",
					children: /* @__PURE__ */ t("span", {})
				}),
				/* @__PURE__ */ t("span", {
					className: "color-orbit orbit-green",
					children: /* @__PURE__ */ t("span", {})
				})
			] }),
			/* @__PURE__ */ n("span", {
				className: "burst-center",
				children: [/* @__PURE__ */ t("span", { className: "center-ring" }), /* @__PURE__ */ t("span", {
					className: "burst-icon",
					children: A ? A.emoji : "✦"
				})]
			}),
			/* @__PURE__ */ t("span", {
				className: "burst-text",
				children: A ? A.name : i
			}),
			b && /* @__PURE__ */ t("span", {
				className: "burst-particles",
				"aria-hidden": "true",
				children: Array.from({ length: 10 }).map((e, n) => /* @__PURE__ */ t("i", {}, n))
			}),
			/* @__PURE__ */ t("span", {
				className: "tiny-dot dot-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "tiny-dot dot-2",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "tiny-dot dot-3",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "tiny-dot dot-4",
				"aria-hidden": "true"
			})
		]
	});
}
//#endregion
//#region src/components/ControlPanelButton/ControlPanelButton.jsx
var f = ({ children: e = "Activate", activeText: r = "ACTIVE", inactiveText: i = "READY", width: a = 220, height: s = 68, backgroundColor: c = "#151922", backgroundColorEnd: l = "#090b10", textColor: u = "#e5e7eb", statusColor: d = "#64748b", activeColor: f = "#a3e635", borderColor: p = "rgba(148,163,184,.16)", hoverBorderColor: m = "rgba(148,163,184,.3)", radius: h = 14, switchTrackColor: g = "#05070a", switchKnobColor: _ = "#64748b", switchKnobActiveColor: v = "#d1d5db", switchWidth: y = 38, switchHeight: b = 30, indicatorColor: x = "#475569", indicatorActiveColor: S = "#a3e635", showScanEffect: C = !0, showTopLine: w = !0, scanColor: T = "rgba(255,255,255,.08)", glowIntensity: E = 1, hoverLift: D = 2, onClick: O, disabled: k = !1, className: A = "", ...j }) => {
	let [M, N] = o(!1), P = () => {
		k || N((e) => {
			let t = !e;
			return O?.(t), t;
		});
	}, F = typeof a == "number" ? `${a}px` : a, I = typeof s == "number" ? `${s}px` : s, L = typeof h == "number" ? `${h}px` : h, R = typeof y == "number" ? `${y}px` : y, z = typeof b == "number" ? `${b}px` : b;
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: k,
		onClick: P,
		className: [
			"control-panel-button",
			M ? "control-active" : "",
			k ? "control-disabled" : "",
			A
		].filter(Boolean).join(" "),
		style: {
			width: F,
			height: I,
			"--control-bg-start": c,
			"--control-bg-end": l,
			"--control-text": u,
			"--control-status": d,
			"--control-active": f,
			"--control-border": p,
			"--control-border-hover": m,
			"--control-radius": L,
			"--switch-track": g,
			"--switch-knob": _,
			"--switch-knob-active": v,
			"--switch-width": R,
			"--switch-height": z,
			"--indicator": x,
			"--indicator-active": S,
			"--scan-color": T,
			"--glow-intensity": E,
			"--hover-lift": `${D}px`
		},
		...j,
		children: [
			w && /* @__PURE__ */ t("span", {
				className: "control-top-line",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "control-switch",
				"aria-hidden": "true",
				children: /* @__PURE__ */ t("span", {
					className: "control-switch-track",
					children: /* @__PURE__ */ t("span", {
						className: "control-switch-knob",
						children: /* @__PURE__ */ t("span", {})
					})
				})
			}),
			/* @__PURE__ */ n("span", {
				className: "control-info",
				children: [/* @__PURE__ */ t("span", {
					className: "control-label",
					children: e
				}), /* @__PURE__ */ t("span", {
					className: "control-status",
					children: M ? r : i
				})]
			}),
			/* @__PURE__ */ t("span", {
				className: "control-indicator",
				"aria-hidden": "true",
				children: /* @__PURE__ */ t("span", {})
			}),
			C && /* @__PURE__ */ t("span", {
				className: "control-scan",
				"aria-hidden": "true"
			})
		]
	});
}, p = ({ text: i = "", children: s = "Copy", copiedText: c = "Copied!", width: l = 140, height: u = 48, radius: d = 11, color: f = "#fafafa", backgroundColor: p = "#18181b", hoverBackgroundColor: m = "#27272a", borderColor: h = "#27272a", hoverBorderColor: g = "#3f3f46", copiedColor: _ = "#bbf7d0", copiedBackgroundColor: v = "#14231a", copiedHoverBackgroundColor: y = "#17291e", copiedBorderColor: b = "rgba(74, 222, 128, 0.35)", copiedHoverBorderColor: x = "rgba(74, 222, 128, 0.5)", showIcon: S = !0, copyIcon: C = null, successIcon: w = "✓", iconColor: T = "#d4d4d8", successIconColor: E = "#4ade80", iconSize: D = 19, fontSize: O = 14, fontWeight: k = 700, gap: A = 9, resetTime: j = 1800, onCopy: M, disabled: N = !1, className: P = "", ...F }) => {
	let [I, L] = o(!1), R = a(null);
	r(() => () => {
		clearTimeout(R.current);
	}, []);
	let z = async () => {
		if (!(N || I)) {
			if (typeof i != "string" || i.length === 0) {
				console.warn("CopyButton: No text provided.");
				return;
			}
			try {
				await navigator.clipboard.writeText(i), L(!0), M?.(i), clearTimeout(R.current), R.current = setTimeout(() => {
					L(!1);
				}, j);
			} catch {
				try {
					let e = document.createElement("textarea");
					e.value = i, e.style.position = "fixed", e.style.opacity = "0", e.style.pointerEvents = "none", document.body.appendChild(e), e.select(), document.execCommand("copy"), e.remove(), L(!0), M?.(i), clearTimeout(R.current), R.current = setTimeout(() => {
						L(!1);
					}, j);
				} catch (e) {
					console.error("Copy failed:", e);
				}
			}
		}
	}, B = typeof l == "number" ? `${l}px` : l, V = typeof u == "number" ? `${u}px` : u, H = typeof d == "number" ? `${d}px` : d, U = typeof D == "number" ? `${D}px` : D, W = () => C || /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", {
		className: "copy-sheet copy-sheet-back",
		"aria-hidden": "true"
	}), /* @__PURE__ */ t("span", {
		className: "copy-sheet copy-sheet-front",
		"aria-hidden": "true"
	})] });
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: z,
		disabled: N,
		"aria-label": I ? c : s,
		className: [
			"copy-button",
			I ? "copy-button-copied" : "",
			N ? "copy-button-disabled" : "",
			P
		].filter(Boolean).join(" "),
		style: {
			width: B,
			height: V,
			"--copy-radius": H,
			"--copy-color": f,
			"--copy-background": p,
			"--copy-background-hover": m,
			"--copy-border": h,
			"--copy-border-hover": g,
			"--copy-copied-color": _,
			"--copy-copied-background": v,
			"--copy-copied-background-hover": y,
			"--copy-copied-border": b,
			"--copy-copied-border-hover": x,
			"--copy-icon-color": T,
			"--copy-success-color": E,
			"--copy-icon-size": U,
			"--copy-font-size": typeof O == "number" ? `${O}px` : O,
			"--copy-font-weight": k,
			"--copy-gap": typeof A == "number" ? `${A}px` : A
		},
		...F,
		children: [S && /* @__PURE__ */ n("span", {
			className: "copy-icon-wrapper",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ t("span", {
				className: "copy-icon copy-icon-default",
				children: W()
			}), /* @__PURE__ */ t("span", {
				className: "copy-icon copy-icon-success",
				children: w
			})]
		}), /* @__PURE__ */ t("span", {
			className: "copy-text",
			children: I ? c : s
		})]
	});
}, m = ({ children: r = "Cyber Button", width: i = 190, height: a = 52, color: o = "#00f5ff", textColor: s = "#ffffff", backgroundColor: c = "#06121c", radius: l = 4, borderWidth: u = 1, fontSize: d = 14, fontWeight: f = 700, letterSpacing: p = "0.12em", glowIntensity: m = 1, showScanlines: h = !0, scanlineOpacity: g = .2, showScanBeam: _ = !0, scanSpeed: v = 2.5, scanBeamHeight: y = 2, scanBeamOpacity: b = .7, glitchIntensity: x = .7, glitchSpeed: S = .35, showCorners: C = !0, cornerSize: w = 12, cornerWidth: T = 2, showStatusLine: E = !0, statusLineWidth: D = "33%", statusLineOpacity: O = .5, onClick: k, disabled: A = !1, className: j = "", ...M }) => {
	let N = {
		"--cyber-width": typeof i == "number" ? `${i}px` : i,
		"--cyber-height": typeof a == "number" ? `${a}px` : a,
		"--cyber-color": o,
		"--cyber-text-color": s,
		"--cyber-background": c,
		"--cyber-radius": typeof l == "number" ? `${l}px` : l,
		"--cyber-border-width": typeof u == "number" ? `${u}px` : u,
		"--cyber-font-size": typeof d == "number" ? `${d}px` : d,
		"--cyber-font-weight": f,
		"--cyber-letter-spacing": typeof p == "number" ? `${p}px` : p,
		"--cyber-glow": m,
		"--cyber-scan-opacity": g,
		"--cyber-scan-speed": `${v}s`,
		"--cyber-beam-height": typeof y == "number" ? `${y}px` : y,
		"--cyber-beam-opacity": b,
		"--cyber-glitch": x,
		"--cyber-glitch-speed": `${S}s`,
		"--cyber-corner-size": typeof w == "number" ? `${w}px` : w,
		"--cyber-corner-width": typeof T == "number" ? `${T}px` : T,
		"--cyber-status-width": typeof D == "number" ? `${D}px` : D,
		"--cyber-status-opacity": O
	};
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: k,
		disabled: A,
		className: [
			"cyber-button",
			A ? "cyber-button-disabled" : "",
			j
		].filter(Boolean).join(" "),
		style: N,
		...M,
		children: [
			/* @__PURE__ */ t("span", {
				className: "cyber-background",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "cyber-border",
				"aria-hidden": "true"
			}),
			h && /* @__PURE__ */ t("span", {
				className: "cyber-scanlines",
				"aria-hidden": "true"
			}),
			_ && /* @__PURE__ */ t("span", {
				className: "cyber-scan-beam",
				"aria-hidden": "true"
			}),
			C && /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", {
				className: "cyber-corner cyber-corner-left",
				"aria-hidden": "true"
			}), /* @__PURE__ */ t("span", {
				className: "cyber-corner cyber-corner-right",
				"aria-hidden": "true"
			})] }),
			/* @__PURE__ */ t("span", {
				className: "cyber-glitch cyber-glitch-one",
				"aria-hidden": "true",
				children: r
			}),
			/* @__PURE__ */ t("span", {
				className: "cyber-glitch cyber-glitch-two",
				"aria-hidden": "true",
				children: r
			}),
			/* @__PURE__ */ t("span", {
				className: "cyber-content",
				children: r
			}),
			E && /* @__PURE__ */ t("span", {
				className: "cyber-status-line",
				"aria-hidden": "true"
			})
		]
	});
}, h = ({ children: e = "Continue", inactiveText: i = "Rotate to activate", activeText: s = "Action confirmed", completedText: c = "Completed", width: l = 260, height: u = 70, color: d = "#8b5cf6", textColor: f = "#ffffff", subtitleColor: p = "#94a3b8", backgroundColor: m = "#111318", borderColor: h = "rgba(255,255,255,0.1)", radius: g = 18, knobSize: _ = 52, knobColor: v = "#18181b", knobCenterColor: y = "#8b5cf6", progressColor: b = "#8b5cf6", progressTrackColor: x = "rgba(255,255,255,0.12)", progressWidth: S = 4, threshold: C = 360, resetAfter: w = 2200, titleFontSize: T = 15, subtitleFontSize: E = 11, showGlow: D = !0, glowIntensity: O = 1, statusColor: k = "#475569", statusActiveColor: A = "#8b5cf6", onComplete: j, disabled: M = !1, className: N = "", ...P }) => {
	let F = a(null), I = a(null), [L, R] = o(0), [z, B] = o(!1), [V, H] = o(!1), U = a(null), W = a(0), G = (e) => {
		if (!F.current) return 0;
		let t = F.current.getBoundingClientRect(), n = t.left + t.width / 2, r = t.top + t.height / 2;
		return Math.atan2(e.clientY - r, e.clientX - n) * (180 / Math.PI);
	}, K = () => {
		V || (H(!0), B(!1), j?.(), clearTimeout(I.current), I.current = setTimeout(() => {
			W.current = 0, U.current = null, R(0), H(!1);
		}, w));
	}, ee = (e) => {
		M || V || (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), U.current = G(e), B(!0));
	}, q = (e) => {
		if (!z || V || M) return;
		let t = G(e), n = t - U.current;
		if (n > 180 && (n -= 360), n < -180 && (n += 360), n > 0) {
			W.current += n;
			let e = Math.min(W.current, C);
			R(e), e >= C && K();
		}
		U.current = t;
	}, J = () => {
		B(!1), U.current = null;
	};
	r(() => () => clearTimeout(I.current), []);
	let Y = 2 * Math.PI * 22, X = Math.min(L / C, 1), te = Y - Y * X;
	return /* @__PURE__ */ n("div", {
		className: [
			"dial-button",
			z ? "dial-dragging" : "",
			V ? "dial-completed" : "",
			M ? "dial-disabled" : "",
			N
		].filter(Boolean).join(" "),
		style: {
			width: typeof l == "number" ? `${l}px` : l,
			height: typeof u == "number" ? `${u}px` : u,
			"--dial-color": d,
			"--dial-text": f,
			"--dial-subtitle": p,
			"--dial-background": m,
			"--dial-border": h,
			"--dial-radius": typeof g == "number" ? `${g}px` : g,
			"--dial-knob-size": typeof _ == "number" ? `${_}px` : _,
			"--dial-knob": v,
			"--dial-knob-center": y,
			"--dial-progress": b,
			"--dial-progress-track": x,
			"--dial-progress-width": S,
			"--dial-title-size": typeof T == "number" ? `${T}px` : T,
			"--dial-subtitle-size": typeof E == "number" ? `${E}px` : E,
			"--dial-glow": O,
			"--dial-status": k,
			"--dial-status-active": A
		},
		...P,
		children: [
			D && /* @__PURE__ */ t("div", { className: "dial-glow" }),
			/* @__PURE__ */ n("div", {
				ref: F,
				className: "dial-area",
				onPointerDown: ee,
				onPointerMove: q,
				onPointerUp: J,
				children: [/* @__PURE__ */ n("svg", {
					className: "progress-ring",
					viewBox: "0 0 56 56",
					children: [/* @__PURE__ */ t("circle", {
						className: "progress-background",
						cx: "28",
						cy: "28",
						r: 22
					}), /* @__PURE__ */ t("circle", {
						className: "progress-value",
						cx: "28",
						cy: "28",
						r: 22,
						strokeDasharray: Y,
						strokeDashoffset: te
					})]
				}), /* @__PURE__ */ n("div", {
					className: "knob",
					style: { transform: `rotate(${L}deg)` },
					children: [/* @__PURE__ */ t("div", { className: "knob-line" }), /* @__PURE__ */ t("div", {
						className: "knob-center",
						children: V ? "✓" : "↻"
					})]
				})]
			}),
			/* @__PURE__ */ n("div", {
				className: "dial-content",
				children: [/* @__PURE__ */ t("span", {
					className: "dial-title",
					children: V ? c : e
				}), /* @__PURE__ */ t("span", {
					className: "dial-subtitle",
					children: V ? s : z ? `${Math.round(X * 100)}%` : i
				})]
			}),
			/* @__PURE__ */ t("div", {
				className: `dial-status ${V ? "active" : ""}`,
				children: /* @__PURE__ */ t("span", {})
			})
		]
	});
}, g = ({ children: r = "Roll the Dice", width: i = 220, height: a = 64, backgroundColor: s = "#18181b", backgroundColorEnd: c = "#09090b", textColor: l = "#fafafa", borderColor: u = "rgba(255,255,255,0.1)", hoverBorderColor: d = "rgba(255,255,255,0.2)", radius: f = 18, fontSize: p = 14, fontWeight: m = 800, letterSpacing: h = .02, diceSize: g = 26, diceRadius: _ = 6, diceFaceColor: v = "#fafafa", diceFaceColorEnd: y = "#a1a1aa", diceTextColor: b = "#18181b", gap: x = 13, showArrow: S = !0, arrow: C = "↗", arrowOpacity: w = .55, rollDuration: T = 850, rollTextDuration: E = 420, hoverLift: D = 3, showShadow: O = !0, showSparks: k = !0, sparkColor: A = "#ffffff", shadowOpacity: j = .55, onRoll: M, disabled: N = !1, className: P = "", ...F }) => {
	let [I, L] = o(!1), [R, z] = o(1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: N,
		onClick: () => {
			if (N || I) return;
			L(!0);
			let e = Math.floor(Math.random() * 6) + 1;
			setTimeout(() => {
				z(e);
			}, Math.min(E, T)), setTimeout(() => {
				L(!1), M?.(e);
			}, T);
		},
		className: `
        dice-button
        ${I ? "dice-button-rolling" : ""}
        ${P}
      `,
		style: {
			width: `${i}px`,
			height: `${a}px`,
			"--dice-bg-start": s,
			"--dice-bg-end": c,
			"--dice-text-color": l,
			"--dice-border-color": u,
			"--dice-hover-border-color": d,
			"--dice-radius": `${f}px`,
			"--dice-font-size": `${p}px`,
			"--dice-font-weight": m,
			"--dice-letter-spacing": h,
			"--dice-size": `${g}px`,
			"--dice-face-radius": `${_}px`,
			"--dice-face-start": v,
			"--dice-face-end": y,
			"--dice-face-text": b,
			"--dice-gap": `${x}px`,
			"--dice-arrow-opacity": w,
			"--dice-roll-duration": `${T}ms`,
			"--dice-text-duration": `${E}ms`,
			"--dice-hover-lift": `${D}px`,
			"--dice-shadow-opacity": j,
			"--dice-spark-color": A
		},
		...F,
		children: [
			/* @__PURE__ */ n("span", {
				className: "dice-button-inner",
				children: [
					/* @__PURE__ */ t("span", {
						className: "dice-scene",
						style: { "--dice-scene-size": `${g + 4}px` },
						children: /* @__PURE__ */ n("span", {
							className: `dice-cube dice-face-${R}`,
							children: [
								/* @__PURE__ */ t("span", {
									className: "dice-face front",
									children: R
								}),
								/* @__PURE__ */ t("span", {
									className: "dice-face back",
									children: R
								}),
								/* @__PURE__ */ t("span", {
									className: "dice-face right",
									children: R
								}),
								/* @__PURE__ */ t("span", {
									className: "dice-face left",
									children: R
								}),
								/* @__PURE__ */ t("span", {
									className: "dice-face top",
									children: R
								}),
								/* @__PURE__ */ t("span", {
									className: "dice-face bottom",
									children: R
								})
							]
						})
					}),
					/* @__PURE__ */ t("span", {
						className: "dice-label",
						children: I ? "Rolling..." : r
					}),
					S && /* @__PURE__ */ t("span", {
						className: "dice-arrow",
						children: C
					})
				]
			}),
			O && /* @__PURE__ */ t("span", { className: "dice-shadow" }),
			k && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "dice-spark spark-1" }),
				/* @__PURE__ */ t("span", { className: "dice-spark spark-2" }),
				/* @__PURE__ */ t("span", { className: "dice-spark spark-3" }),
				/* @__PURE__ */ t("span", { className: "dice-spark spark-4" })
			] })
		]
	});
}, _ = ({ children: e = "Explore", icon: r = "◈", arrow: i = "→", width: a = 220, height: s = 62, color: c = "#818cf8", secondaryColor: l = "#c084fc", textColor: u = "#f8fafc", iconColor: d = "#a5b4fc", arrowColor: f = "#a5b4fc", backgroundColor: p = "#0f172a", backgroundColorEnd: m = "#111827", radius: h = 18, fontSize: g = 14, fontWeight: _ = 800, letterSpacing: v = .03, contentGap: y = 9, contentPadding: b = 20, scanDuration: x = 2500, nodeDuration: S = 1800, connectorDuration: C = 1800, iconDuration: w = 4e3, activeDuration: T = 850, hoverLift: E = 3, hoverScale: D = 1.015, showScan: O = !0, showDNA: k = !0, showConnectors: A = !0, showBurst: j = !0, onClick: M, disabled: N = !1, className: P = "", ...F }) => {
	let [I, L] = o(!1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: N,
		onClick: () => {
			N || I || (L(!0), M?.(), setTimeout(() => {
				L(!1);
			}, T));
		},
		className: `
        dna-button
        ${I ? "dna-active" : ""}
        ${P}
      `,
		style: {
			width: `${a}px`,
			height: `${s}px`,
			"--dna-color": c,
			"--dna-secondary-color": l,
			"--dna-text-color": u,
			"--dna-icon-color": d,
			"--dna-arrow-color": f,
			"--dna-bg-start": p,
			"--dna-bg-end": m,
			"--dna-radius": `${h}px`,
			"--dna-font-size": `${g}px`,
			"--dna-font-weight": _,
			"--dna-letter-spacing": v,
			"--dna-content-gap": `${y}px`,
			"--dna-content-padding": `${b}px`,
			"--dna-scan-duration": `${x}ms`,
			"--dna-node-duration": `${S}ms`,
			"--dna-connector-duration": `${C}ms`,
			"--dna-icon-duration": `${w}ms`,
			"--dna-active-duration": `${T}ms`,
			"--dna-hover-lift": `${E}px`,
			"--dna-hover-scale": D,
			"--dna-show-scan": +!!O
		},
		...F,
		children: [
			O && /* @__PURE__ */ t("span", { className: "dna-scan" }),
			k && /* @__PURE__ */ n("span", {
				className: "dna-strand dna-strand-left",
				children: [
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {})
				]
			}),
			k && /* @__PURE__ */ n("span", {
				className: "dna-strand dna-strand-right",
				children: [
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {})
				]
			}),
			A && /* @__PURE__ */ n("span", {
				className: "dna-connectors",
				children: [
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {})
				]
			}),
			/* @__PURE__ */ n("span", {
				className: "dna-content",
				children: [
					/* @__PURE__ */ t("span", {
						className: "dna-icon",
						children: r
					}),
					/* @__PURE__ */ t("span", {
						className: "dna-text",
						children: e
					}),
					/* @__PURE__ */ t("span", {
						className: "dna-arrow",
						children: i
					})
				]
			}),
			j && /* @__PURE__ */ n("span", {
				className: "dna-burst",
				children: [
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {})
				]
			})
		]
	});
}, v = ({ children: e = "Electric Button", width: r = 180, height: i = 52, color: a = "#06b6d4", textColor: o = "#ffffff", backgroundColor: s = "#07111f", radius: c = 12, borderWidth: l = 2, borderSpeed: u = 2, glowIntensity: d = 1, glowOpacity: f = .4, hoverGlowOpacity: p = .8, glowBlur: m = 30, showStreak: h = !0, streakColor: g = "rgba(255,255,255,0.3)", streakSpeed: _ = 500, streakWidth: v = 50, streakAngle: y = 12, streakBlur: b = 6, streakStart: x = -50, streakEnd: S = 120, hoverLift: C = 4, activeScale: w = .95, fontSize: T = 14, fontWeight: E = 600, letterSpacing: D = "normal", transitionDuration: O = 300, onClick: k, disabled: A = !1, className: j = "", ...M }) => {
	let N = `${a}55`, P = `${a}15`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: k,
		disabled: A,
		className: `electric-button ${A ? "electric-button-disabled" : ""} ${j}`,
		style: {
			"--electric-width": typeof r == "number" ? `${r}px` : r,
			"--electric-height": typeof i == "number" ? `${i}px` : i,
			"--electric-color": a,
			"--electric-text-color": o,
			"--electric-background": s,
			"--electric-radius": typeof c == "number" ? `${c}px` : c,
			"--electric-border-width": typeof l == "number" ? `${l}px` : l,
			"--electric-border-speed": typeof u == "number" ? `${u}s` : u,
			"--electric-glow-opacity": f,
			"--electric-hover-glow-opacity": p,
			"--electric-glow-blur": typeof m == "number" ? `${m}px` : m,
			"--electric-streak-color": g,
			"--electric-streak-speed": typeof _ == "number" ? `${_}ms` : _,
			"--electric-streak-width": typeof v == "number" ? `${v}%` : v,
			"--electric-streak-angle": `${y}deg`,
			"--electric-streak-blur": typeof b == "number" ? `${b}px` : b,
			"--electric-streak-start": typeof x == "number" ? `${x}%` : x,
			"--electric-streak-end": typeof S == "number" ? `${S}%` : S,
			"--electric-hover-lift": typeof C == "number" ? `${C}px` : C,
			"--electric-active-scale": w,
			"--electric-font-size": typeof T == "number" ? `${T}px` : T,
			"--electric-font-weight": E,
			"--electric-letter-spacing": D,
			"--electric-transition": typeof O == "number" ? `${O}ms` : O,
			boxShadow: `
          0 0 ${15 * d}px ${N},
          inset 0 0 ${15 * d}px ${P}
        `
		},
		...M,
		children: [
			/* @__PURE__ */ t("span", {
				className: "electric-border",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "electric-inner",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "electric-glow",
				"aria-hidden": "true"
			}),
			h && /* @__PURE__ */ t("span", {
				className: "electric-streak",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "electric-content",
				children: e
			})
		]
	});
}, y = ({ children: e = "Fire Button", width: r = 180, height: i = 52, color: a = "#ff6b00", textColor: o = "#ffffff", backgroundColor: s = "#180806", glowColor: c = "#ffea00", secondaryColor: l = "#ffb000", redColor: u = "#ff2d00", darkFireColor: d = "#8f1700", radius: f = 12, borderWidth: p = 1, intensity: m = 1, glowOpacity: h = .6, movingFireOpacity: g = .8, innerFireOpacity: _ = .9, streakOpacity: v = .7, shineOpacity: y = .3, glowDuration: b = 2e3, spinDuration: x = 3e3, pulseDuration: S = 1500, shineDuration: C = 700, hoverLift: w = 4, hoverScale: T = 1.02, activeScale: E = .95, fontSize: D = 16, fontWeight: O = 600, onClick: k, disabled: A = !1, className: j = "", ...M }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: k,
	disabled: A,
	className: `fire-button ${j}`,
	style: {
		width: `${r}px`,
		minHeight: `${i}px`,
		borderRadius: `${f}px`,
		borderWidth: `${p}px`,
		color: o,
		borderColor: `${a}aa`,
		backgroundColor: s,
		"--fire-color": a,
		"--fire-glow-color": c,
		"--fire-secondary-color": l,
		"--fire-red-color": u,
		"--fire-dark-color": d,
		"--fire-intensity": m,
		"--fire-glow-opacity": h,
		"--fire-moving-opacity": g,
		"--fire-inner-opacity": _,
		"--fire-streak-opacity": v,
		"--fire-shine-opacity": y,
		"--fire-glow-duration": `${b}ms`,
		"--fire-spin-duration": `${x}ms`,
		"--fire-pulse-duration": `${S}ms`,
		"--fire-shine-duration": `${C}ms`,
		"--fire-hover-lift": `${w}px`,
		"--fire-hover-scale": T,
		"--fire-active-scale": E,
		"--fire-font-size": `${D}px`,
		"--fire-font-weight": O
	},
	...M,
	children: [
		/* @__PURE__ */ t("span", {
			className: "fire-button__outer-glow",
			style: {
				background: `
            radial-gradient(
              circle,
              ${c} 0%,
              ${a} 30%,
              ${u} 55%,
              transparent 75%
            )
          `,
				animation: `buttonAddaFireGlow ${b}ms ease-in-out infinite`
			}
		}),
		/* @__PURE__ */ t("span", {
			className: "fire-button__moving-fire",
			style: {
				background: `
            conic-gradient(
              from 0deg,
              transparent,
              ${u},
              ${a},
              ${c},
              ${a},
              ${u},
              transparent
            )
          `,
				animation: `buttonAddaFireSpin ${x}ms linear infinite`
			}
		}),
		/* @__PURE__ */ t("span", {
			className: "fire-button__inner-fire",
			style: {
				background: `
            radial-gradient(
              circle at 50% 120%,
              ${c} 0%,
              ${a} 25%,
              ${d} 55%,
              ${s} 80%
            )
          `,
				opacity: _
			}
		}),
		/* @__PURE__ */ t("span", {
			className: "fire-button__flame-streak",
			style: {
				background: l,
				animation: `buttonAddaFirePulse ${S}ms ease-in-out infinite`
			}
		}),
		/* @__PURE__ */ t("span", { className: "fire-button__shine" }),
		/* @__PURE__ */ t("span", {
			className: "fire-button__content",
			children: e
		})
	]
});
//#endregion
//#region src/components/FuseGlowButton/FuseGlowButton.jsx
function b({ children: e = "Features", onClick: i, disabled: s = !1, className: c = "", width: l = 220, height: u = 60, color: d = "#ff941f", textColor: f = "#f5f5f5", radius: p = 12, borderColor: m = "rgba(255, 255, 255, 0.12)", fontSize: h = 16, fontWeight: g = 700, letterSpacing: _ = "-0.01em", flickerSpeed: v = 280, onDuration: y = 5e3, offDuration: b = 3e3, breatheDuration: x = 2500, ...S }) {
	let [C, w] = o("off"), T = a([]), E = a(null), D = () => {
		T.current.forEach(clearTimeout), T.current = [];
	}, O = () => {
		D(), w("flicker-1");
		let e = setTimeout(() => {
			w("flicker-2");
		}, v), t = setTimeout(() => {
			w("on");
		}, v * 2), n = setTimeout(() => {
			w("off");
		}, v * 2 + y), r = setTimeout(() => {
			O();
		}, v * 2 + y + b);
		T.current.push(e, t, n, r);
	};
	return r(() => {
		let e = setTimeout(() => {
			O();
		}, 1e3);
		return T.current.push(e), () => {
			D(), E.current && clearTimeout(E.current);
		};
	}, []), /* @__PURE__ */ n("button", {
		type: "button",
		className: `fuse-button fuse-${C} ${c}`,
		style: {
			width: `${l}px`,
			height: `${u}px`,
			"--fuse-color": d,
			"--fuse-text-color": f,
			"--fuse-radius": `${p}px`,
			"--fuse-border-color": m,
			"--fuse-font-size": `${h}px`,
			"--fuse-font-weight": g,
			"--fuse-letter-spacing": _,
			"--fuse-flicker-speed": `${v}ms`,
			"--fuse-breathe-duration": `${x}ms`
		},
		onClick: () => {
			s || (D(), E.current && clearTimeout(E.current), w("on"), i?.(), E.current = setTimeout(() => {
				w("off"), E.current = setTimeout(() => {
					O();
				}, b);
			}, y));
		},
		disabled: s,
		...S,
		children: [
			/* @__PURE__ */ t("span", { className: "fuse-surface" }),
			/* @__PURE__ */ t("span", { className: "fuse-highlight" }),
			/* @__PURE__ */ t("span", {
				className: "fuse-text",
				children: e
			})
		]
	});
}
//#endregion
//#region src/components/GamepadButton/GamepadButton.jsx
var x = ({ children: e = "PLAY GAME", width: r = 230, height: i = 58, backgroundColor: s = "#111827", bodyColorStart: c = "#374151", bodyColorEnd: l = "#1f2937", textColor: u = "#f9fafb", triggerColor: d = "#030712", triggerDotColor: f = "#a78bfa", radius: p = 16, bodyRadius: m = 12, triggerSize: h = 28, triggerDotSize: g = 10, gap: _ = 18, moveX: v = .12, moveY: y = .18, shadowOpacity: b = .3, triggerGlow: x = .7, fontSize: S = 14, fontWeight: C = 800, letterSpacing: w = "0.08em", onClick: T, disabled: E = !1, className: D = "", ...O }) => {
	let k = a(null), [A, j] = o({
		x: 0,
		y: 0
	}), [M, N] = o(!1);
	return /* @__PURE__ */ t("button", {
		ref: k,
		type: "button",
		disabled: E,
		className: `
        gamepad-button
        ${M ? "gamepad-pressed" : ""}
        ${D}
      `,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			"--gamepad-background": s,
			"--gamepad-body-start": c,
			"--gamepad-body-end": l,
			"--gamepad-text": u,
			"--gamepad-trigger": d,
			"--gamepad-trigger-dot": f,
			"--gamepad-radius": `${p}px`,
			"--gamepad-body-radius": `${m}px`,
			"--gamepad-trigger-size": `${h}px`,
			"--gamepad-trigger-dot-size": `${g}px`,
			"--gamepad-gap": `${_}px`,
			"--gamepad-shadow-opacity": b,
			"--gamepad-trigger-glow": x,
			"--gamepad-font-size": `${S}px`,
			"--gamepad-font-weight": C,
			"--gamepad-letter-spacing": w
		},
		onPointerMove: (e) => {
			if (E || !k.current) return;
			let t = k.current.getBoundingClientRect(), n = e.clientX - t.left - t.width / 2, r = e.clientY - t.top - t.height / 2, i = t.width * v, a = t.height * y, o = Math.max(-i, Math.min(i, n * v)), s = Math.max(-a, Math.min(a, r * y));
			j({
				x: o,
				y: s
			});
		},
		onPointerLeave: () => {
			j({
				x: 0,
				y: 0
			});
		},
		onPointerDown: () => {
			E || N(!0);
		},
		onPointerUp: () => {
			E || (N(!1), T?.());
		},
		...O,
		children: /* @__PURE__ */ n("span", {
			className: "gamepad-body",
			style: { transform: `
            translate(
              ${A.x}px,
              ${A.y}px
            )
          ` },
			children: [/* @__PURE__ */ t("span", {
				className: "gamepad-text",
				children: e
			}), /* @__PURE__ */ t("span", {
				className: "gamepad-trigger",
				children: /* @__PURE__ */ t("span", { className: "gamepad-trigger-dot" })
			})]
		})
	});
}, S = ({ children: e = "Ghost Button", width: r = 180, height: i = 52, color: a = "#ffffff", textColor: s = "#ffffff", radius: c = 10, fillOpacity: l = .12, borderOpacity: u = .3, ghost: d = "👻", ghostSize: f = 28, ghostSpeed: p = 420, ghostOpacity: m = 1, ghostDirection: h = "left-to-right", onClick: g, disabled: _ = !1, className: v = "", ...y }) => {
	let [b, x] = o(0), [S, C] = o(!1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: (e) => {
			_ || (x((e) => e + 1), C(!0), g?.(e), setTimeout(() => {
				C(!1);
			}, p));
		},
		disabled: _,
		className: `ghost-button ${v}`,
		style: {
			width: `${r}px`,
			minHeight: `${i}px`,
			borderRadius: `${c}px`,
			color: s,
			borderColor: `rgba(255,255,255,${u})`,
			"--ghost-color": a,
			"--ghost-fill": l,
			"--ghost-size": `${f}px`,
			"--ghost-speed": `${p}ms`,
			"--ghost-opacity": m
		},
		...y,
		children: [
			/* @__PURE__ */ t("span", { className: "ghost-button__fill" }),
			/* @__PURE__ */ t("span", { className: "ghost-button__glow" }),
			/* @__PURE__ */ t("span", { className: "ghost-button__shine" }),
			S && /* @__PURE__ */ t("span", {
				className: `ghost-button__flying-ghost ${h === "right-to-left" ? "ghost-button__flying-ghost--reverse" : ""}`,
				children: d
			}, b),
			/* @__PURE__ */ t("span", {
				className: "ghost-button__content",
				children: e
			})
		]
	});
}, C = ({ children: e = "Glass Button", width: r = 180, height: i = 52, color: a = "#8b5cf6", textColor: o = "#ffffff", radius: s = 14, blur: c = 12, opacity: l = .12, borderOpacity: u = .4, shadowOpacity: d = .13, shineOpacity: f = .25, hoverLift: p = 4, hoverGlowOpacity: m = .4, reflectionWidth: h = 33.333, reflectionSpeed: g = 700, fontSize: _ = 16, fontWeight: v = 600, onClick: y, disabled: b = !1, className: x = "", ...S }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: y,
	disabled: b,
	className: `glass-button ${x}`,
	style: {
		width: `${r}px`,
		minHeight: `${i}px`,
		"--glass-color": a,
		"--glass-text-color": o,
		"--glass-radius": `${s}px`,
		"--glass-blur": `${c}px`,
		"--glass-opacity": l,
		"--glass-border-opacity": u,
		"--glass-shadow-opacity": d,
		"--glass-shine-opacity": f,
		"--glass-hover-lift": `${p}px`,
		"--glass-hover-glow": m,
		"--glass-reflection-width": `${h}%`,
		"--glass-reflection-speed": `${g}ms`,
		"--glass-font-size": `${_}px`,
		"--glass-font-weight": v
	},
	...S,
	children: [
		/* @__PURE__ */ t("span", { className: "glass-button__shine-top" }),
		/* @__PURE__ */ t("span", { className: "glass-button__glow" }),
		/* @__PURE__ */ t("span", { className: "glass-button__reflection" }),
		/* @__PURE__ */ t("span", {
			className: "glass-button__content",
			children: e
		})
	]
}), w = ({ children: e = "Glow Button", width: r = 180, height: i = 48, color: a = "#a00bf0", hoverColor: o = "#fb0c6f", glowColor: s = "#06f3d0", secondaryGlowColor: c = "#f83a0b", textColor: l = "#ffffff", radius: u = 12, fontSize: d = 16, fontWeight: f = 600, glowOpacity: p = .45, hoverGlowOpacity: m = .75, layerOpacity: h = .7, shimmerWidth: g = 50, shimmerSpeed: _ = 700, shimmerOpacity: v = .2, hoverLift: y = 2, activeScale: b = .95, onClick: x, disabled: S = !1, className: C = "", ...w }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: x,
	disabled: S,
	className: `glow-button ${C}`,
	style: {
		width: `${r}px`,
		height: `${i}px`,
		"--glow-color": a,
		"--glow-hover-color": o,
		"--glow-main": s,
		"--glow-secondary": c,
		"--glow-text": l,
		"--glow-radius": `${u}px`,
		"--glow-font-size": `${d}px`,
		"--glow-font-weight": f,
		"--glow-opacity": p,
		"--glow-hover-opacity": m,
		"--glow-layer-opacity": h,
		"--glow-shimmer-width": `${g}%`,
		"--glow-shimmer-speed": `${_}ms`,
		"--glow-shimmer-opacity": v,
		"--glow-hover-lift": `${y}px`,
		"--glow-active-scale": b
	},
	...w,
	children: [
		/* @__PURE__ */ t("span", { className: "glow-button__layer" }),
		/* @__PURE__ */ t("span", { className: "glow-button__shimmer" }),
		/* @__PURE__ */ t("span", {
			className: "glow-button__content",
			children: e
		})
	]
}), T = ({ children: e = "Gradient Button", width: r = 180, height: i = 52, color: a = "#8b5cf6", secondaryColor: o = "#ec4899", thirdColor: s = "#6366f1", radius: c = 12, gradientAngle: l = 120, gradientSize: u = "300% 300%", shadowOpacity: d = .33, animationDuration: f = 5e3, animationTiming: p = "ease", animationIteration: m = "infinite", shineOpacity: h = .3, shineSpeed: g = 700, shineWidth: _ = 25, hoverLift: v = 4, activeScale: y = .95, fontSize: b = 16, fontWeight: x = 600, onClick: S, disabled: C = !1, className: w = "", ...T }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: S,
	disabled: C,
	className: `gradient-button ${w}`,
	style: {
		width: `${r}px`,
		height: `${i}px`,
		borderRadius: `${c}px`,
		color: "#ffffff",
		"--gradient-color": a,
		"--gradient-secondary": o,
		"--gradient-third": s,
		"--gradient-angle": `${l}deg`,
		"--gradient-size": u,
		"--gradient-shadow": `${a}${Math.round(d * 255).toString(16).padStart(2, "0")}`,
		"--gradient-animation-duration": `${f}ms`,
		"--gradient-animation-timing": p,
		"--gradient-animation-iteration": m,
		"--gradient-shine-opacity": h,
		"--gradient-shine-speed": `${g}ms`,
		"--gradient-shine-width": `${_}%`,
		"--gradient-hover-lift": `${v}px`,
		"--gradient-active-scale": y,
		"--gradient-font-size": `${b}px`,
		"--gradient-font-weight": x
	},
	...T,
	children: [/* @__PURE__ */ t("span", { className: "gradient-button__shine" }), /* @__PURE__ */ t("span", {
		className: "gradient-button__content",
		children: e
	})]
}), E = ({ children: r = "HOLOGRAM", width: i = 220, height: a = 60, color: s = "#22d3ee", secondaryColor: c = "#a855f7", textColor: l = "#ffffff", radius: u = 8, borderWidth: d = 1, fontSize: f = 16, fontWeight: p = 700, letterSpacing: m = "0.18em", intensity: h = 1, projectionOpacity: g = .12, rgbOpacity: _ = .5, scanlineOpacity: v = .08, glitchOpacity: y = .5, projectionDuration: b = 2500, rgbDuration: x = 1800, scanlineDuration: S = 1500, bandOneDuration: C = 2100, bandTwoDuration: w = 1700, bandThreeDuration: T = 2800, textDuration: E = 2800, showProjection: D = !0, showRGB: O = !0, showScanlines: k = !0, showGlitchBands: A = !0, showFrame: j = !0, showCorners: M = !0, showStatus: N = !0, statusText: P = "", statusOpacity: F = .5, statusFontSize: I = 6, hoverLift: L = 3, activeScale: R = .97, onClick: z, disabled: B = !1, className: V = "", ...H }) => {
	let [U, W] = o(!1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: B,
		onClick: z,
		onMouseEnter: () => W(!0),
		onMouseLeave: () => W(!1),
		className: `hologram-button ${U ? "hologram-active" : ""} ${V}`,
		style: {
			width: `${i}px`,
			height: `${a}px`,
			borderRadius: `${u}px`,
			borderWidth: `${d}px`,
			color: l,
			fontSize: `${f}px`,
			fontWeight: p,
			letterSpacing: m,
			"--holo-primary": s,
			"--holo-secondary": c,
			"--holo-intensity": h,
			"--holo-projection-opacity": g,
			"--holo-rgb-opacity": _,
			"--holo-scanline-opacity": v,
			"--holo-glitch-opacity": y,
			"--holo-projection-duration": `${b}ms`,
			"--holo-rgb-duration": `${x}ms`,
			"--holo-scanline-duration": `${S}ms`,
			"--holo-band-one-duration": `${C}ms`,
			"--holo-band-two-duration": `${w}ms`,
			"--holo-band-three-duration": `${T}ms`,
			"--holo-text-duration": `${E}ms`,
			"--holo-hover-lift": `${L}px`,
			"--holo-active-scale": R,
			"--holo-status-opacity": F,
			"--holo-status-size": `${I}px`
		},
		...H,
		children: [
			D && /* @__PURE__ */ t("span", { className: "hologram-projection" }),
			O && /* @__PURE__ */ t("span", { className: "hologram-rgb" }),
			k && /* @__PURE__ */ t("span", { className: "hologram-scanlines" }),
			A && /* @__PURE__ */ n("span", {
				className: "hologram-bands",
				children: [
					/* @__PURE__ */ t("span", { className: "holo-band holo-band-one" }),
					/* @__PURE__ */ t("span", { className: "holo-band holo-band-two" }),
					/* @__PURE__ */ t("span", { className: "holo-band holo-band-three" })
				]
			}),
			j && /* @__PURE__ */ t("span", { className: "hologram-frame" }),
			M && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "hologram-corner hologram-corner-tl" }),
				/* @__PURE__ */ t("span", { className: "hologram-corner hologram-corner-tr" }),
				/* @__PURE__ */ t("span", { className: "hologram-corner hologram-corner-bl" }),
				/* @__PURE__ */ t("span", { className: "hologram-corner hologram-corner-br" })
			] }),
			/* @__PURE__ */ t("span", {
				className: "hologram-content",
				"data-text": r,
				children: r
			}),
			N && /* @__PURE__ */ n("span", {
				className: "hologram-status",
				children: [/* @__PURE__ */ t("span", {
					className: "hologram-status-dot",
					style: { backgroundColor: s }
				}), P]
			})
		]
	});
};
//#endregion
//#region src/components/IceBreakButton/IceBreakButton.jsx
function D({ children: e = "Download", width: i = 260, height: s = 70, color: c = "#67e8f9", backgroundColor: l = "#101217", bodyStartColor: u = "#191b22", bodyEndColor: d = "#0b0d12", textColor: f = "#f4f4f5", iconColor: p = "#d9dbe0", radius: m = 22, holdDuration: h = 1400, resetAfter: g = 2500, mainFontSize: _ = 15, mainFontWeight: v = 700, subFontSize: y = 9, holdFontSize: b = 10, letterSpacing: x = ".28em", contentGap: S = 12, iconSize: C = 34, iconRadius: w = 10, iceOpacity: T = 1, iceBlur: E = 4, highlightOpacity: D = .18, progressLeft: O = 18, progressRight: k = 18, progressBottom: A = 7, progressHeight: j = 2, shardWidth: M = 24, shardHeight: N = 15, shardDuration: P = 850, downloadIcon: F = "↓", completedIcon: I = "✓", completedText: L = "Completed", holdText: R = "HOLD", showIcon: z = !0, showHoldText: B = !0, showProgress: V = !0, showCracks: H = !0, showShards: U = !0, onComplete: W, disabled: G = !1, className: K = "", ...ee }) {
	let q = a(null), J = a(null), Y = a(null), [X, te] = o(!1), [ne, Z] = o(0), [Q, re] = o(!1), [$, ie] = o({
		x: i / 2,
		y: s / 2
	}), ae = a(0), oe = (e) => {
		if (!q.current) return {
			x: i / 2,
			y: s / 2
		};
		let t = q.current.getBoundingClientRect();
		return {
			x: e.clientX - t.left,
			y: e.clientY - t.top
		};
	}, se = (e) => {
		if (G || Q) return;
		e.preventDefault();
		let t = oe(e);
		ie(t), te(!0), ae.current = performance.now();
	}, ce = (e) => {
		if (!X || Q) return;
		let t = e - ae.current, n = Math.min(t / h, 1);
		if (Z(n), n >= 1) {
			ue();
			return;
		}
		J.current = requestAnimationFrame(ce);
	};
	r(() => (X && !Q && (J.current = requestAnimationFrame(ce)), () => {
		J.current && cancelAnimationFrame(J.current);
	}), [X, Q]);
	let le = () => {
		Q || (te(!1), J.current && cancelAnimationFrame(J.current), Z(0));
	}, ue = () => {
		Q || (te(!1), Z(1), re(!0), J.current && cancelAnimationFrame(J.current), W?.(), Y.current = setTimeout(() => {
			re(!1), Z(0);
		}, g));
	};
	r(() => () => {
		J.current && cancelAnimationFrame(J.current), Y.current && clearTimeout(Y.current);
	}, []);
	let de = [
		`M ${$.x} ${$.y}
     L ${$.x - 25} ${$.y - 15}
     L ${$.x - 58} ${$.y - 8}
     L ${$.x - 105} ${$.y - 32}`,
		`M ${$.x} ${$.y}
     L ${$.x + 26} ${$.y - 18}
     L ${$.x + 62} ${$.y - 10}
     L ${$.x + 108} ${$.y - 30}`,
		`M ${$.x} ${$.y}
     L ${$.x - 20} ${$.y + 22}
     L ${$.x - 55} ${$.y + 32}
     L ${$.x - 105} ${$.y + 52}`,
		`M ${$.x} ${$.y}
     L ${$.x + 22} ${$.y + 24}
     L ${$.x + 58} ${$.y + 33}
     L ${$.x + 108} ${$.y + 54}`,
		`M ${$.x - 25} ${$.y - 15}
     L ${$.x - 42} ${$.y - 40}
     L ${$.x - 78} ${$.y - 50}`,
		`M ${$.x + 26} ${$.y - 18}
     L ${$.x + 43} ${$.y - 42}
     L ${$.x + 80} ${$.y - 52}`
	], fe = [
		{
			x: "-180px",
			y: "-95px",
			r: -35,
			s: .9
		},
		{
			x: "-120px",
			y: "-135px",
			r: 25,
			s: .75
		},
		{
			x: "-45px",
			y: "-145px",
			r: -20,
			s: 1
		},
		{
			x: "45px",
			y: "-150px",
			r: 35,
			s: .8
		},
		{
			x: "125px",
			y: "-115px",
			r: -30,
			s: .9
		},
		{
			x: "185px",
			y: "-65px",
			r: 40,
			s: .75
		},
		{
			x: "-205px",
			y: "-10px",
			r: 55,
			s: .8
		},
		{
			x: "205px",
			y: "10px",
			r: -45,
			s: 1
		},
		{
			x: "-185px",
			y: "70px",
			r: -25,
			s: .85
		},
		{
			x: "-120px",
			y: "120px",
			r: 35,
			s: .75
		},
		{
			x: "-45px",
			y: "145px",
			r: -45,
			s: .95
		},
		{
			x: "45px",
			y: "140px",
			r: 25,
			s: .8
		},
		{
			x: "120px",
			y: "125px",
			r: -35,
			s: .9
		},
		{
			x: "185px",
			y: "75px",
			r: 45,
			s: .75
		}
	];
	return /* @__PURE__ */ n("div", {
		ref: q,
		className: `ice-button-wrapper ${X ? "is-holding" : ""} ${Q ? "is-broken" : ""} ${K}`,
		style: {
			width: `${i}px`,
			height: `${s}px`,
			"--ice-color": c,
			"--ice-background": l,
			"--ice-body-start": u,
			"--ice-body-end": d,
			"--ice-text-color": f,
			"--ice-icon-color": p,
			"--ice-radius": `${m}px`,
			"--ice-opacity": T,
			"--ice-blur": `${E}px`,
			"--ice-highlight-opacity": D,
			"--ice-main-font-size": `${_}px`,
			"--ice-main-font-weight": v,
			"--ice-sub-font-size": `${y}px`,
			"--ice-hold-font-size": `${b}px`,
			"--ice-letter-spacing": x,
			"--ice-content-gap": `${S}px`,
			"--ice-icon-size": `${C}px`,
			"--ice-icon-radius": `${w}px`,
			"--ice-progress-left": `${O}px`,
			"--ice-progress-right": `${k}px`,
			"--ice-progress-bottom": `${A}px`,
			"--ice-progress-height": `${j}px`,
			"--ice-shard-width": `${M}px`,
			"--ice-shard-height": `${N}px`,
			"--ice-shard-duration": `${P}ms`,
			"--crack-opacity": Q ? 1 : ne * 1.4,
			"--ice-progress": ne
		},
		children: [/* @__PURE__ */ n("button", {
			type: "button",
			className: "ice-button",
			disabled: G,
			onPointerDown: se,
			onPointerUp: le,
			onPointerCancel: le,
			onPointerLeave: () => {
				X && le();
			},
			...ee,
			children: [
				/* @__PURE__ */ n("div", {
					className: "ice-body",
					children: [/* @__PURE__ */ t("div", { className: "body-shine" }), /* @__PURE__ */ n("div", {
						className: "body-content",
						children: [z && /* @__PURE__ */ t("div", {
							className: "body-icon",
							children: Q ? I : F
						}), /* @__PURE__ */ n("div", {
							className: "body-text",
							children: [/* @__PURE__ */ t("span", {
								className: "main-text",
								children: Q ? L : e
							}), /* @__PURE__ */ t("span", {
								className: "sub-text",
								children: X ? `${Math.round(ne * 100)}%` : ""
							})]
						})]
					})]
				}),
				/* @__PURE__ */ n("div", {
					className: "ice-layer",
					children: [
						/* @__PURE__ */ t("div", { className: "ice-highlight" }),
						!Q && B && /* @__PURE__ */ n("div", {
							className: "hold-text",
							children: [/* @__PURE__ */ t("span", { children: R }), /* @__PURE__ */ n("div", {
								className: "hold-dots",
								children: [
									/* @__PURE__ */ t("i", {}),
									/* @__PURE__ */ t("i", {}),
									/* @__PURE__ */ t("i", {})
								]
							})]
						}),
						/* @__PURE__ */ t("div", {
							className: "ice-core",
							style: {
								left: $.x,
								top: $.y
							}
						}),
						H && /* @__PURE__ */ t("svg", {
							className: "cracks",
							width: i,
							height: s,
							viewBox: `0 0 ${i} ${s}`,
							children: de.map((e, n) => /* @__PURE__ */ t("path", { d: e }, n))
						})
					]
				}),
				V && /* @__PURE__ */ t("div", {
					className: "hold-progress",
					children: /* @__PURE__ */ t("div", {
						className: "hold-progress-bar",
						style: { transform: `scaleX(${ne})` }
					})
				})
			]
		}), U && /* @__PURE__ */ t("div", {
			className: "shatter-layer",
			children: fe.map((e, n) => /* @__PURE__ */ t("span", {
				className: "ice-shard",
				style: {
					"--x": e.x,
					"--y": e.y,
					"--rotation": `${e.r}deg`,
					"--scale": e.s,
					"--delay": `${n * 22}ms`
				}
			}, n))
		})]
	});
}
//#endregion
//#region src/components/InkButton/InkButton.jsx
function O({ children: i = "Create", width: a = 260, height: s = 78, inkColor: c = "#0b0b0b", paperColor: l = "#f4f9faf4", textColor: u = "#9308f0", radius: d = 18, fontSize: f = 19, fontWeight: p = 700, letterSpacing: m = ".02em", fontFamily: h = "Georgia, \"Times New Roman\", serif", paperShadowOpacity: g = .18, paperHighlightOpacity: _ = .7, textureOpacity: v = .22, textureSize: y = 5, blobSize: b = 75, blobLeft: x = 12, blobTransition: S = 700, blobColor: C = c, blobOneSize: w = 48, blobTwoSize: T = 25, blobThreeSize: E = 18, blobOneDuration: D = 2500, blobTwoDuration: O = 1800, blobThreeDuration: k = 2100, hoverBlobLeft: A = 42, hoverBlobSpeed: j = 800, hoverTextScale: M = 1.04, hoverLetterSpacing: N = ".08em", showStrokes: P = !0, strokeOpacity: F = .7, strokeOneWidth: I = 65, strokeTwoWidth: L = 38, strokeThreeWidth: R = 25, strokeOneDuration: z = 3e3, strokeTwoDuration: B = 3500, showDroplets: V = !0, dropletOpacity: H = .45, dropletSize: U = 4, dropletSpeed: W = 1, showBrush: G = !0, brush: K = "✦", brushColor: ee = c, brushOpacity: q = .4, brushSize: J = 10, showSplash: Y = !0, splashSize: X = 7, splashDuration: te = 800, splashOpacity: ne = 1, activeDuration: Z = 1100, activeShakeDuration: Q = 350, disabled: re = !1, onClick: $, className: ie = "", ...ae }) {
	let [oe, se] = o(!1), [ce, le] = o(!1);
	return r(() => {
		if (!oe) return;
		let e = setTimeout(() => {
			se(!1);
		}, Z);
		return () => clearTimeout(e);
	}, [oe, Z]), /* @__PURE__ */ n("button", {
		type: "button",
		disabled: re,
		className: `
        ink-button
        ${ce ? "ink-hovered" : ""}
        ${oe ? "ink-active" : ""}
        ${ie}
      `,
		style: {
			width: `${a}px`,
			height: `${s}px`,
			"--ink-color": c,
			"--ink-blob-color": C,
			"--paper-color": l,
			"--text-color": u,
			"--button-radius": `${d}px`,
			"--ink-font-size": `${f}px`,
			"--ink-font-weight": p,
			"--ink-letter-spacing": m,
			"--ink-font-family": h,
			"--paper-shadow-opacity": g,
			"--paper-highlight-opacity": _,
			"--paper-texture-opacity": v,
			"--paper-texture-size": `${y}px`,
			"--blob-size": `${b}px`,
			"--blob-left": `${x}%`,
			"--blob-transition": `${S}ms`,
			"--blob-one-size": `${w}px`,
			"--blob-two-size": `${T}px`,
			"--blob-three-size": `${E}px`,
			"--blob-one-duration": `${D}ms`,
			"--blob-two-duration": `${O}ms`,
			"--blob-three-duration": `${k}ms`,
			"--hover-blob-left": `${A}%`,
			"--hover-blob-speed": `${j}ms`,
			"--hover-text-scale": M,
			"--hover-letter-spacing": N,
			"--stroke-opacity": F,
			"--stroke-one-width": `${I}px`,
			"--stroke-two-width": `${L}px`,
			"--stroke-three-width": `${R}px`,
			"--stroke-one-duration": `${z}ms`,
			"--stroke-two-duration": `${B}ms`,
			"--droplet-opacity": H,
			"--droplet-size": `${U}px`,
			"--droplet-speed": W,
			"--brush-color": ee,
			"--brush-opacity": q,
			"--brush-size": `${J}px`,
			"--splash-size": `${X}px`,
			"--splash-duration": `${te}ms`,
			"--splash-opacity": ne,
			"--active-shake-duration": `${Q}ms`
		},
		onMouseEnter: () => le(!0),
		onMouseLeave: () => le(!1),
		onClick: () => {
			re || (se(!0), $?.());
		},
		...ae,
		children: [
			/* @__PURE__ */ t("span", { className: "ink-paper" }),
			/* @__PURE__ */ t("span", { className: "paper-noise" }),
			/* @__PURE__ */ n("span", {
				className: "ink-blob",
				children: [
					/* @__PURE__ */ t("span", {}),
					/* @__PURE__ */ t("span", {}),
					/* @__PURE__ */ t("span", {})
				]
			}),
			P && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "ink-stroke stroke-one" }),
				/* @__PURE__ */ t("span", { className: "ink-stroke stroke-two" }),
				/* @__PURE__ */ t("span", { className: "ink-stroke stroke-three" })
			] }),
			V && /* @__PURE__ */ n("span", {
				className: "ink-droplets",
				children: [
					/* @__PURE__ */ t("i", { className: "drop-one" }),
					/* @__PURE__ */ t("i", { className: "drop-two" }),
					/* @__PURE__ */ t("i", { className: "drop-three" }),
					/* @__PURE__ */ t("i", { className: "drop-four" }),
					/* @__PURE__ */ t("i", { className: "drop-five" }),
					/* @__PURE__ */ t("i", { className: "drop-six" })
				]
			}),
			/* @__PURE__ */ t("span", {
				className: "ink-label",
				children: i
			}),
			Y && /* @__PURE__ */ n("span", {
				className: "ink-splash",
				children: [
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {}),
					/* @__PURE__ */ t("i", {})
				]
			}),
			G && /* @__PURE__ */ t("span", {
				className: "ink-brush",
				children: K
			})
		]
	});
}
//#endregion
//#region src/components/KeycapButton/KeycapButton.jsx
var k = ({ children: e = "Open Command", shortcut: i = "Ctrl K", width: a = 230, height: s = 58, backgroundColor: c = "#fafafa", hoverBackgroundColor: l = "#ffffff", textColor: u = "#18181b", borderColor: d = "#d4d4d8", borderBottomColor: f = "#a1a1aa", borderWidth: p = 1, borderBottomWidth: m = 5, radius: h = 13, fontSize: g = 14, fontWeight: _ = 700, letterSpacing: v = "-0.01em", shadowColor: y = "#71717a", shadowOpacity: b = .18, shadowY: x = 5, shadowBlur: S = 20, hoverLift: C = 1, hoverShadowY: w = 6, hoverShadowBlur: T = 24, hoverShadowOpacity: E = .2, pressDistance: D = 4, pressedBorderBottomWidth: O = 1, pressedShadowY: k = 1, pressedShadowBlur: A = 8, showShortcut: j = !0, shortcutBackgroundColor: M = "#e4e4e7", shortcutTextColor: N = "#52525b", shortcutBorderColor: P = "#d4d4d8", shortcutBorderBottomColor: F = "#a1a1aa", shortcutBorderWidth: I = 1, shortcutBorderBottomWidth: L = 3, shortcutRadius: R = 7, shortcutHeight: z = 32, shortcutMinWidth: B = 44, shortcutPaddingX: V = 9, shortcutFontSize: H = 12, shortcutFontWeight: U = 800, shortcutPressedDistance: W = 2, enableShortcut: G = !0, pressDuration: K = 180, onClick: ee, disabled: q = !1, className: J = "", ...Y }) => {
	let [X, te] = o(!1), ne = () => {
		q || (te(!0), setTimeout(() => {
			te(!1);
		}, K), ee?.());
	};
	return r(() => {
		if (q || !G) return;
		let e = (e) => {
			let t = i.toLowerCase().split("+").map((e) => e.trim()), n = t[t.length - 1], r = t.includes("ctrl"), a = t.includes("alt"), o = t.includes("shift"), s = t.includes("cmd") || t.includes("⌘") || t.includes("meta");
			(e.key.toLowerCase() === n || e.code.toLowerCase() === `key${n}`) && e.ctrlKey === r && e.altKey === a && e.shiftKey === o && e.metaKey === s && (e.preventDefault(), ne());
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [
		i,
		q,
		G
	]), /* @__PURE__ */ n("button", {
		type: "button",
		disabled: q,
		onClick: ne,
		className: `
        keycap-button
        ${X ? "keycap-pressed" : ""}
        ${J}
      `,
		style: {
			width: `${a}px`,
			height: `${s}px`,
			"--keycap-bg": c,
			"--keycap-hover-bg": l,
			"--keycap-text": u,
			"--keycap-border": d,
			"--keycap-bottom-border": f,
			"--keycap-border-width": `${p}px`,
			"--keycap-bottom-width": `${m}px`,
			"--keycap-radius": `${h}px`,
			"--keycap-font-size": `${g}px`,
			"--keycap-font-weight": _,
			"--keycap-letter-spacing": v,
			"--keycap-shadow-color": y,
			"--keycap-shadow-opacity": b,
			"--keycap-shadow-y": `${x}px`,
			"--keycap-shadow-blur": `${S}px`,
			"--keycap-hover-lift": `${C}px`,
			"--keycap-hover-shadow-y": `${w}px`,
			"--keycap-hover-shadow-blur": `${T}px`,
			"--keycap-hover-shadow-opacity": E,
			"--keycap-press-distance": `${D}px`,
			"--keycap-pressed-bottom-width": `${O}px`,
			"--keycap-pressed-shadow-y": `${k}px`,
			"--keycap-pressed-shadow-blur": `${A}px`,
			"--shortcut-bg": M,
			"--shortcut-text": N,
			"--shortcut-border": P,
			"--shortcut-bottom-border": F,
			"--shortcut-border-width": `${I}px`,
			"--shortcut-bottom-width": `${L}px`,
			"--shortcut-radius": `${R}px`,
			"--shortcut-height": `${z}px`,
			"--shortcut-min-width": `${B}px`,
			"--shortcut-padding": `${V}px`,
			"--shortcut-font-size": `${H}px`,
			"--shortcut-font-weight": U,
			"--shortcut-pressed-distance": `${W}px`
		},
		...Y,
		children: [/* @__PURE__ */ t("span", {
			className: "keycap-label",
			children: e
		}), j && /* @__PURE__ */ t("span", {
			className: "keycap-shortcut",
			children: i
		})]
	});
}, A = ({ children: e = "Liquid Button", width: r = 190, height: i = 52, color: a = "#06b6d4", secondaryColor: o = "#8b5cf6", tertiaryColor: s = "#22d3ee", backgroundColor: c = "#07131c", glassColor: l = "#000000", textColor: u = "#ffffff", radius: d = 18, intensity: f = 1, blobWidth: p = 70, blobHeight: m = 100, blobBlur: h = 25, blobOpacity: g = .65, hoverBlobBlur: _ = 18, hoverBlobOpacity: v = .85, flowBlur: y = 35, flowOpacity: b = .45, hoverFlowOpacity: x = .65, blobOneDuration: S = 5, blobTwoDuration: C = 6, blobThreeDuration: w = 4, flowDuration: T = 7, glassOpacity: E = .25, glassBlur: D = 4, reflectionOpacity: O = .1, reflectionTop: k = 5, reflectionHeight: A = 35, shineOpacity: j = .25, shineWidth: M = 33, shineSpeed: N = 700, shineAngle: P = 12, borderColor: F, borderOpacity: I = .6, borderWidth: L = 1, hoverGlow: R = 25, fontSize: z = 16, fontWeight: B = 600, letterSpacing: V = "normal", hoverLift: H = 4, hoverScale: U = 1.02, activeScale: W = .95, onClick: G, disabled: K = !1, className: ee = "", ...q }) => {
	let J = F || a;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: G,
		disabled: K,
		className: `liquid-button ${ee}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			minHeight: `${i}px`,
			borderRadius: `${d}px`,
			color: u,
			fontSize: `${z}px`,
			fontWeight: B,
			letterSpacing: V,
			"--liquid-color": a,
			"--liquid-secondary-color": o,
			"--liquid-tertiary-color": s,
			"--liquid-background": c,
			"--liquid-glass-color": l,
			"--liquid-radius": `${d}px`,
			"--liquid-intensity": f,
			"--liquid-blob-width": `${p}%`,
			"--liquid-blob-height": `${m}%`,
			"--liquid-blob-blur": `${h}px`,
			"--liquid-blob-opacity": g,
			"--liquid-hover-blob-blur": `${_}px`,
			"--liquid-hover-blob-opacity": v,
			"--liquid-flow-blur": `${y}px`,
			"--liquid-flow-opacity": b,
			"--liquid-hover-flow-opacity": x,
			"--liquid-blob-one-duration": `${S}s`,
			"--liquid-blob-two-duration": `${C}s`,
			"--liquid-blob-three-duration": `${w}s`,
			"--liquid-flow-duration": `${T}s`,
			"--liquid-glass-opacity": E,
			"--liquid-glass-blur": `${D}px`,
			"--liquid-reflection-opacity": O,
			"--liquid-reflection-top": `${k}px`,
			"--liquid-reflection-height": `${A}%`,
			"--liquid-shine-opacity": j,
			"--liquid-shine-width": `${M}%`,
			"--liquid-shine-speed": `${N}ms`,
			"--liquid-shine-angle": `${P}deg`,
			"--liquid-border-color": J,
			"--liquid-border-opacity": I,
			"--liquid-border-width": `${L}px`,
			"--liquid-hover-glow": `${R}px`,
			"--liquid-hover-lift": `${H}px`,
			"--liquid-hover-scale": U,
			"--liquid-active-scale": W
		},
		...q,
		children: [
			/* @__PURE__ */ t("span", { className: "liquid-background" }),
			/* @__PURE__ */ t("span", {
				className: "liquid-blob liquid-blob-one",
				style: { backgroundColor: a }
			}),
			/* @__PURE__ */ t("span", {
				className: "liquid-blob liquid-blob-two",
				style: { backgroundColor: o }
			}),
			/* @__PURE__ */ t("span", {
				className: "liquid-blob liquid-blob-three",
				style: { backgroundColor: s }
			}),
			/* @__PURE__ */ t("span", {
				className: "liquid-flow",
				style: { background: `
            radial-gradient(
              circle at 30% 40%,
              ${a} 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 70% 60%,
              ${o} 0%,
              transparent 35%
            )
          ` }
			}),
			/* @__PURE__ */ t("span", { className: "liquid-glass" }),
			/* @__PURE__ */ t("span", { className: "liquid-reflection" }),
			/* @__PURE__ */ t("span", { className: "liquid-shine" }),
			/* @__PURE__ */ t("span", { className: "liquid-border" }),
			/* @__PURE__ */ t("span", {
				className: "liquid-content",
				children: e
			})
		]
	});
}, j = ({ children: e = "Liquid Glass", width: r = 210, height: i = 58, color: a = "#8b5cf6", secondaryColor: o = "#06b6d4", textColor: s = "#ffffff", radius: c = 18, intensity: l = 1, liquidBlur: u = 28, liquidOpacity: d = .55, hoverLiquidBlur: f = 20, hoverLiquidOpacity: p = .8, liquidInset: m = 40, liquidDuration: h = 7, distortionOpacity: g = .35, distortionSize: _ = 2, distortionGap: v = 4, distortionDuration: y = 5, distortionMove: b = 3, distortionScale: x = 1.08, glassOpacity: S = .06, glassBlur: C = 20, reflectionLeft: w = 8, reflectionRight: T = 8, reflectionTop: E = 5, reflectionHeight: D = 35, reflectionOpacity: O = .12, reflectionBlur: k = 12, lightWidth: A = 25, lightHeight: j = 300, lightLeft: M = -50, lightTop: N = -100, lightAngle: P = 25, lightOpacity: F = .2, lightBlur: I = 12, lightSpeed: L = 1e3, lightHoverLeft: R = 125, borderColor: z = "#ffffff", borderOpacity: B = .2, hoverBorderOpacity: V = .4, borderWidth: H = 1, showInnerGlow: U = !0, innerGlowOpacity: W = 1, innerGlowDuration: G = 500, innerGlowSize: K = 25, innerGlowSecondarySize: ee = 45, fontSize: q = 14, fontWeight: J = 600, letterSpacing: Y = "0.025em", contentHoverScale: X = 1.05, contentGlow: te = 10, hoverLift: ne = 4, activeScale: Z = .97, onClick: Q, disabled: re = !1, className: $ = "", ...ie }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: Q,
	disabled: re,
	className: `liquid-glass-button ${$}`,
	style: {
		width: `${r}px`,
		height: `${i}px`,
		borderRadius: `${c}px`,
		color: s,
		fontSize: `${q}px`,
		fontWeight: J,
		letterSpacing: Y,
		"--glass-color": a,
		"--glass-secondary": o,
		"--glass-intensity": l,
		"--glass-liquid-blur": `${u}px`,
		"--glass-liquid-opacity": d,
		"--glass-hover-liquid-blur": `${f}px`,
		"--glass-hover-liquid-opacity": p,
		"--glass-liquid-inset": `${m}%`,
		"--glass-liquid-duration": `${h}s`,
		"--glass-distortion-opacity": g,
		"--glass-distortion-size": `${_}px`,
		"--glass-distortion-gap": `${v}px`,
		"--glass-distortion-duration": `${y}s`,
		"--glass-distortion-move": `${b}%`,
		"--glass-distortion-scale": x,
		"--glass-opacity": S,
		"--glass-blur": `${C}px`,
		"--glass-reflection-left": `${w}%`,
		"--glass-reflection-right": `${T}%`,
		"--glass-reflection-top": `${E}%`,
		"--glass-reflection-height": `${D}%`,
		"--glass-reflection-opacity": O,
		"--glass-reflection-blur": `${k}px`,
		"--glass-light-width": `${A}%`,
		"--glass-light-height": `${j}%`,
		"--glass-light-left": `${M}%`,
		"--glass-light-top": `${N}%`,
		"--glass-light-angle": `${P}deg`,
		"--glass-light-opacity": F,
		"--glass-light-blur": `${I}px`,
		"--glass-light-speed": `${L}ms`,
		"--glass-light-hover-left": `${R}%`,
		"--glass-border-color": z,
		"--glass-border-opacity": B,
		"--glass-hover-border-opacity": V,
		"--glass-border-width": `${H}px`,
		"--glass-inner-opacity": U ? W : 0,
		"--glass-inner-duration": `${G}ms`,
		"--glass-inner-size": `${K}px`,
		"--glass-inner-secondary-size": `${ee}px`,
		"--glass-content-scale": X,
		"--glass-content-glow": `${te}px`,
		"--glass-hover-lift": `${ne}px`,
		"--glass-active-scale": Z
	},
	...ie,
	children: [
		/* @__PURE__ */ t("span", {
			className: "liquid-glass-liquid",
			style: { background: `
            radial-gradient(
              circle at 25% 35%,
              ${a},
              transparent 32%
            ),
            radial-gradient(
              circle at 75% 65%,
              ${o},
              transparent 32%
            )
          ` }
		}),
		/* @__PURE__ */ t("span", { className: "liquid-glass-base" }),
		/* @__PURE__ */ t("span", { className: "liquid-glass-distortion" }),
		/* @__PURE__ */ t("span", { className: "liquid-glass-reflection" }),
		/* @__PURE__ */ t("span", { className: "liquid-glass-light" }),
		/* @__PURE__ */ t("span", { className: "liquid-glass-edge" }),
		/* @__PURE__ */ t("span", { className: "liquid-glass-inner-glow" }),
		/* @__PURE__ */ t("span", {
			className: "liquid-glass-content",
			children: e
		})
	]
}), M = ({ children: i = "Submit", loading: s = !1, loadingText: c = "Loading...", progressText: l = !0, loadingDuration: u = 2e3, progressStep: d = 2, width: f = 180, height: p = 52, color: m = "#6366f1", textColor: h = "#ffffff", progressColor: g = "#ffffff", progressTrackColor: _ = "rgba(255,255,255,0.25)", radius: v = 12, spinnerSize: y = 18, spinnerBorderWidth: b = 2, fontSize: x = 16, fontWeight: S = 600, gap: C = 8, shadowOpacity: w = .33, hoverLift: T = 4, hoverGlowOpacity: E = .1, activeScale: D = .95, autoStart: O = !0, resetAfter: k = 0, onStart: A, onProgress: j, onComplete: M, onClick: N, disabled: P = !1, className: F = "", ...I }) => {
	let [L, R] = o(!1), [z, B] = o(0), V = a(null), H = a(0), U = s === !0 || L, W = () => {
		V.current &&= (clearInterval(V.current), null);
	}, G = () => {
		if (P || U) return;
		if (!O) {
			N?.();
			return;
		}
		R(!0), B(0), H.current = 0, A?.();
		let e = u / (100 / d);
		V.current = setInterval(() => {
			if (H.current += d, H.current >= 100) {
				H.current = 100, B(100), j?.(100), W(), setTimeout(() => {
					R(!1), M?.(), N?.(), k > 0 ? setTimeout(() => {
						B(0), H.current = 0;
					}, k) : (B(0), H.current = 0);
				}, 0);
				return;
			}
			B(H.current), j?.(H.current);
		}, e);
	};
	r(() => () => {
		W();
	}, []);
	let K = U ? l ? `${c} ${Math.round(z)}%` : c : i;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: G,
		disabled: P || U,
		className: `loading-button ${F}`,
		style: {
			width: `${f}px`,
			height: `${p}px`,
			minHeight: `${p}px`,
			borderRadius: `${v}px`,
			color: h,
			backgroundColor: m,
			fontSize: `${x}px`,
			fontWeight: S,
			gap: `${C}px`,
			"--loading-color": m,
			"--loading-text-color": h,
			"--loading-progress-color": g,
			"--loading-track-color": _,
			"--loading-radius": `${v}px`,
			"--loading-shadow-opacity": w,
			"--loading-hover-lift": `${T}px`,
			"--loading-hover-glow-opacity": E,
			"--loading-active-scale": D,
			"--loading-spinner-size": `${y}px`,
			"--loading-spinner-border": `${b}px`,
			"--loading-progress": `${z}%`
		},
		...I,
		children: [
			/* @__PURE__ */ t("span", { className: "loading-hover-glow" }),
			U && /* @__PURE__ */ t("span", {
				className: "loading-progress-track",
				children: /* @__PURE__ */ t("span", { className: "loading-progress-fill" })
			}),
			U ? /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", { className: "loading-spinner" }), /* @__PURE__ */ t("span", {
				className: "loading-content",
				children: K
			})] }) : /* @__PURE__ */ t("span", {
				className: "loading-content",
				children: K
			})
		]
	});
}, N = ({ children: e = "Magnetic Button", width: r = 180, height: i = 52, color: s = "#8b5cf6", textColor: c = "#ffffff", radius: l = 12, strength: u = .35, maxMove: d = 0, magneticEase: f = 300, shadowX: p = 0, shadowY: m = 10, shadowBlur: h = 35, shadowOpacity: g = .33, showGlow: _ = !0, glowOpacity: v = .1, glowHoverOpacity: y = 1, fontSize: b = 16, fontWeight: x = 600, letterSpacing: S = "normal", hoverLift: C = 0, activeScale: w = .95, onClick: T, disabled: E = !1, className: D = "", ...O }) => {
	let k = a(null), [A, j] = o({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ n("button", {
		ref: k,
		type: "button",
		onClick: T,
		onMouseMove: (e) => {
			if (E || !k.current) return;
			let t = k.current.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = t.width / 2, a = t.height / 2, o = (n - i) * u, s = (r - a) * u;
			d > 0 && (o = Math.max(-d, Math.min(d, o)), s = Math.max(-d, Math.min(d, s))), j({
				x: o,
				y: s
			});
		},
		onMouseLeave: () => {
			j({
				x: 0,
				y: 0
			});
		},
		disabled: E,
		className: `magnetic-button ${D}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			borderRadius: `${l}px`,
			color: c,
			backgroundColor: s,
			fontSize: `${b}px`,
			fontWeight: x,
			letterSpacing: S,
			"--magnetic-color": s,
			"--magnetic-text-color": c,
			"--magnetic-radius": `${l}px`,
			"--magnetic-shadow-x": `${p}px`,
			"--magnetic-shadow-y": `${m}px`,
			"--magnetic-shadow-blur": `${h}px`,
			"--magnetic-shadow-opacity": g,
			"--magnetic-glow-opacity": _ ? v : 0,
			"--magnetic-glow-hover-opacity": y,
			"--magnetic-hover-lift": `${C}px`,
			"--magnetic-active-scale": w,
			"--magnetic-ease": `${f}ms`,
			transform: `
          translate(
            ${A.x}px,
            ${A.y - C}px
          )
        `
		},
		...O,
		children: [_ && /* @__PURE__ */ t("span", { className: "magnetic-glow" }), /* @__PURE__ */ t("span", {
			className: "magnetic-content",
			children: e
		})]
	});
}, P = ({ children: e = "Magnetic Button", width: r = 200, height: i = 54, color: s = "#8b5cf6", textColor: c = "#ffffff", backgroundColor: l = "#080b16", radius: u = 14, strength: d = .25, maxMove: f = 0, glowSize: p = 180, glowOpacity: m = .35, glowBlur: h = 32, glassOpacity: g = .03, glassBlur: _ = 4, borderColor: v, borderOpacity: y = .5, borderWidth: b = 1, borderGlow: x = .27, borderGlowSize: S = 15, showShine: C = !0, shineWidth: w = 25, shineOpacity: T = .2, shineAngle: E = 12, shineSpeed: D = 700, shineHoverPosition: O = 130, fontSize: k = 16, fontWeight: A = 600, letterSpacing: j = "normal", contentGlow: M = 10, transitionDuration: N = 200, hoverLift: P = 0, activeScale: F = .97, onClick: I, disabled: L = !1, className: R = "", ...z }) => {
	let B = a(null), [V, H] = o({
		x: 0,
		y: 0
	}), [U, W] = o({
		x: 50,
		y: 50
	}), [G, K] = o(!1), ee = (e) => {
		if (!B.current || L) return;
		let t = B.current.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = t.width / 2, a = t.height / 2, o = (n - i) * d, s = (r - a) * d;
		f > 0 && (o = Math.max(-f, Math.min(f, o)), s = Math.max(-f, Math.min(f, s))), H({
			x: o,
			y: s
		}), W({
			x: n / t.width * 100,
			y: r / t.height * 100
		});
	}, q = () => {
		K(!0);
	}, J = () => {
		K(!1), H({
			x: 0,
			y: 0
		}), W({
			x: 50,
			y: 50
		});
	}, Y = v || s;
	return /* @__PURE__ */ n("button", {
		ref: B,
		type: "button",
		onClick: I,
		onMouseMove: ee,
		onMouseEnter: q,
		onMouseLeave: J,
		disabled: L,
		className: `magnetic-glow-button ${R}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			borderRadius: `${u}px`,
			color: c,
			backgroundColor: l,
			fontSize: `${k}px`,
			fontWeight: A,
			letterSpacing: j,
			transform: `
          translate3d(
            ${V.x}px,
            ${V.y - P}px,
            0
          )
        `,
			borderColor: `color-mix(
          in srgb,
          ${Y}
          ${y * 100}%,
          transparent
        )`,
			boxShadow: G ? `0 0 30px color-mix(
              in srgb,
              ${s} 21%,
              transparent
            )` : "0 0 0 transparent",
			"--magnetic-color": s,
			"--magnetic-text-color": c,
			"--glow-size": `${p}px`,
			"--glow-x": `${U.x}%`,
			"--glow-y": `${U.y}%`,
			"--glow-opacity": m,
			"--glow-blur": `${h}px`,
			"--glass-opacity": g,
			"--glass-blur": `${_}px`,
			"--border-width": `${b}px`,
			"--border-glow": x,
			"--border-glow-size": `${S}px`,
			"--shine-width": `${w}%`,
			"--shine-opacity": T,
			"--shine-angle": `${E}deg`,
			"--shine-speed": `${D}ms`,
			"--shine-hover-position": `${O}%`,
			"--content-glow": `${M}px`,
			"--transition-duration": `${N}ms`,
			"--active-scale": F
		},
		...z,
		children: [
			/* @__PURE__ */ t("span", { className: "magnetic-cursor-glow" }),
			/* @__PURE__ */ t("span", { className: "magnetic-glass" }),
			/* @__PURE__ */ t("span", { className: "magnetic-border-glow" }),
			C && /* @__PURE__ */ t("span", { className: "magnetic-shine" }),
			/* @__PURE__ */ t("span", {
				className: "magnetic-content",
				children: e
			})
		]
	});
}, F = ({ children: e = "Get Started", width: r = 210, height: i = 58, background: s = "#ffffff", textColor: c = "#111111", hoverBackground: l = "#111111", hoverTextColor: u = "#ffffff", radius: d = 12, strength: f = .25, maxMove: p = 0, characterTransition: m = 200, characterEase: h = "ease-out", characterXStart: g = .5, characterXEnd: _ = 1, characterYStart: v = .5, characterYEnd: y = .8, showArrow: b = !0, arrow: x = "→", arrowGap: S = 8, arrowMove: C = 4, arrowTransition: w = 300, borderWidth: T = 1, borderColor: E = "rgba(0, 0, 0, 0.08)", hoverBorderColor: D = "rgba(255, 255, 255, 0.2)", shadow: O = "0 8px 20px rgba(0, 0, 0, 0.12)", hoverShadow: k = "0 12px 30px rgba(0, 0, 0, 0.2)", fontSize: A = 16, fontWeight: j = 600, letterSpacing: M = "normal", transitionDuration: N = 300, activeScale: P = .97, onClick: F, disabled: I = !1, className: L = "", ...R }) => {
	let z = a(null), [B, V] = o(!1), [H, U] = o({
		x: 0,
		y: 0
	}), W = String(e).split("");
	return /* @__PURE__ */ n("button", {
		ref: z,
		type: "button",
		disabled: I,
		onClick: F,
		onMouseEnter: () => V(!0),
		onMouseMove: (e) => {
			if (!z.current || I) return;
			let t = z.current.getBoundingClientRect(), n = e.clientX - (t.left + t.width / 2), r = e.clientY - (t.top + t.height / 2), i = n * f, a = r * f;
			p > 0 && (i = Math.max(-p, Math.min(p, i)), a = Math.max(-p, Math.min(p, a))), U({
				x: i,
				y: a
			});
		},
		onMouseLeave: () => {
			V(!1), U({
				x: 0,
				y: 0
			});
		},
		className: `magnetic-text-button ${L}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			borderRadius: `${d}px`,
			backgroundColor: B ? l : s,
			color: B ? u : c,
			borderWidth: `${T}px`,
			borderColor: B ? D : E,
			boxShadow: B ? k : O,
			fontSize: `${A}px`,
			fontWeight: j,
			letterSpacing: M,
			"--magnetic-transition": `${N}ms`,
			"--character-transition": `${m}ms`,
			"--character-ease": h,
			"--arrow-gap": `${S}px`,
			"--arrow-move": `${C}px`,
			"--arrow-transition": `${w}ms`,
			"--active-scale": P
		},
		...R,
		children: [
			/* @__PURE__ */ t("span", { className: "magnetic-text-border" }),
			/* @__PURE__ */ t("span", {
				className: "magnetic-text-content",
				children: W.map((e, n) => {
					let r = n / Math.max(W.length - 1, 1), i = H.x * (g + r * (_ - g)), a = H.y * (v + r * (y - v));
					return /* @__PURE__ */ t("span", {
						className: "magnetic-character",
						style: { transform: B ? `translate(
                      ${i}px,
                      ${a}px
                    )` : "translate(0, 0)" },
						children: e === " " ? "\xA0" : e
					}, `${e}-${n}`);
				})
			}),
			b && /* @__PURE__ */ t("span", {
				className: "magnetic-text-arrow",
				children: x
			})
		]
	});
}, I = ({ children: i = "make it happen", width: a = 220, height: s = 60, background: c = "linear-gradient(135deg, #f9a8d4 0%, #e9d5ff 50%, #c4b5fd 100%)", successBackground: l = "linear-gradient(135deg, #86efac, #67e8f9)", textColor: u = "#18181b", borderColor: d = "rgba(255, 255, 255, 0.55)", hoverShadowColor: f = "rgba(168, 85, 247, 0.22)", successShadowColor: p = "rgba(34, 197, 94, 0.25)", radius: m = 16, borderWidth: h = 1, idleEmoji: g = "✨", hoverEmoji: _ = "👀", hoverText: v = "you sure?", successText: y = "LET'S GOOOO", successEmoji: b = "🚀", arrow: x = "→", fontSize: S = 16, fontWeight: C = 800, successFontWeight: w = 900, letterSpacing: T = "normal", successLetterSpacing: E = "0.02em", hoverLift: D = 3, hoverRotate: O = -1, hoverArrowMove: k = 4, activeScale: A = .96, stateTransition: j = 220, successDuration: M = 1e3, blinkDuration: N = 2, showDecorations: P = !0, decorationOne: F = "✨", decorationTwo: I = "💫", decorationThree: L = "⭐", decorationOneLeft: R = 18, decorationOneTop: z = 8, decorationTwoRight: B = 20, decorationTwoTop: V = 8, decorationThreeRight: H = 12, decorationThreeBottom: U = 10, decorationOpacity: W = 1, decorationTransition: G = 450, decorationPopDuration: K = 700, showCaption: ee = !1, caption: q = "", onClick: J, onSuccess: Y, disabled: X = !1, className: te = "", ...ne }) => {
	let [Z, Q] = o("idle");
	return r(() => {
		if (Z !== "success") return;
		let e = setTimeout(() => {
			Q("idle");
		}, M);
		return () => clearTimeout(e);
	}, [Z, M]), /* @__PURE__ */ n("button", {
		type: "button",
		disabled: X,
		onClick: () => {
			X || Z === "success" || (Q("success"), Y?.(), J?.());
		},
		onMouseEnter: () => {
			Z === "idle" && Q("hover");
		},
		onMouseLeave: () => {
			Z === "hover" && Q("idle");
		},
		className: `
        mood-button
        ${Z === "success" ? "mood-button-success" : ""}
        ${te}
      `,
		style: {
			width: `${a}px`,
			height: `${s}px`,
			borderRadius: `${m}px`,
			borderWidth: `${h}px`,
			background: Z === "success" ? l : c,
			color: u,
			"--mood-border-color": d,
			"--mood-hover-shadow-color": f,
			"--mood-success-shadow-color": p,
			"--mood-hover-lift": `${D}px`,
			"--mood-hover-rotate": `${O}deg`,
			"--mood-active-scale": A,
			"--mood-state-transition": `${j}ms`,
			"--mood-decoration-transition": `${G}ms`,
			"--mood-decoration-pop-duration": `${K}ms`,
			"--mood-font-size": `${S}px`,
			"--mood-font-weight": C,
			"--mood-letter-spacing": T,
			"--mood-success-font-weight": w,
			"--mood-success-letter-spacing": E,
			"--mood-blink-duration": `${N}s`,
			"--mood-arrow-move": `${k}px`,
			"--mood-decoration-opacity": W,
			"--mood-decoration-one-left": `${R}px`,
			"--mood-decoration-one-top": `${z}px`,
			"--mood-decoration-two-right": `${B}px`,
			"--mood-decoration-two-top": `${V}px`,
			"--mood-decoration-three-right": `${H}px`,
			"--mood-decoration-three-bottom": `${U}px`
		},
		...ne,
		children: [
			P && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", {
					className: "mood-decoration mood-decoration-one",
					children: F
				}),
				/* @__PURE__ */ t("span", {
					className: "mood-decoration mood-decoration-two",
					children: I
				}),
				/* @__PURE__ */ t("span", {
					className: "mood-decoration mood-decoration-three",
					children: L
				})
			] }),
			/* @__PURE__ */ n("span", {
				className: "mood-content",
				children: [
					/* @__PURE__ */ n("span", {
						className: `
            mood-state
            mood-idle
            ${Z === "idle" ? "mood-state-visible" : ""}
          `,
						children: [/* @__PURE__ */ t("span", { children: g }), /* @__PURE__ */ t("span", { children: i })]
					}),
					/* @__PURE__ */ n("span", {
						className: `
            mood-state
            mood-hover
            ${Z === "hover" ? "mood-state-visible" : ""}
          `,
						children: [
							/* @__PURE__ */ t("span", {
								className: "mood-eyes",
								children: _
							}),
							/* @__PURE__ */ t("span", { children: v }),
							/* @__PURE__ */ t("span", {
								className: "mood-arrow",
								children: x
							})
						]
					}),
					/* @__PURE__ */ n("span", {
						className: `
            mood-state
            mood-success
            ${Z === "success" ? "mood-state-visible" : ""}
          `,
						children: [/* @__PURE__ */ t("span", { children: y }), /* @__PURE__ */ t("span", { children: b })]
					})
				]
			}),
			ee && q && /* @__PURE__ */ t("span", {
				className: "mood-caption",
				children: q
			})
		]
	});
}, L = ({ children: e = "Hover Me", hoverText: r = "Let's Go →", width: i = 180, height: a = 52, hoverWidth: o = 220, color: s = "#6366f1", hoverColor: c = "#8b5cf6", textColor: l = "#ffffff", radius: u = 14, hoverRadius: d = 30, fontSize: f = 16, fontWeight: p = 600, letterSpacing: m = "normal", morphDuration: h = 500, morphEasing: g = "cubic-bezier(0.68, -0.55, 0.27, 1.55)", hoverLift: _ = 4, activeScale: v = .95, showHoverBackground: y = !0, hoverBackgroundAngle: b = 135, backgroundDuration: x = 500, hoverBackgroundOpacity: S = 1, showExpandingCircle: C = !0, circleColor: w = "#ffffff", circleOpacity: T = .1, circleSize: E = 300, circleDuration: D = 700, showGlow: O = !0, glowOpacity: k = .7, glowBlur: A = 6, glowDuration: j = 500, glowY: M = 10, glowBlurSpread: N = 30, glowOuterSize: P = 45, glowMixOpacity: F = 35, textDuration: I = 300, textMove: L = 32, onClick: R, disabled: z = !1, className: B = "", ...V }) => {
	let H = {
		"--morph-width": `${i}px`,
		"--morph-height": `${a}px`,
		"--morph-hover-width": `${o}px`,
		"--morph-color": s,
		"--morph-hover-color": c,
		"--morph-text-color": l,
		"--morph-radius": `${u}px`,
		"--morph-hover-radius": `${d}px`,
		"--morph-font-size": `${f}px`,
		"--morph-font-weight": p,
		"--morph-letter-spacing": m,
		"--morph-duration": `${h}ms`,
		"--morph-easing": g,
		"--morph-hover-lift": `${_}px`,
		"--morph-active-scale": v,
		"--morph-background-duration": `${x}ms`,
		"--morph-background-opacity": S,
		"--morph-background-angle": `${b}deg`,
		"--morph-circle-color": w,
		"--morph-circle-opacity": T,
		"--morph-circle-size": `${E}%`,
		"--morph-circle-duration": `${D}ms`,
		"--morph-glow-opacity": k,
		"--morph-glow-blur": `${A}px`,
		"--morph-glow-duration": `${j}ms`,
		"--morph-glow-y": `${M}px`,
		"--morph-glow-spread": `${N}px`,
		"--morph-glow-outer-size": `${P}px`,
		"--morph-glow-mix-opacity": `${F}%`,
		"--morph-text-duration": `${I}ms`,
		"--morph-text-move": `${L}px`
	};
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: R,
		disabled: z,
		className: `morph-button ${B}`,
		style: H,
		...V,
		children: [
			y && /* @__PURE__ */ t("span", {
				className: "morph-background",
				children: /* @__PURE__ */ t("span", {
					className: "morph-background-gradient",
					style: { background: `linear-gradient(
                ${b}deg,
                ${c},
                ${s}
              )` }
				})
			}),
			C && /* @__PURE__ */ t("span", { className: "morph-circle" }),
			O && /* @__PURE__ */ t("span", {
				className: "morph-glow",
				style: { backgroundColor: c }
			}),
			/* @__PURE__ */ t("span", {
				className: "morph-text morph-text-normal",
				children: e
			}),
			/* @__PURE__ */ t("span", {
				className: "morph-text morph-text-hover",
				children: r
			})
		]
	});
}, R = ({ children: e = "Neon Button", width: r = 180, height: i = 52, color: a = "#00ffff", textColor: o = "#ffffff", backgroundColor: s = "#050816", radius: c = 10, borderWidth: l = 1, glow: u = 25, glowOpacity: d = .6, innerGlowOpacity: f = .2, innerGlowHoverOpacity: p = .4, borderGlowOpacity: m = .7, borderGlowHoverOpacity: h = 1, borderGlowSize: g = 12, borderGlowHoverSize: _ = 12, borderBlur: v = 4, borderHoverBlur: y = 8, innerGlowBlur: b = 18, showStreak: x = !0, streakColor: S = "#ffffff", streakOpacity: C = .4, streakWidth: w = 33.333, streakAngle: T = 12, streakBlur: E = 8, streakSpeed: D = 700, streakEndPosition: O = 130, fontSize: k = 16, fontWeight: A = 600, letterSpacing: j = "normal", hoverLift: M = 4, activeScale: N = .95, showTextGlow: P = !0, textGlowSize: F = 8, onClick: I, disabled: L = !1, className: R = "", ...z }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: I,
	disabled: L,
	className: `neon-button ${R}`,
	style: {
		"--neon-width": `${r}px`,
		"--neon-height": `${i}px`,
		"--neon-color": a,
		"--neon-text-color": o,
		"--neon-background": s,
		"--neon-radius": `${c}px`,
		"--neon-border-width": `${l}px`,
		"--neon-glow": `${u}px`,
		"--neon-glow-opacity": d,
		"--neon-inner-opacity": f,
		"--neon-inner-hover-opacity": p,
		"--neon-border-opacity": m,
		"--neon-border-hover-opacity": h,
		"--neon-border-glow-size": `${g}px`,
		"--neon-border-hover-size": `${_}px`,
		"--neon-border-blur": `${v}px`,
		"--neon-border-hover-blur": `${y}px`,
		"--neon-inner-blur": `${b}px`,
		"--neon-streak-color": S,
		"--neon-streak-opacity": C,
		"--neon-streak-width": `${w}%`,
		"--neon-streak-angle": `${T}deg`,
		"--neon-streak-blur": `${E}px`,
		"--neon-streak-speed": `${D}ms`,
		"--neon-streak-end": `${O}%`,
		"--neon-font-size": `${k}px`,
		"--neon-font-weight": A,
		"--neon-letter-spacing": j,
		"--neon-hover-lift": `${M}px`,
		"--neon-active-scale": N,
		"--neon-text-glow-size": `${F}px`
	},
	...z,
	children: [
		/* @__PURE__ */ t("span", { className: "neon-border-glow" }),
		/* @__PURE__ */ t("span", { className: "neon-inner-glow" }),
		x && /* @__PURE__ */ t("span", { className: "neon-streak" }),
		/* @__PURE__ */ t("span", {
			className: `neon-content ${P ? "neon-content-glow" : ""}`,
			children: e
		})
	]
}), z = ({ children: e = "Orbit", width: r = 210, height: i = 58, color: a = "#06b6d4", secondaryColor: s = "#8b5cf6", textColor: c = "#ffffff", backgroundColor: l = "#080b16", radius: u = 14, borderWidth: d = 1, borderColor: f = "rgba(255,255,255,0.10)", hoverBorderColor: p = "rgba(255,255,255,0.20)", orbitSize: m = 85, speed: h = 8, hoverSpeedMultiplier: g = .5, showRings: _ = !0, ringColor: v = a, secondaryRingColor: y = s, ringBorderWidth: b = 1, ringOpacity: x = .3, ringHoverOpacity: S = .7, outerRingOpacity: C = .2, outerRingHoverOpacity: w = .5, outerRingInset: T = -12, ringTilt: E = 65, outerRingRotation: D = 45, showSatellites: O = !0, satelliteSize: k = 7, satelliteSmallSize: A = 4, satelliteColor: j = a, satelliteSecondaryColor: M = s, satelliteThirdColor: N = "#ffffff", satelliteGlowSize: P = 8, satelliteOuterGlowSize: F = 18, smallSatelliteGlowSize: I = 6, smallSatelliteOuterGlowSize: L = 14, showAtmosphere: R = !0, atmosphereOpacity: z = 0, atmosphereHoverOpacity: B = 1, atmosphereColor: V = a, atmosphereSize: H = 65, fontSize: U = 16, fontWeight: W = 600, letterSpacing: G = "normal", contentScale: K = 1.05, hoverLift: ee = 4, activeScale: q = .97, transitionDuration: J = 300, ringTransitionDuration: Y = 500, onClick: X, disabled: te = !1, className: ne = "", ...Z }) => {
	let [Q, re] = o(!1), $ = Q ? h * g : h;
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: te,
		onClick: X,
		onMouseEnter: () => re(!0),
		onMouseLeave: () => re(!1),
		className: `orbit-button ${ne}`,
		style: {
			"--orbit-width": `${r}px`,
			"--orbit-height": `${i}px`,
			"--orbit-color": a,
			"--orbit-secondary": s,
			"--orbit-text-color": c,
			"--orbit-background": l,
			"--orbit-radius": `${u}px`,
			"--orbit-border-width": `${d}px`,
			"--orbit-border-color": f,
			"--orbit-hover-border-color": p,
			"--orbit-size": `${m}px`,
			"--orbit-speed": `${$}s`,
			"--orbit-speed-third": `${$ * 1.35}s`,
			"--orbit-ring-color": v,
			"--orbit-secondary-ring": y,
			"--orbit-ring-border-width": `${b}px`,
			"--orbit-ring-opacity": x,
			"--orbit-ring-hover-opacity": S,
			"--orbit-outer-opacity": C,
			"--orbit-outer-hover-opacity": w,
			"--orbit-outer-inset": `${T}px`,
			"--orbit-ring-tilt": `${E}deg`,
			"--orbit-outer-rotation": `${D}deg`,
			"--orbit-satellite-size": `${k}px`,
			"--orbit-small-satellite-size": `${A}px`,
			"--orbit-satellite-color": j,
			"--orbit-satellite-secondary": M,
			"--orbit-satellite-third": N,
			"--orbit-glow-size": `${P}px`,
			"--orbit-outer-glow": `${F}px`,
			"--orbit-small-glow": `${I}px`,
			"--orbit-small-outer-glow": `${L}px`,
			"--orbit-atmosphere-opacity": z,
			"--orbit-atmosphere-hover-opacity": B,
			"--orbit-atmosphere-color": V,
			"--orbit-atmosphere-size": `${H}%`,
			"--orbit-font-size": `${U}px`,
			"--orbit-font-weight": W,
			"--orbit-letter-spacing": G,
			"--orbit-content-scale": K,
			"--orbit-hover-lift": `${ee}px`,
			"--orbit-active-scale": q,
			"--orbit-transition": `${J}ms`,
			"--orbit-ring-transition": `${Y}ms`
		},
		...Z,
		children: [
			/* @__PURE__ */ n("span", {
				className: `orbit-system ${O ? "" : "orbit-no-satellites"}`,
				children: [
					_ && /* @__PURE__ */ t("span", { className: "orbit-ring orbit-ring-one" }),
					_ && /* @__PURE__ */ t("span", { className: "orbit-ring orbit-ring-two" }),
					O && /* @__PURE__ */ t("span", {
						className: "orbit-satellite orbit-one",
						children: /* @__PURE__ */ t("span", { className: "orbit-dot orbit-dot-one" })
					}),
					O && /* @__PURE__ */ t("span", {
						className: "orbit-satellite orbit-two",
						children: /* @__PURE__ */ t("span", { className: "orbit-dot orbit-dot-two" })
					}),
					O && /* @__PURE__ */ t("span", {
						className: "orbit-satellite orbit-three",
						children: /* @__PURE__ */ t("span", { className: "orbit-dot orbit-dot-three" })
					})
				]
			}),
			/* @__PURE__ */ t("span", { className: "orbit-surface" }),
			R && /* @__PURE__ */ t("span", { className: "orbit-atmosphere" }),
			/* @__PURE__ */ t("span", {
				className: "orbit-content",
				children: e
			})
		]
	});
}, B = ({ children: e = "Particle Button", width: r = 210, height: a = 58, color: s = "#a855f7", particleColor: c = "#ffffff", textColor: l = "#ffffff", backgroundColor: u = s, radius: d = 12, borderWidth: f = 1, borderColor: p = "rgba(255,255,255,0.10)", hoverBorderColor: m = "rgba(255,255,255,0.25)", particleCount: h = 28, particleDistance: g = 70, particleMinSize: _ = 2, particleMaxSize: v = 5, particleOpacity: y = .85, particleBlur: b = 0, particleDuration: x = 600, particleExplosionDuration: S = 650, particleExplosionMultiplier: C = 2.4, particleDelayMax: w = .35, showEdge: T = !0, edgeOpacity: E = .3, edgeHoverOpacity: D = 1, edgeStyle: O = "dashed", edgeWidth: k = 1, edgeColor: A = c, showGlow: j = !0, glowOpacity: M = .25, glowHoverOpacity: N = .35, glowSize: P = 25, hoverGlowSize: F = 35, fontSize: I = 16, fontWeight: L = 600, letterSpacing: R = "normal", contentScale: z = .97, hoverLift: B = 4, activeScale: V = .95, transitionDuration: H = 300, onClick: U, onBurst: W, disabled: G = !1, className: K = "", ...ee }) => {
	let [q, J] = o(!1), [Y, X] = o(!1), te = i(() => Array.from({ length: h }, (e, t) => {
		let n = 360 / h * t * Math.PI / 180, r = g * (.65 + Math.random() * .7), i = _ + Math.random() * (v - _);
		return {
			id: t,
			x: Math.cos(n) * r,
			y: Math.sin(n) * r,
			delay: Math.random() * w,
			size: i,
			rotation: Math.random() * 360
		};
	}), [
		h,
		g,
		_,
		v,
		w
	]);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: G,
		onClick: (e) => {
			G || (X(!0), W && W(e), window.setTimeout(() => {
				X(!1);
			}, S + 50), U && U(e));
		},
		onMouseEnter: () => J(!0),
		onMouseLeave: () => J(!1),
		className: `particle-button ${K}`,
		style: {
			"--particle-width": `${r}px`,
			"--particle-height": `${a}px`,
			"--particle-main-color": s,
			"--particle-color": c,
			"--particle-text-color": l,
			"--particle-background": u,
			"--particle-radius": `${d}px`,
			"--particle-border-width": `${f}px`,
			"--particle-border-color": p,
			"--particle-hover-border-color": m,
			"--particle-opacity": y,
			"--particle-blur": `${b}px`,
			"--particle-duration": `${x}ms`,
			"--particle-explosion-duration": `${S}ms`,
			"--particle-explosion-multiplier": C,
			"--particle-edge-opacity": E,
			"--particle-edge-hover-opacity": D,
			"--particle-edge-width": `${k}px`,
			"--particle-edge-style": O,
			"--particle-edge-color": A,
			"--particle-glow-opacity": M,
			"--particle-glow-hover-opacity": N,
			"--particle-glow-size": `${P}px`,
			"--particle-hover-glow-size": `${F}px`,
			"--particle-font-size": `${I}px`,
			"--particle-font-weight": L,
			"--particle-letter-spacing": R,
			"--particle-content-scale": z,
			"--particle-hover-lift": `${B}px`,
			"--particle-active-scale": V,
			"--particle-transition": `${H}ms`
		},
		...ee,
		children: [
			/* @__PURE__ */ t("span", {
				className: "particle-field",
				children: te.map((e) => /* @__PURE__ */ t("span", {
					className: `particle-dot ${q || Y ? "particle-active" : ""} ${Y ? "particle-burst" : ""}`,
					style: {
						width: `${e.size}px`,
						height: `${e.size}px`,
						backgroundColor: c,
						"--particle-x": `${e.x}px`,
						"--particle-y": `${e.y}px`,
						"--particle-delay": `${e.delay}s`,
						"--particle-rotation": `${e.rotation}deg`
					}
				}, e.id))
			}),
			T && /* @__PURE__ */ t("span", { className: "particle-edge" }),
			j && /* @__PURE__ */ t("span", { className: "particle-glow" }),
			/* @__PURE__ */ t("span", { className: "particle-surface" }),
			/* @__PURE__ */ t("span", {
				className: `particle-content ${q ? "particle-content-active" : ""}`,
				children: e
			})
		]
	});
}, V = ({ children: r = "PLASMA", width: i = 220, height: a = 60, color: s = "#00e5ff", secondaryColor: c = "#7c3aed", textColor: l = "#ffffff", backgroundColor: u = "#060914", radius: d = 14, borderWidth: f = 1, borderOpacity: p = .3, hoverBorderOpacity: m = .8, intensity: h = 1, showPlasma: g = !0, arcWidth: _ = 2, arcBlur: v = 1, arcGlow: y = 5, arcOpacity: b = .15, activeArcOpacity: x = .9, arcOneDuration: S = 2.2, arcTwoDuration: C = 1.8, arcThreeDuration: w = 2.7, arcFourDuration: T = 2, arcFiveDuration: E = 3.2, showNodes: D = !0, nodeSize: O = 5, nodeOpacity: k = .6, nodePulseDuration: A = 1.5, activeNodeDuration: j = .7, nodeBlur: M = .5, nodeGlow: N = 6, showCore: P = !0, coreOpacity: F = .6, corePulseDuration: I = 2, activeCoreDuration: L = .8, coreSize: R = 65, showStatus: z = !0, statusText: B = "", statusColor: V = l, statusFontSize: H = 6, statusOpacity: U = .4, statusLetterSpacing: W = "0.2em", fontSize: G = 16, fontWeight: K = 700, letterSpacing: ee = "0.15em", hoverLift: q = 4, activeScale: J = .97, transitionDuration: Y = 300, onClick: X, disabled: te = !1, className: ne = "", ...Z }) => {
	let [Q, re] = o(!1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: te,
		onClick: X,
		onMouseEnter: () => re(!0),
		onMouseLeave: () => re(!1),
		className: `plasma-button ${Q ? "plasma-active" : ""} ${ne}`,
		style: {
			"--plasma-width": `${i}px`,
			"--plasma-height": `${a}px`,
			"--plasma-primary": s,
			"--plasma-secondary": c,
			"--plasma-text": l,
			"--plasma-background": u,
			"--plasma-radius": `${d}px`,
			"--plasma-border-width": `${f}px`,
			"--plasma-border-opacity": p,
			"--plasma-hover-border-opacity": m,
			"--plasma-intensity": h,
			"--plasma-arc-width": `${_}px`,
			"--plasma-arc-blur": `${v}px`,
			"--plasma-arc-glow": `${y}px`,
			"--plasma-arc-opacity": b,
			"--plasma-active-arc-opacity": x,
			"--plasma-arc-one-duration": `${S}s`,
			"--plasma-arc-two-duration": `${C}s`,
			"--plasma-arc-three-duration": `${w}s`,
			"--plasma-arc-four-duration": `${T}s`,
			"--plasma-arc-five-duration": `${E}s`,
			"--plasma-node-size": `${O}px`,
			"--plasma-node-opacity": k,
			"--plasma-node-duration": `${A}s`,
			"--plasma-active-node-duration": `${j}s`,
			"--plasma-node-blur": `${M}px`,
			"--plasma-node-glow": `${N}px`,
			"--plasma-core-opacity": F,
			"--plasma-core-duration": `${I}s`,
			"--plasma-active-core-duration": `${L}s`,
			"--plasma-core-size": `${R}%`,
			"--plasma-status-color": V,
			"--plasma-status-size": `${H}px`,
			"--plasma-status-opacity": U,
			"--plasma-status-spacing": W,
			"--plasma-font-size": `${G}px`,
			"--plasma-font-weight": K,
			"--plasma-letter-spacing": ee,
			"--plasma-hover-lift": `${q}px`,
			"--plasma-active-scale": J,
			"--plasma-transition": `${Y}ms`
		},
		...Z,
		children: [
			g && /* @__PURE__ */ n("span", {
				className: "plasma-field",
				children: [
					/* @__PURE__ */ t("span", { className: "plasma-arc plasma-arc-1" }),
					/* @__PURE__ */ t("span", { className: "plasma-arc plasma-arc-2" }),
					/* @__PURE__ */ t("span", { className: "plasma-arc plasma-arc-3" }),
					/* @__PURE__ */ t("span", { className: "plasma-arc plasma-arc-4" }),
					/* @__PURE__ */ t("span", { className: "plasma-arc plasma-arc-5" })
				]
			}),
			D && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", {
					className: "plasma-node plasma-node-1",
					style: { backgroundColor: s }
				}),
				/* @__PURE__ */ t("span", {
					className: "plasma-node plasma-node-2",
					style: { backgroundColor: c }
				}),
				/* @__PURE__ */ t("span", {
					className: "plasma-node plasma-node-3",
					style: { backgroundColor: s }
				}),
				/* @__PURE__ */ t("span", {
					className: "plasma-node plasma-node-4",
					style: { backgroundColor: c }
				})
			] }),
			P && /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", { className: "plasma-core" }), /* @__PURE__ */ t("span", { className: "plasma-core-border" })] }),
			/* @__PURE__ */ t("span", {
				className: "plasma-content",
				children: r
			}),
			z && /* @__PURE__ */ t("span", {
				className: "plasma-status",
				children: B
			})
		]
	});
}, H = ({ children: r = "Open Portal", width: i = 230, height: a = 62, backgroundColor: s = "#070b16", primaryColor: c = "#60a5fa", secondaryColor: l = "#818cf8", innerColor: u = "#c084fc", textColor: d = "#f8fafc", arrowColor: f = "#93c5fd", radius: p = 18, borderWidth: m = 1, borderOpacity: h = .22, hoverBorderOpacity: g = .6, showBackground: _ = !0, backgroundOpacity: v = 1, backgroundHoverScale: y = 1.7, backgroundColorOpacity: b = .12, backgroundDuration: x = 700, showRings: S = !0, outerRingSize: C = 105, outerRingHoverSize: w = 130, outerRingBorderColor: T = "rgba(96,165,250,.22)", outerRingHoverOpacity: E = .9, outerRingOpacity: D = 1, outerRingDuration: O = 12, middleRingSize: k = 76, middleRingHoverSize: A = 92, middleRingOpacity: j = .55, middleRingHoverOpacity: M = .9, middleRingDuration: N = 5, innerRingSize: P = 52, innerRingHoverSize: F = 62, innerRingDuration: I = 3, showCore: L = !0, coreSize: R = 29, coreDotSize: z = 7, coreBackground: B = "#020617", coreDotColor: V = "#93c5fd", coreGlowColor: H = "#60a5fa", corePulseDuration: U = 1.5, coreHoverScale: W = 1.25, showRays: G = !0, rayColor: K = "#93c5fd", rayWidth: ee = 3, rayHeight: q = 18, rayOpacity: J = .7, rayAnimationDuration: Y = 1.2, showArrow: X = !0, arrow: te = "↗", arrowGap: ne = 10, arrowSize: Z = 17, contentPaddingX: Q = 18, contentPaddingY: re = 9, contentRadius: $ = 11, contentBackground: ie = "rgba(7,11,22,.88)", contentBlur: ae = 8, fontSize: oe = 14, fontWeight: se = 800, letterSpacing: ce = "0.025em", portalDuration: le = 900, contentAnimationDuration: ue = 900, contentCollapseScale: de = .08, contentEmergenceScale: fe = 1.12, contentCollapseRotation: pe = -6, contentEmergenceRotation: me = 2, hoverLift: he = 3, hoverContentScale: ge = 1, arrowHoverX: _e = 4, arrowHoverY: ve = -4, activeScale: ye = .97, transitionDuration: be = 300, onClick: xe, onPortalComplete: Se, disabled: Ce = !1, className: we = "", ...Te }) => {
	let [Ee, De] = o(!1);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: Ce,
		onClick: (e) => {
			Ce || Ee || (De(!0), xe?.(e), window.setTimeout(() => {
				De(!1), Se?.(e);
			}, le));
		},
		className: `portal-button ${Ee ? "portal-active" : ""} ${we}`,
		style: {
			"--portal-width": `${i}px`,
			"--portal-height": `${a}px`,
			"--portal-background": s,
			"--portal-primary": c,
			"--portal-secondary": l,
			"--portal-inner": u,
			"--portal-text": d,
			"--portal-arrow": f,
			"--portal-radius": `${p}px`,
			"--portal-border-width": `${m}px`,
			"--portal-border-opacity": h,
			"--portal-hover-border-opacity": g,
			"--portal-background-opacity": v,
			"--portal-background-hover-scale": y,
			"--portal-background-color-opacity": b,
			"--portal-background-duration": `${x}ms`,
			"--portal-outer-size": `${C}px`,
			"--portal-outer-hover-size": `${w}px`,
			"--portal-outer-border": T,
			"--portal-outer-opacity": D,
			"--portal-outer-hover-opacity": E,
			"--portal-outer-duration": `${O}s`,
			"--portal-middle-size": `${k}px`,
			"--portal-middle-hover-size": `${A}px`,
			"--portal-middle-opacity": j,
			"--portal-middle-hover-opacity": M,
			"--portal-middle-duration": `${N}s`,
			"--portal-inner-size": `${P}px`,
			"--portal-inner-hover-size": `${F}px`,
			"--portal-inner-duration": `${I}s`,
			"--portal-core-size": `${R}px`,
			"--portal-core-dot-size": `${z}px`,
			"--portal-core-background": B,
			"--portal-core-dot-color": V,
			"--portal-core-glow-color": H,
			"--portal-core-pulse-duration": `${U}s`,
			"--portal-core-hover-scale": W,
			"--portal-ray-color": K,
			"--portal-ray-width": `${ee}px`,
			"--portal-ray-height": `${q}px`,
			"--portal-ray-opacity": J,
			"--portal-ray-duration": `${Y}s`,
			"--portal-content-padding-x": `${Q}px`,
			"--portal-content-padding-y": `${re}px`,
			"--portal-content-radius": `${$}px`,
			"--portal-content-background": ie,
			"--portal-content-blur": `${ae}px`,
			"--portal-font-size": `${oe}px`,
			"--portal-font-weight": se,
			"--portal-letter-spacing": ce,
			"--portal-arrow-gap": `${ne}px`,
			"--portal-arrow-size": `${Z}px`,
			"--portal-duration": `${le}ms`,
			"--portal-content-duration": `${ue}ms`,
			"--portal-collapse-scale": de,
			"--portal-emergence-scale": fe,
			"--portal-collapse-rotation": `${pe}deg`,
			"--portal-emergence-rotation": `${me}deg`,
			"--portal-hover-lift": `${he}px`,
			"--portal-hover-content-scale": ge,
			"--portal-arrow-hover-x": `${_e}px`,
			"--portal-arrow-hover-y": `${ve}px`,
			"--portal-active-scale": ye,
			"--portal-transition": `${be}ms`
		},
		...Te,
		children: [
			_ && /* @__PURE__ */ t("span", { className: "portal-background" }),
			S && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "portal-ring portal-ring-outer" }),
				/* @__PURE__ */ t("span", { className: "portal-ring portal-ring-middle" }),
				/* @__PURE__ */ t("span", { className: "portal-ring portal-ring-inner" })
			] }),
			L && /* @__PURE__ */ t("span", {
				className: "portal-core",
				children: /* @__PURE__ */ t("span", {})
			}),
			G && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "portal-ray ray-1" }),
				/* @__PURE__ */ t("span", { className: "portal-ray ray-2" }),
				/* @__PURE__ */ t("span", { className: "portal-ray ray-3" }),
				/* @__PURE__ */ t("span", { className: "portal-ray ray-4" }),
				/* @__PURE__ */ t("span", { className: "portal-ray ray-5" }),
				/* @__PURE__ */ t("span", { className: "portal-ray ray-6" })
			] }),
			/* @__PURE__ */ n("span", {
				className: "portal-content",
				children: [/* @__PURE__ */ t("span", {
					className: "portal-label",
					children: r
				}), X && /* @__PURE__ */ t("span", {
					className: "portal-arrow",
					children: te
				})]
			})
		]
	});
}, U = ({ children: e = "Hold to unlock", holdingText: i = "keep holding...", successText: s = "Unlocked", normalIcon: c = "○", holdingIcon: l = "●", successIcon: u = "✓", width: d = 240, height: f = 64, background: p = "#0fe3c3", accentColor: m = "#f472b6", successColor: h = "#1135e6", textColor: g = "#ffffff", holdingTextColor: _ = null, successTextColor: v = "#ffffff", iconColor: y = "#eb0994", successIconColor: b = "#ffffff", radius: x = 18, borderWidth: S = 1, borderColor: C = "rgba(255,255,255,0.1)", ringSize: w = 48, ringRadius: T = 25, ringStrokeWidth: E = 3, ringBackgroundColor: D = "rgba(255,255,255,0.12)", ringColor: O = m, ringGlow: k = 4, iconSize: A = 32, iconFontSize: j = 12, iconBackground: M = "rgba(255,255,255,0.08)", iconHoldingBackground: N = null, iconRadius: P = 50, fontSize: F = 14, fontWeight: I = 700, holdingFontWeight: L = 700, successFontSize: R = 15, successFontWeight: z = 800, letterSpacing: B = "normal", gap: V = 12, successGap: H = 9, holdTime: U = 1500, ringTransitionDuration: W = 25, iconTransitionDuration: G = 180, buttonTransitionDuration: K = 250, successDuration: ee = 300, holdingIconScale: q = 1.08, showSuccessIcon: J = !0, successIconSize: Y = 30, successIconBackground: X = "rgba(255,255,255,0.2)", resetOnComplete: te = !1, resetDelay: ne = 1500, cancelOnPointerLeave: Z = !1, onComplete: Q, onHoldStart: re, onHoldCancel: $, onProgress: ie, onReset: ae, disabled: oe = !1, className: se = "", ...ce }) => {
	let [le, ue] = o(0), [de, fe] = o(!1), [pe, me] = o(!1), he = a(null), ge = a(null), _e = a(null);
	r(() => () => {
		ge.current && cancelAnimationFrame(ge.current), _e.current && clearTimeout(_e.current);
	}, []);
	let ve = () => {
		ge.current && cancelAnimationFrame(ge.current), _e.current && clearTimeout(_e.current), he.current = null, fe(!1), me(!1), ue(0), ae?.();
	}, ye = (e) => {
		he.current ||= e;
		let t = e - he.current, n = Math.min(t / U, 1);
		if (ue(n), ie?.(n), n >= 1) {
			fe(!1), me(!0), ue(1), he.current = null, ge.current = null, Q?.(), te && (_e.current = setTimeout(() => {
				ve();
			}, ne));
			return;
		}
		ge.current = requestAnimationFrame(ye);
	}, be = (e) => {
		if (!(oe || pe || de)) {
			if (e.currentTarget.setPointerCapture) try {
				e.currentTarget.setPointerCapture(e.pointerId);
			} catch {}
			fe(!0), ue(0), he.current = null, re?.(e), ge.current = requestAnimationFrame(ye);
		}
	}, xe = (e) => {
		pe || (ge.current &&= (cancelAnimationFrame(ge.current), null), he.current = null, fe(!1), ue(0), $?.(e));
	}, Se = (e) => {
		Z && de && !pe && xe(e);
	}, Ce = 2 * Math.PI * T, we = Ce - Ce * le, Te = _ || m, Ee = N || `color-mix(
      in srgb,
      ${m} 25%,
      transparent
    )`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: oe,
		className: `
        press-hold-button
        ${de ? "press-holding" : ""}
        ${pe ? "press-completed" : ""}
        ${se}
      `,
		style: {
			"--press-width": `${d}px`,
			"--press-height": `${f}px`,
			"--press-background": p,
			"--press-accent": m,
			"--press-success": h,
			"--press-text": g,
			"--press-holding-text": Te,
			"--press-success-text": v,
			"--press-icon": y,
			"--press-success-icon": b,
			"--press-radius": `${x}px`,
			"--press-border-width": `${S}px`,
			"--press-border-color": C,
			"--press-ring-size": `${w}px`,
			"--press-ring-radius": T,
			"--press-ring-stroke": E,
			"--press-ring-background": D,
			"--press-ring-color": O,
			"--press-ring-glow": `${k}px`,
			"--press-icon-size": `${A}px`,
			"--press-icon-font-size": `${j}px`,
			"--press-icon-background": M,
			"--press-icon-holding-background": Ee,
			"--press-icon-radius": `${P}%`,
			"--press-icon-scale": q,
			"--press-font-size": `${F}px`,
			"--press-font-weight": I,
			"--press-holding-font-weight": L,
			"--press-success-font-size": `${R}px`,
			"--press-success-font-weight": z,
			"--press-letter-spacing": B,
			"--press-gap": `${V}px`,
			"--press-success-gap": `${H}px`,
			"--press-ring-transition": `${W}ms`,
			"--press-icon-transition": `${G}ms`,
			"--press-button-transition": `${K}ms`,
			"--press-success-duration": `${ee}ms`,
			"--press-success-icon-size": `${Y}px`,
			"--press-success-icon-background": X
		},
		onPointerDown: be,
		onPointerUp: xe,
		onPointerCancel: xe,
		onPointerLeave: Se,
		...ce,
		children: [
			!pe && /* @__PURE__ */ n("div", {
				className: "press-circle",
				children: [/* @__PURE__ */ n("svg", {
					className: "press-ring",
					viewBox: "0 0 60 60",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ t("circle", {
						className: "press-ring-background",
						cx: "30",
						cy: "30",
						r: T
					}), /* @__PURE__ */ t("circle", {
						className: "press-ring-progress",
						cx: "30",
						cy: "30",
						r: T,
						style: {
							strokeDasharray: Ce,
							strokeDashoffset: we
						}
					})]
				}), /* @__PURE__ */ t("span", {
					className: "press-icon",
					children: de ? l : c
				})]
			}),
			!pe && /* @__PURE__ */ t("span", {
				className: "press-text",
				children: de ? i : e
			}),
			pe && /* @__PURE__ */ n("div", {
				className: "press-success",
				children: [J && /* @__PURE__ */ t("span", {
					className: "press-success-icon",
					children: u
				}), /* @__PURE__ */ t("span", { children: s })]
			})
		]
	});
}, W = ({ children: i = "Upload", width: a = 200, height: s = 52, progress: c = 0, color: l = "#6366f1", secondaryColor: u = "#8b5cf6", textColor: d = "#ffffff", backgroundColor: f = "#111827", progressStartColor: p = l, progressEndColor: m = `${l}cc`, progressGlowColor: h = l, radius: g = 12, borderWidth: _ = 1, borderColor: v = "rgba(255,255,255,0.08)", hoverBorderColor: y = "rgba(255,255,255,0.18)", showPercentage: b = !0, progressText: x, percentageFontSize: S = 14, percentageOpacity: C = .8, progressDuration: w = 500, progressEasing: T = "cubic-bezier(0.22, 1, 0.36, 1)", animateProgress: E = !0, showProgressShine: D = !0, shineWidth: O = 45, shineOpacity: k = .28, shineSpeed: A = 1100, showProgressGlow: j = !0, progressGlowOpacity: M = .45, progressGlowBlur: N = 14, completeText: P = "Complete", completeIcon: F = "✓", showCompleteIcon: I = !0, completeScale: L = 1.05, completeDuration: R = 300, completeColor: z = "#22c55e", completeBackgroundColor: B = f, showHoverOverlay: V = !0, hoverOverlayOpacity: H = .1, hoverLift: U = 4, hoverGlowOpacity: W = .25, hoverGlowSize: G = 30, fontSize: K = 16, fontWeight: ee = 600, letterSpacing: q = "normal", activeScale: J = .98, onClick: Y, onComplete: X, disabled: te = !1, className: ne = "", ...Z }) => {
	let Q = Math.min(100, Math.max(0, Number(c) || 0)), re = Q >= 100, [$, ie] = o(Q);
	r(() => {
		if (!E) {
			ie(Q);
			return;
		}
		let e = requestAnimationFrame(() => {
			ie(Q);
		});
		return () => cancelAnimationFrame(e);
	}, [Q, E]);
	let ae = o(Q)[0];
	return r(() => {
		Q >= 100 && ae < 100 && X?.();
	}, [
		Q,
		ae,
		X
	]), /* @__PURE__ */ n("button", {
		type: "button",
		onClick: (e) => {
			te || Y?.(e);
		},
		disabled: te,
		className: `
        progress-button
        ${re ? "progress-complete" : ""}
        ${ne}
      `,
		style: {
			"--progress-width": `${a}px`,
			"--progress-height": `${s}px`,
			"--progress-color": l,
			"--progress-secondary": u,
			"--progress-text-color": d,
			"--progress-background": f,
			"--progress-start": p,
			"--progress-end": m,
			"--progress-glow-color": h,
			"--progress-radius": `${g}px`,
			"--progress-border-width": `${_}px`,
			"--progress-border-color": v,
			"--progress-hover-border-color": y,
			"--progress-value": `${$}%`,
			"--progress-duration": `${w}ms`,
			"--progress-easing": T,
			"--progress-percentage-size": `${S}px`,
			"--progress-percentage-opacity": C,
			"--progress-shine-width": `${O}%`,
			"--progress-shine-opacity": k,
			"--progress-shine-speed": `${A}ms`,
			"--progress-glow-opacity": M,
			"--progress-glow-blur": `${N}px`,
			"--progress-complete-color": z,
			"--progress-complete-background": B,
			"--progress-complete-scale": L,
			"--progress-complete-duration": `${R}ms`,
			"--progress-hover-overlay-opacity": H,
			"--progress-hover-lift": `${U}px`,
			"--progress-hover-glow-opacity": W,
			"--progress-hover-glow-size": `${G}px`,
			"--progress-font-size": `${K}px`,
			"--progress-font-weight": ee,
			"--progress-letter-spacing": q,
			"--progress-active-scale": J
		},
		...Z,
		children: [
			/* @__PURE__ */ t("span", {
				className: "progress-fill",
				"aria-hidden": "true"
			}),
			j && /* @__PURE__ */ t("span", {
				className: "progress-fill-glow",
				"aria-hidden": "true"
			}),
			D && /* @__PURE__ */ t("span", {
				className: "progress-shine",
				"aria-hidden": "true"
			}),
			V && /* @__PURE__ */ t("span", {
				className: "progress-hover-overlay",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ t("span", {
				className: "progress-content",
				children: re ? /* @__PURE__ */ n("span", {
					className: "progress-complete-content",
					children: [I && /* @__PURE__ */ t("span", {
						className: "progress-complete-icon",
						children: F
					}), /* @__PURE__ */ t("span", { children: x || P })]
				}) : /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", { children: i }), b && /* @__PURE__ */ n("span", {
					className: "progress-percentage",
					children: [Math.round($), "%"]
				})] })
			})
		]
	});
}, G = [
	"walk",
	"sniff",
	"sit",
	"look",
	"wag",
	"idle"
];
function K() {
	return G[Math.floor(Math.random() * G.length)];
}
function ee(e, t) {
	return e + Math.random() * (t - e);
}
function q({ children: i = "Send Message", onClick: s, disabled: c = !1, className: l = "", width: u = 270, height: d = 80, color1: f = "#F2B36F", color2: p = "#E38A4F", color3: m = "#C9683D", radius: h = 24, shadow: g = "0 18px 40px rgba(0, 0, 0, 0.28)", hoverShadow: _ = "0 23px 50px rgba(0, 0, 0, 0.35)", textColor: v = "#ffffff", fontSize: y = 16, fontWeight: b = 800, letterSpacing: x = "-0.01em", textShadow: S = "0 2px 8px rgba(74, 35, 17, 0.2)", puppyPosition: C = 12, puppyScale: w = 1, puppySpeed: T = .7, puppyMinPosition: E = 5, puppyMaxPosition: D = 43, puppyWidth: O = 55, puppyHeight: k = 40, activityMinDuration: A = 1200, activityMaxDuration: j = 3400, walkInterval: M = 45, jumpDuration: N = 1650, jumpHeight: P = -31, puppyBodyColor: F = "#C87945", puppyHeadColor: I = "#D98B50", puppyBellyColor: L = "#E7AA75", puppyEarColor: R = "#874C2B", puppyLegColor: z = "#A85F35", puppyFrontLegColor: B = "#C87945", puppyTailColor: V = "#8B4F2B", puppyMuzzleColor: H = "#F0BD88", puppyEyeColor: U = "#17110D", puppyNoseColor: W = "#241710", puppySmileColor: G = "#402317", puppyTongueColor: q = "#EF7D88", lightOpacity: J = .14, lightBlur: Y = 25, showLights: X = !0, cloudColor: te = "rgba(255, 255, 255, 0.15)", cloudOpacity: ne = 1, showClouds: Z = !0, grassColor: Q = "rgba(80, 43, 22, 0.28)", showGrass: re = !0, showCelebration: $ = !0, celebrationColor: ie = "#ffffff", celebrationSize: ae = 13, showPawprints: oe = !0, pawColor: se = "rgba(80, 43, 22, 0.35)", pawSize: ce = 10, showShadow: le = !0, shadowOpacity: ue = .2, hoverLift: de = -3, activeScale: fe = .975, ...pe }) {
	let [me, he] = o("walk"), [ge, _e] = o(C), [ve, ye] = o(1), [be, xe] = o(!1), Se = a(null), Ce = a(null), we = a(null);
	r(() => {
		if (be) return;
		let e = () => {
			let t = K();
			t === "walk" && ye((e) => Math.random() > .5 ? e * -1 : e), he(t), Se.current = setTimeout(e, ee(A, j));
		};
		return Se.current = setTimeout(e, ee(A, j)), () => {
			clearTimeout(Se.current);
		};
	}, [
		be,
		A,
		j
	]), r(() => {
		if (be || me !== "walk") {
			clearInterval(Ce.current);
			return;
		}
		return Ce.current = setInterval(() => {
			_e((e) => {
				let t = e + T * ve;
				return t > D && (ye(-1), t = D), t < E && (ye(1), t = E), t;
			});
		}, M), () => {
			clearInterval(Ce.current);
		};
	}, [
		me,
		ve,
		be,
		T,
		E,
		D,
		M
	]), r(() => () => {
		clearTimeout(Se.current), clearInterval(Ce.current), clearTimeout(we.current);
	}, []);
	let Te = () => {
		c || be || (clearTimeout(Se.current), clearInterval(Ce.current), xe(!0), s?.(), we.current = setTimeout(() => {
			xe(!1), he(K());
		}, N));
	}, Ee = {
		width: `${u}px`,
		height: `${d}px`,
		"--color-1": f,
		"--color-2": p,
		"--color-3": m,
		"--button-width": `${u}px`,
		"--button-height": `${d}px`,
		"--button-radius": `${h}px`,
		"--puppy-position": `${ge}%`,
		"--puppy-direction": ve,
		"--puppy-scale": w,
		"--puppy-width": `${O}px`,
		"--puppy-height": `${k}px`,
		"--puppy-body-color": F,
		"--puppy-head-color": I,
		"--puppy-belly-color": L,
		"--puppy-ear-color": R,
		"--puppy-leg-color": z,
		"--puppy-front-leg-color": B,
		"--puppy-tail-color": V,
		"--puppy-muzzle-color": H,
		"--puppy-eye-color": U,
		"--puppy-nose-color": W,
		"--puppy-smile-color": G,
		"--puppy-tongue-color": q,
		"--puppy-light-opacity": J,
		"--puppy-light-blur": `${Y}px`,
		"--cloud-color": te,
		"--cloud-opacity": ne,
		"--grass-color": Q,
		"--celebration-color": ie,
		"--celebration-size": `${ae}px`,
		"--paw-color": se,
		"--paw-size": `${ce}px`,
		"--puppy-shadow-opacity": ue,
		"--button-shadow": g,
		"--button-hover-shadow": _,
		"--button-text-color": v,
		"--button-font-size": `${y}px`,
		"--button-font-weight": b,
		"--button-letter-spacing": x,
		"--button-text-shadow": S,
		"--hover-lift": `${de}px`,
		"--active-scale": fe,
		"--jump-height": `${P}px`
	};
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: `puppy-button ${be ? "puppy-is-jumping" : ""} ${c ? "puppy-disabled" : ""} ${l}`,
		style: Ee,
		onClick: Te,
		disabled: c,
		...pe,
		children: [
			/* @__PURE__ */ t("span", { className: "puppy-background" }),
			X && /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", { className: "puppy-light puppy-light-one" }), /* @__PURE__ */ t("span", { className: "puppy-light puppy-light-two" })] }),
			Z && /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("span", { className: "tiny-cloud cloud-one" }), /* @__PURE__ */ t("span", { className: "tiny-cloud cloud-two" })] }),
			re && /* @__PURE__ */ n(e, { children: [
				/* @__PURE__ */ t("span", { className: "tiny-grass grass-one" }),
				/* @__PURE__ */ t("span", { className: "tiny-grass grass-two" }),
				/* @__PURE__ */ t("span", { className: "tiny-grass grass-three" }),
				/* @__PURE__ */ t("span", { className: "tiny-grass grass-four" })
			] }),
			/* @__PURE__ */ t("span", {
				className: `tiny-puppy puppy-${me}`,
				style: {
					"--puppy-position": `${ge}%`,
					"--puppy-direction": ve
				},
				children: /* @__PURE__ */ n("svg", {
					viewBox: "0 0 90 65",
					className: "tiny-puppy-svg",
					"aria-hidden": "true",
					children: [
						le && /* @__PURE__ */ t("ellipse", {
							className: "tiny-puppy-shadow",
							cx: "43",
							cy: "58",
							rx: "22",
							ry: "3.5"
						}),
						/* @__PURE__ */ t("g", {
							className: "tiny-puppy-tail",
							children: /* @__PURE__ */ t("path", {
								d: "M69 35 C80 26 86 32 79 40",
								fill: "none",
								stroke: "var(--puppy-tail-color)",
								strokeWidth: "5",
								strokeLinecap: "round"
							})
						}),
						/* @__PURE__ */ t("ellipse", {
							cx: "46",
							cy: "39",
							rx: "21",
							ry: "14",
							fill: "var(--puppy-body-color)"
						}),
						/* @__PURE__ */ t("ellipse", {
							cx: "43",
							cy: "42",
							rx: "12",
							ry: "9",
							fill: "var(--puppy-belly-color)"
						}),
						/* @__PURE__ */ n("g", {
							className: "tiny-back-legs",
							children: [/* @__PURE__ */ t("path", {
								d: "M56 47 L59 57",
								stroke: "var(--puppy-leg-color)",
								strokeWidth: "6",
								strokeLinecap: "round"
							}), /* @__PURE__ */ t("path", {
								d: "M63 45 L66 56",
								stroke: "var(--puppy-leg-color)",
								strokeWidth: "6",
								strokeLinecap: "round"
							})]
						}),
						/* @__PURE__ */ n("g", {
							className: "tiny-front-legs",
							children: [/* @__PURE__ */ t("path", {
								d: "M32 46 L30 57",
								stroke: "var(--puppy-front-leg-color)",
								strokeWidth: "6",
								strokeLinecap: "round"
							}), /* @__PURE__ */ t("path", {
								d: "M38 47 L37 57",
								stroke: "var(--puppy-front-leg-color)",
								strokeWidth: "6",
								strokeLinecap: "round"
							})]
						}),
						/* @__PURE__ */ n("g", {
							className: "tiny-puppy-head",
							children: [
								/* @__PURE__ */ t("path", {
									className: "tiny-ear-left",
									d: "M20 22 C12 11 14 7 21 11 C27 14 29 20 27 25",
									fill: "var(--puppy-ear-color)"
								}),
								/* @__PURE__ */ t("path", {
									className: "tiny-ear-right",
									d: "M40 19 C46 8 52 10 49 19 C47 25 43 27 39 25",
									fill: "var(--puppy-ear-color)"
								}),
								/* @__PURE__ */ t("ellipse", {
									cx: "31",
									cy: "27",
									rx: "18",
									ry: "16",
									fill: "var(--puppy-head-color)"
								}),
								/* @__PURE__ */ t("ellipse", {
									cx: "32",
									cy: "31",
									rx: "10",
									ry: "8",
									fill: "var(--puppy-muzzle-color)"
								}),
								/* @__PURE__ */ t("circle", {
									cx: "25",
									cy: "25",
									r: "2.2",
									fill: "var(--puppy-eye-color)"
								}),
								/* @__PURE__ */ t("circle", {
									cx: "38",
									cy: "25",
									r: "2.2",
									fill: "var(--puppy-eye-color)"
								}),
								/* @__PURE__ */ t("circle", {
									cx: "25.7",
									cy: "24.3",
									r: ".7",
									fill: "white"
								}),
								/* @__PURE__ */ t("circle", {
									cx: "38.7",
									cy: "24.3",
									r: ".7",
									fill: "white"
								}),
								/* @__PURE__ */ t("ellipse", {
									cx: "32",
									cy: "30",
									rx: "3",
									ry: "2",
									fill: "var(--puppy-nose-color)"
								}),
								/* @__PURE__ */ t("path", {
									d: "M32 32 C29 36 26 34 25 33",
									fill: "none",
									stroke: "var(--puppy-smile-color)",
									strokeWidth: "1.4",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ t("path", {
									d: "M32 32 C35 36 38 34 39 33",
									fill: "none",
									stroke: "var(--puppy-smile-color)",
									strokeWidth: "1.4",
									strokeLinecap: "round"
								}),
								/* @__PURE__ */ t("path", {
									className: "tiny-tongue",
									d: "M32 35 C30 39 34 40 35 36",
									fill: "var(--puppy-tongue-color)"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ t("span", {
				className: "puppy-button-label",
				children: i
			}),
			$ && /* @__PURE__ */ n("span", {
				className: "puppy-celebration",
				children: [
					/* @__PURE__ */ t("i", { children: "✦" }),
					/* @__PURE__ */ t("i", { children: "♥" }),
					/* @__PURE__ */ t("i", { children: "✦" }),
					/* @__PURE__ */ t("i", { children: "♥" }),
					/* @__PURE__ */ t("i", { children: "✦" })
				]
			}),
			oe && /* @__PURE__ */ n("span", {
				className: "puppy-pawprints",
				children: [
					/* @__PURE__ */ t("i", { children: "•" }),
					/* @__PURE__ */ t("i", { children: "•" }),
					/* @__PURE__ */ t("i", { children: "•" })
				]
			})
		]
	});
}
//#endregion
//#region src/components/RainbowButton/RainbowButton.jsx
var J = ({ children: e = "Rainbow Button", onClick: r, disabled: i = !1, className: a = "", width: o = 190, height: s = 52, textColor: c = "#ffffff", backgroundColor: l = "#080b16", radius: u = 12, speed: d = 4, glow: f = 1, rainbowColors: p = [
	"#ff0000",
	"#ff7a00",
	"#ffff00",
	"#00ff00",
	"#00ffff",
	"#0080ff",
	"#8b00ff",
	"#ff00ff",
	"#ff0000"
], borderOpacity: m = .95, innerOpacity: h = .3, innerHoverOpacity: g = .6, glowBlur: _ = 12, glowHoverBlur: v = 16, glowOpacity: y = .35, glowHoverOpacity: b = .65, showShine: x = !0, shineColor: S = "#ffffff", shineOpacity: C = .3, shineWidth: w = 25, shineAngle: T = 12, shineBlur: E = 6, shineSpeed: D = 700, shineEndPosition: O = 130, fontSize: k = 16, fontWeight: A = 600, letterSpacing: j = "normal", hoverLift: M = 4, hoverScale: N = 1.03, activeScale: P = .95, contentGlow: F = "0 0 8px rgba(255,255,255,0.35)", ...I }) => {
	let L = `conic-gradient(
    from 0deg,
    ${p.join(", ")}
  )`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: r,
		disabled: i,
		className: `rainbow-button ${a}`,
		style: {
			width: `${o}px`,
			height: `${s}px`,
			"--rainbow-radius": `${u}px`,
			"--rainbow-speed": `${d}s`,
			"--rainbow-glow": f,
			"--rainbow-text-color": c,
			"--rainbow-background": l,
			"--rainbow-gradient": L,
			"--rainbow-border-opacity": m,
			"--rainbow-inner-opacity": h,
			"--rainbow-inner-hover-opacity": g,
			"--rainbow-glow-blur": `${_}px`,
			"--rainbow-glow-hover-blur": `${v}px`,
			"--rainbow-glow-opacity": y,
			"--rainbow-glow-hover-opacity": b,
			"--rainbow-shine-color": S,
			"--rainbow-shine-opacity": C,
			"--rainbow-shine-width": `${w}%`,
			"--rainbow-shine-angle": `${T}deg`,
			"--rainbow-shine-blur": `${E}px`,
			"--rainbow-shine-speed": `${D}ms`,
			"--rainbow-shine-end": `${O}%`,
			"--rainbow-font-size": `${k}px`,
			"--rainbow-font-weight": A,
			"--rainbow-letter-spacing": j,
			"--rainbow-hover-lift": `${M}px`,
			"--rainbow-hover-scale": N,
			"--rainbow-active-scale": P,
			"--rainbow-content-glow": F
		},
		...I,
		children: [
			/* @__PURE__ */ t("span", { className: "rainbow-glow" }),
			/* @__PURE__ */ t("span", { className: "rainbow-border" }),
			/* @__PURE__ */ t("span", { className: "rainbow-surface" }),
			/* @__PURE__ */ t("span", { className: "rainbow-inner" }),
			x && /* @__PURE__ */ t("span", { className: "rainbow-shine" }),
			/* @__PURE__ */ t("span", {
				className: "rainbow-content",
				children: e
			})
		]
	});
}, Y = ({ children: e = "Ripple Button", width: r = 180, height: i = 52, color: a = "#6366f1", textColor: s = "#ffffff", radius: c = 12, rippleColor: l = "rgba(255,255,255,0.45)", rippleDuration: u = 600, rippleMultiplier: d = 2, showHoverGlow: f = !0, hoverGlowColor: p = "#ffffff", hoverGlowOpacity: m = .1, hoverLift: h = 4, shadowColor: g = a, shadowOpacity: _ = .33, shadowY: v = 8, shadowBlur: y = 30, fontSize: b = 16, fontWeight: x = 600, letterSpacing: S = "normal", activeScale: C = .95, transitionDuration: w = 300, onClick: T, disabled: E = !1, className: D = "", ...O }) => {
	let [k, A] = o([]), j = (e) => {
		if (E) return;
		let t = e.currentTarget.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = Math.max(t.width, t.height) * d, a = {
			id: `${Date.now()}-${Math.random()}`,
			x: n,
			y: r,
			size: i
		};
		A((e) => [...e, a]), setTimeout(() => {
			A((e) => e.filter((e) => e.id !== a.id));
		}, u), T?.(e);
	}, M = `0 ${v}px ${y}px ${g}${Math.round(_ * 255).toString(16).padStart(2, "0")}`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: j,
		disabled: E,
		className: `ripple-button ${D}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			"--ripple-radius": `${c}px`,
			"--ripple-color": l,
			"--ripple-duration": `${u}ms`,
			"--ripple-background": a,
			"--ripple-text-color": s,
			"--ripple-hover-color": p,
			"--ripple-hover-opacity": m,
			"--ripple-shadow": M,
			"--ripple-font-size": `${b}px`,
			"--ripple-font-weight": x,
			"--ripple-letter-spacing": S,
			"--ripple-hover-lift": `${h}px`,
			"--ripple-active-scale": C,
			"--ripple-transition": `${w}ms`
		},
		...O,
		children: [
			k.map((e) => /* @__PURE__ */ t("span", {
				className: "ripple-effect",
				style: {
					left: `${e.x}px`,
					top: `${e.y}px`,
					width: `${e.size}px`,
					height: `${e.size}px`
				}
			}, e.id)),
			f && /* @__PURE__ */ t("span", { className: "ripple-hover-glow" }),
			/* @__PURE__ */ t("span", {
				className: "ripple-content",
				children: e
			})
		]
	});
}, X = ({ children: e = "Ripple Wave", width: r = 210, height: i = 56, color: a = "#6366f1", textColor: s = "#ffffff", backgroundColor: c = "#090b18", radius: l = 14, waveCount: u = 3, waveDuration: d = 900, waveDelay: f = 130, waveStartSize: p = 20, waveBorderWidth: m = 2, secondaryWaveBorderWidth: h = 1, secondaryWaveOpacity: g = .6, waveGlowSize: _ = 10, waveOuterGlowSize: v = 30, waveInnerGlowSize: y = 10, showAmbientGlow: b = !0, ambientGlowOpacity: x = .4, ambientGlowBlur: S = 20, ambientGlowDuration: C = 500, showGrid: w = !0, gridOpacity: T = .08, gridSize: E = 14, gridLineOpacity: D = .25, showCenterFlash: O = !0, flashSize: k = 12, flashPingDuration: A = 1e3, flashGlowSize: j = 20, showBorder: M = !0, borderWidth: N = 1, borderColor: P = "rgba(255,255,255,0.10)", hoverBorderColor: F = "rgba(255,255,255,0.20)", fontSize: I = 16, fontWeight: L = 600, letterSpacing: R = "normal", hoverLift: z = 4, activeScale: B = .97, transitionDuration: V = 300, onClick: H, disabled: U = !1, className: W = "", ...G }) => {
	let [K, ee] = o([]), q = (e) => {
		if (U) return;
		let t = e.currentTarget.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = `${Date.now()}-${Math.random()}`, a = {
			id: i,
			x: n,
			y: r
		};
		ee((e) => [...e, a]), setTimeout(() => {
			ee((e) => e.filter((e) => e.id !== i));
		}, d + f * u + 100), H?.(e);
	}, J = `
    0 0 ${_}px ${a},
    0 0 ${v}px ${a},
    inset 0 0 ${y}px ${a}
  `;
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: U,
		onClick: q,
		className: `ripple-wave-button ${W}`,
		style: {
			width: `${r}px`,
			height: `${i}px`,
			"--ripple-color": a,
			"--ripple-text-color": s,
			"--ripple-background": c,
			"--ripple-radius": `${l}px`,
			"--wave-duration": `${d}ms`,
			"--wave-delay": `${f}ms`,
			"--wave-start-size": `${p}px`,
			"--wave-border-width": `${m}px`,
			"--secondary-wave-border-width": `${h}px`,
			"--secondary-wave-opacity": g,
			"--wave-shadow": J,
			"--ambient-opacity": x,
			"--ambient-blur": `${S}px`,
			"--ambient-duration": `${C}ms`,
			"--grid-opacity": T,
			"--grid-size": `${E}px`,
			"--grid-line-opacity": D,
			"--flash-size": `${k}px`,
			"--flash-duration": `${A}ms`,
			"--flash-glow": `${j}px`,
			"--border-width": `${N}px`,
			"--border-color": P,
			"--hover-border-color": F,
			"--font-size": `${I}px`,
			"--font-weight": L,
			"--letter-spacing": R,
			"--hover-lift": `${z}px`,
			"--active-scale": B,
			"--transition-duration": `${V}ms`
		},
		...G,
		children: [
			b && /* @__PURE__ */ t("span", {
				className: "ripple-wave-ambient",
				style: { opacity: x }
			}),
			w && /* @__PURE__ */ t("span", { className: "ripple-grid" }),
			K.map((e) => /* @__PURE__ */ n("div", {
				className: "ripple-wave-group",
				children: [
					/* @__PURE__ */ t("span", {
						className: "ripple-wave ripple-wave-primary",
						style: {
							left: `${e.x}px`,
							top: `${e.y}px`
						}
					}),
					Array.from({ length: Math.max(0, u - 1) }).map((n, r) => /* @__PURE__ */ t("span", {
						className: "ripple-wave ripple-wave-secondary",
						style: {
							left: `${e.x}px`,
							top: `${e.y}px`,
							animationDelay: `${(r + 1) * f}ms`
						}
					}, `${e.id}-${r}`)),
					O && /* @__PURE__ */ t("span", {
						className: "ripple-wave-flash",
						style: {
							left: `${e.x}px`,
							top: `${e.y}px`
						}
					})
				]
			}, e.id)),
			M && /* @__PURE__ */ t("span", { className: "ripple-wave-border" }),
			/* @__PURE__ */ t("span", {
				className: "ripple-wave-content",
				children: e
			})
		]
	});
}, te = ({ children: e = "Shimmer Button", width: r = 180, height: i = 52, color: a = "#6366f1", secondaryColor: o = "#8b5cf6", textColor: s = "#ffffff", radius: c = 12, shimmerColor: l = "#ffffff", shimmerOpacity: u = .5, shimmerWidth: d = 55, shimmerAngle: f = -20, shimmerSpeed: p = 700, showExtraShine: m = !0, extraShineOpacity: h = .1, extraShineSpeed: g = 300, glowOpacity: _ = .33, glowBlur: v = 25, hoverGlowOpacity: y = .5, hoverGlowBlur: b = 35, borderWidth: x = 1, borderColor: S = "rgba(255,255,255,0.18)", hoverBorderColor: C = "rgba(255,255,255,0.4)", showGlass: w = !0, glassOpacity: T = .08, glassBlur: E = 8, fontSize: D = 16, fontWeight: O = 600, letterSpacing: k = "normal", hoverLift: A = 4, activeScale: j = .95, transitionDuration: M = 300, onClick: N, disabled: P = !1, className: F = "", ...I }) => /* @__PURE__ */ n("button", {
	type: "button",
	onClick: N,
	disabled: P,
	className: `shimmer-button ${F}`,
	style: {
		width: `${r}px`,
		height: `${i}px`,
		"--shimmer-radius": `${c}px`,
		"--shimmer-color": a,
		"--shimmer-secondary": o,
		"--shimmer-text": s,
		"--shimmer-color-gradient": `
          linear-gradient(
            135deg,
            ${a},
            ${o}
          )
        `,
		"--shimmer-light": l,
		"--shimmer-opacity": u,
		"--shimmer-width": `${d}%`,
		"--shimmer-angle": `${f}deg`,
		"--shimmer-speed": `${p}ms`,
		"--extra-opacity": h,
		"--extra-speed": `${g}ms`,
		"--shimmer-glow-opacity": _,
		"--shimmer-glow-blur": `${v}px`,
		"--shimmer-hover-glow-opacity": y,
		"--shimmer-hover-glow-blur": `${b}px`,
		"--shimmer-border-width": `${x}px`,
		"--shimmer-border-color": S,
		"--shimmer-hover-border": C,
		"--shimmer-glass-opacity": T,
		"--shimmer-glass-blur": `${E}px`,
		"--shimmer-font-size": `${D}px`,
		"--shimmer-font-weight": O,
		"--shimmer-letter-spacing": k,
		"--shimmer-hover-lift": `${A}px`,
		"--shimmer-active-scale": j,
		"--shimmer-transition": `${M}ms`
	},
	...I,
	children: [
		/* @__PURE__ */ t("span", { className: "shimmer-glow" }),
		/* @__PURE__ */ t("span", { className: "shimmer-surface" }),
		w && /* @__PURE__ */ t("span", { className: "shimmer-glass" }),
		/* @__PURE__ */ t("span", { className: "shimmer-streak" }),
		m && /* @__PURE__ */ t("span", { className: "shimmer-extra" }),
		/* @__PURE__ */ t("span", { className: "shimmer-border" }),
		/* @__PURE__ */ t("span", {
			className: "shimmer-content",
			children: e
		})
	]
}), ne = ({ children: e = "Save", options: i = [
	"Save as Draft",
	"Save & Publish",
	"Save as Template"
], width: s = 200, height: c = 52, color: l = "#6366f1", textColor: u = "#ffffff", dividerColor: d, radius: f = 10, hoverBrightness: p = 1.1, activeScale: m = .98, arrow: h = "▼", arrowSize: g = 18, arrowOpenRotation: _ = 180, dropdownGap: v = 8, dropdownBackground: y = "rgba(11, 16, 32, 0.95)", dropdownBorderColor: b = "rgba(255, 255, 255, 0.1)", dropdownRadius: x = 12, dropdownPadding: S = 6, dropdownBlur: C = 20, dropdownShadow: w = "0 25px 50px -12px rgba(0, 0, 0, 0.45)", optionTextColor: T = "#d1d5db", optionHoverBackground: E = "rgba(255, 255, 255, 0.1)", optionHoverTextColor: D = "#ffffff", optionFontSize: O = 14, optionPaddingX: k = 16, optionPaddingY: A = 12, optionRadius: j = 8, showHoverGlow: M = !0, hoverGlowOpacity: N = .1, animationDuration: P = 300, dropdownAnimationDuration: F = 200, onClick: I, onOptionClick: L, disabled: R = !1, className: z = "", ...B }) => {
	let [V, H] = o(!1), U = a(null), W = d || l;
	r(() => {
		let e = (e) => {
			U.current && !U.current.contains(e.target) && H(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []);
	let G = (e) => {
		H(!1), L && L(e);
	}, K = () => {
		R || H((e) => !e);
	};
	return /* @__PURE__ */ n("div", {
		ref: U,
		className: `split-button-wrapper ${z}`,
		style: {
			"--split-width": `${s}px`,
			"--split-height": `${c}px`,
			"--split-color": l,
			"--split-text-color": u,
			"--split-divider-color": W,
			"--split-radius": `${f}px`,
			"--split-hover-brightness": p,
			"--split-active-scale": m,
			"--split-animation-duration": `${P}ms`,
			"--split-dropdown-gap": `${v}px`,
			"--split-dropdown-background": y,
			"--split-dropdown-border": b,
			"--split-dropdown-radius": `${x}px`,
			"--split-dropdown-padding": `${S}px`,
			"--split-dropdown-blur": `${C}px`,
			"--split-dropdown-shadow": w,
			"--split-option-color": T,
			"--split-option-hover-background": E,
			"--split-option-hover-color": D,
			"--split-option-font-size": `${O}px`,
			"--split-option-padding-x": `${k}px`,
			"--split-option-padding-y": `${A}px`,
			"--split-option-radius": `${j}px`,
			"--split-hover-glow-opacity": N,
			"--split-dropdown-animation-duration": `${F}ms`,
			"--split-arrow-size": `${g}px`,
			"--split-arrow-rotation": `${_}deg`
		},
		children: [
			/* @__PURE__ */ n("button", {
				type: "button",
				onClick: I,
				disabled: R,
				className: "split-button-main",
				...B,
				children: [M && /* @__PURE__ */ t("span", { className: "split-button-hover-glow" }), /* @__PURE__ */ t("span", {
					className: "split-button-main-content",
					children: e
				})]
			}),
			/* @__PURE__ */ t("button", {
				type: "button",
				onClick: K,
				disabled: R,
				"aria-label": "Open options",
				"aria-expanded": V,
				className: "split-button-trigger",
				children: /* @__PURE__ */ t("span", {
					className: `split-button-arrow ${V ? "split-button-arrow-open" : ""}`,
					children: h
				})
			}),
			/* @__PURE__ */ t("div", {
				className: `split-button-dropdown ${V ? "split-button-dropdown-open" : "split-button-dropdown-closed"}`,
				children: i.map((e, n) => /* @__PURE__ */ t("button", {
					type: "button",
					onClick: () => G(e),
					className: "split-button-option",
					children: e
				}, `${e}-${n}`))
			})
		]
	});
}, Z = ({ children: e = "Spotlight Button", width: r = 180, height: i = 52, color: a = "#8b5cf6", textColor: s = "#ffffff", backgroundColor: c = "#0b1020", radius: l = 12, borderWidth: u = 1, borderColor: d, spotlightSize: f = 120, spotlightOpacity: p = .55, spotlightBlur: m = 32, centerSize: h = .45, centerColor: g = "#ffffff", centerOpacity: _ = .12, centerBlur: v = 24, showBorderGlow: y = !0, borderGlowSize: b = 20, borderGlowOpacity: x = .27, shadowX: S = 0, shadowY: C = 8, shadowBlur: w = 30, shadowOpacity: T = .13, hoverLift: E = 4, hoverBrightness: D = 1, hoverBorderOpacity: O = .5, activeScale: k = .95, activeTranslateY: A = 0, fontSize: j = 16, fontWeight: M = 600, letterSpacing: N = "normal", transitionDuration: P = 300, onClick: F, disabled: I = !1, className: L = "", ...R }) => {
	let [z, B] = o({
		x: 50,
		y: 50
	}), [V, H] = o(!1), U = d || `${a}66`;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: F,
		onMouseMove: (e) => {
			if (I) return;
			let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / t.width * 100, r = (e.clientY - t.top) / t.height * 100;
			B({
				x: n,
				y: r
			});
		},
		onMouseEnter: () => {
			I || H(!0);
		},
		onMouseLeave: () => {
			H(!1), B({
				x: 50,
				y: 50
			});
		},
		disabled: I,
		className: `spotlight-button ${L}`,
		style: {
			"--spotlight-width": `${r}px`,
			"--spotlight-height": `${i}px`,
			"--spotlight-color": a,
			"--spotlight-text-color": s,
			"--spotlight-background": c,
			"--spotlight-radius": `${l}px`,
			"--spotlight-border-width": `${u}px`,
			"--spotlight-border-color": U,
			"--spotlight-size": `${f}px`,
			"--spotlight-opacity": p,
			"--spotlight-blur": `${m}px`,
			"--spotlight-center-size": `${f * h}px`,
			"--spotlight-center-color": g,
			"--spotlight-center-opacity": _,
			"--spotlight-center-blur": `${v}px`,
			"--spotlight-border-glow-size": `${b}px`,
			"--spotlight-border-glow-opacity": x,
			"--spotlight-shadow-x": `${S}px`,
			"--spotlight-shadow-y": `${C}px`,
			"--spotlight-shadow-blur": `${w}px`,
			"--spotlight-shadow-opacity": T,
			"--spotlight-hover-lift": `${E}px`,
			"--spotlight-hover-brightness": D,
			"--spotlight-hover-border-opacity": O,
			"--spotlight-active-scale": k,
			"--spotlight-active-y": `${A}px`,
			"--spotlight-font-size": `${j}px`,
			"--spotlight-font-weight": M,
			"--spotlight-letter-spacing": N,
			"--spotlight-transition": `${P}ms`,
			"--spotlight-x": `${z.x}%`,
			"--spotlight-y": `${z.y}%`
		},
		...R,
		children: [
			/* @__PURE__ */ t("span", { className: `spotlight-light ${V ? "spotlight-light-visible" : ""}` }),
			/* @__PURE__ */ t("span", { className: `spotlight-center ${V ? "spotlight-center-visible" : ""}` }),
			y && /* @__PURE__ */ t("span", { className: `spotlight-border-glow ${V ? "spotlight-border-glow-visible" : ""}` }),
			/* @__PURE__ */ t("span", {
				className: "spotlight-content",
				children: e
			})
		]
	});
}, Q = ({ children: e = "ENTER SPACE", width: r = 230, height: a = 62, color: s = "#ffffff", accentColor: c = "#60a5fa", textColor: l = "#ffffff", backgroundColor: u = "#02040a", radius: d = 16, borderWidth: f = 1, borderColor: p = "rgba(255, 255, 255, 0.10)", hoverBorderColor: m = "rgba(255, 255, 255, 0.25)", starCount: h = 45, speed: g = 1, starMinDistance: _ = 20, starMaxDistance: v = 110, starMinDepth: y = .15, starMaxDepth: b = 1, smallStarSize: x = 1, mediumStarSize: S = 1.5, largeStarMinSize: C = 2.5, largeStarMaxSize: w = 4, starMinOpacity: T = .2, starMaxOpacity: E = 1, minStarDuration: D = 2.5, maxStarDuration: O = 6, maxStarDelay: k = 5, showCenterGlow: A = !0, centerGlowSize: j = 80, centerGlowOpacity: M = .3, centerGlowBlur: N = 48, showVignette: P = !0, vignetteMiddleOpacity: F = .25, vignetteOuterOpacity: I = .7, fontSize: L = 16, fontWeight: R = 600, letterSpacing: z = "0.05em", contentHoverScale: B = 1.05, showIndicator: V = !0, indicatorText: H = "", indicatorFontSize: U = 6, indicatorOpacity: W = .4, indicatorLetterSpacing: G = "0.25em", indicatorBottom: K = 8, indicatorRight: ee = 12, hoverLift: q = 4, hoverGlowOpacity: J = .08, activeScale: Y = .97, transitionDuration: X = 300, onClick: te, disabled: ne = !1, className: Z = "", ...Q }) => {
	let [re, $] = o(!1), ie = Math.max(.05, Number(g) || 1), ae = i(() => {
		let e = Math.max(0, Math.floor(Number(h) || 0));
		return Array.from({ length: e }, (e, t) => {
			let n = Math.random() * Math.PI * 2, r = y + Math.random() * (b - y), i = _ + Math.random() * (v - _), a;
			a = r < .35 ? x : r < .7 ? S : C + Math.random() * (w - C);
			let o = (D + Math.random() * (O - D)) / (.35 + r), s = Math.random() * k, c = T + r * (E - T);
			return {
				id: t,
				x: Math.cos(n) * i,
				y: Math.sin(n) * i,
				depth: r,
				size: a,
				duration: o,
				delay: s,
				opacity: c
			};
		});
	}, [
		h,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		D,
		O,
		k
	]);
	return /* @__PURE__ */ n("button", {
		type: "button",
		disabled: ne,
		onClick: te,
		onMouseEnter: () => $(!0),
		onMouseLeave: () => $(!1),
		className: `starfield-button ${Z}`,
		style: {
			"--star-width": `${r}px`,
			"--star-height": `${a}px`,
			"--star-color": s,
			"--star-accent": c,
			"--star-text-color": l,
			"--star-background": u,
			"--star-radius": `${d}px`,
			"--star-border-width": `${f}px`,
			"--star-border-color": p,
			"--star-hover-border-color": m,
			"--star-speed": re ? ie * .45 : ie,
			"--star-center-glow-size": `${j}px`,
			"--star-center-glow-opacity": M,
			"--star-center-glow-blur": `${N}px`,
			"--star-vignette-middle-opacity": F,
			"--star-vignette-outer-opacity": I,
			"--star-font-size": `${L}px`,
			"--star-font-weight": R,
			"--star-letter-spacing": z,
			"--star-content-hover-scale": B,
			"--star-indicator-font-size": `${U}px`,
			"--star-indicator-opacity": W,
			"--star-indicator-spacing": G,
			"--star-indicator-bottom": `${K}px`,
			"--star-indicator-right": `${ee}px`,
			"--star-hover-lift": `${q}px`,
			"--star-hover-glow-opacity": J,
			"--star-active-scale": Y,
			"--star-transition": `${X}ms`
		},
		...Q,
		children: [
			/* @__PURE__ */ t("span", { className: "starfield-space" }),
			/* @__PURE__ */ t("span", {
				className: "starfield-stars",
				children: ae.map((e) => /* @__PURE__ */ t("span", {
					className: "starfield-star",
					style: {
						"--star-x": `${e.x}px`,
						"--star-y": `${e.y}px`,
						"--star-depth": e.depth,
						"--star-size": `${e.size}px`,
						"--star-duration": `${e.duration}s`,
						"--star-delay": `${e.delay}s`,
						"--star-opacity": e.opacity
					}
				}, e.id))
			}),
			A && /* @__PURE__ */ t("span", { className: "starfield-center-glow" }),
			P && /* @__PURE__ */ t("span", { className: "starfield-vignette" }),
			/* @__PURE__ */ t("span", { className: "starfield-border" }),
			/* @__PURE__ */ t("span", {
				className: "starfield-content",
				children: e
			}),
			V && /* @__PURE__ */ t("span", {
				className: "starfield-indicator",
				children: H
			})
		]
	});
}, re = ({ children: e = "Swipe to confirm", successText: r = "Done!", arrow: i = "→", successIcon: a = "✓", handleIcon: s = "→", width: c = 260, height: l = 58, color: u = "#18181b", accentColor: d = "#a78bfa", successColor: f = "#22c55e", textColor: p = "#ffffff", successTextColor: m = "#ffffff", handleBackground: h = "#ffffff", handleColor: g = "#18181b", radius: _ = 14, borderWidth: v = 1, borderColor: y = "rgba(255, 255, 255, 0.08)", handleSize: b = 44, handleOffset: x = 4, handleRadius: S = 10, handleFontSize: C = 20, handleHoverScale: w = 1.04, handleDraggingScale: T = 1.08, progressColor: E = d, completionThreshold: D = .95, progressOpacity: O = 1, fontSize: k = 14, fontWeight: A = 600, letterSpacing: j = "0.02em", contentGap: M = 8, arrowOpacity: N = .55, arrowAnimation: P = !0, arrowAnimationDuration: F = 1200, arrowMoveDistance: I = 5, successFontSize: L = 15, successFontWeight: R = 800, successLetterSpacing: z = "0.03em", successGap: B = 9, successIconSize: V = 28, successIconBackground: H = "rgba(255, 255, 255, 0.2)", completionIconSize: U = 34, completionIconBackground: W = "rgba(255, 255, 255, 0.18)", completionIconFontSize: G = 18, shadowColor: K = "rgba(0, 0, 0, 0.25)", shadowX: ee = 0, shadowY: q = 10, shadowBlur: J = 30, handleShadow: Y = "rgba(0, 0, 0, 0.3)", handleHoverShadow: X = "rgba(0, 0, 0, 0.4)", handleDraggingShadow: te = "rgba(0, 0, 0, 0.45)", successShadowColor: ne = "rgba(34, 197, 94, 0.25)", successShadowY: Z = 12, successShadowBlur: Q = 35, transitionDuration: re = 250, handleTransitionDuration: $ = 120, successAnimationDuration: ie = 300, resetOnRelease: ae = !0, onComplete: oe, onSwipeStart: se, onSwipeCancel: ce, onProgress: le, disabled: ue = !1, className: de = "", ...fe }) => {
	let [pe, me] = o(0), [he, ge] = o(!1), [_e, ve] = o(!1), ye = (e, t) => {
		if (!t || _e || ue) return;
		let n = t.getBoundingClientRect(), r = Math.min(b, Math.max(1, n.width - x * 2)), i = n.width - r - x * 2;
		if (i <= 0) return;
		let a = e - (n.left + x + r / 2);
		a = Math.max(0, Math.min(a, i));
		let o = a / i;
		me(o), le && le(o), o >= D && (me(1), ve(!0), ge(!1), le && le(1), oe && oe());
	}, be = (e) => {
		ue || _e || (e.currentTarget.setPointerCapture(e.pointerId), ge(!0), se && se());
	}, xe = (e) => {
		if (!he || _e || ue) return;
		let t = e.currentTarget.closest(".swipe-action-button");
		ye(e.clientX, t);
	}, Se = () => {
		ge(!1), !_e && ae && (me(0), le && le(0));
	}, Ce = (e) => {
		if (!_e) {
			try {
				e.currentTarget.releasePointerCapture(e.pointerId);
			} catch {}
			pe < D && ce && ce(pe), Se();
		}
	}, we = () => {
		_e || (ce && ce(pe), Se());
	}, Te = x + pe * Math.max(0, c - b - x * 2);
	return /* @__PURE__ */ n("div", {
		className: `swipe-action-button ${_e ? "swipe-action-completed" : ""} ${ue ? "swipe-action-disabled" : ""} ${de}`,
		style: {
			"--swipe-width": `${c}px`,
			"--swipe-height": `${l}px`,
			"--swipe-color": u,
			"--swipe-accent": E,
			"--swipe-success": f,
			"--swipe-text-color": p,
			"--swipe-success-text-color": m,
			"--swipe-radius": `${_}px`,
			"--swipe-border-width": `${v}px`,
			"--swipe-border-color": y,
			"--swipe-handle-size": `${b}px`,
			"--swipe-handle-offset": `${x}px`,
			"--swipe-handle-radius": `${S}px`,
			"--swipe-handle-background": h,
			"--swipe-handle-color": g,
			"--swipe-handle-font-size": `${C}px`,
			"--swipe-handle-hover-scale": w,
			"--swipe-handle-drag-scale": T,
			"--swipe-progress-opacity": O,
			"--swipe-font-size": `${k}px`,
			"--swipe-font-weight": A,
			"--swipe-letter-spacing": j,
			"--swipe-content-gap": `${M}px`,
			"--swipe-arrow-opacity": N,
			"--swipe-arrow-duration": `${F}ms`,
			"--swipe-arrow-distance": `${I}px`,
			"--swipe-success-font-size": `${L}px`,
			"--swipe-success-font-weight": R,
			"--swipe-success-spacing": z,
			"--swipe-success-gap": `${B}px`,
			"--swipe-success-icon-size": `${V}px`,
			"--swipe-success-icon-background": H,
			"--swipe-completion-icon-size": `${U}px`,
			"--swipe-completion-icon-background": W,
			"--swipe-completion-icon-font-size": `${G}px`,
			"--swipe-shadow": `${ee}px ${q}px ${J}px ${K}`,
			"--swipe-handle-shadow-color": Y,
			"--swipe-handle-hover-shadow-color": X,
			"--swipe-handle-dragging-shadow-color": te,
			"--swipe-success-shadow-color": ne,
			"--swipe-success-shadow-y": `${Z}px`,
			"--swipe-success-shadow-blur": `${Q}px`,
			"--swipe-transition": `${re}ms`,
			"--swipe-handle-transition": `${$}ms`,
			"--swipe-success-animation": `${ie}ms`,
			"--swipe-handle-left": `${Te}px`
		},
		...fe,
		children: [
			!_e && /* @__PURE__ */ t("div", {
				className: "swipe-progress",
				style: {
					width: `${pe * 100}%`,
					transition: he ? "none" : "width 200ms ease"
				}
			}),
			!_e && /* @__PURE__ */ n("div", {
				className: "swipe-text",
				children: [P ? /* @__PURE__ */ t("span", {
					className: "swipe-arrow",
					children: i
				}) : /* @__PURE__ */ t("span", {
					className: "swipe-arrow-static",
					children: i
				}), /* @__PURE__ */ t("span", { children: e })]
			}),
			_e && /* @__PURE__ */ n("div", {
				className: "swipe-success-text",
				children: [/* @__PURE__ */ t("span", {
					className: "success-check",
					children: a
				}), /* @__PURE__ */ t("span", { children: r })]
			}),
			!_e && /* @__PURE__ */ t("div", {
				className: `swipe-handle ${he ? "swipe-dragging" : ""}`,
				onPointerDown: be,
				onPointerMove: xe,
				onPointerUp: Ce,
				onPointerCancel: we,
				children: s
			})
		]
	});
}, $ = ({ children: e = "3D Button", width: r = 180, height: i = 52, color: a = "#6366f1", textColor: o = "#ffffff", depthColor: s, radius: c = 12, depth: l = 8, hoverLift: u = 4, fontSize: d = 16, fontWeight: f = 600, letterSpacing: p = "normal", showHighlight: m = !0, highlightHeight: h = 50, highlightOpacity: g = .1, showHoverShine: _ = !0, hoverShineOpacity: v = .1, shadowOpacity: y = .6, transitionDuration: b = 150, shineDuration: x = 200, activeScale: S = 1, onClick: C, disabled: w = !1, className: T = "", ...E }) => {
	let D = s || a;
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: C,
		disabled: w,
		className: `button-adda-3d ${T}`,
		style: {
			"--button-width": `${r}px`,
			"--button-height": `${i}px`,
			"--button-color": a,
			"--button-text-color": o,
			"--button-depth-color": D,
			"--button-radius": `${c}px`,
			"--button-depth": `${l}px`,
			"--button-hover-lift": `${u}px`,
			"--button-font-size": `${d}px`,
			"--button-font-weight": f,
			"--button-letter-spacing": p,
			"--button-highlight-height": `${h}%`,
			"--button-highlight-opacity": g,
			"--button-hover-shine-opacity": v,
			"--button-shadow-opacity": y,
			"--button-transition": `${b}ms`,
			"--button-shine-duration": `${x}ms`,
			"--button-active-scale": S
		},
		...E,
		children: [
			m && /* @__PURE__ */ t("span", { className: "button-adda-3d-highlight" }),
			_ && /* @__PURE__ */ t("span", { className: "button-adda-3d-shine" }),
			/* @__PURE__ */ t("span", {
				className: "button-adda-3d-content",
				children: e
			})
		]
	});
}, ie = ({ children: e = "View Project", width: i = 220, height: s = 64, background: c = "#18181b", textColor: l = "#ffffff", accentColor: u = "#8b5cf6", radius: d = 16, borderWidth: f = 1, borderColor: p = "rgba(255,255,255,0.10)", hoverBorderColor: m = "rgba(139,92,246,0.45)", maxTilt: h = 12, perspective: g = 700, tiltSmoothness: _ = .16, depthX: v = 1, depthY: y = 8, hoverDepthY: b = 12, depthOpacity: x = .4, contentDepth: S = 24, hoverContentScale: C = 1, showArrow: w = !0, arrow: T = "↗", arrowSize: E = 18, arrowMoveX: D = 4, showTopEdge: O = !0, topEdgeLeft: k = 8, topEdgeRight: A = 8, topEdgeOpacity: j = .3, showCornerDetail: M = !0, cornerSize: N = 6, cornerRight: P = 16, cornerTop: F = 12, cornerOpacity: I = .5, showLabel: L = !0, label: R = "", labelFontSize: z = 6, labelOpacity: B = .3, labelLetterSpacing: V = "0.2em", labelBottom: H = 8, labelLeft: U = 16, shadowY: W = 15, shadowBlur: G = 30, shadowOpacity: K = .25, hoverShadowY: ee = 25, hoverShadowBlur: q = 45, hoverShadowOpacity: J = .35, activeScale: Y = .97, transitionDuration: X = 180, depthTransitionDuration: te = 220, onClick: ne, disabled: Z = !1, className: Q = "", ...re }) => {
	let $ = a(null), ie = a(null), ae = a({
		x: 0,
		y: 0
	}), oe = a({
		x: 0,
		y: 0
	}), [se, ce] = o(!1);
	return r(() => {
		let e = () => {
			let t = oe.current, n = ae.current;
			t.x += (n.x - t.x) * _, t.y += (n.y - t.y) * _, $.current && ($.current.style.transform = `
          perspective(${g}px)
          rotateX(${t.x}deg)
          rotateY(${t.y}deg)
        `), ie.current = requestAnimationFrame(e);
		};
		return ie.current = requestAnimationFrame(e), () => {
			ie.current && cancelAnimationFrame(ie.current);
		};
	}, [g, _]), /* @__PURE__ */ n("button", {
		ref: $,
		type: "button",
		disabled: Z,
		onClick: ne,
		onMouseEnter: () => {
			Z || ce(!0);
		},
		onMouseMove: (e) => {
			if (Z || !$.current) return;
			let t = $.current.getBoundingClientRect(), n = e.clientX - t.left, r = e.clientY - t.top, i = n / t.width, a = (.5 - r / t.height) * h * 2, o = (i - .5) * h * 2;
			ae.current = {
				x: a,
				y: o
			};
		},
		onMouseLeave: () => {
			ce(!1), ae.current = {
				x: 0,
				y: 0
			};
		},
		className: `
        tilt-card-button
        ${se ? "tilt-hovered" : ""}
        ${Z ? "tilt-disabled" : ""}
        ${Q}
      `,
		style: {
			width: `${i}px`,
			height: `${s}px`,
			background: c,
			color: l,
			borderRadius: `${d}px`,
			borderWidth: `${f}px`,
			borderColor: p,
			"--tilt-accent": u,
			"--tilt-depth-x": `${v}px`,
			"--tilt-depth-y": `${y}px`,
			"--tilt-hover-depth-y": `${b}px`,
			"--tilt-depth-opacity": x,
			"--tilt-content-depth": `${S}px`,
			"--tilt-content-scale": C,
			"--tilt-arrow-size": `${E}px`,
			"--tilt-arrow-move": `${D}px`,
			"--tilt-top-left": `${k}%`,
			"--tilt-top-right": `${A}%`,
			"--tilt-top-opacity": j,
			"--tilt-corner-size": `${N}px`,
			"--tilt-corner-right": `${P}px`,
			"--tilt-corner-top": `${F}px`,
			"--tilt-corner-opacity": I,
			"--tilt-label-size": `${z}px`,
			"--tilt-label-opacity": B,
			"--tilt-label-spacing": V,
			"--tilt-label-bottom": `${H}px`,
			"--tilt-label-left": `${U}px`,
			"--tilt-shadow-y": `${W}px`,
			"--tilt-shadow-blur": `${G}px`,
			"--tilt-shadow-opacity": K,
			"--tilt-hover-shadow-y": `${ee}px`,
			"--tilt-hover-shadow-blur": `${q}px`,
			"--tilt-hover-shadow-opacity": J,
			"--tilt-active-scale": Y,
			"--tilt-transition": `${X}ms`,
			"--tilt-depth-transition": `${te}ms`,
			"--tilt-hover-border": m
		},
		...re,
		children: [
			/* @__PURE__ */ t("span", {
				className: "tilt-depth",
				style: { backgroundColor: u }
			}),
			/* @__PURE__ */ t("span", { className: "tilt-body" }),
			O && /* @__PURE__ */ t("span", { className: "tilt-top-edge" }),
			M && /* @__PURE__ */ t("span", {
				className: "tilt-corner",
				style: { backgroundColor: u }
			}),
			/* @__PURE__ */ n("span", {
				className: "tilt-content",
				children: [/* @__PURE__ */ t("span", {
					className: "tilt-text",
					children: e
				}), w && /* @__PURE__ */ t("span", {
					className: "tilt-arrow",
					children: T
				})]
			}),
			L && /* @__PURE__ */ t("span", {
				className: "tilt-label",
				children: R
			})
		]
	});
}, ae = ({ checked: e, defaultChecked: r = !1, onChange: i, onText: a = "ON", offText: s = "OFF", width: c = 110, height: l = 52, onColor: u = "#22c55e", offColor: d = "#374151", knobColor: f = "#ffffff", radius: p = 999, knobSize: m, knobOffset: h = 5, knobIndicatorSize: g = 8, knobShadow: _ = "0 5px 12px rgba(0, 0, 0, 0.25)", knobHoverScale: v = 1.03, knobActiveScale: y = .96, fontSize: b = 12, fontWeight: x = 700, letterSpacing: S = "0.08em", textOffset: C = 12, showGlow: w = !0, glowOpacity: T = .27, glowSize: E = 20, onGlowOpacity: D = .35, offGlowOpacity: O = .27, hoverScale: k = 1.03, hoverBrightness: A = 1, activeScale: j = .95, transitionDuration: M = 300, knobTransitionDuration: N = 300, textTransitionDuration: P = 300, disabled: F = !1, className: I = "", ...L }) => {
	let R = m ?? Math.max(10, l - 10), [z, B] = o(r), V = e !== void 0, H = V ? !!e : z, U = () => {
		if (F) return;
		let e = !H;
		V || B(e), i && i(e);
	}, W = c - R - h;
	return /* @__PURE__ */ n("button", {
		type: "button",
		role: "switch",
		"aria-checked": H,
		disabled: F,
		onClick: U,
		className: `
        toggle-button
        ${H ? "toggle-on" : "toggle-off"}
        ${F ? "toggle-disabled" : ""}
        ${I}
      `,
		style: {
			"--toggle-width": `${c}px`,
			"--toggle-height": `${l}px`,
			"--toggle-on-color": u,
			"--toggle-off-color": d,
			"--toggle-knob-color": f,
			"--toggle-radius": `${p}px`,
			"--toggle-knob-size": `${R}px`,
			"--toggle-knob-offset": `${h}px`,
			"--toggle-knob-left": `${W}px`,
			"--toggle-knob-shadow": _,
			"--toggle-knob-hover-scale": v,
			"--toggle-knob-active-scale": y,
			"--toggle-indicator-size": `${g}px`,
			"--toggle-font-size": `${b}px`,
			"--toggle-font-weight": x,
			"--toggle-letter-spacing": S,
			"--toggle-text-offset": `${C}px`,
			"--toggle-glow-opacity": T,
			"--toggle-glow-size": `${E}px`,
			"--toggle-on-glow-opacity": D,
			"--toggle-off-glow-opacity": O,
			"--toggle-hover-scale": k,
			"--toggle-hover-brightness": A,
			"--toggle-active-scale": j,
			"--toggle-transition": `${M}ms`,
			"--toggle-knob-transition": `${N}ms`,
			"--toggle-text-transition": `${P}ms`
		},
		...L,
		children: [
			w && /* @__PURE__ */ t("span", { className: "toggle-glow" }),
			/* @__PURE__ */ t("span", {
				className: "toggle-off-text",
				children: s
			}),
			/* @__PURE__ */ t("span", {
				className: "toggle-on-text",
				children: a
			}),
			/* @__PURE__ */ t("span", {
				className: "toggle-knob",
				children: /* @__PURE__ */ t("span", { className: "toggle-indicator" })
			})
		]
	});
};
//#endregion
export { s as AuroraButton, c as BlackHoleButton, l as CableSendButton, d as ColorBurstButton, f as ControlPanelButton, p as CopyButton, m as CyberButton, _ as DNAButton, h as DialButton, g as DiceButton, v as ElectricButton, y as FireButton, b as FuseGlowButton, x as GamepadButton, S as GhostButton, C as GlassButton, w as GlowButton, T as GradientButton, E as HologramButton, D as IceBreakButton, O as InkButton, k as KeycapButton, A as LiquidButton, j as LiquidGlassButton, M as LoadingButton, N as MagneticButton, P as MagneticGlowButton, F as MagneticTextButton, I as MoodButton, L as MorphButton, R as NeonButton, z as OrbitButton, B as ParticleButton, V as PlasmaButton, H as PortalButton, U as PressHoldButton, W as ProgressButton, q as PuppyButton, J as RainbowButton, Y as RippleButton, X as RippleWaveButton, te as ShimmerButton, ne as SplitButton, Z as SpotlightButton, Q as StarfieldButton, re as SwipeActionButton, $ as ThreeDButton, ie as TiltCardButton, ae as ToggleButton };
