const express = require("express");
const router = express.Router();
const path = require("path");

/* middlewares */
const authMiddlewareCreateAndEditProduct = require("../middlewares/authMiddlewareStatusProducts");
const authCreateProduct = require("../middlewares/authCreateProduct")

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
})

const upload = multer({storage});




//LIST
router.get("/list/:categoryId",controller.productsList);


//DETAIL
router.get("/detail/:id", controller.productDetail);

//CREATE
router.get("/create",controller.createProduct);
router.post('/', upload.fields([{name:"image1"},{name:"image2"},{name:"image3"},{name:"image4"}]),authCreateProduct,controller.add);

//EDIT
router.get("/edit/:id",controller.editProduct);
router.put('/edit/:id',upload.fields([{name: 'image1'},{name: 'image2'},{name: 'image3'},{name: 'image4'}]),controller.update);

//CART
router.get("/cart/:id", controller.productCart);

//SEARCH

router.get("/search",controller.search);

// DELETE
router.delete('/:id',controller.delete);


module.exports = router;