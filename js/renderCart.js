// const { startSession } = require("mongoose");

let applyCouponBtn = document.getElementById("applyCoupon");
let couponEntered = document.getElementById("couponEntered");
let cartFooter = document.getElementById("cartfooter");
let doc;


window.onload = function () {
    if (localStorage.getItem("userloggedin") == 1) {
        let url = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
        $.get(url, (data) => {
            // alert("render cart")
            doc = data;
            console.log(data);
            let totalprice = 0;


            for (let x = 0; x < data.length; x++) {
                // console.log(data[0].userCart[x].count)
                // console.log(data[0].userCart[x].price)

                $("#cartItem1").append(`
                <tr>
                <td>
                <div class="media">
                <div class="d-flex">
                <a href="./single-product.html#${data[x].pid}">
                            <img src="${data[x].productURL}" alt="" width="150px" height="150px">
                        </div>
                        <div class="media-body">
                            <p class="text-dark">${data[x].productName}</p>
                            </a>
                        </div>
                    </div>
                    
                </td>
                <td>
                    <div class="product_count">
                        <input type="text" name="qty" id="sst" maxlength="12" value="${data[x].count}" title="Quantity:"
                                                class="input-text qty">
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                                class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                        </div>
                    </td>
                    <td>
                        <h5>${data[x].price}</h5>
                    </td>
                <td>
                    <h5>$${data[x].price.substring(1) * data[x].count}</h5>
                </td>
                <td>
                <button onclick="deleteProdFromCart(${data[x].pid})" class="btn btn-outline-danger"><i class="lnr lnr-trash"></i></button>
                
                </td>  
            </tr> 
             
        `);

            }
            for (let x = 0; x < data.length; x++) {
                totalprice = totalprice + (data[x].price.substring(1) * data[x].count);
            }
            $("#cartItem1").append(`<td></td>
        <td></td>
        <td>
            <h5>Subtotal</h5>
        </td>
        <td>
            <h5>$${totalprice}</h5>
        </td>
        
        `)
        });
    }
    else {
        alert("Please Login to view your cart...")
        window.location.href = "./index.html";
    }
}


//! apply coupon functionality
let finalPrice = 0;
applyCouponBtn.addEventListener("click", () => {
    let url = "http://localhost:3003/fetchCoupon/" + couponEntered.value;
    $.get(url, (data) => {

        console.log("this is my data")
        console.log(data)
        console.log(doc[0])
        if (data.length == 0) {
            alert("Coupon not found")
        }
        else {
            // let finalPrice = 0;
            for (let i = 0; i < doc[0].userCart.length; i++) {
                let tempBrand = doc[0].userCart[i].brand
                console.log(tempBrand)
                let flag = false;
                for (let j = 0; j < data[0].brand.length; j++) {

                    if (data[0].brand[j] == tempBrand) {
                        flag = true;
                        console.log("in 2nd for loop if")
                        console.log(data[0].discount)
                        //var effectivPirce = totalprice*(100-discount)/100;
                        finalPrice += ((doc[0].userCart[i].price.substring(1) * doc[0].userCart[i].count) * (100 - data[0].discount)) / 100;
                    }
                }
                console.log(finalPrice)
                if (flag == false) {
                    finalPrice += doc[0].userCart[i].price.substring(1) * doc[0].userCart[i].count;
                }
            }
            $("#cartItem1").append(`<tr><td></td>
            <td></td>
            <td>
                <h5>Final Price</h5>
            </td>
            <td>
                <h5>$${finalPrice}</h5>
            </td>
            </tr>`
            )
        }
    })
}, { once: true })

