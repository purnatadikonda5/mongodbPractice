const mongoose= require("mongoose");
let ChatSchema= new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        maxLength: 70
    },
    Created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
        requred:true
    }
})

let Chat =mongoose.model("Chat",ChatSchema);
module.exports={Chat};