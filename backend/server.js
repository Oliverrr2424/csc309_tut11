import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;
import app from "./index.js";

// Listen on all interfaces (0.0.0.0) for Railway deployment
const server = app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});

server.on("error", (err) => {
    console.error(`cannot start server: ${err.message}`);
    process.exit(1);
});