fullName = document.getElementById('newUserName')
newEmail = document.getElementById('userEmail')
newPwd = document.getElementById('userpwd')
addUserbtn = document.getElementById('pushUser')


addUserbtn.addEventListener("click",()=>{
    console.log("in add user");
    let data = {
        username : fullName.value,
        email: newEmail.value,
        password: newPwd.value,
    }
    console.log(data)
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
            // window.location.href = './adminIndex.html';
        },
        error: function () {
            $("#error").text("Invalid Username or Password");
            console.log("We are sorry but our servers are having an issue right now");
        },

    })
})