// import mongoose from 'mongoose'
// import { DB_NAME} from "./constants"

// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed ", error);
  });

/*
import express from 'express';

const app = express();

;( async() => {
    try {
        // alway use await and async
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error",( error) => {
            console.log("error: ",error);
            throw error
        }) 

        app.listen(process.env.PORT, () => {
            console.log(`Server is listening at port ${proces.env.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        throw err
    }
})()

*/
