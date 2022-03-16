//---Requires express, path, etc----

const express = require("express");
const app = express();
const path = require("path");
const session = require('express-session');
const cookie= require('cookie-parser');


//SESSION----------------------------

app.use(session({
    secret: "its a secret",
    saveUninitialized:false,
    resave:false

}));

// COOKIE------------------------------------------------
app.use(cookie());

//OVERRIDE------------------------------------------
const methodOverride=require("method-override");
app.use(methodOverride('_method'));


// PUBLIC PATH --------------------------------
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));


//SERVER CONFIG --------------------------------
app.listen(3000, () => {
    console.log("Server running in port 3000")
});

// Setup template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

// Setup del req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// MD AutoLogin
const autoLogin = require('./middlewares/autoLoginMiddleware')
app.use(autoLogin);

// MD userLogged
const userLoggedMD = require('./middlewares/userLoggedMiddleware')
app.use(userLoggedMD);



//RUTAS

const mainRoutes = require('./routes/main');
app.use("/", mainRoutes);

const productsRoutes= require('./routes/products');
app.use("/products", productsRoutes);

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);




//ERROR

app.use((req,res,next)=>{
    res.status(404).render("./error/error404")
});