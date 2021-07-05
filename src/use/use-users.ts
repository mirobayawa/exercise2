import useStore from '@/use/use-store';
import router from '@/router';

const { usersList } = useStore();

export function useGetUsers() {
  const getUsers = async (pageNumber: number, gender: string) => {
    const response = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=8&nat=US&gender=${gender}`);
    const data = await response.json();
    usersList.value = data.results;

    router.push({ name: 'Home', query: { page: pageNumber, gender } });
  };
  return {
    getUsers,
  };
}
