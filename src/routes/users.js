const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../public/uploads/users'))
    },
    filename: (req, file, cb) => {
        const suffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
        cb(null, suffix + file.fieldname + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const controller = require("../controllers/usersController");


//GET - http://localhost3000/users/login
router.get("/login", controller.userLogin);
//POST - http://localhost3000/users/login
router.post("/login", controller.logUser);


//GET - http://localhost3000/users/register
router.get("/register", controller.userRegister);
//POST - http://localhost3000/users
router.post("/", upload.single('imagen'),controller.addUser);

module.exports = router;