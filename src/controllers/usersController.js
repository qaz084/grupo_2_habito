const controller = {
    userLogin:(req,res)=>{
        return res.render("../views/users/login")
    },
    userRegister:(req,res)=>{
        return res.render("../views/users/register")
    }
}

module.exports = controller;