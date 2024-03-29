newUserName = document.getElementById('newUserName1')
newEmail = document.getElementById('userEmail1')
newPwd = document.getElementById('userpwd1')
addUserbtn = document.getElementById('pushNewUser')
userAdded = document.getElementById('userAdded')
userAlreadyExists = document.getElementById("userAlreadyExists")

addUserbtn.addEventListener("click", () => {
    $.get("http://localhost:3003/fetchOneUser/" + newEmail.value, (res) => {
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
                url: "http://localhost:3003/addUser",

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