const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./router/index");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || "5000";
const URI = process.env.DATABASE_URL;
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB conneted");
  } catch (error) {
    console.log(error.message);
  }
};
app.use(cors());

connectDB();
router(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
