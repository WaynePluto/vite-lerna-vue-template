import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [vue(), vueJsx()],
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    // 直接引入源文件而不是打包后的文件
    resolve: {
      alias: {
        'common_lib': 'common_lib/src/lib.ts',
      },
      dedupe: ['vue'],
    },
    optimizeDeps: {
      exclude: ['common_lib'],
    },
  }

  return config
})
