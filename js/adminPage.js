import head from "./urls.js";

const elasticIP = head();
//GET function
//! need to change all this into jquery
let adminlogout = document.getElementById('adminlogout');
adminlogout.addEventListener('click', function () {
    localStorage.setItem('userloggedin', '0')
    window.location.href = './index.html';
})

// let brandsArr=[]

var xValues = JSON.parse(localStorage.getItem("brandsArr"));
let yValues = [];
async function findYValues(xValues) {
    for (let i = 0; i < xValues.length; i++) {
        let data = await $.get(elasticIP + "/fetchOneProduct/" + xValues[i])
        yValues.push(data.length)
    }
    var barColors = ["blue"];
    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
                label: "Products Summary"
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Products Summary"
            }
        },
    });
}




let userListbtn = document.getElementById("userListbtn");
let addUserbtn = document.getElementById("addUserbtn");
let addServicebtn = document.getElementById("addServicebtn");
let sneakersListbtn = document.getElementById("sneakersListBtn");


userListbtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("sneakerList").style.display = "none"
    document.getElementById("addService").style.display = "none";
    document.getElementById("userList").style.display = "inline";
})
addUserbtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("sneakerList").style.display = "none"
    document.getElementById("userList").style.display = "none";
    document.getElementById("addService").style.display = "none";
    document.getElementById("addUser").style.display = "inline";
})
addServicebtn.addEventListener("click", function () {
    // document.getElementById("addCoupon").style.display = "none";
    document.getElementById("sneakerList").style.display = "none"
    document.getElementById("userList").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("addService").style.display = "inline";
})
sneakersListbtn.addEventListener("click", function () {
    document.getElementById("userList").style.display = "none";
    document.getElementById("addUser").style.display = "none";
    document.getElementById("addService").style.display = "none";
    document.getElementById("sneakerList").style.display = "inline"
})

// addCouponBtn.addEventListener("click", function () {
//     document.getElementById("addCoupon").style.display = "inline";
//     document.getElementById("addService").style.display = "none";
//     document.getElementById("userList").style.display = "none";
//     document.getElementById("addUser").style.display = "none";
// })



window.onload = function () {
    $.get(elasticIP + "/fetchAllUsers", (data) => {
        let customersCount = 0;
        let vendorcnt = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].userCategory == "Vendor") vendorcnt++;
            else if (data[i].userCategory == "Customer") customersCount++;
        }
        document.getElementById("customersCount").innerHTML = customersCount - 1;
        document.getElementById("vendorsCount").innerHTML = vendorcnt;
    })
    document.getElementById("sneakerCount").innerHTML = localStorage.getItem("sneakerCnt");

    findYValues(xValues)

}

console.log(yValues)

