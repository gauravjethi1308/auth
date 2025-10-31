import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRouter from './routes/authroutes.js'

const app = express();
const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/auths';

const allowedOrigins = ['http://localhost:5173']

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: allowedOrigins || 'http://localhost:5173'
}));

// MongoDB connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// API routes
app.get('/', (req, res) => {
    res.json({ 
        message: "API is working fine",
        endpoints: {
            register: "POST /api/auth/register",
            login: "POST /api/auth/login",
            logout: "POST /api/auth/logout"
        }
    });
});

app.use('/api/auth', authRouter);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ 
        success: false,
        message: "Route not found" 
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});