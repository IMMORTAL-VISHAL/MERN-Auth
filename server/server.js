import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// API EndPoints
app.get("/", (req, res) => res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user',userRouter)

app.listen(port, () => console.log(`Server started on PORT : ${port}`));
