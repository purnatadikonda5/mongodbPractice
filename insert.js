let {Chat}= require("./models/chat");
const mongoose= require("mongoose");
main().then(()=>console.log("connected successfully")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chating");
}
// Chat.insertMany([
//     {
//         from:"purna",
//         to:"kittu",
//         msg:"era em sangathi",
//         Created_at:new Date(),
//         updated_at:new Date()
//     },
//     {
//         from:"Kittu",
//         to:"sairam",
//         msg:"hai ra",
//         Created_at:new Date(),
//         updated_at:new Date()
//     },
//     {
//         from:"sairam",
//         to:"pranav",
//         msg:"hehe",
//         Created_at:new Date(),
//         updated_at:new Date()
//     },
//     {
//         from:"purna",
//         to:"pranav",
//         msg:"hahaha",
//         Created_at:new Date(),
//         updated_at:new Date()
//     },
// ]);
