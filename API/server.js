import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";
import connectDB from "./config/db.js";

dotenv.config();

//create app
const app = express();

//enable cors
const whitelist = ["http://localhost:3000", "http://localhost:4000"];
const corsOptions = {
  origin: (origin, callback) => {
    const exist = whitelist.some((domain) => domain === origin);
    if (exist) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// app.use(cors(corsOptions));
app.use(cors());

//connect Data Base
connectDB();

//parse body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
  console.log(`El servidor esta funcionando en: ${host}:${port}`);
});
