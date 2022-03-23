const Sequelize = require('sequelize');
const {User} = require('../database/models');

function autoLoginMiddleware(req,res,next){

    const emailInCookie=req.cookies.userEmail;

    if (emailInCookie) {

        let userToLogin = User.findOne({
            where: {
                email: emailInCookie
            }
        })
    }

    next();

}

module.exports= autoLoginMiddleware ;