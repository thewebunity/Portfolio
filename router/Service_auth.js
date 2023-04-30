const express = require('express');
const router = express.Router();
const Service = require("../model/ServiceSchema")

router.post("/service" ,async(req,res)=>{

  const service = new Service(req.body);
  const serviceRegister = await service.save();

  if(serviceRegister){
    res.status(200).send({success:true,message:"Service Register Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getservice" ,async(req,res)=>{

  const getservice = await Service.find({});

  if(getservice){
    res.status(200).send(getservice);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;