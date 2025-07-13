import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


dotenv.config();
const app=express();


const PORT=process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));




app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
    connectDB();
}) 