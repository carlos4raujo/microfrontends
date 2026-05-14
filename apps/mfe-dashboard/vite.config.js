import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'mfeDashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './Dashboard': './src/Dashboard',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    preview: {
        port: 3002,
        strictPort: true,
    },
    server: {
        port: 3002,
        strictPort: true,
    },
});
