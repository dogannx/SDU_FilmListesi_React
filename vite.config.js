import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/SDU_FilmListesi_React/",
  plugins: [react()],
})
