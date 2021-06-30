<template>
  <div class="relative px-4 py-2 bg-white shadow-md rounded-2xl w-full
    font-medium text-xl font-body text-gray-500 flex flex-row items-start mt-2 border-2
    justify-around h-12 justify-items-center content-center">
    <img class="w-10 h-8 rounded-full mx-auto mr-5" :src="users.picture.thumbnail" alt="" >
    <div class="w-full flex flex-row items-start">
      {{ users.name.title }}. {{ users.name.first }} {{ users.name.last }}
    </div>
    <div class="w-full flex flex-row ml-5">
      {{ gender }}
    </div>
    <div class="mr-5">
      View
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { IUsers } from '@/interfaces/user';

export default defineComponent({
  name: 'UsersList',
  props: {
    users: {
      type: Object as PropType<IUsers>,
      required: true,
    },
  },
  setup(props) {
    const gender = ref(String(props.users.gender).charAt(0).toUpperCase()
      + String(props.users.gender).slice(1));
    return {
      gender,
    };
  },
});
</script>
