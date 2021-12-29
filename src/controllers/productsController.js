const controller = {
    productDetail:(req,res)=>{
        return res.render("../views/products/productDetail")
    },
    productCart:(req,res)=>{
        return res.render("../views/products/productCart")
    }
}

module.exports = controller;