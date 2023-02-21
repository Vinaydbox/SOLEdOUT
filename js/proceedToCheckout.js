let proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');

//!add cart items to prevorders
let cartdata;
proceedToCheckoutBtn.addEventListener("click", () => {
    let geturl = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    let url = "http://localhost:3003/addToPrevOrders/" + localStorage.getItem("loggedinUserEmail")
    $.get(geturl, (cartdata) => {
        // alert("in get call prevorders")
        // if(err){
        //     console.log("err");
        // }
        // else{
        console.log(cartdata);
        $.ajax({
            type: "post",
            url: url,
            contentType: "application/json",
            data: JSON.stringify(doc),
            xhrFields: { withCredentials: false },
            headers: {},
            success: function (data) {
                console.log("cart items added to prev ordered items")
            },
            error: function () {
                console.log("error")
            }
        })
        // }
    })
    let urls = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    $.get(urls, (data) => {
        // objdata = data
        for (let x = 0; x < data.length; x++) {
            let obj = {
                count: data[x].count,
            }
            // console.log(obj)
            $.ajax({
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
    })
    let urlk = "http://localhost:3003/clearCart/" + localStorage.getItem("loggedinUserEmail");
    let obj = {
        email: localStorage.getItem("loggedinUserEmail"),

    }
    $.ajax({
        type: "post",
        url: urlk,
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


