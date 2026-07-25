# Fluid Layouts and Typography

## Overview

Fluid design creates smooth scaling experiences by using relative units and mathematical functions instead of fixed breakpoints. This approach reduces the need for media queries and creates more natural-feeling interfaces.

## Fluid Typography

### The clamp() Function

```css
/* clamp(minimum, preferred, maximum) */
.heading {
  /* Never smaller than 1.5rem, never larger than 3rem */
  /* Scales at 5vw between those values */
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### Calculating Fluid Values

The preferred value in `clamp()` typically combines a base size with a viewport-relative portion:

```css
/* Formula: clamp(min, base + scale * vw, max) */

/* For text that scales from 16px (320px viewport) to 24px (1200px viewport): */
/* slope = (24 - 16) / (1200 - 320) = 8 / 880 = 0.00909 */
/* y-intercept = 16 - 0.00909 * 320 = 13.09px = 0.818rem */

.text {
  font-size: clamp(1rem, 0.818rem + 0.909vw, 1.5rem);
}
```

### Complete Type Scale

```css
:root {
  /* Base: 16-18px */
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

  /* Smaller sizes */
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);

  /* Larger sizes */
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.4rem + 2.375vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.5rem + 3.75vw, 3.5rem);
  --text-5xl: clamp(3rem, 1.8rem + 6vw, 5rem);

  /* Line heights scale inversely */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}

/* Apply to elements */
body {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

h1 {
  font-size: var(--text-4xl);
  line-height: var(--leading-tight);
}
h2 {
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
}
h3 {
  font-size: var(--text-2xl);
  line-height: var(--leading-tight);
}
h4 {
  font-size: var(--text-xl);
  line-height: var(--leading-normal);
}
h5 {
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
}
h6 {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

small {
  font-size: var(--text-sm);
}
```

## Fluid Spacing

### Spacing Scale

```css
:root {
  /* Spacing tokens that scale with viewport */
  --space-3xs: clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem);
  --space-2xs: clamp(0.375rem, 0.3rem + 0.375vw, 0.5rem);
  --space-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --space-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1rem);
  --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  --space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --space-xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --space-2xl: clamp(3rem, 2rem + 5vw, 5rem);
  --space-3xl: clamp(4rem, 2.5rem + 7.5vw, 8rem);

  /* One-up pairs (for asymmetric spacing) */
  --space-xs-sm: clamp(0.5rem, 0.3rem + 1vw, 1rem);
  --space-sm-md: clamp(0.75rem, 0.5rem + 1.25vw, 1.5rem);
  --space-md-lg: clamp(1rem, 0.6rem + 2vw, 2rem);
  --space-lg-xl: clamp(1.5rem, 1rem + 2.5vw, 3rem);
}

/* Usage examples */
.section {
  padding-block: var(--space-xl);
  padding-inline: var(--space-md);
}

.card {
  padding: var(--space-md);
  gap: var(--space-sm);
}

.stack > * + * {
  margin-top: var(--space-md);
}
```

### Container Widths

```css
:root {
  /* Fluid max-widths */
  --container-xs: min(100% - 2rem, 20rem);
  --container-sm: min(100% - 2rem, 30rem);
  --container-md: min(100% - 2rem, 45rem);
  --container-lg: min(100% - 2rem, 65rem);
  --container-xl: min(100% - 3rem, 80rem);
  --container-2xl: min(100% - 4rem, 96rem);
}

.container {
  width: var(--container-lg);
  margin-inline: auto;
}

.prose {
  max-width: var(--container-md);
}

.full-bleed {
  width: 100vw;
  margin-inline: calc(-50vw + 50%);
}
```

## CSS Grid Fluid Layouts

### Auto-fit Grid

```css
/* Grid that fills available space */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: var(--space-md);
}

/* With maximum columns */
.auto-grid-max-4 {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, max(200px, calc((100% - 3 * var(--space-md)) / 4))), 1fr)
  );
  gap: var(--space-md);
}
```

### Responsive Grid Areas

```css
.page-grid {
  display: grid;
  grid-template-columns:
    1fr
    min(var(--container-lg), 100%)
    1fr;
  grid-template-rows: auto 1fr auto;
}

.page-grid > * {
  grid-column: 2;
}

