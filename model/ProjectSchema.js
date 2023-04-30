const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    Images:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
    
})

const Project = mongoose.model('PROJECT' ,ProjectSchema)

module.exports = Project;