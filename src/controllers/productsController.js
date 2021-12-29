const controller = {
    productDetail:(req,res)=>{
        return res.render("../views/products/productDetail")
    },
    productCart:(req,res)=>{
        return res.render("../views/products/productCart")
    },

    createProduct: (req, res) => {
        res.render('../views/products/createProduct')
    },

    editProduct: (req, res) => {
        res.render('../views/products/editProduct')
    }
}

module.exports = controller;