import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [vue(), vueJsx()],
  }
  if (mode === 'development') {
    // 直接引入源文件测试
    // config.resolve = {
    //   alias: {
    //     'common_lib': 'common_lib/src/index.ts',
    //   },
    //   dedupe: ['vue'],
    // }
    // config.optimizeDeps = {
    //   exclude: ['common_lib'],
    // }
  }

  return config
})
