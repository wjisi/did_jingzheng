import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'pinia',
        'vue-i18n',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      resolvers: [],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [],
      dts: 'src/types/components.d.ts',
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/types/typed-router.d.ts',
    }),
    vue(),
    vueDevTools(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    // 当下载一个图标库时，需要在此加入，例如 @iconify-json/ep
    exclude: [],
  },
})
