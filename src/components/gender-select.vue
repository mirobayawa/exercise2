<template>
  <Listbox as="div" v-model="selected" class="w-32">
    <ListboxLabel class="block text-left text-sm font-medium text-gray-700">
      Gender
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md
       shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1
        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <span class="ml-3 block truncate">{{ selected }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class=
      "opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56
         rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto
          focus:outline-none sm:text-sm">
          <ListboxOption @click="getUsersByGender()" as="template" v-for="option in genderOptions"
          :key="option" :value="option" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900',
             'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ option }}
                </span>
              </div>
              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600',
               'absolute inset-y-0 right-0 flex items-center pr-4']">
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,
} from '@headlessui/vue';
import { useRoute } from 'vue-router';
import { useGetUsers } from '@/composables/use-users';

export default defineComponent({
  name: 'Gender',
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  },
  setup() {
    const route = useRoute();
    const genderOptions = ([
      'All',
      'Male',
      'Female',
    ]);
    const selected = ref(genderOptions[0]);
    const { getUsers } = useGetUsers();

    function getUsersByGender() {
      getUsers(Number(route.query.page), selected.value.toLowerCase());
    }

    return {
      genderOptions,
      selected,
      getUsers,
      getUsersByGender,
    };
  },
});
</script>
