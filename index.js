import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongoURL);
        console.log("connected mongo")
      } catch (error) {
        throw error;
      }
};


app.listen(4000, ()=>{
    connect();
    console.log("connected")
})

