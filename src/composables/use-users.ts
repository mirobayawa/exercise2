import useStore from '@/composables/use-store';
import router from '@/router';
import useApi from './use-api';

const { usersList } = useStore();
const { fetchUsers } = useApi();

export function useGetUsers() {
  async function getUsers(pageNumber: number, gender: string) {
    const data = await fetchUsers(pageNumber, gender);
    usersList.value = data.results;

    router.push({ name: 'Home', query: { page: pageNumber, gender } });
  }
  return {
    getUsers,
  };
}
