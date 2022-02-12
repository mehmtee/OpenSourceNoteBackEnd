const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/',userController.create)


module.exports = router;