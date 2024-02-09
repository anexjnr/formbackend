const express=require("express")
const router = express.Router()

const formmodel = require("./model")


router.post("/add",async (req,res)=>
{
let data = req.body
let form = new formmodel(data)
let result = await form.save()
res.json(
    {
        status:"success"
    }
)
})


module.exports=router