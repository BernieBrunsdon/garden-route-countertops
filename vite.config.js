import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set BASE_PATH only when deploying under a subpath (e.g. GitHub Pages project site).
  // For Hostinger/custom domains leave it unset so the app serves from `/`.
  base: process.env.BASE_PATH || '/',
})
