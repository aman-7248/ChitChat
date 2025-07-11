import express from "express"


const app=express();

app.get("/hi",(req,res)=>{
    res.send("hello");
})

app.listen(5001,()=>{
    console.log("server listening on port 5001");
})