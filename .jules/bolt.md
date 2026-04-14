## 2024-05-24 - Throttled Scroll Events with requestAnimationFrame
**Learning:** High-frequency events like scrolling can trigger continuous React renders and layout thrashing. Replacing arrays.reduce/map and synchronous event handler logic with requestAnimationFrame significantly improves performance in scroll-linked UI features, avoiding main thread blocking.
**Action:** Use requestAnimationFrame to throttle read/write operations during continuous events (scroll, resize, pointermove).
