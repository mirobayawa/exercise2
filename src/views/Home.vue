<template>
  <div class="flex flex-col items-center">
    <div class="relative px-4 py-2 bg-white shadow-lg sm:rounded-3xl sm:w-1/4
      md:rounded-3xl md:w-2/4 flex flex-col items-center mb-4">
      <div class="font-medium text-xl font-body text-gray-500">
        Random Users List
      </div>
    </div>
    <div class="w-7/12 flex items-start mb-2">
      <Gender/>
    </div>
    <div class="relative w-7/12 space-y-1">
      <UsersList/>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UsersList from '@/components/users-list.vue';
import Gender from '@/components/gender-select.vue';
import Pagination from '@/components/pagination.vue';

export default defineComponent({
  name: 'Home',
  components: {
    UsersList,
    Gender,
    Pagination,
  },
});
</script>
