import axios from 'axios';

const KEY = 'AIzaSyAu7kWcSIV7NU10leIOtuTFzBIT-SGBlkU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
