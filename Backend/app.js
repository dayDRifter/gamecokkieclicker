import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors(
    {
    origin: "https://gamecokkieclicker-blif.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
    }
));
app.use(cors()); // This will allow all origins to access the server

export default app;
