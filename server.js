const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const postController = require("./controllers/PostController");
const userController = require("./controllers/UserController");
const commController = require("./controllers/CommentController");
//middleware usage
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/post", postController);
app.use("/user", userController);
app.use("/comm", commController);

mongoose
  .connect(
    "mongodb+srv://charuka:charuka@cluster0.2wmudmg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000);
