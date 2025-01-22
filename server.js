import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
connectDB();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://feauth-abbhf1vtk-nischal-sainis-projects.vercel.app'
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// API Endpoints
app.get('/', (req, res) => res.send("API Working fine"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

export default app; 
