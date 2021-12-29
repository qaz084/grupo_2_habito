const products =[
    {
        categories: "Hoddie",
        price: "$5.700",
        discount: "40% Off",
        description: "Hoddie infinite",
        img: "img/productosHome/img-producto-home-hoodies.jpg"
    },
    {
        categories: "Joggers",
        price: "$2.300",
        discount: "10% Off",
        description: "Joger solvang",
        img: "img/productosHome/img-producto-home-joggers.jpg"
    },
    {
        categories: "Remeras",
        price: "$1.200",
        discount: "37% Off",
        description: "Remera",
        img: "img/productosHome/img-producto-home-remeras.jpg"
    }, 
    {
        categories: "Shorts",
        price: "$2.500",
        discount: "7% Off",
        description: "Short",
        img: "img/productosHome/img-producto-home-short.jpg"
    },
    {
        categories: "Camperas",
        price: "$15.000",
        discount: "25% Off",
        description: "Campera",
        img: "img/productosHome/img-productos-home-campera.jpg"
    },
]
const controller = {
    index: (req, res) => {
        return res.render("../views/index",{"products":products});
    }
}

module.exports = controller;