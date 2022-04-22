const express = require("express");
const router = express.Router();
const path = require("path");

/* middlewares */
const authMiddlewareCreateAndEditProduct = require("../middlewares/authMiddlewareStatusProducts");
const authCreateProduct = require("../middlewares/authCreateProduct")
const authEditProduct = require("../middlewares/authEditProduct")
// const userInCart = require("../middlewares/userInCart")

const controller = require("../controllers/dbControllers/dbProductController");

const multer=require("multer");
const storage=multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, path.resolve(__dirname,'../../public/uploads/products'));
        }, 
        filename:(req, file, cb)=>{
            const uniqueSuffix = Date.now();
            cb(null, "IMG-" +  uniqueSuffix + path.extname(file.originalname));
        }
});
const upload = multer({storage});

//LIST
router.get("/list/:categoryId",controller.productsList);

//DETAIL
router.get("/detail/:id", controller.productDetail);

//CREATE
router.get("/create",authMiddlewareCreateAndEditProduct,controller.createProduct);
router.post('/', upload.fields([{name:"image1"},{name:"image2"},{name:"image3"},{name:"image4"}]),authCreateProduct,controller.add);

//EDIT
router.get("/edit/:id",authMiddlewareCreateAndEditProduct,controller.editProduct);
router.put('/edit/:id',upload.fields([{name: 'image1'},{name: 'image2'},{name: 'image3'},{name: 'image4'}]),authEditProduct,controller.update);

//CART
router.get("/cart",controller.productCart);

//ADD TO CART_MAIN
// router.get("/cart/",controller.addToCart);

//SEARCH
router.get("/search",controller.search);

// DELETE
router.delete('/:id',controller.delete);

module.exports = router;