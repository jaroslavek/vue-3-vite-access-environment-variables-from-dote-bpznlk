import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default () => {
  console.log(import.meta.env);
  return defineConfig({
    plugins: [vue()],
  });
};
