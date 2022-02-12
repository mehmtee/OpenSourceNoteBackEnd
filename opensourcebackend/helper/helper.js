const crypto = require('crypto');
const jwt = require('jsonwebtoken');
module.exports ={
    createToken : e => jwt.sign({ id: "id" }, process.env.jwt_secret, {
        expiresIn: "120h",
      }),
    validateToken : async(token) => {

        try{
            const result = await jwt.verify(token,process.env.jwt_secret);
            return true;
        }catch(err){
            return false;
        }
    },
    
    createHash : (string) => {
        return crypto
      .createHmac("sha256", process.env.password_key)
      .update(string)
      .digest("hex");
    }

}