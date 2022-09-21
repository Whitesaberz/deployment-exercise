const express = require("express");
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../client/index.html")));

app.use(express.static(path.join(__dirname, "../client")));

app.post("/register", (req, res) => res.status(200).send("Registered"));

app.listen(port, () => {
  console.log("connected to port " + port);
});
