const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");

const Sequelize = require('sequelize');
const Op = Sequelize. Op;

const {User, Status} = require('../../database/models');



const generateID = () => {
    if (usersArray.length != 0) {
        const lastUser = usersArray[Number(usersArray.length) - Number(1)];
        const lastID = Number(lastUser.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};


const controller = {

    userRegister: (req, res) => {
        return res.render("../views/users/register2")
    },

    addUser: async (req, res) => {
        //Buscar si el correo que se inserta en el formulario ya existe
        const userEmail = req.body.email;
        const findEmail = await User.findOne({
            where: {
                email: userEmail
            }
        });

        //Chequear si el correo es @habito o no
        
        let statusUser = null;
        if (userEmail.includes('@habito.com')){
            statusUser = 1 
        }  else {
            statusUser = 2
        }

        //Corroborar que password es igual a repeatPassword
        let userDoublePassword = undefined;
        if (req.body.password == req.body.repeatPassword) {
            userDoublePassword = true;
        } else {
            userDoublePassword = false;
        }


        // Si encuentra al usuario que lance error, de lo contrario, que genere un usuario nuevo
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render("../views/users/register2", { errors: resultValidation.mapped(), oldData: req.body, })
        } else {
            if (!findEmail) {
                if (userDoublePassword == true) {
                    if ((path.extname(req.file.filename) == ".jpg") || (path.extname(req.file.filename) == ".png")) {
                        try {
                            const addUser = await User.create({
                                name: req.body.name,
                                email: req.body.email,
                                password: bcrypt.hashSync(req.body.password, 10),
                                avatar: req.file && req.file.filename ? req.file.filename : "default-image.png",
                                //statusId: statusId
                                statusId: statusUser //agregar funcion que traiga el email e identifique si es @habito
                            });
                            return res.redirect('../users/login');
                        } catch (err) {
                            console.log('error')
                        }
                    } else {
                    return res.redirect ('../../views/users/register2', { errors: resultValidation.mapped(), oldData: req.body, })
                }
            } else {
                    return res.render("../views/users/register2", { error: { contraseña: "Las contraseñas no coinciden" }, oldData: req.body })
                }
            } else {
                return res.render("../views/users/register2", { error: { correo: "Correo existente" }, oldData: req.body })
            }
        }
        
    },

    userLogin: (req, res) => {
        return res.render("../views/users/login")
    },

    logUser: async (req, res) => {
        
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("../views/users/login", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            })
        };
        
        //Buscar si el correo que se inserta en el formulario ya existe
        const userEmail = req.body.email;
        const userToLogin = await User.findOne({
            where: {
                email: userEmail
            }
        });
        let status = userToLogin.statusId
        //return res.json(userToLogin)
        //let  userToLogin = usersArray.find(oneUser => oneUser.email === req.body.email);
        if (userToLogin) {
            let okPassword =  bcrypt.compareSync(req.body.password, userToLogin.password);

            if (okPassword) {
                //delete userToLogin.password;
            
                req.session.userLogged = userToLogin;
                if(req.body.rememberUser){
                    
                    res.cookie("userEmail", userToLogin.email,{
                        maxAge: (1000*60)*5
                    })
                }

                return res.redirect('./profile');

            }
            // ELSE
            return res.render("../views/users/login", {
                errors: {
                    email: {
                        msg: 'Credenciales invalidas'
                    }
                },
                oldData: req.body,
            })
        }
        //este es el ELSE del primer IF
        return res.render("../views/users/login", {
            errors: {
                email: {
                    msg: 'Email no registrado'
                }
            },
            oldData: req.body,
        })

    },

    userProfile: (req, res) => {
        return res.render("../views/users/profile", {
            user: req.session.userLogged
        });
    },    

    logOut: (req, res) => {

        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    delete: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        const userId = req.params.id;
        User.destroy({ where: {id: userId}});
        return res.redirect('../users/register2')
    }

}

module.exports = controller;