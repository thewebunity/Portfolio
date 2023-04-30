const express = require('express');
const router = express.Router();
const Acheivements= require("../model/Acheivements");

router.post("/Acheivements" ,async(req,res)=>{

  const acheivements = new Acheivements(req.body);
  const AcheivementsRegister= await acheivements.save();

  if(AcheivementsRegister){
    res.status(200).send({success:true,message:"Acheivements  Upload Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getAcheivements" ,async(req,res)=>{

  const getAcheivements = await Acheivements.find({});

  if(getAcheivements){
    res.status(200).send(getAcheivements);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;