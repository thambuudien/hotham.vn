<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Cần biết',
  to: '/can-biet'
}, {
  label: 'Mức đóng',
  to: '/muc-dong'
}, {
  label: 'Blog',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Hồ Thị Thắm <UBadge
        label="Bưu điện"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="Đăng nhập"
        color="gray"
        to="/dang-nhap"
      />
      <UButton
        label="Đăng ký"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/dang-ky"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
