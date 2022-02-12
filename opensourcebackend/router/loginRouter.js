const express = require('express');
const router = express.Router();
const loginController = require('../controller/LoginController');

app.post('/login',loginController.login)