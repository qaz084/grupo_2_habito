const fs = require('fs');
const path = require('path');

//Ubicar archivo Json
const filePath = path.resolve(__dirname, '../../data/users.json');
//Lectura de Json y Parseo
const usersArray = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const controller = {
    userLogin:(req,res)=>{
        return res.render("../views/users/login")
    },
    userRegister:(req,res)=>{
        return res.render("../views/users/register")
    },
    addUser: (req, res) => {
        usersArray.push({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            pass: req.body.contraseña,
            repetirPass: req.body.repetirContraseña,
            imagen: req.file.filename
        })

        fs.writeFileSync(filePath, JSON.stringify(usersArray, null, ' '))
        res.redirect('/users?saved=true');
    },
}

module.exports = controller;