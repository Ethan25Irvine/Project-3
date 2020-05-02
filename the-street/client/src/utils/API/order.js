import axios from "axios";


export default {
  getOrders: function(){
    return axios.get("/api/order");
  },
  createOrder: function(OrderData){
    return axios.post("/api/order", OrderData)
  },

};