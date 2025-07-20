//  server/server.js

import express from "express";
import { configDotenv } from "dotenv";
import fileUpload from "express-fileupload";
import subRoutes from "./routes/subs.routes.js";
import cors from "cors";


const app = express();
const port = 3000;

configDotenv();           //configure the env
app.use(fileUpload());    //it will parse the mutipart data
app.use(express.json());  // Enable JSON parsing for request bodies
app.use(cors());         //configure cors

app.use("/api/subs",subRoutes);  // Use routes for the "/api/subs" endpoint

app.listen(process.env.PORT, () => {   //access the PORT from the .env
  console.log("server started");         
});

