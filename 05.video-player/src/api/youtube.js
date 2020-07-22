import axios from 'axios';

const KEY = 'AIzaSyAbgxNdYMg4_aTB4Tm-hakYnYglyylDzms';

// Create pre-config instance of axios
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
