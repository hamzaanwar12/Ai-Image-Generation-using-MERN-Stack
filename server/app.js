import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { postRouter, dellERouter } from "./Routes/indexRoutes.js";
import ConnectDBwithApp from "./database.js"; // Import ConnectDBwithApp function

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
app.get("/", async (req, res) => {
  try {
    res.status(200).send("Check data");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/api/v1/post", postRouter);
app.use("/api/v1/dellE", dellERouter);



export default app