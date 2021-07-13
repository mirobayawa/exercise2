export default function fetchApiService() {
  async function sendRequest(request: Request):Promise<Response|any> {
    const response = await fetch(request);
    const data = await response.json();

    return data;
  }
  return {
    sendRequest,
  };
}
