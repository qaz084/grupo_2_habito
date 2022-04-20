const path = require('path');
const { body } = require('express-validator');

const validationRegister = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre'),

    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un Email valido'),

    body('password').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    body('repeatPassword').notEmpty().withMessage('Debes ingresar la contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

    body('avatar').custom((value, { req }) => {
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
    })
]

module.exports = validationRegister;