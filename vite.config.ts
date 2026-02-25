import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'run-tsx-script',
      handleHotUpdate({ file }) {
        if (!file.includes('src')) {
          return;
        }
        try {
          execSync('npx tsx ./generate-pdf.tsx', { stdio: 'inherit' });
        } catch (err) {
          console.error("Script failed:", err);
        }
      },
    }
  ],
})