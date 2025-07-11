import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js'
dotenv.config();


const app=express();
const PORT=process.env.PORT || 4000;
app.get("/hi",(req,res)=>{
    res.send("hello");
})


app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
    connectDB();
}) 