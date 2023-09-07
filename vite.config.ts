import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import scopeTailwind from "vite-plugin-scope-tailwind";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    scopeTailwind({
      react: true,
    }),
  ],
});
