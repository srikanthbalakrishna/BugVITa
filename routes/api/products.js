//separate route in order to get bugs by product

const express = require("express");
const Bug = require("../../models/Bug");
const Product = require("../../models/Product");
const router = express.Router();

// @route POST api/products
// @desc add a new product
// @access public
router.post("/", (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
  });
  newProduct.save().then(res.json({ wasCreated: true }));
  console.log("Product created");
});

// @route GET api/products
// @desc get ALL products
// @access public
router.get("/", (req, res) => {
  //fetch all bugs from the database
  Product.find().then((products) => res.json(products));
});

// @route GET api/products/:product
// @desc Get all bugs belonging to specified product
// @access Public
router.get("/:product", (req, res) => {
  Bug.find({ product: req.params.product }).then((results) =>
    res.send(results)
  );
});

module.exports = router;
