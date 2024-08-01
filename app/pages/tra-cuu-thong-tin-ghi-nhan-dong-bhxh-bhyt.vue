<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('tra-cuu-thong-tin-ghi-nhan-dong-bhxh-bhyt', () => queryContent('/tra-cuu-thong-tin-ghi-nhan-dong-bhxh-bhyt').findOne())
if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
    title: page.value.title,
    ogTitle: page.value.title,
    twitterTitle: page.value.title,
    description: page.value.description,
    ogDescription: page.value.description,
    twitterDescription: page.value.description
})

defineOgImage({
    component: 'Saas',
    title: 'Biểu minh họa mức đóng, mức hưởng bảo hiểm xã hội tự nguyện 2024',
    description: 'Một trong những cách để người lao động tự do được hưởng lương hưu khi về già chính là tham gia bảo hiểm xã hội (BHXH) tự nguyện'
})
</script>

<template>
    <UContainer>
        <UPage v-if="page">
            <UPageHero v-bind="page.hero">
                <template #description>
                    <span v-html="page.hero.description" />
                </template>
            </UPageHero>
            <UAlert title="Chào bạn!" :avatar="{
                src: '/tham-buu-dien.webp',
                alt: 'Avatar'
            }">
                <template #avatar="{ avatar }">
                    <UAvatar v-bind="avatar" chip-color="primary" chip-text="" chip-position="top-right" />
                </template>
                <template #description>
                    Bạn hãy dùng mã xác nhận này <b>{{ route.query.ma }}</b> để tra cứu trực tuyến thông tin đóng trên
                    Cổng Thông
                    tin điện tử BHXH Việt Nam <a
                        href="https://baohiemxahoi.gov.vn/tracuu/pages/tra-cuu-thong-tin-ghi-nhan-dong-bhxh-bhyt.aspx"><u>tại
                            đây</u></a>.
                </template>
            </UAlert>

            <UPageBody>
                <p>Cụ thể như sau:</p>
                <p>
                    <strong>Bước 1</strong>: Người tham gia truy cập vào Cổng thông tin điện tử BHXH Việt Nam tại địa
                    chỉ&nbsp;<a href="https://baohiemxahoi.gov.vn/" target="_blank"
                        rel="noreferrer noopener">https://baohiemxahoi.gov.vn/</a>
                </p>
                <p><strong>Bước 2</strong>: Chọn chức năng Tra cứu trực tuyến</p>
                <figure>
                    <img decoding="async"
                        src="https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/08/tra-cuu-bhxh-tu-nguyen-1.png?w=579&amp;ssl=1"
                        alt="tra cứu đóng bảo hiểm" data-recalc-dims="1">
                </figure>
                <p><strong>Bước 3</strong>: Chọn chức năng Tra cứu thông tin ghi nhận đóng BHXH, BHYT</p>
                <figure>
                    <img decoding="async"
                        src="https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/08/tra-cuu-bhxh-tu-nguyen-2.png?w=579&amp;ssl=1"
                        alt="tra cứu đóng bảo hiểm xã hội tự nguyện và bảo hiểm y tế" data-recalc-dims="1">
                </figure>
                <p>
                    <strong>Bư</strong><strong>ớc 4</strong>: Nhập thông tin để tra cứu bao gồm: Mã xác nhận (do Tổ chức
                    dịch vụ
                    thu cung cấp)
                </p>
                <figure>
                    <img decoding="async"
                        src="https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/08/tra-cuu-bhxh-tu-nguyen-3.png?w=579&amp;ssl=1"
                        alt="" data-recalc-dims="1">
                </figure>
                <p>
                    <strong>Bước 5</strong>: BHXH Việt Nam cung cấp thông tin cho người tham gia theo Mã xác nhận và Mã
                    số
                    BHXH/Số CCCD.
                </p>
                <p>
                    Thông tin cung cấp bao gồm: Thông tin của người tham gia: Mã số BHXH, Họ và tên, Ngày sinh, Giới
                    tính, Số
                    CCCD, Loại hình tham gia (BHXH tự nguyện, BHYT), Số tiền đóng, Số tháng đóng, Ngày ghi nhận; Thông
                    tin của
                    tổ chức dịch vụ thu: Mã tổ chức dịch vụ thu, Tên tổ chức dịch vụ thu, Mã nhân viên thu, Tên nhân
                    viên thu,
                    Mã cơ quan BHXH ký hợp đồng, Tên cơ quan BHXH ký hợp đồng.
                </p>
                <figure>
                    <img decoding="async"
                        src="https://i0.wp.com/store.hotham.vn/wordpress/wp-content/uploads/sites/30/2024/08/tra-cuu-bhxh-tu-nguyen-4.png?w=980&amp;ssl=1"
                        alt="tra cứu đóng bảo hiểm xã hội tự nguyện" data-recalc-dims="1">
                </figure>
            </UPageBody>

            <ULandingSection :title="page.faq.title" :description="page.faq.description">
                <ULandingFAQ :items="page.faq.items" multiple default-open class="max-w-4xl mx-auto" />
            </ULandingSection>
            <ULandingSection>
                <ULandingCTA v-bind="page.cta" class="bg-gray-100/50 dark:bg-gray-800/50" />
            </ULandingSection>
        </UPage>
    </UContainer>
</template>
