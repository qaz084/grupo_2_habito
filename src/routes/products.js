const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

router.get("/productDetail", controller.productDetail);
router.get("/productCart", controller.productCart);

module.exports = router;