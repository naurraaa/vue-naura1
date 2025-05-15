export async function getUsers() {
    const response = await fetch("https://vue-naura1.vidymns3155.workers.dev/api/produks");
    return await response.json();
  }