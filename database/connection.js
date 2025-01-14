import mongoose from "mongoose";

export const dbConnection = () => {
  console.log("Attempting to connect to MongoDB with URI:", process.env.MONGO_URI); // Debug log
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "portfolio",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};