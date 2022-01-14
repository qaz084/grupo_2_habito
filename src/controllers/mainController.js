const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "../data/products.json");
let productsDetails = JSON.parse(fs.readFileSync(filePath, "utf-8"))

// Llamo al json DB  de productos y lo reemplazo por lo que teniamos de categorías...asi cuando se modifica un objeto, esta modificacion tambien se muestra en el objeto que está en el Home.

// const productsCategories =[
//     {
//         id:1,
//         categories: "Hoddie",
//         price: "$5.700",
//         discount: "40% Off",
//         name: "Hoddie infinite",
//         img: "img/productosHome/img-producto-home-hoodies.jpg"
//     },
//     {
//         id:2,
//         categories: "Joggers",
//         price: "$2.300",
//         discount: "10% Off",
//         name: "Joger solvang",
//         img: "img/productosHome/img-producto-home-joggers.jpg"
//     },
//     {
//         id:3,
//         categories: "Remeras",
//         price: "$1.200",
//         discount: "37% Off",
//         name: "Remera",
//         img: "img/productosHome/img-producto-home-remeras.jpg"
//     }, 
//     {
//         id:4,
//         categories: "Shorts",
//         price: "$2.500",
//         discount: "7% Off",
//         name: "Short",
//         img: "img/productosHome/img-producto-home-short.jpg"
//     },
//     {
//         id:5,
//         categories: "Camperas",
//         price: "$15.000",
//         discount: "25% Off",
//         name: "Campera",
//         img: "img/productosHome/img-productos-home-campera.jpg"
//     },
// ]

const controller = {
    index: (req, res) => {
        return res.render("../views/index",{"products":productsDetails});
    }
}

module.exports = controller;