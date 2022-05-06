const mongoose=require('mongoose');
const myFirstDatabase=mongoose.Schema;
const userdata=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model('userdata',userdata);