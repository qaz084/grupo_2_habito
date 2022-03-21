function userLoggedMiddleware (req, res, next) {

    res.locals.isAnUserLogged = false;
    
    if (req.session.userLogged !== undefined) {
        res.locals.isAnUserLogged = true;
        res.locals.userData = {
            name: req.session.userLogged.name,
            imagen: req.session.userLogged.imagen,
            status: req.session.userLogged.statusId
        }
    }

    next();
}

module.exports = userLoggedMiddleware;
