//axios calls to the Routes > api > images.js 
import axios from 'axios';

export default {
    //get all images by style and possibly by placement//not sure the formatting
    //sending the style and placement as the req.body
    getImages: (query) => {
        return axios.get('/api/images')
    }
    //get all images by style 
    // getImagesByStyle: (query) => {
    //     return axios.get('/api/images/' + query)
    // }
};

