const express = require("express");
const router = express.Router();
const path = require("path");

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


//router.get("/mock", controller.mock);

// router.get("/cart", controller.productCart);

router.get("/list/:categoryId",controller.productsList);
// router.get("/detail/:id", controller.productDetail);
router.get("/create",controller.createProduct);
router.post('/', upload.fields([{name:"image1"},{name:"image2"},{name:"image3"},{name:"image4"}]),controller.add);

router.get("/edit/:id",controller.editProduct);
router.post("/search",controller.search);

router.put('/edit/:id',upload.fields([{name: 'image1'},{name: 'image2'},{name: 'image3'},]),controller.update);

// router.delete('/:id',controller.delete);


module.exports = router;