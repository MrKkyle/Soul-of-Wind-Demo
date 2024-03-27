import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        laravel({
          input: [
             'resources/sass/app.scss',
             'resources/js/app.js',
          ],
          refresh: true,
        }),
        reactRefresh()
      ],
});




