import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eka Risyana",
  description: "Personal web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Brief', link: '/' },
      { text: 'Skills', link: '/skills' },
      { text: 'Work Experience', link: '/work-experience' },
      { text: 'Portfolio', link: '/portfolio' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/risyana' }
    ]
  }
})
