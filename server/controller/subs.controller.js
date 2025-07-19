// server/controller/subs.controller.js

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);  //converts the module URL to a file path
const __dirname = path.dirname(__filename);   //get the current file directory

export const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.video) {   //if there is no file available, return error to the client
      return res.status(400).json({ error: "No video uploaded" });
    }

    const videoFile = req.files.video;   //access the video
    const uploadDir = path.join(__dirname, "..", "uploads");   //path to upload the video temporarily

    if (!fs.existsSync(uploadDir)) {   //check if the directory exists
      fs.mkdirSync(uploadDir);      //if not create a new one
    }

    const uploadPath = path.join(uploadDir, videoFile.name);  

    await videoFile.mv(uploadPath);  //it moves the video from the buffer to the "upload" folder

    return res.status(200).json({ message:"file uploaded sucessfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal server error: " + error.message });
  }
};