const express = require("express");
const router = express.Router();

// "/login/users"
router.post("/users", (req, res, next) => {
  console.log(req.body);

  res.redirect("/posts");
});

module.exports = router;
