/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        clipcraft: {
          black: "#121212",
          panel: "#1A1A1A",
          panel2: "#1E1E1E",
          blue: "#1E90FF",
          white: "#FFFFFF",
          gray: "#A0A0A0"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(30, 144, 255, 0.32)",
        card: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      animation: {
        floatPhone: "floatPhone 5.5s ease-in-out infinite",
        scan: "scan 3.2s ease-in-out infinite",
        captionPop: "captionPop 4.2s ease-in-out infinite",
        timeline: "timeline 5.4s linear infinite",
        shimmer: "shimmer 2.8s linear infinite",
        orbit: "orbit 14s linear infinite"
      },
      keyframes: {
        floatPhone: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" }
        },
        scan: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.25" },
          "50%": { transform: "translateY(290px)", opacity: "0.8" }
        },
        captionPop: {
          "0%, 35%, 100%": { transform: "translateY(10px) scale(0.96)", opacity: "0.55" },
          "45%, 80%": { transform: "translateY(0) scale(1)", opacity: "1" }
        },
        timeline: {
          "0%": { transform: "translateX(-48%)" },
          "100%": { transform: "translateX(0%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(16px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(16px) rotate(-360deg)" }
        }
      }
    }
  },
  plugins: []
};
