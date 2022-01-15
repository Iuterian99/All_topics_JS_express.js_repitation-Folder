const express = require("express");
const routes = express.Router();

routes.use("/posts", (req, res, next) => {
  res.send(`<div><h1>Posts</h1><p>katta bo'lsam post bo'laman</p></div>`);
});

module.exports = routes;
