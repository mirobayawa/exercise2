<template>
  <div v-if="usersList" class="flex flex-col items-center">
    <div class="relative px-4 py-3 bg-white shadow-lg sm:rounded-3xl sm:w-1/4
    md:rounded-3xl md:w-2/4 flex flex-col items-center mb-10">
      <div class="font-medium text-3xl font-body text-gray-500">
        Random Users List
      </div>
    </div>
    <div class="relative w-2/4 space-y-1" v-for="user in usersList" :key="user.login.uuid">
      <UsersList :users="user"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import UsersList from '@/components/users-list.vue';
import { IUsers } from '@/interfaces/user';

export default defineComponent({
  name: 'Home',
  components: {
    UsersList,
  },
  setup() {
    // change this to composables
    const usersList = ref<IUsers[]>([]);

    // change this to fetch service
    const getNames = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10&nat=US');
      const data = await response.json();
      data.results.forEach((result: IUsers) => {
        usersList.value.push(result);
      });
      console.log(usersList.value);
    };

    onMounted(() => {
      getNames();
    });
    return {
      usersList,
    };
  },
});
</script>
