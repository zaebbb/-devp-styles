import { resolve } from 'path'
import { defineConfig } from 'vite'
import { typescriptPaths } from "rollup-plugin-typescript-paths"
import typescript from "@rollup/plugin-typescript"
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    manifest: true,
    reportCompressedSize: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      name: 'index',
      formats: ['es', 'cjs', 'umd', 'iife']
    },
  },
  plugins: [
    dts({
      entryRoot: './src',
      copyDtsFiles: true,
      outDir: 'dist',
      tsconfigPath: './tsconfig.json',
      exclude: [
        './src/test/**/*'
      ]
    }),
  ]
})
