const userModelCtrl = require('../../models/users/userModel')

async function fetchOneUser(req, res){
    userModelCtrl.userModel.find({email:req.params.email},(err,docs)=>{
        if(err){
            res.send("Error")
        }else{
            if(docs.length>=1){
                res.send("Exists")
                console.log("Exists")
            }
            else{
                res.send("DoNotExist")
                console.log("DoNotExist")
            }
        }
    })
}

module.exports = {fetchOneUser}