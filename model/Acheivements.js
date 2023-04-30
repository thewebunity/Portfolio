const mongoose = require('mongoose');

const AcheivementsSchema = new mongoose.Schema({
Images:{
        type:String,
        required:true
    },
 
})

const Acheivements = mongoose.model('Acheivements' ,AcheivementsSchema)

module.exports = Acheivements;