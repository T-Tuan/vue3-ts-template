import { fileURLToPath, URL } from 'node:url';
import * as path from 'path';
import UnoCSS from 'unocss/vite';
import { presetUno } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import AutoImport from 'unplugin-auto-import/vite';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  base: '/',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
    },
    assetsDir: 'static',
  },
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      presets: [
        presetUno(),
        presetRemToPx({
          baseFontSize: 4,
        }),
      ],
      shortcuts: [
        ['wh-full', 'w-full h-full'],
        ['f-c-c', 'flex justify-center items-center'],
        ['flex-col', 'flex flex-col'],
        ['text-ellipsis', 'truncate'],
      ],
    }),
    AutoImport({
      dirs: ['src/utils/**', 'src/router', 'src/types/service', 'src/server', 'src/stores'],
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [],
      eslintrc: {
        enabled: true,
        filepath: './config/.eslintrc-auto-import.json',
      },
      dts: 'src/types/auto-imports.d.ts',
      vueTemplate: true,
    }),
    AutoImport({
      imports: [
        {
          from: 'lodash-es',
          imports: [['default', 'lodash']],
        },
        {
          from: 'dayjs',
          imports: [['default', 'dayjs']],
        },
      ],
      dts: false,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'customIcon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 7788,
    proxy: {
      '/api': {
        // target: 'http://9.134.50.36:10001', // 接口的域名
        // secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        // rewrite: (path) => path.replace(/^\/api/, '/'),
        headers: {},
      },
    },
  },
});
