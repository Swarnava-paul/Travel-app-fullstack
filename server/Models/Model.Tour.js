const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
 creatorName : { type : String , required : true },
 tourBeginDate : { type : String , required : true },
 thumbnailUrl : { type:String , required : true },
 tourDescription : { type : String , required : true },
 tourBudgetPerPerson : { type : String , required : true }
});

const TourModel = mongoose.model('Tour',tourSchema);

module.exports = TourModel;