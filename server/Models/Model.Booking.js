const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingWith : { type : String },
  bookedBy : { type : String , required : true },
  tourId : { type : String , required : true }
});

const BookingModel = mongoose.model('Booking',bookingSchema);

module.exports = BookingModel;