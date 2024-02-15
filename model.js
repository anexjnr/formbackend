const mongoose = require("mongoose")
const formschema = new mongoose.Schema(
    {
        name:String,
        age:String,
        mobileno:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model("forms",formschema)