const express = require("express");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error(error.message);
//     process.exit(1);
//   }
// };
// connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
