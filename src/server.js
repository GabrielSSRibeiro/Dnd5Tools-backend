const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@dnd5tools.xvyjhz0.mongodb.net/Dnd5Tools`)
  .then((response) => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(cors());
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");

  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
