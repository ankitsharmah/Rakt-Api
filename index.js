import express from 'express'
import cors from 'cors'
// const app = express();
import dotenv from 'dotenv';

import { app, server } from './socket/socket.js';
import connectDb from './config/db.js';
import AuthRoutes from "./routes/AuthRoutes.js"
import bloodRoutes from "./routes/bloodRoutes.js"
import bloodBankRoutes from "./routes/bloodBankRoutes.js"
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); // <-- Add this to parse cookies

// CORS configuration
const corsOptions = {
    origin: (origin, callback) => {
        // Allow all origins in development
        callback(null, true);
    },
    credentials: true, // This allows cookies and headers (like authorization) to be sent
};
app.use(cors(corsOptions));

app.use("/api/v1/auth",AuthRoutes)
app.use("/api/v1/blood",bloodRoutes)
app.use("/api/v1/blood-bank",bloodBankRoutes)

app.get("/",(req,res)=>{
    return res.status(200).json({
            massage:"server is up and jai shankar",
            success:true
    })
})

// app.listen()
const port = process.env.PORT || 4000

server.listen(port, () => {
    connectDb();
    console.log(`running on port ${port}`);
});