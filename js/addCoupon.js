
//GET function
//! need to change all this into jquery
adminlogout = document.getElementById('adminlogout');
adminlogout.addEventListener('click', function () {
    localStorage.setItem('userloggedin', '0')
    window.location.href = './index.html';
})


// userListbtn = document.getElementById("userListbtn");
addCouponBtn = document.getElementById("addCouponBtn");
addServicebtn = document.getElementById("addServicebtn");


addServicebtn.addEventListener("click", function () {
    document.getElementById("addCoupon").style.display = "none";
    document.getElementById("addService").style.display = "inline";
})

addCouponBtn.addEventListener("click", function () {
    document.getElementById("addCoupon").style.display = "inline";
    document.getElementById("addService").style.display = "none";
})

let couponCode = document.getElementById("couponCode");
let couponDiscount = document.getElementById("couponDiscount");
// let arr = document.getElementsByClassName("brandName");
let pushCouponBtn = document.getElementById("pushCoupon");
let couponAddedField = document.getElementById("couponAddedField")
// let brandarr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i].checked) {

//         console.log(arr[i].value)
//         brandarr.push(arr[i].value);
//     }
// }

pushCouponBtn.addEventListener("click", () => {
    const availableBrands = document.querySelector("#brandMultiSelect");
    const selectedBrands = Array.from(availableBrands.selectedOptions).map(option => option.value)
    console.log(selectedBrands);
    let couponData = {
        couponCode: couponCode.value,
        brand: selectedBrands,
        discount: couponDiscount.value
    };  
    console.log(couponData.brand);
    console.log(JSON.stringify(couponData));
    console.log("INISIDE PUSH COUPON BTN ADDEVENT", couponData);
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3003/addCoupon",
        contentType: "application/json",
        // couponData:"data sent from frontend to backend",
        data: JSON.stringify(couponData),
        xhrFields: { withCredintials: false },
        headers: {},
        success: function (couponData) {
            console.log("coupon data successfully added");
            // couponAddedField.style.display = "inline";
            alert("Coupon added successfully")
        },
        error: function () {
            console.log("Error")
        }
    })

})

