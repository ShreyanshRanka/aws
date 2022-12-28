const express = require("express");
const app=express();
const path=require("path");
app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,resp){
    resp.sendFile("./public/first.html",{root:__dirname});
})
app.listen(8000);
console.log("runiing on pirt number 8000");