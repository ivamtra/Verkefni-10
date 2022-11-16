/* eslint-disable no-undef */
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        assetsInlineLimit: '10000',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                "face-api.min.js": resolve(__dirname, 'index.html'),
                draggable: resolve(__dirname, 'uploader.html')
            }
        }
    }
})