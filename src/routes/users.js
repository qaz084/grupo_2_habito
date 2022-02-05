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

const upload = multer({ storage });

const controller = require("../controllers/usersController");
const { body } = require('express-validator');

const validationLogin = [
    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un Email valido'),

    body('contrasenia').notEmpty().withMessage('Debe ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe ser mas larga')
];

//Middlewares
const validationRegister = require("../middlewares/validateRegisterMiddleware")
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//GET - http://localhost3000/users/login
router.get("/login", guestMiddleware, controller.userLogin);

//POST - http://localhost3000/users/login
router.post("/login", validationLogin, controller.logUser);

//GET - http://localhost3000/users/register
router.get("/register2", guestMiddleware, controller.userRegister);

//POST - http://localhost3000/users
router.post("/", upload.single('imagen'), validationRegister, controller.addUser);

//GET - http://localhost3000/users/profile
router.get("/profile", authMiddleware, controller.userProfile);

router.get('/logout',controller.logOut);


module.exports = router;