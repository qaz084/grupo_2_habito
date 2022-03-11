const db = require("../../database/models")

const mainController = {
    index: (req, res) => {
        db.Category.findAll()
            .then(products => {
                res.render("index",{products})
            })
    },
}

module.exports = mainController