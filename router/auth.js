const express = require("express")
const router = express.Router();
const mess = require('../model/userSchema')

require('../db/conn')

router.post("/contact",async(req,res)=>{
    try {
        const Message = new mess(req.body);
        const addmessage = await Message.save();
        res.status(200).send({addmessage,success:true});
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;