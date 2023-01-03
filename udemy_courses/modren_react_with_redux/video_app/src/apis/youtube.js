import axios from 'axios';


const KEY = "ADD YOUR OWN KEY"

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

export { KEY, youtube };