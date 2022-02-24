const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./router/index");
const cors = require("cors");

const port = 5000;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://haiacoustic25:1234@shopmaytinh.ba8tb.mongodb.net/ShopMayTi?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB conneted");
  } catch (error) {
    console.log(error.message);
  }
};
app.use(cors())

connectDB();
router(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
