import axios from 'axios';

async function addUserQuery(data) {
  return axios.post('/api/sendquery', data);
}

export default addUserQuery;
