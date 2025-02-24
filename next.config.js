/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    themes: {
      light: {
        primary: "#4F46E5",
        secondary: "#6366F1",
        background: "#FFFFFF",
        text: "#1F2937",
        accent: "#3730A3",
      },
      dark: {
        primary: "#6366F1",
        secondary: "#4F46E5",
        background: "#1F2937",
        text: "#F9FAFB",
        accent: "#818CF8",
      },
      forest: {
        primary: "#059669",
        secondary: "#10B981",
        background: "#064E3B",
        text: "#ECFDF5",
        accent: "#34D399",
      },
      ocean: {
        primary: "#0EA5E9",
        secondary: "#38BDF8",
        background: "#0C4A6E",
        text: "#F0F9FF",
        accent: "#7DD3FC",
      },
    },
  },
};

module.exports = nextConfig;
