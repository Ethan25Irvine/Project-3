import axios from "axios";


export default {
  getCarts: function(){
    return axios.get("/api/cart");
  },
  // Gets the Cart with the given userId
  getCart: function(id) {
    return axios.get("/api/cart/" + id);
  },
  createCart: function(CartData){
    return axios.post("/api/cart", CartData)
  },
  // Deletes the Cart with the given cartId
  deleteCart: function(id) {
    return axios.delete("/api/Cart/" + id);
  },
//   updates Cart with the given cartId
  updateCart: function(id){
      return axios.put("api/cart/"+ id)
  }
};   