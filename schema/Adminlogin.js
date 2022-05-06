const mongoose = require ("mongoose");
const myFirstDatabase = mongoose.Schema;
const admindata = new mongoose.Schema({ 
    email:{ 
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model('admindata',admindata);