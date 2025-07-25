import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { app,server } from "./lib/socket.js";
//deploy 1
import path from "path";

dotenv.config();



const PORT=process.env.PORT || 4000;

//2
const __dirname=path.resolve();

//app.use(express.json());// this is used to exract JSON data out of the body.
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));




app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);


//3
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));

    })
    


}




server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
    connectDB();
}) 