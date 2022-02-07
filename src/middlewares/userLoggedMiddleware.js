function userLoggedMiddleware (req, res, next) {
  
    res.locals.isAnUserLogged = false;
    
    if (req.session.userLogged !== undefined) {
        res.locals.isAnUserLogged = true;
        res.locals.userData = {
            name: req.session.userLogged.nombre,
            imagen: req.session.userLogged.imagen
        }
    }

    next();
}

module.exports = userLoggedMiddleware;
