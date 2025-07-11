import express, { json } from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";

import userRoutes from "./routes/users.route.js"
//import { join } from "node:path";
const app=express();
const server =createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}));
app.use("/api/v1/users",userRoutes);
app.use("/api/v2/users",userRoutes)


const start =async()=>{
app.set("mongo-user")
    const connectionDb=await mongoose.connect("mongodb+srv://@cluster0.ztazb.mongodb.net/");
    console.log(`MONGO Connected DB host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log("Listing to port 8000");
    });
};
start();
