let fullName = document.getElementById("fullname")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")
let signupbtn = document.getElementById("signupbt")


signupbtn.addEventListener("click",()=>{
    console.log("in signup");
    let data = {
        username : fullName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    $.ajax({
        type: "POST",
        url : "http://localhost:3003/addUser",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function (data) {
            console.log("success")
            // data = JSON.parse(data);
            alert("your acc has been created successfully, Login via home page")
            localStorage.setItem("username", data[0].username);
            window.location.href = "./index.html";
        },
        error: function () {
            $("#error").text("Invalid Username or Password");
            console.log("We are sorry but our servers are having an issue right now");
        },

    })
})




