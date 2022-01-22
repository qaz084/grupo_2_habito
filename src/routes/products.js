const express = require("express");
const router = express.Router();
const path = require("path");

const controller = require("../controllers/productsController");

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

router.get("/detail/:id", controller.productDetail);
router.get("/cart", controller.productCart);

router.get("/create",controller.createProduct);
router.post('/', upload.fields([{name:"img"},{name:"img2"},{name:"img3"},{name:"img4"}]),controller.add);

router.get("/edit/:id",controller.editProduct);
router.put('/:id',upload.fields([{name: 'img'},{name: 'img2'},{name: 'img3'},]),controller.update);

router.delete('/:id',controller.delete);


module.exports = router;