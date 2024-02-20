const dotenv = require("dotenv");
const connectDB = require("./config/db");
const express = require("express");
const authRoutes = require("./routes/authRoutes.js");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

//routes
app.use("", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
