let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginbtn = document.getElementById('loginSignup');
let profilebtn = document.getElementById("profileName")
let dropdownbtn = document.getElementById("Dropdown-list")
let invalidPasswordField = document.getElementById("invalidPassword");

let check = document.getElementById('loginbt');

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
                    console.log("username set")
                    localStorage.setItem("loggedinUserEmail", data[0].email);
                    if(data[0].userRecomms.onclickRecomms.length<1){
                        let temp=[];
                        localStorage.setItem("onclickRecomms",temp);
                    }
                    else{
                        localStorage.setItem("onclickRecomms",data[0].userRecomms.onclickRecomms);
                    }
                    localStorage.setItem("searchRecomms",data[0].userRecomms.searchRecomms);
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
    localStorage.setItem("userloggedin", "0");
    localStorage.setItem("username", "")
    localStorage.setItem("loggedinUserEmail", "")
    loginbtn.style.display = "inline";
    dropdownbtn.style.display = "none";
})
