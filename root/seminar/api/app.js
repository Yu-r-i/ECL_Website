import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ecl_archive";
mongoose.connect(MONGO_URI);

const File = mongoose.model("File", new mongoose.Schema({
    name: String, path: String, year: Number, student: String
}));

app.get("/api/files", async (req, res) => {
    const files = await File.find();
    res.json(files);
});

app.listen(4000, () => console.log("API running on :4000"));
