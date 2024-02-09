const mongoose = require("mongoose")
const postschema = new mongoose.Schema(
    {
       userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"forms"
       },
       post:{
        type:String,
        required:true
       },
       postDate:{
        type:Date,
        default:Date.now
       }
    }
)

module.exports = mongoose.model("postss",postschema)