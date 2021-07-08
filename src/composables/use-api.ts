import userService from '@/service/users-service';

export default function useApi() {
  const { fetchUsers } = userService();

  return {
    fetchUsers,
  };
}
