import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Define custom chunks based on your application's needs
          // For example, separate large dependencies into a vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // Separate other specific modules into different chunks if necessary
          // Add more conditions as needed
        },
      },
    },
    // Adjust the chunk size warning limit (in bytes)
    chunkSizeWarningLimit: 1000000,
  },
});

