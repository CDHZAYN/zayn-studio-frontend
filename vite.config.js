import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [vue()],
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_BACKEND_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/')
                }
            },
        }
    }
})
