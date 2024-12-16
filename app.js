const express= require("express");
const app= express();
const mongoose= require("mongoose");
const path= require("path");
let methodOverride= require('method-override');
let {Chat}= require("./models/chat");
app.listen(8080,()=>{
    console.log("listening at port no. 8080");
});
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view-engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
main().then(()=>console.log("connected successfully")).catch((err)=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/chating");
}

app.get("/",(req,res)=>{
    res.send("working properly");
})
app.get("/chats",async(req,res)=>{
    let chats= await Chat.find();
    console.log(chats);
    res.render("allchats.ejs",{chats});
})
app.get("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let chat= await Chat.findById(id);
    res.render("onechat.ejs",{chat});
})
app.post("/chats",(req,res)=>{
   let {from,to,msg} = req.body;
    let chat1= new Chat({
        from:from,
        to:to,
        msg:msg,
        Created_at:new Date(),
        updated_at:new Date()
    });
    chat1.save().then(res=>console.log(res)).catch(err=>console.log(err));
    res.redirect("chats");
})
app.get("/newchat",(req,res)=>{
    // res.send("hai");
    res.render("newchat.ejs");
})
app.get("/updateform/:id",async(req,res)=>{
    let {id}= req.params;
    let chat= await Chat.findById(id);
    console.log(chat);
    res.render("updatechatform.ejs",{chat});
})
app.put("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let msg= req.body.msg;
    console.log(id);
    await Chat.updateOne({_id:id},{$set:{msg:msg,updated_at: new Date()}})
    res.redirect("/chats");
})