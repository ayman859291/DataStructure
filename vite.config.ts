import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Replace '<YOUR_REPO_NAME>' with the name of your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/DataStructure/',
  build: {
    outDir: 'dist'
  }
})
