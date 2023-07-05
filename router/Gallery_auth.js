const express = require('express');
const router = express.Router();
const Gallery = require("../model/GallerySchema");

router.post("/gallery" ,async(req,res)=>{

  const gallery = new Gallery(req.body);
  const galleryRegister= await gallery.save();

  if(galleryRegister){
    res.status(200).send({success:true,message:"Images  Upload Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getgallery" ,async(req,res)=>{

  const getgallerys = await Gallery.find({});

  if(getgallerys){
    res.status(200).send(getgallerys);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;
