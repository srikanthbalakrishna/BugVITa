const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    products:[String]
                        });
                         

module.exports = User = mongoose.model('user',UserSchema);