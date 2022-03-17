const { body } = require('express-validator');
const validationLogin = [
    body('email').notEmpty().withMessage('Debe ingresar un email').bail()
    .isEmail().withMessage('Debe ingresar un Email valido'),

    body('password').notEmpty().withMessage('Debe ingresar la contraseña').bail()
    .isLength({ min: 5 }).withMessage('La contraseña debe ser mas larga')
];


module.exports = validationLogin;