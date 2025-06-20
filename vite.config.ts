import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@atom': path.resolve(__dirname, './src/components/atoms'),
      '@molecule': path.resolve(__dirname, './src/components/molecules'),
      '@organism': path.resolve(__dirname, './src/components/organisms'),
    }
  },
  plugins: [react()],
})
