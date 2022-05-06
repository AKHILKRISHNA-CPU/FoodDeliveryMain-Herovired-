const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    category_id: {
        type:String,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
 


});

module.exports = mongoose.model('category', categorySchema);