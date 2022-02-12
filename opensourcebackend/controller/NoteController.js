const NoteModel = require('../models/Note');
module.exports = {
    get : async (req,res,next) => {
        console.log(NoteModel)
        try{
            const result = await NoteModel.find()
            res.json({status : 'true',notes : result,message :'Successfully'})
        }catch(err){
            res.json(err.message)
        }
    },

    create : async (req, res, next) => {
        
    }

}