const db = require("../../database/models")

const mainController = {
    index: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render("index",{products})
            })
    },
}

module.exports = mainController