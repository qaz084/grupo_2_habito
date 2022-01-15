const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("../controllers/productsController");

const multer=require("multer");

const storage=multer.diskStorage({
        destination:(req, file, cb)=>{

            cb(null, path.resolve(__dirname,'../../public/products'));

        }, 
        filename:(req, file, cb)=>{
            const uniqueSuffix = Date.now();
            cb(null, "IMG-" + uniqueSuffix + path.extname(file.originalname));
        }
})

const upload = multer({storage});

router.get("/detail/:id", controller.productDetail);
router.get("/cart", controller.productCart);

router.get("/create",controller.createProduct);
router.post('/', upload.array("imagenes"),controller.add);

router.get("/edit/:id",controller.editProduct);
router.put('/:id',controller.update);

router.delete('/:id',controller.delete);


module.exports = router;