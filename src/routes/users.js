const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

//const controller = require("../controllers/usersController");
const controller = require("../controllers/dbControllers/dbUserController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("public/uploads/users/"))
     
    },
    filename: (req, file, cb) => {
        const suffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
        cb(null, suffix + file.fieldname + path.extname(file.originalname))
    }
});

const upload = multer({ storage });




//Middlewares
const validationLogin = require("../middlewares/validateLoginMiddleware");
const validationRegister = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// guestMiddleware,
//GET - http://localhost3000/users/login
router.get("/login",guestMiddleware  ,controller.userLogin);

//POST - http://localhost3000/users/login
router.post("/login", validationLogin, controller.logUser);

//GET - http://localhost3000/users/register
router.get("/register2",guestMiddleware ,controller.userRegister);

//POST - http://localhost3000/users
router.post("/", upload.single('avatar'), validationRegister, controller.addUser);

//GET - http://localhost3000/users/profile
router.get("/profile", authMiddleware, controller.userProfile);

router.get('/logout', controller.logOut);

router.delete('/:id', controller.delete);


module.exports = router;