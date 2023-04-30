const express = require('express');
const router = express.Router();
const Certification = require("../model/Certification");

router.post("/Certification" ,async(req,res)=>{

  const certification = new Certification(req.body);
  const CertificationRegister = await certification.save();

  if(CertificationRegister){
    res.status(200).send({success:true,message:"Certification Register Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getCertification" ,async(req,res)=>{

  const getCertification = await Certification.find({});

  if(getCertification){
    res.status(200).send(getCertification);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;