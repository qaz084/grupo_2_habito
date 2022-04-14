function userInCart (req, res, next) {
    
    
    // return res.json(req.session.userLogged);

    const userInCart= req.session.userLogged;
    locals.userInCart= userInCart;

    next();
};

module.exports = userInCart;