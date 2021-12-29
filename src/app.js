//---Require express & path----

const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo")
});

app.set('view engine', 'ejs');


mainRoutes = require('./routes/main');
app.use("/", mainRoutes);

productsRoutes = require("./routes/products");
app.use("/", productsRoutes);

usersRoutes = require("./routes/users");
app.use("/", usersRoutes)

