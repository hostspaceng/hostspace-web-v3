import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isSSR = process.env.NODE_SSR_BUILD === "1";

export default defineConfig({
  plugins: [react()],
  build: isSSR
    ? {
        ssr: "src/entry-server.tsx",
        outDir: "dist/server",
        rollupOptions: {
          input: "src/entry-server.tsx", // ✅ SSR entry
        },
      }
    : {
        outDir: "dist", // ✅ Let Vite use default index.html
      },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
