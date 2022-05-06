const mongoose=require('mongoose');
const myFirstDatabase=mongoose.Schema;
const manageritem=new mongoose.Schema({

name:{
    type:String,
    required:true
},
des:{
    type:String,
    required:true
},

price:{
type:String,
required:true
},
itemname:{
type:String,
required:true
},
img:{
type:String,
required:true
},
cat:{
    type:String,
    required:true
},

 
});
module.exports=mongoose.model('manageritem',manageritem);