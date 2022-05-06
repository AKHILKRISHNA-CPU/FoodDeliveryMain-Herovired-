const mongoose = require('mongoose');
const subcategorySchema = mongoose.Schema({
    sub_category_id: {
        type:String,
        required:true
    },
    sub_category_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category_id: {
      type:String,
      required:true
  },


});

module.exports = mongoose.model('subcategory', subcategorySchema);