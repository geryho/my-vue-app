import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        notes: "notes.html",
      },
    },
  },
});
