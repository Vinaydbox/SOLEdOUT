/*
$("#productImg")
$("#productName")
$("#productPrice")
*/

$("#addToCartBtn").click(() => {

    alert("Product Added to cart Successfully!");

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
            // console.log("hogaya bhai");
            alert("Product Added Successfully to cart");
            // productAdded.style.display = "inline";
            // addedToCart.style.display = "inline";

        },
        error: () => {
            console.log("We are sorry but our servers are having an issue right now");
        }
    })
})