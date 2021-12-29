const express = require("express");
const router = express.Router();

const controller = require("../controllers/usersController");

router.get("/login", controller.userLogin);
router.get("/usersRegister", controller.userRegister);


module.exports = router;