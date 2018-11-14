
const mongoose=require('mongoose');
const schema = new mongoose.Schema ({
    workspaceid:Number,
    workspacename:String,
    capacity:Number,
    type:String,
    availability:Boolean,
    rates:Array 

});

module.exports = schema;