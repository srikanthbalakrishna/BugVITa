const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const BugSchema = new Schema ({
    name: {
        type: String ,
        required:   true
    },
    author:{
        type:String,
        required:true
    },
    product:{
        type:String,
        default:'sampleBugs'
    },
    description:
    {
        type:String,
        default:'<No Description>'
    },
    date: {
        type: Date,
        default: Date.now
    }
                        });
                         

module.exports = Bug = mongoose.model('bug',BugSchema);