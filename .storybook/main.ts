import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: "@storybook/nextjs",
  stories: ["../src/app/components/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
};

export default config;
