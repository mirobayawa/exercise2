<template>
  <a href="#" @click="open = true" class="text-indigo-600 hover:text-indigo-900">More Details..</a>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="open = false" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
         enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
          leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
         enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
          shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div class="px-4 py-5 sm:px-6">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        User Information
                      </h3>
                      <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        Personal details and info.
                      </p>
                    </div>
                    <div class="border-t border-gray-200">
                      <dl>
                        <div class="flex justify-center">
                          <img class=" h-32 w-32 p-2 rounded-full ring-2 ring-white" :src="$props.user.picture.large" alt="" />
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Full Name
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.name.title }} {{ $props.user.name.first }} {{ $props.user.name.last }}
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            ID
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.id.name }} / {{ $props.user.id.value }}
                          </dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.email }}
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Age
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.dob.age }}
                          </dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Phone/Cell
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.phone }} / {{ $props.user.cell }}
                          </dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Location
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.location.street.number }}, {{ $props.user.location.street.name }},
                            {{ $props.user.location.city }}, {{ $props.user.location.state }}, {{ $props.user.location.country }},
                            {{ $props.user.location.postcode }}
                          </dd>
                        </div>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt class="text-sm font-medium text-gray-500">
                            Date Registered
                          </dt>
                          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {{ $props.user.registered.date }}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border
               border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">
                Close
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang='ts'>
import { PropType, ref } from 'vue';
import {
  Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot,
} from '@headlessui/vue';
import { IUsers } from '@/interfaces/user';

export default {
  name: 'DetailsModal',
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    user: {
      type: Object as PropType<IUsers>,
      required: true,
    },
  },
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
};
</script>
