import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@devproger/styles',
      fileName: '@devproger/styles',
    },
    minify: true,
  },
  plugins: [
    dts({
      entryRoot: './src',
      copyDtsFiles: true,
      tsconfigPath: './tsconfig.json',
      exclude: [
        './src/test/**/*'
      ]
    }),
  ],
})
