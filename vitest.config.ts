import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root:'./tests',
  test:{
    globals:true,
    alias:{
      '@': resolve(__dirname, 'src')
    }
  }
})
