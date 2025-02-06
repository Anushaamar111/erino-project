import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import authRoutes from "./routes/authRoute.js";
import expenseRoutes from "./routes/expenseRoute.js";

dotenv.config();
const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());

// Update allowedOrigins to include the frontend URL directly
// const allowedOrigins = process.env.VITE_FRONTEND_URL;

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
