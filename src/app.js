//---Require express & path----

const express = require("express");
const app = express();
const path = require("path");


//OVERRIDE------------------------------------------
const methodOverride=require("method-override");
app.use(methodOverride('_method'));


// PUBLIC PATH --------------------------------
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));


//SERVER CONFIG --------------------------------
app.listen(3000, () => {
    console.log("Servidor corriendo")
});

// Setup template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

// Setup del req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const mainRoutes = require('./routes/main');
app.use("/", mainRoutes);


const productsRoutes= require('./routes/products');
app.use("/products", productsRoutes);

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);









app.use((req,res,next)=>{
    res.status(404).render("./error/error404")
});