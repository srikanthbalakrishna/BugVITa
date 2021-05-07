//separate route in order to get bugs by product

const express = require("express");
const Bug = require("../../models/Bug");
const router = express.Router();

// @route POST api/product
// @desc add a new product
// @access public

// @route GET api/product/:product
// @desc Get all bugs belonging to specified product
// @access Public
router.get("/:product", (req, res) => {
  Bug.find({ product: req.params.product }).then((results) =>
    res.send(results)
  );
});

module.exports = router;
