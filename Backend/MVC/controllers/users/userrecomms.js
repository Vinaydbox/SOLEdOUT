const user = require('../../models/users/userModel').userModel;



function userRecommendations(req, res) {
    user.findOneAndUpdate({email :req.body.email},{$set:{'userRecommendations.onclickRecommendations':req.body.onclickRecomms,'userRecommendations.searchRecommendations':req.body.searchRecomms}},{upsert:true},(err,docs)=>{
        if(err){
            console.log(err);
        }
        else{

            res.send("Hero hogaya");
        }
    })
}
module.exports={userRecommendations};