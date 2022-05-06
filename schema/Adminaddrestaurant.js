const mongoose=require('mongoose');
const myFirstDatabase=mongoose.Schema;
const adminrestaurant=new mongoose.Schema({
    resname:{
        type:String
    },
   
    cat:{
        type:String
    },
    address:{
        type:String
    },
    img:{
        type:String
    },
    
 
});
module.exports=mongoose.model('adminrestaurant',adminrestaurant);