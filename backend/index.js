import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import compression from "compression";
import helmet from "helmet";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import bannerRoutes from "./routes/banner.route.js";
import newAndStoriesRoutes from "./routes/newAndStories.route.js";
import albumsRoutes from "./routes/albums.route.js";
import eventRoutes from "./routes/event.route.js";
import awardedAlumniRoutes from "./routes/awardedAlumni.route.js";
dotenv.config();

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    process.exit(1);
  }
};

connectDB();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/news-and-stories", newAndStoriesRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/awarded-alumni", awardedAlumniRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Server is running successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
