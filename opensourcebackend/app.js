const express = require('express');
const app = express();
const mongo = require('./database/mongo');
const router = require('./router/routerManager');
app.use(mongo);



router(app);


app.listen(3000,() => {
    console.log("listening")
})