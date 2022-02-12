const express = require('express');
const app = express();
const mongo = require('./database/mongo');
const router = require('./router/routerManager');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(mongo);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



router(app);


app.listen(3000,() => {
    console.log("listening")
})