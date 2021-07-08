<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200
    sm:px-6 mt-5 shadow-lg w-1/3 flex-wrap rounded-lg">
    <div class="flex-1 flex justify-between">
      <button class="p-3 rounded-md border-2 border-gray-300 font-normal cursor-pointer"
      @click="previousPage()"> Previous </button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button :class="[`p-3 rounded-md border-2 border-gray-300 font-normal
          cursor-pointer focus:ring-2 focus:ring-gray-500`, page.pageNumber == index + 1 ?
           'bg-gray-400 disabled:opacity-50' : '']"
          @click="viewPage(index)">
          {{ index + 1 }}
        </button>
      </span>
      <button class="p-3 rounded-md border-2 border-gray-300 font-normal cursor-pointer"
      @click="nextPage()"> Next </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useGetUsers } from '@/composables/use-users';

export default defineComponent({
  name: 'Pagination',
  setup() {
    const route = useRoute();
    const page = ref({ pageNumber: parseInt(route.query.page as string, 10) || 1 });
    const { getUsers } = useGetUsers();

    onMounted(() => {
      getUsers(page.value.pageNumber, 'all');
    });

    function nextPage() {
      if (page.value.pageNumber < 10) {
        page.value.pageNumber += 1;
        getUsers(page.value.pageNumber, String(route.query.gender));
      }
    }
    function previousPage() {
      if (page.value.pageNumber > 0) {
        page.value.pageNumber -= 1;
        getUsers(page.value.pageNumber, String(route.query.gender));
      }
    }
    function viewPage(index: number) {
      page.value.pageNumber = index + 1;
      getUsers(page.value.pageNumber, String(route.query.gender));
    }
    return {
      nextPage,
      previousPage,
      viewPage,
      page,
    };
  },
});
</script>
