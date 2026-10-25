# F1: 3D Parallax Product Staging

## Overview & Architecture
An immersive 3D soda can presentation stage in `cans/` leveraging CSS 3D perspective and multi-layer depth coordinates.

```mermaid
flowchart TD
    Scroll[User Scrolls Viewport] --> Layer1[Background Leaves: slow translation]
    Scroll --> Layer2[Floating Tropical Fruits: medium translation]
    Scroll --> Layer3[Hero Soda Can: fast rotation & translation]
    Layer1 & Layer2 & Layer3 --> Compositor[GPU Composite: 60 FPS Parallax]
```

## Say It Out Loud
> "In the `cans/` module, I built a 3D product showcase using pure CSS 3D transforms. The stage is separated into three visual depth planes: ambient background foliage, floating fruits, and the primary soda can. As the user scrolls, each layer translates at a distinct velocity ratio, creating an organic feeling of depth without using any heavy 3D canvas libraries."
