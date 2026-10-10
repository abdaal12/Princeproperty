import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub Pages repo name.
// Your site is served at https://abdaal12.github.io/PrinceKing/
// so base stays '/PrinceKing/'. If you ever rename the repo,
// update this to match.
export default defineConfig({
  plugins: [react()],
  base: '/PrinceKing/',
})
