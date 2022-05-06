const mongoose=require('mongoose');
const myFirstDatabase=mongoose.Schema;
const registerdata=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model('registerdata',registerdata);