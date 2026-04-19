import "dotenv/config";
import express from "express";
import path from "path";
import {connectDb }from "./config/dbConfig.js";
import { fileURLToPath } from "url";
const app = express();
connectDb();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { name: "Riya Priyadarshani" });
});

app.listen(PORT, () => {
  console.log(
    "Server is Running on this " +
      PORT +
      "\n Vist Your Website via this URL:http://localhost:" +
      PORT,
  );
});
