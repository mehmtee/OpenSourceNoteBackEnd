const mongoose = require('mongoose');

const mongoConnect = async(req,res,next) => {
    /**
     * 
     */

    try{
        await mongoose.connect('mongodb://localhost:27017/OpenSourceNote');
        next();
    }catch(e){
        res.json(e.message)
    }

    
}

module.exports = mongoConnect;