/*
$("#productImg")
$("#productName")
$("#productPrice")
*/

// $("#addToCartBtn").click(() => {

function addToCart() {


    let productData = {
        productName: $("#productName").text(),
        price: $("#productPrice").text(),
        productURL: $("#productImg").attr('src'),
        loggedinUserEmail: localStorage.getItem('loggedinUserEmail')
        
    }
    console.log(productData)
    $.ajax({
        type: "post",
        url: "http://localhost:3003/addToCart",
        contentType: "application/json",
        data: JSON.stringify(productData),
        xhrFields: { withCredentials: false, },
        headers: {},

        success: function (productData) {   

        },
        error: () => {
            console.log("We are sorry but our servers are having an issue right now");
        }
    })
    alert("Product Added to cart Successfully!");
}