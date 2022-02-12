const express = require('express');
const router = express.Router();
const noteController = require('../controller/NoteController');

router.get('/',noteController.get)


module.exports = router;