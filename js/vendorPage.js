
//GET function
//! need to change all this into jquery
adminlogout = document.getElementById('adminlogout');
adminlogout.addEventListener('click', function () {
    localStorage.setItem('userloggedin', '0')
    window.location.href = './index.html';
})


// userListbtn = document.getElementById("userListbtn");
// addUserbtn = document.getElementById("addUserbtn");
addServicebtn = document.getElementById("addServicebtn");


addServicebtn.addEventListener("click", function () {
    // document.getElementById("userList").style.display = "none";
    // document.getElementById("addUser").style.display = "none";
    document.getElementById("addService").style.display = "inline";
})

let couponCode = document.getElementById("couponCode");
let couponDiscount = document.getElementById("couponDiscount");
let arr = document.getElementsByName("brandCheckbox");
let pushCouponBtn = document.getElementById("pushCoupon");
let brandarr = [];
console.log(arr)
for (let i = 0; i < arr.length; i++) {
    if(arr[i].checked) {

        console.log(arr[i].value)
        brandarr.push(arr[i].value);
    }
}
console.log(brandarr)

pushCouponBtn.addEventListener("click",() => {
    let couponData = {
        couponCode: couponCode.value,
        brand: brandarr,
        discount: couponDiscount.value
    };
    console.log(couponData);
    $.ajax({
        type:"post",
        url:"http://localhost:3003/addCoupon",
        contentType:"application/json",
        couponData: JSON.stringify(couponData),
        
        xhrFields:{withCredintials:false},
        headers:{},
        success: function(couponData){
            console.log("coupon data successfully added")
        },
        error:function(){
            console.log("Error")
        }
    })

})

