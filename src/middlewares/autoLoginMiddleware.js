const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../data/users.json');
//Lectura de Json y Parseo
const usersArray = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

function autoLoginMiddleware(req,res,next){

    const emailInCookie=req.cookies.userEmail;

    if(emailInCookie){

        let userToLogin = usersArray.find(oneUser => oneUser.email === emailInCookie);
        delete userToLogin.pass;
        req.session.userLogged = userToLogin;

    }

    next();

}

module.exports= autoLoginMiddleware ;