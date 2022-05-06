const mongoose = require('mongoose');
const ordersSchema = mongoose.Schema({
    orderid: {
        type:String,
        required:true
    },
    items:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    status:{
      type:String,
      required:true
  },
  userid:{
    type:String,
    required:true
},
date:{
  type:String,
  required:true
},
restaurantid:{
  type:String,
  required:true
},
});

module.exports = mongoose.model('orders', ordersSchema);