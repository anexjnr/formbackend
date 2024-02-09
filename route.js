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
//hashPasswordGenerator(password).then(
   // (hashedPassword)=>
   // {
//console.log(hashedPassword)
//data.password=hashedPassword
//console.log(data)
//let form = new formmodel(data)
//let result = form.save()
//res.json(
  //  {
    //    status:"success"
    //}
//)
const hashedPassword = await hashPasswordGenerator(password)
data.password=hashedPassword
let form = new formmodel(data)
let result = await form.save()
res.json(
    {
        status:"success"
    }
)
    })
//})

router.post("/signin",async(req,res)=>{
    let email = req.body.email
    let data = await formmodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"Invalid user"
            }
        )
    }
    console.log(data)
    let dpPassword = data.password
    let inputPassword = req.body.password
    const match = await bcrypt.compare(dpPassword,inputPassword)
    if(!match)
    {
        res.json(
            {
                status:"Invalid Password"
            }
        )
    }
    res.json(
        {
            status:"success"
        }
    )
})
module.exports=router