import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mZT5cpEOg3ah3T15fdTyfN_MB2tMec4qVtltR29BT5E',
    },
});
