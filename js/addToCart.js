/*
$("#productImg")
$("#productName")
$("#productPrice")
*/

// $("#addToCartBtn").click(() => {

function addToCart() {
    let currPID = window.location.hash.substring(1);
    console.log(currPID)
    let productData = {
        productName: $("#productName").text(),
        price: $("#productPrice").text(),
        productURL: $("#productImg").attr('src'),
        loggedinUserEmail: localStorage.getItem('loggedinUserEmail'),
        brand:$("#productBrand").text().substring(8),
        pid:currPID
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