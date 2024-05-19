const express = require("express");
const cors = require("cors");
const User = require("./models/user.models.js");
require("./models/config.js");
const { connect } = require("mongoose");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
      console.log(user);
    } else {
      res.send({ result: "No user found" });
    }
  }
});

app.post("/signup", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  res.send(result);
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
