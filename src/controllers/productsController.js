const products = [
    {
        id: 1,
        categories: "Hoddie",
        price: "$5.700",
        discount: "40% Off",
        description: "Hoddie infinite",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis aperiam pariatur in, quo quaerat doloribus quasi eaque sequi explicabo",
        img: "/img/productosHome/img-producto-home-hoodies.jpg",
        img2: "/img/detalle_producto/img-remera-1.jpg",
        img3: "/img/detalle_producto/img-remera-2.jpg",
        img4: "/img/detalle_producto/img-remera-3.jpg",
        img5: "/img/detalle_producto/img-remera-4.jpg",
    },
    {
        id: 2,
        categories: "Joggers",
        price: "$2.300",
        discount: "10% Off",
        description: "Joger solvang",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis aperiam pariatur in, quo quaerat doloribus quasi eaque sequi explicabo",
        img: "/img/productosHome/img-producto-home-joggers.jpg",
        img2: "/img/detalle_producto/img-remera2-1.jpg",
        img3: "/img/detalle_producto/img-remera2-2.jpg",
        img4: "/img/detalle_producto/img-remera2-3.jpg",
        img5: "/img/detalle_producto/img-remera2-4.jpg",
    },
    {
        id: 3,
        categories: "Remeras",
        price: "$1.200",
        discount: "37% Off",
        description: "Remera",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis aperiam pariatur in, quo quaerat doloribus quasi eaque sequi explicabo",
        img1: "/img/productosHome/img-producto-home-remeras.jpg",
        img2: "/img/detalle_producto/img-remera-1.jpg",
        img3: "/img/detalle_producto/img-remera-2.jpg",
        img4: "/img/detalle_producto/img-remera-3.jpg",
        img5: "/img/detalle_producto/img-remera-4.jpg",
    }, 
    {
        id: 4,
        categories: "Shorts",
        price: "$2.500",
        discount: "7% Off",
        description: "Short",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis aperiam pariatur in, quo quaerat doloribus quasi eaque sequi explicabo",
        img: "/img/productosHome/img-producto-home-short.jpg",
        img2: "/img/detalle_producto/img-remera-1.jpg",
        img3: "/img/detalle_producto/img-remera-2.jpg",
        img4: "/img/detalle_producto/img-remera-3.jpg",
        img5: "/img/detalle_producto/img-remera-4.jpg",
    },
    {
        id: 5,
        categories: "Camperas",
        price: "$15.000",
        discount: "25% Off",
        description: "Campera",
        longDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis aperiam pariatur in, quo quaerat doloribus quasi eaque sequi explicabo",
        img: "/img/productosHome/img-productos-home-campera.jpg",
        img2: "/img/detalle_producto/img-remera-1.jpg",
        img3: "/img/detalle_producto/img-remera-2.jpg",
        img4: "/img/detalle_producto/img-remera-3.jpg",
        img5: "/img/detalle_producto/img-remera-4.jpg",
    }
]

const suggestions = [
    {}
]

const controller = {
    productDetail:(req,res)=>{
        let idProduct = req.params.id;
        const productDetail = products.find(element => element.id == idProduct);
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

    editProduct: (req, res) => {
        res.render('../views/products/editProduct')
    }
}

module.exports = controller;