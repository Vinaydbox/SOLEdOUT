let proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');

//!add cart items to prevorders
let cartdata;
proceedToCheckoutBtn.addEventListener("click", async () => {
    console.log(" clicked proced to checkout to add cart items to prevordereditems")
    let geturl = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    let url = "http://localhost:3003/addToPrevOrders/" + localStorage.getItem("loggedinUserEmail")
    
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
    let url2 = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    let data = await $.get(url2)
    // alert("in prod decrement")
    console.log(data)
    for (let x = 0; x < data.length; x++) {
        let obj = {
            count: data[x].count,
        }
        await $.ajax({
            type: "post",
            url: "http://localhost:3003/decrementProductCount/" + data[x].pid,
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
    let url3 = "http://localhost:3003/clearCart/" + localStorage.getItem("loggedinUserEmail");
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




