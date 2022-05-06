const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userid: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    // contact:{
    //     type:String,
    //     required:true
    // }
});

module.exports = mongoose.model('users', userSchema);