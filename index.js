import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";
import Router from "./routes/route.js";

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use("/api/v1",Router)



dotenv.config()
const PORT = process.env.PORT_NO
app.listen(PORT,()=>{
    console.log(`Server is running at port no: ${PORT}`);
})

//DB config
Connection()