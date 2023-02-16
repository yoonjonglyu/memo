import axios from 'axios';

export async function test() {
  const { data } = await axios.get('/test');
  console.log(data);
}
