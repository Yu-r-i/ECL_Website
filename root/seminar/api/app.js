import express from "express";
import cors from "cors";
import mongoose from "./db.js";

const app = express();
app.use(cors());

const FileSchema = new mongoose.Schema({
    name: String,
    path: String,
    year: Number,
    student: String,
});

const File = mongoose.model("File", FileSchema);

app.get("/api/files", async (req, res) => {
    const data = await File.find().limit(50);
    res.json(data);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