.full-width {
  grid-column: 1 / -1;
}

/* Content with sidebar */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}

@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr min(300px, 30%);
  }
}
```

### Fluid Aspect Ratios

```css
/* Maintain aspect ratio fluidly */
.aspect-video {
  aspect-ratio: 16 / 9;
}

.aspect-square {
  aspect-ratio: 1;
}

/* Fluid aspect ratio that changes */
.hero-image {
  aspect-ratio: 1; /* Mobile: square */
}

@media (min-width: 640px) {
  .hero-image {
    aspect-ratio: 4 / 3;
  }
}

@media (min-width: 1024px) {
  .hero-image {
    aspect-ratio: 16 / 9;
  }
}
```

## Flexbox Fluid Patterns

### Flexible Sidebar

```css
/* Sidebar that collapses when too narrow */
.with-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.with-sidebar > :first-child {
  flex-basis: 300px;
  flex-grow: 1;
}

.with-sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-width: 60%;
}
```

### Cluster Layout

```css
/* Items cluster and wrap naturally */
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: flex-start;
  align-items: center;
}

/* Center-aligned cluster */
.cluster-center {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: center;
  align-items: center;
}

/* Space-between cluster */
.cluster-spread {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  justify-content: space-between;
  align-items: center;
}
```

### Switcher Layout

```css
/* Switches from horizontal to vertical based on container */
.switcher {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.switcher > * {
  /* Items go vertical when container is narrower than threshold */
  flex-grow: 1;
  flex-basis: calc((30rem - 100%) * 999);
}

/* Limit columns */
.switcher > :nth-last-child(n + 4),
.switcher > :nth-last-child(n + 4) ~ * {
  flex-basis: 100%;
}
```

## Intrinsic Sizing

### Content-Based Widths

```css
/* Size based on content */
.fit-content {
  width: fit-content;
  max-width: 100%;
}

/* Minimum content size */
.min-content {
  width: min-content;
}

/* Maximum content size */
.max-content {
  width: max-content;
}

/* Practical examples */
.button {
  width: fit-content;
  min-width: 8rem; /* Prevent too-narrow buttons */
  padding-inline: var(--space-md);
}

.tag {
  width: fit-content;
  padding: var(--space-2xs) var(--space-xs);
}

.modal {
  width: min(90vw, 600px);
  max-height: min(90vh, 800px);
}
```

### min() and max() Functions

```css
/* Responsive sizing without media queries */
.container {
  /* 90% of viewport or 1200px, whichever is smaller */
  width: min(90%, 1200px);
  margin-inline: auto;
}

.hero-text {
  /* At least 2rem, at most 4rem */
  font-size: max(2rem, min(5vw, 4rem));
}

.sidebar {
  /* At least 200px, at most 25% of parent */
  width: max(200px, min(300px, 25%));
}

.card-grid {
  /* Each card at least 200px, fill available space */
  grid-template-columns: repeat(auto-fit, minmax(max(200px, 100%/4), 1fr));
}
```

## Viewport Units

### Modern Viewport Units

```css
/* Dynamic viewport height - accounts for mobile browser UI */
.full-height {
  min-height: 100dvh;
}

/* Small viewport - minimum size when UI is visible */
.hero {
  min-height: 100svh;
}

/* Large viewport - maximum size when UI is hidden */
.backdrop {
  height: 100lvh;
}

/* Viewport-relative positioning */
.fixed-nav {
  position: fixed;
  inset-inline: 0;
  top: 0;
  height: max(60px, 8vh);
}

/* Safe area insets for notched devices */
.safe-area {
  padding-top: env(safe-area-inset-top);
  padding-right: env(safe-area-inset-right);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
}
```

## Turismo Reconquista Recommendations

Prefer fluid layouts before adding new breakpoints.

Recommended order:

1. Flexbox or Grid
2. min(), max() and clamp()
3. auto-fit / auto-fill
4. Fluid spacing
5. Media queries only when the layout actually requires them

Avoid fixed widths whenever possible.

## Resources

- [Utopia Fluid Type Calculator](https://utopia.fyi/)
- [Modern Fluid Typography](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
- [Every Layout](https://every-layout.dev/)
- [CSS min(), max(), and clamp()](https://web.dev/min-max-clamp/)
