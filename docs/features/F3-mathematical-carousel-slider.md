# F3: Mathematical Carousel Slider Engine

## Overview & Architecture
An infinite-loop slider in `infiniteimagescroller/app.js` computing pixel offsets dynamically based on slide width and active index.

```mermaid
flowchart LR
    NextClick[Next Button Clicked] --> IndexInc[active = (active + 1) % items.length]
    IndexInc --> ComputeOffset[slider.style.left = -items[active].offsetLeft + 'px']
    ComputeOffset --> UpdateDots[Active dot indicator synced]
    ComputeOffset --> ResetTimer[Reset auto-play 3000ms timer]
```

## Say It Out Loud
> "For the carousel slider in `infiniteimagescroller/app.js`, I built a mathematical sliding engine. Instead of hardcoding percentage steps, the script reads `offsetLeft` directly from the DOM elements. Clicking next shifts the slider container to the negative offset of the target slide and smoothly synchronizes the pagination dots while resetting the three-second auto-play timer."
