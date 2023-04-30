const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    Images:{
        type:String,
        required:true
    }
})

const Certification = mongoose.model('CERTIFICATION' ,CertificationSchema)

module.exports = Certification;