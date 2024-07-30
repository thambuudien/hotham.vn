<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'msapplication-tileColor', name: 'msapplication-TileColor', content: '#da532c' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
  ],
  htmlAttrs: {
    lang: 'vi'
  }
})

useSeoMeta({
  titleTemplate: '%s - Hồ Thị Thắm',
  ogImage: 'https://store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/07/Dong-tiep-BHXH-tu-nguyen-de-co-luong-huu.png',
  twitterImage: 'https://store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/07/Dong-tiep-BHXH-tu-nguyen-de-co-luong-huu.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
