function authMiddlewareStatusProducts (req, res, next) {

    if (req.session.userLogged && req.session.userLogged.statusId == 1) {
        return next();
    }
    res.redirect("/")
    
}

module.exports = authMiddlewareStatusProducts;
