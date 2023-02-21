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



//!add cart items to prevorders
// proceedToCheckoutBtn.addEventListener("click",()=>{
//     let doc;
//     console.log("proced to checkout clicked to add cart to prevordereditems")
//     let url = "http://localhost:3003/addToPrevOrders/" + localStorage.getItem("loggedinUserEmail")
//         $.get(url, (data) => { 
//             doc = data;
//         })  
//     $.ajax({
//         type:"post",
//         url:url,
//         contentType:"application/json",
//         data : JSON.stringify(doc),
//         xhrFields:{withCredentials:false},
//         headers:{},
//         success:function(data){
//             console.log("cart items added to prev ordered items")
//         },
//         error:function(){
//             console.log("error")
//         }
//     })

// })


proceedToCheckoutBtn.addEventListener("click",()=>{
    //!clear cart items
    console.log("proceed to checkout clicked to clear cart items");
    let url = "http://localhost:3003/clearCart/" + localStorage.getItem("loggedinUserEmail");
    let obj={ 
        email :localStorage.getItem("loggedinUserEmail"),
        
    }
    $.ajax({
        type:"post",
        url:url,
        contentType: "application/json",
        data: JSON.stringify(obj),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function(data){
            console.log("Successfully cleared the cart")

        },
        error:function(){
            console.log("Error")
        }
    })
    window.location.href = "./cart.html"

})

