const Sequelize = require('sequelize');
const {User} = require('../database/models');

async function  autoLoginMiddleware(req,res,next){

    const emailInCookie=req.cookies.userEmail;

   
    if (emailInCookie) {

        let userToLogin = await User.findOne({
            where: {
                email: emailInCookie
            }

        })
        req.session.userLogged = userToLogin;
      
    }

    next();

}

module.exports= autoLoginMiddleware ;