import useStore from '@/composables/use-store';
import router from '@/router';
import useApi from './use-api';

const { usersList } = useStore();
const api = useApi();

export function useUsers() {
  async function getUsers(pageNumber: number, gender: string) {
    const data = await api.getUsers(pageNumber, gender);
    usersList.value = data.results;

    router.push({ name: 'Home', query: { page: pageNumber, gender } });
  }
  return {
    getUsers,
  };
}
