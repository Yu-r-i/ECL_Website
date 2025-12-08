import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());

const mongoURI = "mongodb://mongo:27017/ecl_archive";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
  year: Number,
  student: String,
});

const File = mongoose.model("File", fileSchema);

app.get("/api/files", async (req, res) => {
  const files = await File.find({});
  res.json(files);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
