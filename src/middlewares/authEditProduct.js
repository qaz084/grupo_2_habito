const path = require('path');
const { body } = require('express-validator');

const authEditProduct = [
    body('productName').notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 4 }).withMessage('Al menos debe tener 4 caracteres'),
    
    body('productPrice').notEmpty().withMessage('Debes ingresar un precio').bail().isNumeric().withMessage("Solo se aceptan números"),

    body('productDescription').notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({ min: 20 }).withMessage('Debe contener al menos 20 caracteres'),

    body('size').notEmpty().withMessage('Debes seleccionar un talle'),

    // body('color').notEmpty().withMessage('Debes seleccionar un color'),

 
    body('category').notEmpty().withMessage('Debes seleccionar una categoría'),


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

module.exports= authEditProduct;