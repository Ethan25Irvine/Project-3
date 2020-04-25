const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    index:true
  },
  password: {
    type: String,
    required: true,
    index:true
  },
  isAdmin: {
      type: Boolean,
      default: false,
      index:true
  }  
});

const Users = mongoose.model('User', userSchema);
module.exports = Users;