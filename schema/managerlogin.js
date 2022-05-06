const mongoose = require ("mongoose");
const myFirstDatabase = mongoose.Schema;
const managerdata = new mongoose.Schema({ 
    email:{ 
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },

});
module.exports=mongoose.model('managerdata',managerdata);