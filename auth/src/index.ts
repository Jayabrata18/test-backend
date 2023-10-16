import mongoose from "mongoose";
import { app } from "./app";
const PORT = process.env.PORT || 4000;


const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGODB_PROD) {
    throw new Error("MONGODB_PROD must be defined");
  }
  const db = process.env.MONGODB_PROD;

  try {
    await mongoose.connect(db);
    console.log("Connected to database");
  } catch (err) {
    console.log("connection failed", err);
  }

  app.listen(PORT, () => {
    console.log("Listening on port 4000!!!!!!!!");
  });
};

start();
