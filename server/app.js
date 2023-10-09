const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://db/demo").then(
  () => {
    console.log("Connected to MongoDB");
  },
  (err) => {
    console.error("Failed to connect to MongoDB", err);
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
