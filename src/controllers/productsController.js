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
		
		productsDetails.push({
			description: req.body.description,
			price: req.body.price,
		});

		
		fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));

		// Y luego la redirección
		res.redirect('/products?saved=true');
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
                        price:req.body.price ,
                        discount: req.body.discount,
                        name: req.body.name ,
                        longDescription:req.body.longDescription ,
                        // size: req.body.size,
                        // color: req.body.color ,
                        // img:req.body.img ,
                        // img2: req.body.img2 ,
                        // img3:req.body.img3 ,
                        // img4:req.body.img4 ,
                        // img5:req.body.img5 ,
                    }

                }
                return product;


            });
            fs.writeFileSync(filePath, JSON.stringify(productsArrayEdited, null, ' '));

            return res.redirect('./detail/'+  productId );

     },

    delete: (req, res) => {
        const productId= req.params.id;
       return res.send('borramos producto con ID '+productId);
       

    }
}

module.exports = controller;