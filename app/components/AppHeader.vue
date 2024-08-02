<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Mức đóng BHXH',
  to: '/muc-dong'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img src="/tham-buu-dien.webp" alt="Hồ Thị Thắm" class="shadow-xl rounded-full mr-1"> Hồ Thị Thắm
      <UBadge label="Bưu điện" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UButton label="0978 333 963" color="gray" to="tel:0978333963" icon="i-simple-icons-zalo" class="hidden lg:flex" />
      <UButton label="Đăng ký" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="/muc-dong"
        class="hidden lg:flex" />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
