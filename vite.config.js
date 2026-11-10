import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
    base: '/',
    server: {
        port: 5173,
        open: true
    },
    preview: {
        port: 4173,
        open: true
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const isImage = /\.(ico|png|jpe?g|gif|svg|webp)$/i.test(
                        assetInfo.name ?? ''
                    );

                    return isImage
                        ? 'assets/img/[name]-[hash][extname]'
                        : 'assets/[name]-[hash][extname]';
                },

                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
            },
        },
    },
    plugins: [
        imagemin({
            verbose: true,
            gifsicle: {
                optimizationLevel: 3
            },
            optipng: {
                optimizationLevel: 5
            },
            mozjpeg: {
                quality: 75
            },
            pngquant: {
                quality: [0.6, 0.8],
                speed: 4
            },
            svgo: {
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            }
        })
    ],
});
