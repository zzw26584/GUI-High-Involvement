
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 确保从 Vercel 系统环境变量中读取 API_KEY 并注入代码
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
