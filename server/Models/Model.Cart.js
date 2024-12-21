const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  tourId : { type : String , required : true },
  userId : { type : String , required : true }
});

const CartModel = mongoose.model('Cart',cartSchema);

module.exports = CartModel;