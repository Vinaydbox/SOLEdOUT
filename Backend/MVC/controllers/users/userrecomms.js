const user = require('../../models/users/userModel').userModel;



async function userRecommendations(req, res) {
    console.log(req.body);
    // console.log(req.params.email);
    console.log(req.body.email); 
    console.log(req.body.onclickRecomms);

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