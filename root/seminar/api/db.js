import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ecl_archive", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default mongoose;
