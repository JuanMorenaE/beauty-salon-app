import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://juanmorenae.github.io/beauty-salon-app",
    css: {
        postcss: {
            plugins: [tailwind()],
        },
    },
});
