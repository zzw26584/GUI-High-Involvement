
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 关键：将系统环境变量映射到前端可用的 process.env
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env': process.env,
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
