const { Product, Category } = require('../../../database/models');

module.exports = {

    detail: async (req, res) => {
        
        let productDetail = await Product.findOne({
            include: ["size", "category",'color'],
            where: {
                id: req.params.id
            },
        });
        
      

         productDetail.dataValues.image1 = 'http://localhost:3001/uploads/products/'+ productDetail.image1;

        return res.json({

           productData: productDetail,
           img: productDetail.image1

        })
    },

    show: async (req, res) => {

        const productsCategories= await Category.findAll({



            include: ["product"],



        });
        // products.forEac


        const products= await Product.findAll({

            include: ["category"],

            attributes: ['id', 'name', 'description','image1','price']


        });
        // products.forEach(oneProduct => {oneProduct.dataValues.detail = 'api/Products/' + oneProduct.id})
          
        return res.json({
            count: products.length,
            Products: products,
            countByCategory:productsCategories
        })
    }
}
