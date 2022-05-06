const mongoose=require('mongoose');
var Schema=mongoose.Schema;
const userrating=new Schema({
 
    range:{
        type:Number
    },
    review:{
        type:String
    },
    matter:{
        type:String
    }
});
module.exports=mongoose.model('Reviews',userrating);