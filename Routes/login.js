const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});

module.exports = routes;
