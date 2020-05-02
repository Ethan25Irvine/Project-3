import axios from "axios";


export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the User with the given email
  getUser: function(email) {
    return axios.get("/api/user/" + email);
  },
  login: function(UserData){
    return axios.post("/api/user/login", UserData);
  },
  register: function(UserData){
    return axios.post("/api/user", UserData)
  },
  // Deletes the User with the given email
  deleteUser: function(email) {
    return axios.delete("/api/user/" + email);
  },
  // Saves a User to the database
  saveUser: function(UserData) {
    return axios.post("/api/user", UserData);
  }
};   