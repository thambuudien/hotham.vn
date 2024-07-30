<script setup lang="ts">
const { data: page } = await useAsyncData('pricing', () => queryContent('/muc-dong').findOne())
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
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero" />

    <UContainer>
      <UPricingCard
        v-for="(plan, index) in page.plans"
        :key="index"
        class="mt-5"
        v-bind="plan"
        :price="plan.price"
        :cycle="plan.cycle"
        orientation="horizontal"
      />
    </UContainer>

    <ULandingSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <ULandingFAQ
        :items="page.faq.items"
        multiple
        default-open
        class="max-w-4xl mx-auto"
      />
    </ULandingSection>
  </div>
</template>
