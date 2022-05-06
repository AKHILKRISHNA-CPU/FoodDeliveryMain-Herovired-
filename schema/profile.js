const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
  username: {
    type:String,
    required:true
},
  userid: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
      type:String,
      required:true
  },
  wallet:{
    type:String,
    required:true
},
password:{
  type:String,
  required:true
},
role:{
  type:String,
  required:true
},
});

module.exports = mongoose.model('profile', profileSchema);