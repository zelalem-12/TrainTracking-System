'user strict';

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Train = require('../models/train');

// Register train
router.post('/', (req, res, next) => {
  const newTrain = new Train({
  trainId: req.body.trainId,
  line: req.body.line,
  speed: req.body.speed
  });
  Train.addTrain(newTrain, (err,train) => {
    if(err) throw err;
    if(!train){
      res.json({
        success: false,
         msg:'Failed to register Train'
        });
    } else {
      res.json({
        success: true, 
        msg:'Train registered',
        data: train
      });
    }
  });
});

// update train location 
router.post('/update-location', (req, res) => {
  const 
    trainId = req.body.trainID,
    location ={
    latitude: req.body.latitude,
    longitude: req.body.longitude
    }; 
    if(location.latitude-0.005 <= location.latitude+0.005 && location.longitude-0.005 <= location.longitude+0.005){
      station = "";
    }

  Train.updateTrainLocation(trainId, location, (err, train) => {
    if (err) throw err
         else {
           res.json({train:train});
           }
});
});

router.get('/lcd-display/:trainID',(req, res) => {
  const trainID = req.params.trainID;
  Train.getStationAndTime(Train, (err, train) => {
    if (err) throw err
    if(!train) {res.json({success: false, msg: 'Ops There is no train for this ID'});}
    else res.send(train.ariving_time);
  });
});

// get nearlly trains
router.get('/get-train/:lat/:long', (req, res) => {
  const 
      user_location_lat = Number(req.params.lat),
      user_location_long = Number(req.params.long);
const
      latitude_range = 1,
      longitude_range = 1.5;
      user_location_lat_min = user_location_lat-latitude_range,
      user_location_lat_max = user_location_lat+latitude_range,

      user_location_long_min = user_location_long-longitude_range,
      user_location_long_max = user_location_long+longitude_range;
      
  Train.getAllNearlyTrains(user_location_lat_min, user_location_lat_max, user_location_long_min, user_location_long_max, (err, nearlyTrains) => {
         if (err) throw err
         if(!nearlyTrains || nearlyTrains.length ==0) {res.json({success: false, msg: 'Ops There is no train near to you'});}
       else {
        //  console.log(nearlyTrains);
         const trains = [];
        var R = 6371e3; // metres
        var φ1 = user_location_lat * (Math.PI/180);
        var λ1 =  user_location_long* (Math.PI/180);
        for (let train of nearlyTrains){
          var φ2 = train.location.latitude* (Math.PI/180);
          var λ2 = train.location.longitude* (Math.PI/180);
          var Δφ = Math.abs(φ2-φ1)* (Math.PI/180);
          var Δλ = Math.abs(λ2-λ1)* (Math.PI/180);
          
          var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ/2) * Math.sin(Δλ/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
         train.ariving_time = (R * c) / train.speed;  
          // console.log(train.ariving_time);
           console.log(train);
          trains.push(train);
        }
          res.json({success: true, data: trains }); }
       });
     });
    



module.exports = router;