const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Read product data from db.json
const rawData = fs.readFileSync("db.json");
const productData = JSON.parse(rawData);

// Root route to confirm server is running
app.get("/", (req, res) => {
  res.send("Ajio Backend is working!");
});

// Product route
app.get("/product", (req, res) => {
  res.send(productData.product);
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
