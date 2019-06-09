const mongoose = require('mongoose');

// Train Schema
const TrainSchema = mongoose.Schema({
    trainId: { type: Number, required: true },
    line: {type: Number, required: true}, 
    speed: {type: Number, required: true},
    location: {
    latitude:{type: Number, defualt: 9.02 },
    longitude:{type: Number, defualt: 38.5 }
      }  
});

const Train= module.exports = mongoose.model('Train', TrainSchema);

// registering new the train
module.exports.addTrain = function(newTrain, callback){
  newTrain.save(callback);
};
//  updating the rrain location
module.exports.updateTrainLocation = function(train_id, location, callback){
  Train.updateOne({trainId:train_id}, {$set: {location: location}}, {new:true}, callback);
};

  // getting the nearby trains 
module.exports.getAllNearlyTrains= function(user_location_lat_min, user_location_lat_max, user_location_long_min, user_location_long_max, callback){
    Train.find({'location.latitude': {$gte: user_location_lat_min, $lt: user_location_lat_max}, 'location.longitude': { $gte: user_location_long_min, $lt: user_location_long_max}},  callback);
  };