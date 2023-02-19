//! proceed to checkout
let proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
proceedToCheckoutBtn.addEventListener('click', () => {
    console.log('clicked proceed to checkout')
    let url = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");
    $.get(url, (data) => {
        // objdata = data
        for (let x = 0; x < data[0].userCart.length; x++) {
            let obj = {
                count: data[0].userCart[x].count,
            }
            // console.log(obj)
            $.ajax({
                type: "post",
                url: "http://localhost:3003/decrementProductCount/" + data[0].userCart[x].pid,
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
});