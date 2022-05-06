const mongoose=require('mongoose');
var Schema=mongoose.Schema;
const payment=new Schema({
 
    Card:{
        type:String
    },
    Number:{
        type:String
    },
    Expire:{
        type:String
    },
    Security:{
      type:String
  },




});
module.exports=mongoose.model('Carddetail',payment);