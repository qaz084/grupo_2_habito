const db = require("../../database/models")

const mainController = {
    index: (req, res) => {
        db.Category.findAll()
            .then(categories => {
                res.render("index",{categories})
            })
    },
}

module.exports = mainController