import head from "./urls.js";

const elasticIP = head();
let proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');

//!add cart items to prevorders
let doc;
proceedToCheckoutBtn.addEventListener("click", async () => {
    console.log(" clicked proced to checkout to add cart items to prevordereditems")
    let geturl = elasticIP + "/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    let url = elasticIP + "/addToPrevOrders/" + localStorage.getItem("loggedinUserEmail")

    await $.get(geturl, (cartdata) => {
        // alert("in get call prevorders")
        doc = cartdata;
        console.log(cartdata);
        $.ajax({
            type: "post",
            url: url,
            contentType: "application/json",
            data: JSON.stringify(doc),
            xhrFields: { withCredentials: false },
            headers: {},
            success: function (data) {
                console.log("succesfully added cart items to prev ordered items")
            },
            error: function () {
                console.log("error")
            }
        })
    })

    console.log("call1");
    console.log('clicked proceed to checkout to decerement count')
    let url2 = elasticIP + "/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    let data = $.get(url2)
    // alert("in prod decrement")
    console.log(data)
    for (let x = 0; x < data.length; x++) {
        let obj = {
            count: data[x].count,
        }
        await $.ajax({
            type: "post",
            url: elasticIP + "/decrementProductCount/" + data[x].pid,
            contentType: "application/json",
            data: JSON.stringify(obj),
            // data:{},
            processData: false,
            xhrFields: { withCredentials: false, },
            headers: {},
            success: function (data) {
                console.log("product count decremented successfully");
            },
            error: () => {
                console.log("We are sorry but our servers are having an issue right now");
            }
        })
    }
    alert("Order Placed successfully...")


    // console.log("call 3");
    console.log(" clicked proceed to checkout to clear cart items");
    let url3 = elasticIP + "/clearCart/" + localStorage.getItem("loggedinUserEmail");
    let obj = {
        email: localStorage.getItem("loggedinUserEmail"),

    }
    await $.ajax({
        type: "post",
        url: url3,
        contentType: "application/json",
        data: JSON.stringify(obj),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function (data) {
            console.log("Successfully cleared the cart")

        },
        error: function () {
            console.log("Error")
        }
    })
    window.location.href = "./cart.html"
})




