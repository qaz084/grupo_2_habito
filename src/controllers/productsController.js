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
        let idProduct = req.params.id;
        const editProduct = productsDetails.find(element => element.id == idProduct);
        res.render('../views/products/editProduct',{'editProduct': editProduct})
    },

    update:{


    },

    delete:{

        
    }
}

module.exports = controller;