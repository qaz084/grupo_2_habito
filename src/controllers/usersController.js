const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
//Ubicar archivo Json
const filePath = path.resolve(__dirname, '../data/users.json');
//Lectura de Json y Parseo
const usersArray = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const generateID = () => {
    if (usersArray.length != 0) {
        const lastProduct = usersArray[Number(usersArray.length) - Number(1)];
        const lastID = Number(lastProduct.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};

const controller = {
    userLogin: (req, res) => {
        return res.render("../views/users/login")
    },

    logUser: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("../views/users/login", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            })
        } else {
            return res.render("../views/users/profile")
        }

        const email = req.body.email;
        const pass = req.body.contrasenia;
        usersArray.forEach(usuario => {
            if (usuario.email == email && usuario.pass == pass) {
                res.redirect('/?logged=true');
            } else {
                res.redirect('/users/login?logged=false');
            }
        })
    },

    userRegister: (req, res) => {

        return res.render("../views/users/register2")
    },
    addUser: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("../views/users/register2", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            })
        } else {
            return res.render("../views/index")
        }
        usersArray.push({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            pass: req.body.contraseña,
            repetirPass: req.body.repetirContraseña,
            imagen: req.file.filename,
            id: generateID()
        });

        fs.writeFileSync(filePath, JSON.stringify(usersArray, null, ' '))
        res.redirect('/?saved=true');
    },

};

module.exports = controller;