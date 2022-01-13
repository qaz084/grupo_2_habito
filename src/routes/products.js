const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("../controllers/productsController");

const multer=require("multer");

const storage=multer.diskStorage({
        destination: function(req, res,cb){

            cb(null, path.resolve(__dirname,' /public/products'));

        }, 
        filename:function(req, res,cb){

            cb(null, +'_product_'+ Date.now()+path.extname(file.originalname));

        }
})

const upload = multer({storage});

router.get("/detail/:id", controller.productDetail);
router.get("/cart", controller.productCart);
router.get("/create",controller.createProduct);
router.post('/', controller.add);

router.get("/edit/:id",controller.editProduct);
// router.put('/:id',controller.update);

// router.delete('/:id',controller.delete);


module.exports = router;