const express = require("express");
const router = express.Router();

var names = ["me", "you", "them", "us", "her", "him", "they", "y'all"];
router.post("/pairs/", async (req, res, next) => {
  res.status(200).json(names);
});

router.post("/traditional/", async (req, res, next) => {
  res.status(200).json(names);
});

module.exports = router; //exporting the router
