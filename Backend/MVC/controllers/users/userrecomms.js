const user = require('../../models/users/userModel').userModel;



async function userRecommendations(req, res) {
    const temp = user.findOneAndUpdate({email :req.body.email},{$set:{'userRecommendations.onclickRecommendations':req.body.onclickRecomms,'userRecommendations.searchRecommendations':req.body.searchRecomms}},{upsert:true});
    try{
        res.send("done");
    }
    catch(e){
        res.send(e)
    }
}
module.exports={userRecommendations};