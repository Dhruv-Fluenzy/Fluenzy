## Hero Heading Animation System

This document explains how to use and customize the hero heading animations in the Fluenzy.in project.

### Available Components

1. **HeroHeading** - Main component with slide animations and highlighted words
2. **AlternativeHeroHeading** - Three variants: default, gradient, minimal
3. **AnimationShowcase** - Development tool to test different animations
4. **TypingAnimation** - Individual typing effect component

### How to Switch Animation Types

#### Method 1: Using HeroHeading
```tsx
// In Hero.tsx
<HeroHeading animationType="slide" />  // Default smooth slide-in
<HeroHeading animationType="typing" /> // Typewriter effect
```

#### Method 2: Using AlternativeHeroHeading
```tsx
// In Hero.tsx
<AlternativeHeroHeading variant="default" />  // Enhanced with underlines
<AlternativeHeroHeading variant="gradient" /> // Gradient text effects
<AlternativeHeroHeading variant="minimal" />  // Clean, simple style
```

#### Method 3: Using AnimationShowcase (Development Only)
```tsx
// Replace HeroHeading with AnimationShowcase in Hero.tsx
<AnimationShowcase />
// This will show a control panel in development mode
```

### Customization

#### Colors
The highlighted words use these CSS classes defined in `index.css`:
- `.hero-highlight-word` - Animated gradient for highlighted words
- `.hero-normal-word` - Gradient for normal words

#### Animation Timing
Modify delays in the component:
```tsx
const heroLines = [
  { words: [...], delay: 0.2 },  // First line delay
  { words: [...], delay: 0.4 },  // Second line delay
  { words: [...], delay: 0.6 },  // Third line delay
]
```

#### Text Content
Update the text in the component:
```tsx
const heroLines = [
  { normal: "Fluencers", highlight: "create" },
  { normal: "Fluenzy", highlight: "shapes" },
  { normal: "Brand", highlight: "wins" }
]
```

### Performance Notes
- The particle background is lightweight with only 15 particles
- Animations use hardware acceleration with `transform` and `opacity`
- All animations respect `prefers-reduced-motion` (can be added if needed)

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Hardware acceleration for smooth animations
- Graceful degradation for older browsers
