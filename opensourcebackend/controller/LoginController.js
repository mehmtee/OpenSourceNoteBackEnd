const UserModel = require('../models/User');
const Joi = require('joi');
const helper = require('../helper/helper');
module.exports = {
    login : async(req,res,next) => {
        const schema = Joi.object({
            username : Joi.string(),
            email : Joi.string(),
            password : Joi.string().required()
        })

        try{
            if(!req.body.email && !req.body.username) throw new Error('All fields required !');
            if(req.body.email && req.body.username) throw new Error('Invalid parameters !');

            await schema.validateAsync(req.body);
        }catch(err){
            return res.json({status: 'false',message : err.message});
        }

        try{
            const hash = helper.createHash(req.body.password);
            delete req.body.password;
            const result = await UserModel.findOne({...req.body,hash});
            if(result){
                delete result.hash;
                const token = helper.createToken(JSON.stringify(result));
                return res.json({status : 'true',user :result,token});
            }
            
            else res.json({status : 'User not found'});
        }catch(err){
            return res.json({status : 'false',message : err.message});
        }
    },
    validate : async(req, res) => {
        const w =  await helper.validateToken(req.headers['ons-token']);
        if(w) return res.json({status : 'true'});
        return res.json({status : 'false'});
    }
}