const{Product,Category,Color,Size,User}=require('../../database/models');

const fs = require('fs');
const path=require('path');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');


const controller={


	productsList:async (req,res)=>{
		
		const category=req.params.categoryId;


		const productsList= await Product.findAll({
			
			where:{
				categoryId: Number(category)
			}
		});

		
		const categoryName= await Category.findByPk(

		Number(category)
			
		);
		if(categoryName){

			res.render("../views/products/productsList",{productsList,categoryName})

		}else{
			return res.redirect('/');
		}
		

	
	},

	productDetail: async (req, res) => {
		const productID = req.params.id;
		const productDetail = await Product.findByPk(productID, { include: ["size", "category",'color'] });

		if(productDetail){

			return res.render("../views/products/productDetail2", { productDetail });

		}else{
			return res.redirect('/');
		}
		
		
	},
	errorCreate: async (req,res) => {
		try{
			const errors = validationResult(req);
			console.log(errors)
			let colorsContainerFiltered = errors.errors.filter(oneColor=>{
				return(oneColor.msg == "Debes seleccionar un color")
			});

			let colorErrorMessage = "";
			if(colorsContainerFiltered.length === 9 || colorsContainerFiltered.length < 8){
				colorErrorMessage = "Debes seleccionar un color"
			}

			const size = await Size.findAll({});
			const colors = await Color.findAll({});
			const categories = await Category.findAll({});
			for (let i = 0; i< colors.length; i++){
				colors[i].name = colors[i].name.split("").slice(1).join("")
			};
			console.log(errors.mapped())
			res.render("../views/products/createProduct",{category : categories, color : colors, size : size, errors : errors.mapped(), errorColor : colorErrorMessage, oldData:req.body });
		}catch (err) {
			console.log(err);
		}
	},
	createProduct: async (req,res) => {
		try{
			const size = await Size.findAll({});
			const colors = await Color.findAll({});
			const categories = await Category.findAll({});
			for (let i = 0; i< colors.length; i++){
				colors[i].name = colors[i].name.split("").slice(1).join("")
			}
			res.render("../views/products/createProduct",{category : categories, color : colors, size : size})
		}catch (err) {
			console.log(err)
		}
	},
	add :async (req, res) => {

		const errors = validationResult(req);
		let error = false;
		errors.errors.forEach((a)=>{
			if(a.msg != 'Debes seleccionar un color'){
				error = true
			}
		});
		if(errors.errors.length != 8 ){
			error = true
		}
		
		if(error == false){
		try{
			let a = Object.keys(req.body).filter((element)=>{
				return element.length<=2
			}) 
			for ( let i = 0;  i <a.length;i++){
				a[i] = a[i].split("").slice(1).join("")
			}
			const newProduct = await Product.create({
				name: req.body.productName,
				price: req.body.productPrice,
				discount: req.body.productDiscount,
				description: req.body.productDescription,
				quantity: 10,
				image1: req.files.image1? req.files.image1[0].filename : "default-image.png",
				image2: req.files.image2? req.files.image2[0].filename : "default-image.png",
				image3: req.files.image3? req.files.image3[0].filename : "default-image.png",
				image4: req.files.image4? req.files.image4[0].filename : "default-image.png",
				categoryId: req.body.category
			});
			await newProduct.addColor(a)
			await newProduct.addSize(req.body.size)
			return res.redirect("/")
		}catch (err) {
			console.log(err)
		}
	}else{ 
		return controller.errorCreate(req,res)
	}
	}, 

	editProduct:async(req,res)=>{
		let requestProduct= await Product.findByPk(req.params.id, { include: ["size", "category",'color'] });
		//return res.json(requestProduct)
		let requestCategories= await Category.findAll();
		let requestSizes = await Size.findAll();
		let requestColors = await Color.findAll();

		if(requestProduct){

			// return res.json(requestProduct);
			for (let i = 0; i< requestColors.length; i++){
				requestColors[i].name = requestColors[i].name.split("").slice(1).join("")
			}
			return res.render('../views/products/editProduct2',{product:requestProduct,category:requestCategories,size:requestSizes,color:requestColors})
		}else{
			return res.redirect('/');
		}
	},

	update :async (req,res)=>{
		const resultValidation= validationResult(req);
		let id= Number(req.params.id);
		let product = await Product.findByPk(req.params.id,{include:["size", "category",'color']});
		let requestCategories= await Category.findAll();
		let requestSizes = await Size.findAll();
		let requestColors = await Color.findAll();

		// return res.json(resultValidation);
		 //return res.json(product);
		// return res.json(product);
		 if(resultValidation.errors.length >0){
			 // return res.json(resultValidation)
			 
			 res.render("../views/products/editProduct2",{
				 
				product:product,
				category:requestCategories,
				size:requestSizes,
				color:requestColors,
				oldData:req.body,

				errors: resultValidation.mapped(),
				})
			
				
			}else{
		

			
			try{
				
				let product = await Product.findByPk(req.params.id,{include:["size", "color"]});	
				
				let a = Object.keys(req.body).filter((element)=>{
					return element.length<=2
				}) 
				for ( let i = 0;  i <a.length;i++){
					a[i] = a[i].split("").slice(1).join("")
				}
	
				
				product.name = req.body.productName?req.body.productName:product.name;
				product.price = req.body.productPrice?req.body.productPrice:product.price;
				product.discount = req.body.productDiscount?req.body.productDiscount:product.discount;
				product.description = req.body.productDescription?req.body.productDescription:product.description;
				product.categoryId = req.body.category?req.body.category:product.categoryId;
				product.quantity = product.quantity;
				product.image1 = req.files.image1? req.files.image1[0].filename :product.image1;
				product.image2 = req.files.image2? req.files.image2[0].filename :product.image2;
				product.image3 = req.files.image3? req.files.image3[0].filename :product.image3;
				product.image4 = req.files.image4? req.files.image4[0].filename :product.image4
				
				if(a.length != 0){
					await product.removeColor(product.color);
					await product.addColor(a);
				}
				if(req.body.size){
					await product.removeSize(product.size);
					await product.addSize(req.body.size);
				}
				
				product.save();
				res.redirect("/products/detail/"+ req.params.id)
			
				}

				
			catch (err) {
				console.log(err)
			}
		}


	},
	productCart: (req,res)=>{

		
		const userInCart= req.session.userLogged
	
		return res.render("../views/products/productCart2", { userInCart});
	
    },



	search: (req, res) => {
		const productToSearch=req.query.search;
		// return res.json({productToSearch});
		Product.findAll({
			// include:{

			// 	model: Category,
			// 	as: 'category',
			// 	where:{

			// 		name:{
			// 			[Op.like] : `%${productToSearch}%` 
			// 		}
			// 	}
				
			// },
			
			where: {
				name: { 
				[Op.like] : `%${productToSearch}%`
				}
			}, 
		})
		
		.then(product => {
			// return res.json(product);
			let searchArray = [];
			for ( let i = 0;  i < product.length; i++) {
				searchArray.push(product[i]);
			}
			if ( searchArray.length == 0 ) {
			res.redirect('/');
			} else {
				
			res.render('./products/productSearch', { searchArray });
			}
		})
		.catch(error => {
			return res.send(error);
		})


	},
	delete: async(req,res) =>{
		const productId= req.params.id;
		await Product.destroy({where: {id:productId}});
		return res.redirect('/')


	}
	
}

module.exports = controller





