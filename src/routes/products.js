const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

router.get("/detail/:id", controller.productDetail);
router.get("/cart", controller.productCart);
router.get("/create",controller.createProduct);

router.get("/edit/:id",controller.editProduct);

module.exports = router;