const fromrouter=require("./route")
const postrouter = require("./postrouter")

const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app = express()

//middleware

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://anex:anex123@cluster0.bgkikbl.mongodb.net/formDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

//routing
app.use("/api/post",postrouter)

app.use("/api/signin",fromrouter)

app.listen(3001,()=>{
    console.log("server running")
})