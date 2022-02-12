const express = require('express');
const router = express.Router();
const loginController = require('../controller/LoginController');
const tokenMiddleware = require('../middleware/token');
router.post('/',loginController.login);
router.get('/',tokenMiddleware.hasToken,loginController.validate);


module.exports = router;