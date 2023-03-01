import head from "./urls.js";

const elasticIP = head();
function deleteProdFromCart(pid){
    let obj={ 
        userEmail :localStorage.getItem("loggedinUserEmail"),
        pid:pid
    }
    $.ajax({
        type:"post",
        url:elasticIP+"/deleteProductFromCart/",
        contentType: "application/json",
        data: JSON.stringify(obj),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function(data){
            console.log("Successfully deleted")

        },
        error:function(){
            console.log("Error")
        }
    })
    window.location.href = "./cart.html"
}