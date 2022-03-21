function authMiddlewareStatusProducts (req, res, next) {

    if (req.session.userLogged.statusId == 2) {
        return res.redirect("/")
    }

    next();
}

module.exports = authMiddlewareStatusProducts;
