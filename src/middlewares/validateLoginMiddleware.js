const { body } = require('express-validator');
const validationLogin = [
    body('email').notEmpty().withMessage('Debes ingresar un email').bail()
    .isEmail().withMessage('Debes ingresar un Email valido'),

    body('password').notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe ser mas larga')
];


module.exports = validationLogin;