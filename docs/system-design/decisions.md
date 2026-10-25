# Architectural Decision Records (ADRs): DevSprint

| ADR ID | Decision Title | Chosen Option | Alternatives Considered | Deciding Factors | Trade-Off Accepted | Revisit Trigger |
|---|---|---|---|---|---|---|
| **ADR-01** | Animation Library | Vanilla JS & CSS3 | GSAP, Framer Motion | Zero runtime dependency; master web standards | Manual offset calculations | Complex physics-based spring animations |
| **ADR-02** | Cart State Persistence | LocalStorage | IndexedDB, Cookies | Synchronous simplicity for shopping cart | 5MB storage limit | Storing offline product image blobs |
| **ADR-03** | Slider Transition | CSS `style.left` offset | Transform `translateX` | Direct pixel alignment with `offsetLeft` | Modest paint cost on older engines | Refactoring for mobile swipe gestures |
