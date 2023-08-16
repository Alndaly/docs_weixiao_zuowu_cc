// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import MyLayout from '../theme/components/MyLayout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
