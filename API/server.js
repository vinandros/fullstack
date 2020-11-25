import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import connectDB from "./config/db.js";

dotenv.config();

//create app
const app = express();

connectDB();

//parse body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`El servidor esta funcionando en: ${host}:${port}`);
});
