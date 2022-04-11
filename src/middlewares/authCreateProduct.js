const path = require('path');
const { body } = require('express-validator');

const authCreateProduct = [
    body('productName').notEmpty().withMessage('Debes ingresar un nombre').bail()
    .isLength({ min: 4 }).withMessage('Al menos debe tener 4 caracteres'),
    
    body('productPrice').notEmpty().withMessage('Debes ingresar un precio').bail().isNumeric().withMessage("Sólo se aceptan números"),

    body('productDescription').notEmpty().withMessage('Debes ingresar una descripcion').bail()
    .isLength({ min: 20 }).withMessage('Debe contener al menos 20 caracteres'),

    body('size').notEmpty().withMessage('Debes seleccionar un talle'),

    body("a1").notEmpty().withMessage('Debes seleccionar un color'),
    body("a2").notEmpty().withMessage('Debes seleccionar un color'),
    body("a3").notEmpty().withMessage('Debes seleccionar un color'),
    body("a4").notEmpty().withMessage('Debes seleccionar un color'),
    body("a5").notEmpty().withMessage('Debes seleccionar un color'),
    body("a6").notEmpty().withMessage('Debes seleccionar un color'),
    body("a7").notEmpty().withMessage('Debes seleccionar un color'),
    body("a8").notEmpty().withMessage('Debes seleccionar un color'),
    body("a9").notEmpty().withMessage('Debes seleccionar un color'),

    body('category').notEmpty().withMessage('Debes seleccionar una categoria'),


    body('image1').custom((value, { req }) => {
        let file = req.files.image1? req.files.image1[0].filename : "default-image.png";
        console.log(path.extname(file))
        let extensionAccepted = ['.jpg', '.png', '.jpeg'];
        if (!(file === "default-image.png")) {
            let extensionFile = path.extname(file);
            if (!(extensionAccepted.includes(extensionFile))) {
                throw new Error('Solo imagenes en formato jpg png jpeg');
            }
        }
        return true;
    }),
    body('image2').custom((value, { req }) => {
        let file = req.files.image2? req.files.image2[0].filename : "default-image.png";
        console.log(path.extname(file))
        let extensionAccepted = ['.jpg', '.png', '.jpeg'];
        if (!(file === "default-image.png")) {
            let extensionFile = path.extname(file);
            if (!(extensionAccepted.includes(extensionFile))) {
                throw new Error('Solo imagenes en formato jpg png jpeg');
            }
        }
        return true;
    }),
    body('image3').custom((value, { req }) => {
        let file = req.files.image3? req.files.image3[0].filename : "default-image.png";
        
        let extensionAccepted = ['.jpg', '.png', '.jpeg'];
        if (!(file === "default-image.png")) {
            let extensionFile = path.extname(file);
            if (!(extensionAccepted.includes(extensionFile))) {
                throw new Error('Solo imagenes en formato jpg png jpeg');
            }
        }
        return true;
    }),
    body('image4').custom((value, { req }) => {
        let file = req.files.image4? req.files.image4[0].filename : "default-image.png";
        
        let extensionAccepted = ['.jpg', '.png', '.jpeg'];
        if (!(file === "default-image.png")) {
            let extensionFile = path.extname(file);
            if (!(extensionAccepted.includes(extensionFile))) {
                throw new Error('Solo imagenes en formato jpg png jpeg');
            }
        }
        return true;
    })
]

module.exports = authCreateProduct;