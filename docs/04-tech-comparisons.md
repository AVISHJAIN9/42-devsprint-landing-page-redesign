# Technology Choice Comparisons & Trade-Off Analysis

## Vanilla JS Creative Computing vs GSAP vs Framer Motion

| Metric | Vanilla JS (Chosen in DevSprint) | GSAP (GreenSock) | Framer Motion |
|---|---|---|---|
| **Runtime Overhead** | **0 KB (Pure native browser execution)** | ~60 KB | ~120 KB (Requires React) |
| **Hardware Acceleration** | Direct GPU compositor triggers | Optimized timeline ticker | React-bound render cycle |
| **Dependency Lock-in** | **Zero** | Commercial license for plugins | React framework lock-in |
| **Pedagogical Rigor** | **Maximum** (Direct DOM & math understanding) | Abstracted | Abstracted |
