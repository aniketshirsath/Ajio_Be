const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const rawData = fs.readFileSync("db.json");
const productData = JSON.parse(rawData);

app.get("/", (req, res) => {
  res.send("Ajio Backend is working!");
});

app.get("/men", (req, res) => {
  res.send(productData.men); // Use "products", not "product"
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
