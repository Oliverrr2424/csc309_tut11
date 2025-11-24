import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

// Configure CORS to accept requests from the frontend
// Remove trailing slash to ensure clean URL
const FRONTEND_URL = (process.env.FRONTEND_URL || "http://localhost:5173").replace(/\/+$/, "");
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use('', routes);

export default app;