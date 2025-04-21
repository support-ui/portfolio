// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // ⬅️ Importa el plugin de React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    react(), // ⬅️ Agrega la integración aquí
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
