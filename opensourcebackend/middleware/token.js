module.exports =  {
    hasToken : (req,res,next) => {
        if(req.headers['ons-token']) next();
        else res.json({status : 'false',message: 'Token not provided !'});   
    }
}