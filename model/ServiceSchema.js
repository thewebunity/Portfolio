const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    Images:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
})

const Service = mongoose.model('SERVICE' ,ServiceSchema)

module.exports = Service;