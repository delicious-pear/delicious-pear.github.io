import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 预留：后续可在此注册自定义组件
  },
} satisfies Theme
