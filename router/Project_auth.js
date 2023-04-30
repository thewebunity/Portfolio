const express = require('express');
const router = express.Router();
const Project = require("../model/ProjectSchema");

router.post("/project" ,async(req,res)=>{

  const project = new Project(req.body);
  const projectRegister = await project.save();

  if(projectRegister){
    res.status(200).send({success:true,message:"Project Register Successfully"})
  }else{
    res.status(400).send({success:false,message:"Server Error"})
  }

})

router.get("/getproject" ,async(req,res)=>{

  const getprojects = await Project.find({});

  if(getprojects){
    res.status(200).send(getprojects);
  }else{
    res.status(200).send({success:false , message:"server Error"});
  }
    
})
  


module.exports = router;