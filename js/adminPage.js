
//GET function
//! need to change all this into jquery
adminlogout = document.getElementById('adminlogout');
adminlogout.addEventListener('click', function () {
    localStorage.setItem('userloggedin', '0')
    window.location.href = './index.html';
})

// const httRequest = new XMLHttpRequest();
// let tablebody = document.getElementById("tablebody");
// httRequest.open("GET","http:127.0.0.1:3000/userdata");
// httRequest.send();
// var data = "empty"
// httRequest.onload = function() {
//     data = JSON.parse(httRequest.responseText);
//     console.log(data);
//     users_data = data.data;
//     for(var i=0; i<users_data.length; i++){
//         tablebody.innerHTML += renderUser(users_data[i].email,users_data[i].first_name,users_data[i].last_name);
//     }
// }

// function renderUser(email, first_name,last_name)
// {
//     return `
//     <tr>
//     <td>${first_name}</td>
//     <td>${last_name}</td>
//     <td>${email}</td>
//     </tr>
//     `
// }

userListbtn = document.getElementById("userListbtn");
addUserbtn = document.getElementById("addUserbtn");
addServicebtn = document.getElementById("addServicebtn");
// addCouponBtn = document.getElementById("addCouponBtn");


userListbtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("addService").style.display = "none";
    document.getElementById("userList").style.display = "inline";
})
addUserbtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("userList").style.display = "none";
    document.getElementById("addService").style.display = "none";
    document.getElementById("addUser").style.display = "inline";
})
addServicebtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("userList").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("addService").style.display = "inline";
})

// addCouponBtn.addEventListener("click", function () {
//     document.getElementById("addCoupon").style.display = "inline";
//     document.getElementById("addService").style.display = "none";
//     document.getElementById("userList").style.display = "none";
//     document.getElementById("addUser").style.display = "none";
// })
