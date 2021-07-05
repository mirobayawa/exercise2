<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200
    sm:px-6 mt-5 shadow-lg w-1/3 flex-wrap rounded-lg">
    <div class="flex-1 flex justify-between">
      <button class="p-3 rounded-md border-2 border-gray-300 font-normal cursor-pointer"
      @click="previousPage()"> Previous </button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="p-3 rounded-md border-2 border-gray-300 font-normal cursor-pointer"
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
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useGetUsers } from '@/use/use-users';

export default defineComponent({
  name: 'Pagination',
  setup() {
    const route = useRoute();
    const page = ({ pageNumber: parseInt(route.query.page as string, 10) || 1 });
    const { getUsers } = useGetUsers();

    getUsers(page.pageNumber, '');

    function nextPage() {
      if (page.pageNumber < 10) {
        page.pageNumber += 1;
        getUsers(page.pageNumber, String(route.query.gender));
      }
    }
    function previousPage() {
      if (page.pageNumber > 0) {
        page.pageNumber -= 1;
        getUsers(page.pageNumber, String(route.query.gender));
      }
    }
    function viewPage(index: number) {
      page.pageNumber = index + 1;
      getUsers(page.pageNumber, String(route.query.gender));
    }
    return {
      nextPage,
      previousPage,
      viewPage,
    };
  },
});
</script>
