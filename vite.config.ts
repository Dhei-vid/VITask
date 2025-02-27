import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  server: {
    proxy: {
      "/benion-ml/api": {
        target: "http://benion-tech-server.onrender.com", // The actual server URL
        changeOrigin: true, // Changes the origin of the request to match the target
        secure: false, // Disable SSL verification if needed (useful for development)
      },
    },
  },
});
