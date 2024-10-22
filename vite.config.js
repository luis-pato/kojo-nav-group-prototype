import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
    base: '/kojo-nav-group-prototype/dist',
    plugins: [
        ViteEjsPlugin()
    ],
});
