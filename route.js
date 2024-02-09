const express=require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

const formmodel = require("./model")

hashPasswordGenerator=async(password)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

router.post("/add",async (req,res)=>
{
let {data} = {"data": req.body}
let password=data.password
hashPasswordGenerator(password).then(
    (hashedPassword)=>
    {
console.log(hashedPassword)
data.password=hashedPassword
console.log(data)
let form = new formmodel(data)
let result = form.save()
res.json(
    {
        status:"success"
    }
)
    })
})
module.exports=router