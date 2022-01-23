const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../data/products.json");
let productsDetails = JSON.parse(fs.readFileSync(filePath, "utf-8"))


const controller = {
    productDetail:(req,res)=>{
        let idProduct = req.params.id;
        const productDetail = productsDetails.find(element => element.id == idProduct);
        return res.render(
            "../views/products/productDetail",
            {productDetail:productDetail}
        );
    },
    productCart:(req,res)=>{
        return res.render("../views/products/productCart")
    },

    createProduct: (req, res) => {
        res.render('../views/products/createProduct')
    },

    add: (req, res) => {

        const generateID = () => {
            if(productsDetails.length != 0){       
                const lastProduct =  productsDetails[Number(productsDetails.length) - Number(1)];	         
                const lastID = Number(lastProduct.id) + Number(1);	
                return lastID;
            }else{
                const lastID = 1
                return lastID;
            }
        }

        let talles=[]
        if(req.body.sizeProductXS != null){
            talles.push("XS")
        }
        if(req.body.sizeProductS != null){
            talles.push("S")
        }
        if(req.body.sizeProductM != null){
            talles.push("M")
        }
        if(req.body.sizeProductL != null){
            talles.push("L")
        }
        if(req.body.sizeProductXL != null){
            talles.push("Xl")
        }

        let colors = []
        if(req.body.colorProductwhite != null){
            colors.push("White")
        }
        if(req.body.colorProductred != null){
            colors.push("Red")
        }
        if(req.body.colorProductblue != null){
            colors.push("Blue")
        }
        if(req.body.colorProductgreen != null){
            colors.push("Green")
        }
        if(req.body.colorProductyellow != null){
            colors.push("Yellow")
        }

		productsDetails.push({
            id:generateID(),
            categories: req.body.productcategories,
            price: req.body.price,
            discount: Number(req.body.productDiscount),
            name: req.body.productName,
            description: req.body.productDescription,
            talles: talles,
            colors: colors,
            img: req.files.img? req.files.img[0].filename : "default-image.png",
            img2: req.files.img2? req.files.img2[0].filename : "default-image.png",
            img3: req.files.img3? req.files.img3[0].filename : "default-image.png",
            img4: req.files.img4? req.files.img4[0].filename : "default-image.png",
		});

		fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));
        res.redirect("/");
	},

    editProduct: (req, res) => {
        let idProduct =Number(req.params.id) ;
        const editProduct = productsDetails.find(element => element.id === idProduct);
        return res.render('../views/products/editProduct',{'editProduct': editProduct})
    },

    update:(req, res) => {

            const productId=Number(req.params.id) ;
           
            
           const productsArrayEdited= productsDetails.map(product=>{
                if(product.id=== productId){
                    return{
                    ...product,
                    categories:req.body.categories ,
                    price: Number(req.body.price)  ,
                    discount: Number(req.body.discount),
                    name: req.body.name ,
                    longDescription:req.body.longDescription ,
                    img: req.files.img?req.files.img[0].filename: product.img,
                    img2:req.files.img2?req.files.img2[0].filename:product.img2,
                    img3:req.files.img3?req.files.img3[0].filename:product.img3,
                    size: req.body.size,
                    color: req.body.color ,
                 
                }

            } 
            
             return product;
         
        });
            fs.writeFileSync(filePath, JSON.stringify(productsArrayEdited, null, ' '));

            return res.redirect('./detail/'+ productId )

    },

    delete: (req, res) => {
        let idProducto = req.params.id;
        productsDetails = productsDetails.filter(product => product.id != idProducto);
        fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));
        res.redirect("/");
    }
}

module.exports = controller;