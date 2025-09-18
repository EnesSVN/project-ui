import type { Preview } from "@storybook/nextjs";
import "../src/app/globals.css";
import "../src/app/styles/global.scss";

const preview: Preview = {
  parameters: {
    controls: { expanded: true, sort: "requiredFirst" },
    a11y: { restoreScroll: true },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#121212" },
        { name: "light", value: "#ffffff" },
      ],
    },
    themes: {
      default: "Dark",
      list: [
        { name: "Dark", class: "sb-theme-dark", color: "#121212" },
        { name: "Light", class: "sb-theme-light", color: "#ffffff" },
      ],
      target: "html",
    },
  },
};

export default preview;
