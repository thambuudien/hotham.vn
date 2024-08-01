<script setup lang="ts">
const { data: page } = await useAsyncData('muc-dong', () => queryContent('/muc-dong').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Saas',
  title: page.value.title,
  description: page.value.description
})
const isNam = ref(false)
const mucLuongCoSo = ref(2340)
const mucChuanHoNgheo = ref(1500)
const mucThuNhapLuaChon = ref(1500)
// const tyLeHoTroNhaNuoc = ref(0.1)
// const tyLeHoTroHaNoi = ref(0.1)

const phuongThucDongs = computed(() => {
  return page.value.plans.map((t) => {
    const mucDongHangThang = mucThuNhapLuaChon.value * 0.22 * 1000 * t.price
    // const soTienHoTroHangThang = mucChuanHoNgheo.value * tyLeHoTroNhaNuoc.value * 1000 * t.price
    return { ...t, price: mucDongHangThang.toLocaleString(), discount: (mucDongHangThang - 66000 * t.price).toLocaleString(), features: ["Được nhà nước hỗ trợ tiền đóng."] }
  })
})

const luongHuuDuTinh = computed(() => {
  return mucThuNhapLuaChon.value * (isNam.value ? 0.40 : 0.45) * 1.624 * 1000
})
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero">
      <div class="text-2xl text-center">Lương hưu dự tính : <strong>{{ luongHuuDuTinh.toLocaleString() }}</strong>đ/tháng.</div>
      <template #links>
        <UPricingToggle v-model="isNam" class="w-48">
          <template #left>
            Nữ
          </template>
          <template #right>
            Nam
          </template>
        </UPricingToggle>
      </template>
      <template #description>
        <p class="mb-2">Kéo thanh trượt để thay đổi mức thu nhập lựa chọn cao hơn: <strong>{{ (mucThuNhapLuaChon * 1000).toLocaleString() }}đ/tháng.</strong></p>
        <URange v-model="mucThuNhapLuaChon" :min="mucChuanHoNgheo" :max="mucLuongCoSo * 20" :step="500" />
      </template>
      
    </UPageHero>

    <UContainer>
      <UPricingCard v-for="(plan, index) in phuongThucDongs" :key="index" class="mt-5" v-bind="plan" :price="plan.price"
        :cycle="plan.cycle" orientation="horizontal" />
    </UContainer>

    <ULandingSection :title="page.faq.title" :description="page.faq.description">
      <ULandingFAQ :items="page.faq.items" multiple default-open class="max-w-4xl mx-auto" />
    </ULandingSection>
  </div>
</template>
