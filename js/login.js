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
            console.log(data);

            data = JSON.parse(data);
            console.log(data[0].username);
            if (data[0].email == "admin@gmail.com" && data[0].password == "admin") {
                window.location.href = "./adminIndex.html";
                
            }
            else {
                localStorage.setItem("username", data[0].username);
                window.location.href = "./index.html";
                profilebtn.innerHTML = localStorage.getItem("username");
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
    loginbtn.style.display = "inline";
    dropdownbtn.style.display = "none";
})
