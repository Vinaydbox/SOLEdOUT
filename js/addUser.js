import head from "./urls.js";

const elasticIP = head();
let newUserName = document.getElementById('newUserName1')
let newEmail = document.getElementById('userEmail1')
let newPwd = document.getElementById('userpwd1')
let addUserbtn = document.getElementById('pushNewUser')
let userAdded = document.getElementById('userAdded')
let userAlreadyExists = document.getElementById("userAlreadyExists")

addUserbtn.addEventListener("click", () => {
    $.get(elasticIP+"/fetchOneUser/" + newEmail.value, (res) => {
        if (res == "DoNotExist") {
            console.log("in add user");
            // console.log(newUserName.value)
            let data = {
                username: newUserName.value,
                email: newEmail.value,
                password: newPwd.value,
                userCategory: "Vendor"
            }
            console.log(data)
            $.ajax({
                type: "POST",
                url: elasticIP+"/addUser",

                contentType: "application/json",
                data: JSON.stringify(data),
                xhrFields: { withCredentials: false, },
                headers: {},
                success: function (data) {
                    console.log("success")
                    // data = JSON.parse(data);
                    // window.location.href = './adminIndex.html';
                    // alert("User added successfully...")
                    userAdded.style.display = "inline"
                    setTimeout(() => {
                        userAdded.style.display = "none";
                    }, 2000)
                },
                error: function () {
                    $("#error").text("Invalid Username or Password");
                    console.log("We are sorry but our servers are having an issue right now");
                },

            })
        }
        else {
            userAlreadyExists.style.display = "inline"
            setTimeout(() => {
                userAlreadyExists.style.display = "none"
            }, 2000);
        }
    })
})