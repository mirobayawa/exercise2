export default function userService() {
  const url = 'https://randomuser.me/api/';
  const limit = 8;
  const nat = 'US';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function fetchUsers(page:number, gender:string) {
    const response = await fetch(`${url}?results=${limit}&page=${page}&gender=${gender}&nat=${nat}&noinfo`, options);
    const data = await response.json();

    return data;
  }
  return {
    fetchUsers,
  };
}
