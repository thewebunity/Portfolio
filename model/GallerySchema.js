const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
Images:{
        type:String,
        required:true
    },
 
})

const Gallery = mongoose.model('GALLERY' ,GallerySchema)

module.exports = Gallery;