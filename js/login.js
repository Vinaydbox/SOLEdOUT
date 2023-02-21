let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginbtn = document.getElementById('loginSignup');
let profilebtn = document.getElementById("profileName")
let dropdownbtn = document.getElementById("Dropdown-list")
let invalidPasswordField = document.getElementById("invalidPassword");

let check = document.getElementById('loginbt');

let heroEmail;
check.addEventListener("click", () => {
    console.log("clicked");
    let data = {
        email: loginEmail.value,
        password: loginPassword.value,
    };
    $.ajax({
        type: "post",
        url: "http://localhost:3003/validate",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function (data) {
            console.log("Success");
            localStorage.setItem("userloggedin", "1");

            data = JSON.parse(data);
            console.log(data);
            // console.log(data[0].username);
            if (data.length == 0) {
                invalidPasswordField.style.display = "inline";
            }
            else {
                // localStorage.setItem("username", data[0].username);
                if (data[0].email == "admin@gmail.com" && data[0].password == "admin") {
                    localStorage.setItem("username", "Admin")
                    window.location.href = "./adminIndex.html";

                }
                else if (data[0].userCategory == "Vendor") {
                    localStorage.setItem("username", data[0].username);
                    localStorage.setItem("loggedinUserEmail", data[0].email);
                    localStorage.setItem("password", data[0].password)
                    window.location.href = "./vendor.html";
                }
                else {
                    localStorage.setItem("username", data[0].username);
                    heroEmail==data[0].email;
                    console.log("username set")
                    localStorage.setItem("loggedinUserEmail", data[0].email);
                    console.log(data[0].userRecommendations.onclickRecommendations);
                    localStorage.setItem("onclickRecomms",JSON.stringify(data[0].userRecommendations.onclickRecommendations));
                    localStorage.setItem("searchRecomms",JSON.stringify(data[0].userRecommendations.searchRecommendations));
                    window.location.href = "./index.html";
            
                    profilebtn.innerHTML = localStorage.getItem("username");
                }
            }
        },
        error: function () {
            invalidPasswordField.style.display = "inline";
        },
    });
});


email=localStorage.getItem("loggedinUserEmail");
// console.log("email"+heroEmail);
onclickRecomms=localStorage.getItem("onclickRecomms");
searchRecomms=localStorage.getItem("searchRecomms");


if (localStorage.getItem("userloggedin") == "1") {
    console.log("here");
    loginbtn.style.display = "none";
    dropdownbtn.style.display = "inline";
    profilebtn.innerHTML = localStorage.getItem("username");
}
else {
    loginbtn.style.display = "inline";
    dropdownbtn.style.display = "none";
}

logout = document.getElementById("logoutbt");
logout.addEventListener("click", () => {
    console.log("hero ikkada");
    let data={
        email:email,
        onclickRecomms:onclickRecomms,
        searchRecomms:searchRecomms
    }
    console.log(data.email);
    console.log(data);
    $.ajax({
        type: "post",
        url: "http://localhost:3003/userRecommendations",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: { withCredentials: false, },
        headers: {},
        success:function(){
            console.log("Push aipoindi");
        },
        error:function(){
            console.log("edo aindi")
        }
    })
    localStorage.setItem("userloggedin", "0");
    localStorage.setItem("username", "")
    localStorage.setItem("loggedinUserEmail", "")
    loginbtn.style.display = "inline";
    dropdownbtn.style.display = "none";
})
