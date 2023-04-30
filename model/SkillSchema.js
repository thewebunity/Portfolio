const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    Images:{
        type:String,
        required:true
    }
})

const Skill = mongoose.model('SKILL' ,skillSchema)

module.exports = Skill;