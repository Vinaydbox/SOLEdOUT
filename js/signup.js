let fullName = document.getElementById("fullname")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")
let confirmPassword = document.getElementById("signupPasswordConfirm")
let signupbtn = document.getElementById("signupbt")
let passwordMismatchfield = document.getElementById("passwordMismatch")
let userAlreadyExists = document.getElementById("userAlreadyExists")


signupbtn.addEventListener("click", () => {
    $.get("http://localhost:3003/fetchOneUser/"+signupEmail.value, (data) => {
        console.log(data);
        if (data == "DoNotExist") {
            if (signupPassword.value === confirmPassword.value) {
                console.log("in signup");
                let data = {
                    username: fullName.value,
                    email: signupEmail.value,
                    password: signupPassword.value,
                    userCategory: "Customer"
                }
                $.ajax({
                    type: "POST",
                    url: "http://localhost:3003/addUser",
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
            }
            else {
                passwordMismatchfield.style.display = "inline";
                console.log("password mismacth")
            }
        }
        else {
            userAlreadyExists.style.display = "inline";
            console.log("user exists already")
        }
    })
})




