import express from "express";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import VideoRoutes from "./routes/VideoRoutes.js";
import CommentRoutes from "./routes/CommentRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/tokoplay_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("Database connected");
});

app.use(cors());
app.use(express.json());
app.use(VideoRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
