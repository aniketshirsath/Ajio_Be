const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Read JSON data
const rawData = fs.readFileSync("db.json");
const productData = JSON.parse(rawData);

// Default route
app.get("/", (req, res) => {
  res.send("Ajio Backend is working!");
});

// Routes
app.get("/cart", (req, res) => {
  res.send(productData.cart);
});

app.get("/men", (req, res) => {
  res.send(productData.men);
});

app.get("/men-shirts", (req, res) => {
  res.send(productData["men-shirts"]);
});

// Server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
