const express=require("express");
const http=require("http");
const app=express();
const PORT=3000;
const server=http.createServer(app);
app.get("/",(req,res)=>{
    res.send(hello);
    console.log("hello");
})
server.listen((3000),()=>{
    
    console.log(`Server running on http://localhost:${PORT}`);
})