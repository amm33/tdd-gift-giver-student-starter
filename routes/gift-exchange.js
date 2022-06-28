// const express = require("express");
// const router = express.Router();
// const GiftExchange = require("../models/gift-exchange");
// const { BadRequestError } = require("../utils/errors");

// var names = ["me", "you", "them", "us", "her", "him", "they", "y'all"];
// router.post("/pairs", async (req, res, next) => {
//   // res.status(200).json(names);
//   try {
//     const gift = req.body.names;
//     if (!gift || gift.length < 2) {
//       return next(new BadRequestError("Invalid input"));
//     }
//     const g = await GiftExchange.pairs(gift);
//     res.status(200).json(g);
//   } catch (e) {
//     next(e);
//   }
// });

// router.post("/traditional/", async (req, res, next) => {
//   // res.status(200).json(names);
//   try {
//     const gift = req.body.names;
//     if (!gift || gift.length < 2) {
//       return next(new BadRequestError("Invalid input"));
//     }
//     const g = await GiftExchange.traditional(gift);
//     res.status(200).json(g);
//   } catch (e) {
//     next(e);
//   }
// });

// module.exports = router; //exporting the router

const GiftExchange = require("../models/gift-exchange");

const express = require("express");
const { BadRequestError } = require("../utils/errors");

const router = express.Router();

router.post("/pairs", async (req, res, next) => {
  // res.status(200).json({names : []})
  try {
    const newGift = req.body.names;
    if (!newGift || newGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }
    const gift = await GiftExchange.pairs(newGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res, next) => {
  try {
    const newGift = req.body.names;

    if (!newGift || newGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }

    const gift = await GiftExchange.traditional(newGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
