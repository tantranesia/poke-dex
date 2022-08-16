import axios from './axios';

const getPokes = (user) => {
  return axios.get(`/pokemon`);
};

const Api = {
  getPokes,
};
export default Api;
