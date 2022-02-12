const crypto = require('crypto');
module.exports ={
    createToken : async(req,res,next) => {

    },
    validateToken : async(req,res,next) => {

    },
    
    createHash : (string) => {
        return crypto
      .createHmac("sha256", process.env.password_key)
      .update(string)
      .digest("hex");
    }

}