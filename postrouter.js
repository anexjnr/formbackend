const express = require("express")
const postmodel = require("./modelpost")
const router = express.Router()

router.post("/addpost",async(req,res)=>{
    let data = req.body
    let postmodelobj = new postmodel(data)
    await postmodelobj.save()
    res.json({
        status:"success"
    })

})
module.exports=router