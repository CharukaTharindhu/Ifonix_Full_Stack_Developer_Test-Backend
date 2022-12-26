const express = require("express");
const app = express.Router();
const userController= require("../Services/UserService");

app.post('/signup',userController.register);

app.post("/login",userController.login);

module.exports = app;