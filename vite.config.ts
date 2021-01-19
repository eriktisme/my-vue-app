import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  alias: {
    "@": resolve(__dirname, "src"),
    "@scaling": resolve(__dirname, "src/packages"),
    "@scaling-ui": resolve(__dirname, "src/components/ui"),
  }
})
