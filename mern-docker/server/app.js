import express from "express";
const app = express();

import cors from 'cors';

// const allowedOrigins = [
//   'http://localhost:5173',       // For local development
//   'http://client:5173',          // For Kubernetes deployment
// ];

// app.use(cors({
//   origin: function(origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, origin);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

app.use(cors({
  origin: '*', // Allow access from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// For parsing json
app.use(express.json());

import mongoose from "mongoose";
import { mongodbURL } from "./config.js";

console.log("Trying to start mongodb");

mongoose
  .connect(mongodbURL, { dbName: "dfsa" })
  .then(() => {
    console.log("App connected to database");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    console.log(err);
  });

//Importing the routes
import userRoute from "./routes/user.route.js";
app.use("/api/user", userRoute);

//Default URL
app.use("/", (req, res) => {
  res.send("Invalid URL!");
});

export default app;
 