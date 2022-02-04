const path = require('path');
const { body } = require('express-validator');

const validationRegister = [
    body('nombre').notEmpty().withMessage('Debes ingresar un nombre'),

    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un Email valido'),

    body('contraseña').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    body('repetirContraseña').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let extensionAccepted = ['.jpg', '.png'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');

        } else {
            let extensionFile = path.extname(file.originalname);
            if (!extensionAccepted.includes(extensionFile)) {
                throw new Error('Debes cargar una imagen en formato .jpg o .png');

            }
        }
        return true;
    })
]

module.exports = validationRegister;