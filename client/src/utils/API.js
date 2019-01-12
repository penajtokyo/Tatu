//axios calls to the Routes > api > images.js 
import axios from 'axios';

export default {
    //this is get from artist page to show all their images
    // getImages: (id) => {
    //     return axios.get('/api/images/:id')
    // },
    //get all images by style and placement query on user page
    // WORKING
    getImagesByQuery: (placement, style) => {
        return axios.get('/api/images/query', {
           params: {
                style: style,
                placement: placement
           }
        })
    },
    //post api route to save pictures (Andi is creating)

    //post route to send data to backend on account creation along with email and password
    signup: (signupData) => {
        return axios.post('/api/auth/signup', signupData)
    },
    //used to send login data to db
    login: (loginData) => {
        return axios.post('/api/auth/login', loginData)
    }
};

