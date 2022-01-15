const express = require("express");
const routes = express.Router();

routes.get("/login", (req, res, next) => {
  res.send(
    `<form action="/login/users" method="POST"><input type="text" name="name"><button type="submit">submit</button></form>`
  );
});

module.exports = routes;
