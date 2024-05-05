require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { DB_URL, PORT } = process.env;
const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection failure.");
    console.log(error);
  }
};

const main = async () => {
  await connectDB();
  app.get("/", (req, res) =>
    res.json({ message: "Hello from Products service." })
  );
  app.listen(PORT, () => console.log(`Product service run on port ${PORT}.`));
};

main();
