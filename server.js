import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";
import path from 'path';

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = [
  'http://localhost:5173',
  'https://authentication-frontend-l0n5jpqpj-nischal-sainis-projects.vercel.app', 
  'https://authentication-frontend-sand.vercel.app', 
  'https://authentication-frontend-v1s1.onrender.com',
];



app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.listen(port, ()=> console.log(`Server started on PORT: ${port}`));

// API Endpoints
app.get('/', (req, res) => res.send("API Working fine"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

 
