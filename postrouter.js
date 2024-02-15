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

router.get("/viewall",async(req,res)=>{
let result = await postmodel.find().populate("userId","name age mobileno pincode email -_id").exec()
res.json(result)
})
module.exports=router