<script setup lang="ts">
const route = useRoute()
useSeoMeta({
  title: 'Theo dõi bưu gửi Bưu điện VHX Tự Lập',
  ogTitle: 'Theo dõi bưu gửi bưu điện VHX Tự Lập',
  twitterTitle: 'Theo dõi bưu gửi bưu điện VHX Tự Lập',
  description: 'Chúng tôi xin gửi đến bạn mã theo dõi để bạn có thể theo dõi định vị bưu gửi tại điểm bưu điện xã Tự Lập.',
  ogDescription: 'Thân gửi đến bạn lời cảm ơn chân thành vì đã đến gửi hàng tại Điểm bưu điện Xã Tự Lập. Tôi xin gửi đến bạn mã theo dõi để bạn có thể theo dõi định vị bưu gửi.',
  twitterDescription: 'Thân gửi đến bạn lời cảm ơn chân thành vì đã đến gửi hàng tại Điểm bưu điện Xã Tự Lập. Tôi xin gửi đến bạn mã theo dõi để bạn có thể theo dõi định vị bưu gửi.'
})

defineOgImage({
  component: 'Saas',
  title: 'Theo dõi bưu gửi tại điểm Bưu điện Xã Tự Lập',
  description: 'Thân gửi đến bạn lời cảm ơn chân thành vì đã đến gửi hàng tại Điểm bưu điện Xã Tự Lập'
})
</script>

<template>
  <UPageHero
    title="Thân gửi đến bạn lời cảm ơn chân thành vì đã đến gửi hàng tại Điểm bưu điện Xã Tự Lập."
  >
    <template #description>
      Bạn có thể ở lại trang này để kiểm tra tình trạng giao hàng. Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, hãy liên hệ với chúng tôi qua số điện thoại hoặc địa chỉ Fanpage
      <UBadge
        size="sm"
        class="relative rounded-2xl font-semibold"
      >
        <NuxtLink
          :to="'https://m.me/vnpost.vn'"
          target="_blank"
          class="focus:outline-none"
          tabindex="-1"
        >
          <span
            class="absolute inset-0"
            aria-hidden="true"
          />
        </NuxtLink>

        Vietnam Post - Bưu điện Việt Nam

        <UIcon
          name="i-heroicons-arrow-top-right-on-square-20-solid"
          class="ml-1 w-4 h-4 pointer-events-none"
        />
      </UBadge>. Đội ngũ chăm sóc khách hàng Bưu điện sẽ rất vui lòng giúp bạn.
    </template>
  </UPageHero>
  <UContainer v-if="route.query.q">
    <!-- This renders the "span" element on the server side -->
    <div
      
      class="text-center text-yellow-500 text-2xl"
    >
      Đang tìm kiếm định vị bưu gửi {{ route.query.q.toLocaleString().toUpperCase() }}. Vui lòng chờ trong
      giây lát...
    </div>
    <ClientOnly fallback-tag="span">
      <!-- this component will only be rendered on client side -->
      <tra-cuu-hang-buu-dien />
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Tra cứu định vị bưu gửi...</p>
      </template>
    </ClientOnly>
  </UContainer>
  <ULandingCTA
    class="bg-gray-100/50 dark:bg-gray-800/50 mt-10"
    title="Hãy cùng trò chuyện"
    description="Quan tâm đến việc đóng tiếp BHXH tự nguyện, gia hạn thẻ BHYT hộ gia đình hoặc chỉ muốn chào hỏi? Hãy gửi cho tôi một tin nhắn!"

    :links="[{ label: 'Chọn mức đóng', to: '/muc-dong', target: '_blank', color: 'black', size: 'xl' }, { label: 'Kết bạn Zalo', to: 'https://zalo.me/0978333963', target: '_blank', variant: 'link', color: 'gray', size: 'xl', trailingIcon: 'i-heroicons-arrow-right-20-solid' }]"
  />
</template>
