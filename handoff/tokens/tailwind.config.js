// Tailwind v3 theme extension. Import tokens.css globally so the var() colors resolve.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
  "colors": {
    "ink": "var(--color-ink)",
    "sky": "var(--color-sky)",
    "sky-soft": "var(--color-sky-soft)",
    "mist": "var(--color-mist)",
    "cream": "var(--color-cream)",
    "blush": "var(--color-blush)",
    "lavender": "var(--color-lavender)",
    "haze": "var(--color-haze)",
    "sage": "var(--color-sage)",
    "white": "var(--color-white)",
    "danger": "var(--color-danger)",
    "warning-bg": "var(--color-warning-bg)",
    "warning-ink": "var(--color-warning-ink)"
  },
  "fontFamily": {
    "display": [
      "Lexend Exa",
      "sans-serif"
    ],
    "sans": [
      "Inter",
      "system-ui",
      "sans-serif"
    ],
    "mono": [
      "JetBrains Mono",
      "ui-monospace",
      "monospace"
    ]
  },
  "fontSize": {
    "xs": "11px",
    "sm": "13px",
    "base": "15px",
    "md": "17px",
    "lg": "21px",
    "xl": "28px",
    "2xl": "36px",
    "3xl": "52px",
    "4xl": "76px"
  },
  "borderRadius": {
    "xs": "2px",
    "sm": "8px",
    "md": "14px",
    "lg": "18px",
    "xl": "24px",
    "2xl": "30px",
    "pill": "999px"
  },
  "spacing": {
    "0": "0px",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px"
  },
  "backdropBlur": {
    "glass": "22px",
    "cloud": "40px"
  },
  "boxShadow": {
    "glass": "inset 0 1px 0 rgba(255,255,255,.9), 0 40px 80px -30px rgba(40,70,100,.35)",
    "cta": "0 14px 30px -12px rgba(28,40,56,.6)",
    "orb": "0 6px 10px rgba(43,74,99,.3)"
  },
  "transitionDuration": {
    "instant": "80ms",
    "fast": "160ms",
    "base": "240ms",
    "slow": "420ms",
    "drift": "1200ms",
    "dissolve": "1800ms"
  },
  "transitionTimingFunction": {
    "standard": "cubic-bezier(0.2,0,0,1)",
    "enter": "cubic-bezier(0.16,1,0.3,1)",
    "exit": "cubic-bezier(0.4,0,1,1)",
    "dissolve": "cubic-bezier(0.45,0,0.15,1)"
  },
  "letterSpacing": {
    "display": "-0.04em",
    "ui": "-0.01em",
    "label": "0.08em"
  }
} },
};
