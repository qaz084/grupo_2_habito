const productsCategories =[
    {
        id:1,
        categories: "Hoddie",
        price: "$5.700",
        discount: "40% Off",
        description: "Hoddie infinite",
        img: "img/productosHome/img-producto-home-hoodies.jpg"
    },
    {
        id:2,
        categories: "Joggers",
        price: "$2.300",
        discount: "10% Off",
        description: "Joger solvang",
        img: "img/productosHome/img-producto-home-joggers.jpg"
    },
    {
        id:3,
        categories: "Remeras",
        price: "$1.200",
        discount: "37% Off",
        description: "Remera",
        img: "img/productosHome/img-producto-home-remeras.jpg"
    }, 
    {
        id:4,
        categories: "Shorts",
        price: "$2.500",
        discount: "7% Off",
        description: "Short",
        img: "img/productosHome/img-producto-home-short.jpg"
    },
    {
        id:5,
        categories: "Camperas",
        price: "$15.000",
        discount: "25% Off",
        description: "Campera",
        img: "img/productosHome/img-productos-home-campera.jpg"
    },
]
const controller = {
    index: (req, res) => {
        return res.render("../views/index",{"products":productsCategories});
    }
}

module.exports = controller;