import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/ui/index.ts"],
  outDir: "ui-dist",
  format: ["esm", "cjs"],
  dts: false,
  sourcemap: true,
  splitting: true,
  clean: true,
  minify: false,
  external: [
    "react",
    "react-dom",
    "next",
    "clsx",
    "tailwind-merge",
    "class-variance-authority",
  ],
});
