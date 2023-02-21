//! need to change all this into jquery
adminlogout = document.getElementById('adminlogout');
adminlogout.addEventListener('click', function () {
    localStorage.setItem('userloggedin', '0')
    window.location.href = './index.html';
})


window.onload = function () {
    $.get("http://localhost:3003/fetchAllUsers", (data) => {
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
}


// userListbtn = document.getElementById("userListbtn");
addCouponBtn = document.getElementById("addCouponBtn");
addServicebtn = document.getElementById("addServicebtn");
sneakersListbtn = document.getElementById("sneakersListBtn");


addServicebtn.addEventListener("click", function () {
    document.getElementById("addCoupon").style.display = "none";
    document.getElementById("addService").style.display = "inline";
    document.getElementById("sneakersList").style.display = "none"
})

addCouponBtn.addEventListener("click", function () {
    document.getElementById("addCoupon").style.display = "inline";
    document.getElementById("addService").style.display = "none";
    document.getElementById("sneakersList").style.display = "none"
})

sneakersListbtn.addEventListener("click",()=>{
    document.getElementById("addCoupon").style.display = "none";
    document.getElementById("addService").style.display = "none";
    document.getElementById("sneakersList").style.display = "inline"
})

let couponCode = document.getElementById("couponCode");
let couponDiscount = document.getElementById("couponDiscount");
let pushCouponBtn = document.getElementById("pushCoupon");
let couponAddedField = document.getElementById("couponAddedField")



// dynamic loading of brands
let brarr= JSON.parse(localStorage.getItem("brandsArr")); 
let cntnr =document.getElementById("brandMultiSelect");

for(let i=0;i<brarr.length;i++) {
    cntnr.innerHTML +=`<option value="${brarr[i]}">${brarr[i]}</option>`
}




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

