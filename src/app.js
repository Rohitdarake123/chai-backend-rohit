import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// using above package only server access cookie 
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
); // adding middleware

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));// generally url is encoded when we search 
app.use(express.static("public"));
app.use(cookieParser());


// routes 
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users",userRouter);
export { app };
