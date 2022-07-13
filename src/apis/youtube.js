import axios from 'axios';
const KEY = 'AIzaSyDV4ZFGGydbyuLmwgdAsKsLb8gS9lKcI4E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
});
