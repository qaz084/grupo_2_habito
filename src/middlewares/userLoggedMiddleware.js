function userLoggedMiddleware (req, res, next) {
  /*  
  
  res.locales.isAnUserLogged = false;
    
    if (req.session.userLogged !== undefined) {
        res.locals.isAnUserLogged = true;
        res.locales.userData = {
            name: req.session.userLogged.nombre,
            imagen: req.session.userLogged.imagen
        }
    }

*/
    next();
}

module.exports = userLoggedMiddleware;
