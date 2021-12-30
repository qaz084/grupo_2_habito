const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

router.get("/productDetail/:id", controller.productDetail);
router.get("/productCart", controller.productCart);
router.get("/createProduct",controller.createProduct);

router.get("/editProduct",controller.editProduct);

module.exports = router;