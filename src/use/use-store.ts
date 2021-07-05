import { ref } from 'vue';
import { IUsers } from '@/interfaces/user';

const userList = ref<IUsers[]>([]);

export default function useStore() {
  const usersList = ref(userList);

  return {
    usersList,
  };
}
