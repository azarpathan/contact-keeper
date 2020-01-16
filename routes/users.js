const express = require("express");
const router = express.Router();

// @route POST api/users
// @desc user register a user
// @access public
router.post("/", (req, res) => {
  res.send("Resister a user");
});

module.exports = router;
