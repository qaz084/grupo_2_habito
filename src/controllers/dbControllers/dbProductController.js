const{Product,Category,Color,Size}=require('../../database/models');

const fs = require('fs');
const path=require('path');

const controller={
	createProduct: (req,res)=>{
		Category.findAll({}).then((categories =>{
			res.render("../views/products/createProduct",{category : categories})
		}))
	},
	add : (req, res) => {
		Product.create({
			name: req.body.productName,
			price: req.body.productPrice,
			discount: req.body.productDiscount,
			description: req.body.productDescription,
			quantity: 10,
			image1: req.files.img? req.files.img[0].filename : "default-image.png",
			image2: req.files.img2? req.files.img[0].filename : "default-image.png",
			image3: req.files.img3? req.files.img[0].filename : "default-image.png",
			image4: req.files.img4? req.files.img[0].filename : "default-image.png",
			categoryId: req.body.category
		}).then(()=>{res.redirect("/")})
	},
	editProduct:(req,res)=>{
		let requestProduct= Product.findByPk(req.params.id);
		let requestCategories= Category.findAll();
		let requestSizes = Size.findAll();
		let requestColors = Color.findAll();
		Promise.all([requestProduct,requestCategories,requestColors,requestSizes])
			.then(function(product,categories,sizes,colors){
				res.render('editProduct',{product:product,categories:categories,sizes:sizes,colors:colors})
			}) 
		



	}
}

module.exports = controller