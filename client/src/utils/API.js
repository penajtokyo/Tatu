//axios calls to the Routes > api > images.js
import axios from "axios";

export default {
  // get all images by style and placement query on user page
  getImagesByQuery: (placement, style) => {
    return axios.get("/api/images/query", {
      params: {
        style: style,
        placement: placement
      }
    });
  },

  // get api route to retreive images in the artists pictures column
  getImages: () => {
    return axios.get("/api/images/artistImages");
  },

  // get api route to post images in the artists pictures column
  addImage: photoData => {
    return axios.post("/api/images/artistImages", photoData);
  },

  //post route to send data to backend on account creation along with email and password
  signup: signupData => {
    return axios.post("/api/auth/signup", signupData);
  },

  //used to send login data to db
  login: loginData => {
    return axios.post("/api/auth/login", loginData);
  }
};
