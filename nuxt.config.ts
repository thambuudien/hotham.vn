// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-QCN6S7BFNG'
  },
  site: {
    url: 'https://www.hotham.vn',
    name: `Hồ Thị Thắm`,
    description: `Tư vấn đóng tiếp BHXH tự nguyện để hưởng lương hưu khi về già.`,
    defaultLocale: 'vn'
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  colorMode: {
    disableTransition: true
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/api/search.json': { prerender: true },
    '/tinh-muc-dong-va-luong-huu-du-tinh': { redirect: '/muc-dong', prerender: false },
    '/gia-han-the-bhyt-tai-nha': { redirect: 'https://bhyt.hotham.vn/', prerender: false },
    '/tra-thoi-han-bao-hiem-y-te': { redirect: 'https://bhyt.hotham.vn/', prerender: false },
    '/giahanbhyt': { redirect: 'https://bhyt.hotham.vn/', prerender: false },
    '/ho-thi-tham': { redirect: 'https://www.facebook.com/ThamBuuDien', prerender: false },
    '/mua-hang-tieu-dung': { redirect: 'https://shop.hotham.vn/', prerender: false },
    '/bao-hiem-y-te-bo-tro-mic': { redirect: 'https://blog.hotham.vn/bao-hiem-y-te-bo-tro-mic-huong-dan-tham-gia-chi-tiet/', prerender: false },
    '/mua-bao-hiem-y-te-o-buu-dien': { redirect: 'https://blog.hotham.vn/cach-mua-bao-hiem-y-te-o-buu-dien-nhanh-chong-don-gian/', prerender: false }
  },

  devtools: {
    enabled: true
  },

  typescript: {
    strict: false
  },

  future: {
    compatibilityVersion: 4
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  compatibilityDate: '2024-07-11'
})
