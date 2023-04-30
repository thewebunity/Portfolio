const express = require('express');
const router = express.Router();
const Skill = require("../model/SkillSchema");

router.post("/skill" ,async(req,res)=>{

  const skill = new Skill(req.body);
  const SkillRegister = await skill.save();

  if(SkillRegister){
    res.status(200).send({success:true,message:"Skill Register Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getskill" ,async(req,res)=>{

  const getskill = await Skill.find({});

  if(getskill){
    res.status(200).send(getskill);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;