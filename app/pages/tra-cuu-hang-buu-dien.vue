<script setup lang="ts">
const route = useRoute()
</script>
<template>
    <UPageHero title="Theo dõi bưu gửi" description="Thông tin định vị vận chuyển và phát hàng." />
    <UContainer>
        <!-- This renders the "span" element on the server side -->
        <div v-if="route.query.q" class="text-center text-yellow-500 text-2xl">
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

</template>
