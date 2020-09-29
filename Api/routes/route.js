const express = require('express');
const app = express();
const messageRoutes = express.Router();
// Require Employee model in our routes module
let Message = require('../models/model');

messageRoutes.route('/add').post(function (req, res) {
    
    let message = new Message(req.body);
    message.save()
      .then(message => {
        res.status(200).json({'message': 'message in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  messageRoutes.route('/').get(function (req, res) { 
    Message.find(function (err, message){
    if(err){
      console.log(err);
    }
    else {
      res.json(message);
    }
  });
});
module.exports = messageRoutes; 