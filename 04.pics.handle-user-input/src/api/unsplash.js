import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID mO_3krchfL-gTxVcORoxGenytpNH6ESsfcBZkOG4YGI'
  }
});
