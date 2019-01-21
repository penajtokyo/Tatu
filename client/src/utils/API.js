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

  //return all images with no query from the db to show on defualt user page
  getAllImages: () => {
    return axios.get('api/images/allImages');
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

  // used to send login data to db
  login: loginData => {
    return axios.post("/api/auth/login", loginData);
  },

  logout: () => {
    return axios.get("api/auth/logout");
  },

  // used to update artist information in db
  updateArtistInfo: updateData => {
    return axios.put("/api/admin/artistUpdate", updateData);
  },

  //used to verify address
  verifyAddress: (address)=> {
    return axios.get(address);
  }
};