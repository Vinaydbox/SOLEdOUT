const userModelCtrl = require('../../models/users/userModel')

async function fetchAllUsers(req, res){
    await userModelCtrl.userModel.find({},(err, docs)=>{
        if(err){
            res.send("something went wrong");
        }
        else{
            res.send(docs);
        }
    })
}

module.exports = {fetchAllUsers};