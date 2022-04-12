const express = require('express');
const router = express.Router();

const userController = require('../../controllers/dbControllers/api/apiUsers');


// hhtp://localhost:3000/api/users
router.get('/users', userController.show);

router.get('/users/:id', userController.detail);

module.exports = router;