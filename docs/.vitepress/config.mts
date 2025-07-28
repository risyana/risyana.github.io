import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eka Risyana",
  description: "Personal web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Skills & Competencies', link: '/skills' },
      { text: 'Professional Experience', link: '/work-experience' },
      { text: 'Project Portfolio', link: '/portfolio' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/risyana' }
    ]
  }
})
