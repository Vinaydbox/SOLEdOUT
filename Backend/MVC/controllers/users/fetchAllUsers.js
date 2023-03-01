const userModelCtrl = require('../../models/users/userModel')

async function fetchAllUsers(req, res){
    const docs = await userModelCtrl.userModel.find({});
    try{
        res.send(docs);
    }
    catch(err){
        console.log(err);
        res.send(err);

    }
}

module.exports = {fetchAllUsers};