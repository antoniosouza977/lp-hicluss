import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: parseInt(process.env.VITE_HMR_PORT || '5173', 10),
        strictPort: true,
        watch: {
            usePolling: true,
        },
        hmr: {
            host: process.env.VITE_HMR_HOST || 'localhost',
            port: parseInt(process.env.VITE_HMR_PORT || '5173', 10),
        },
    },
    optimizeDeps: {
        noDiscovery: true
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
