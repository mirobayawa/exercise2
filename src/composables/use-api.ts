import userService from '@/service/fetch-api-service';

const { sendRequest } = userService();
const url = 'https://randomuser.me/api/?';

const searchParams = new URLSearchParams();
searchParams.set('results', '8');
searchParams.set('nat', 'US');

export default function useApi() {
  async function getUsers(pageNumber: number, gender: string) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    searchParams.set('page', pageNumber.toString());
    searchParams.set('gender', gender);
    const request = new Request(`${url}${searchParams}`, options);

    const data = await sendRequest(request);
    return data;
  }

  return {
    useApi,
    getUsers,
  };
}
