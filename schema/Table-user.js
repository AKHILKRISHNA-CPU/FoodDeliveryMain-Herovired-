const mongoose=require('mongoose');
var Schema=mongoose.Schema;
const tableuser=new Schema({
 
    First_Name:{
        type:String
    },
    email_id:{
        type:String
    },
    Phone:{
        type:String
    },
    Full_Address:{
      type:String
  },
  City:{
    type:String
},
Postal_code:{
  type:String
},


});
module.exports=mongoose.model('Address',tableuser);