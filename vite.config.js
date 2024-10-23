import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import navData from './src/data/nav.json';

export default defineConfig({
    base: '/kojo-nav-group-prototype/',
    plugins: [
        ViteEjsPlugin({
            navData: navData,
        })
    ],
    build: {
        assetsInlineLimit: 0
    }
});
