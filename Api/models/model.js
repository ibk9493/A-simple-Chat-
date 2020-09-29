
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Message = new Schema(
    {
        name: {
      type: String
    },
    message: {
      type: String
    }
}
    , 
        {
        collection: 'Message'
    });
 module.exports = mongoose.model('Message', Message); 