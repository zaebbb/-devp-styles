import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import typescriptPaths from "rollup-plugin-typescript-paths"
import typescript from "@rollup/plugin-typescript"

export default defineConfig({
  build: {
    manifest: true,
    reportCompressedSize: true,
    minify: true,
    rollupOptions: {
      external: [],
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
          exclude: [
            './src/test/**/*',
            './jest.config.ts'
          ]
        }),
      ],
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@devproger/styles',
      fileName: '@devproger/styles',
      formats: ['es', 'cjs']
    },
  },
  // plugins: [
  //   dts({
  //     entryRoot: './src',
  //     copyDtsFiles: true,
  //     tsconfigPath: './tsconfig.json',
  //     exclude: [
  //       './src/test/**/*'
  //     ]
  //   }),
  // ],
})
