const path = require('path');
const { body } = require('express-validator');

const authCreateProduct = [
    body('productName').notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 4 }).withMessage('Al menos debes 4 caracteres'),

    body("a1").notEmpty().withMessage('Debes seleccionar un color'),
    body("a2").notEmpty().withMessage('Debes seleccionar un color'),
    body("a3").notEmpty().withMessage('Debes seleccionar un color'),
    body("a4").notEmpty().withMessage('Debes seleccionar un color'),
    body("a5").notEmpty().withMessage('Debes seleccionar un color'),
    body("a6").notEmpty().withMessage('Debes seleccionar un color'),
    body("a7").notEmpty().withMessage('Debes seleccionar un color'),
    body("a8").notEmpty().withMessage('Debes seleccionar un color'),
    body("a9").notEmpty().withMessage('Debes seleccionar un color'),
/*    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un Email valido'),

    body('password').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    body('repeatPassword').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'), */

/*  body('avatar').custom((value, { req }) => {
        let file = req.file;
        let extensionAccepted = ['.jpg', '.png', '.jpeg', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');

        } else {
            let extensionFile = path.extname(file.originalname);
            if (!extensionAccepted.includes(extensionFile)) {
                throw new Error('Debes cargar una imagen en los formatos .jpg, .png, .jpeg, .gif');

            }
        }
        return true;
    }) */
]

module.exports = authCreateProduct;