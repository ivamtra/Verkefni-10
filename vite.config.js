/* eslint-disable no-undef */
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                "face-api.min.js": resolve(__dirname, 'index.html'),
                "draggable.js": resolve(__dirname, 'uploader.html'),
                sound: 'public/heyheyhey.mp3',
            }
        }
    }
})