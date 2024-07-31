<script setup lang="ts">
const route = useRoute()
const itemCode = await $fetch(`https://api.myems.vn/TrackAndTraceItemCode?itemcode=${route.query.q}&language=0`)
</script>

<template>
    <div>
        <div v-if="itemCode && itemCode.Code">
            <p v-if="itemCode.Code === '99'" class="text-center text-yellow-500 text-2xl pt-16">
                Không tìm thấy định vị bưu gửi <strong>{{ route.query.q }}</strong>.
            </p>
        </div>
        <div v-if="itemCode && itemCode.TBL_INFO">
            <p class="text-gray-500 text-xl mt-10">
                Người gửi: {{ itemCode.TBL_INFO.HO_TEN_GUI }}
            </p>
            <p class="text-gray-500 text-xl">
                Gửi đến: {{ itemCode.TBL_INFO.DIA_CHI_NHAN }}
            </p>
            <p class="text-gray-500 text-xl">
                Khối lượng: {{ itemCode.TBL_INFO.KHOI_LUONG }}g
            </p>

            <h3 class="text-blue-500 text-xl mt-16">
                Mã vận đơn:{{ itemCode.TBL_INFO.MAE1 }} -
                {{ itemCode.TBL_INFO.BC_GUI }}
            </h3>
            <ol class="pt-12 relative border-l border-gray-200 dark:border-gray-700">
                <li v-for="(
            { NGAY_TRANG_THAI, VI_TRI, TRANG_THAI, DIEN_THOAI }, i
          ) in itemCode.List_TBL_DINH_VI" :key="i" class="mb-10 ml-4">
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                        NGAY_TRANG_THAI }}</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ VI_TRI }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {{ TRANG_THAI }} {{ DIEN_THOAI }}
                    </p>
                    <!-- <a href="tel:0978333963" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">{{DIEN_THOAI}} <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> -->
                </li>
            </ol>
            <h3 class="text-lg font-semibold text-blue-900 dark:text-white">
                Thông tin phát
            </h3>
            <ol class="pt-12 relative border-l border-gray-200 dark:border-gray-700">
                <li v-for="(
            { NGAY_TRANG_THAI, VI_TRI, TRANG_THAI }, i
          ) in itemCode.List_TBL_DELIVERY" :key="i" class="mb-10 ml-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                        NGAY_TRANG_THAI }}</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ VI_TRI }}
                    </h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {{ TRANG_THAI }}
                    </p>
                </li>
            </ol>

            <p class="text-center text-gray-500 text-xs mt-10">
                &copy;2022 bởi
                <a class="text-blue-500 hover:text-blue-800" href="https://www.longwebstudio.net/">Lỗ Văn Long</a>.
            </p>
        </div>
        <div v-if="itemCode.Message === 'An error has occurred.'">
            <p class="text-center text-yellow-500 text-2xl pt-16">
                Không tìm thấy định vị bưu gửi <strong>{{ searchText }}</strong>. Hệ thống đang bảo trì, vui lòng kiểm
                tra lại lúc khác...
            </p>
        </div>
    </div>
</template>
