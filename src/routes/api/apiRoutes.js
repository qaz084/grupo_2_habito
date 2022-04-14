const express = require('express');
const router = express.Router();

const userController = require('../../controllers/dbControllers/api/apiUsers');
 const apiProductsController = require('../../controllers/dbControllers/api/apiProducts');


// hhtp://localhost:3000/api/users
router.get('/users', userController.show);

router.get('/users/:id', userController.detail);

 router.get('/products', apiProductsController.show);

 router.get('/products/:id', apiProductsController.detail);

module.exports = router;