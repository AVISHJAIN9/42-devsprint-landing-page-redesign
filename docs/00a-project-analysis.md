# Full Project Analysis: DevSprint Interactive Motion Lab

## 0.1 What the Project Is

**DevSprint Interactive Motion Lab** is a high-performance creative frontend workshop demonstrating award-winning web interactions, micro-animations, and e-commerce state mechanics. Built using Vanilla JavaScript and modern CSS3, it eliminates the need for bulky UI libraries while delivering silky 60 FPS visual experiences.

---

## 0.2 Master Feature Inventory & Traces

### F1: 3D Soda Can Parallax Experience (`cans/`)
- Multi-layered product showcase with floating ambient fruit assets and perspective shifts as the user scrolls.

### F2: Dynamic JSON E-Commerce Storefront (`shoping/app.js`)
- Asynchronously fetches `products.json`, creates dynamic DOM cards, manages cart drawer toggling, quantity increments/decrements, and serializes state to `localStorage`.

### F3: High-Performance Image Slider Engine (`infiniteimagescroller/app.js`)
- Automated carousel rotation with interval resetting, offset-based sliding math (`-items[active].offsetLeft + 'px'`), and dynamic resize debouncing.

### F4: Masked Ink Transition Animation (`ink animation/`)
- Masked image revelation using SVG and PNG alpha channels timed with CSS keyframe timing functions.

### F5: Interactive Optical Loupe / Image Zoom (`imagezoom effect/`)
- Tracks mouse coordinates over product imagery, transforming background position coordinates to magnify fine details.

### F6: Frame-by-Frame Scroll Sequence (`scroll animation/`)
- Synchronizes scroll offset with image sprite frames for smooth mechanical product reveals.

---

## 0.3 Final Inventory Counts

| Metric | Count | Reference |
|---|---|---|
| **Interactive Micro-Experiences** | 10 | `cans/`, `shoping/`, `infiniteimagescroller/`, `ink animation/`, `imagezoom effect/`, etc. |
| **Total HTML Modules** | 11 | Semantic entry points across directories |
| **Client-Side State Stores** | 1 | `localStorage.getItem('cart')` in `shoping/app.js` |
