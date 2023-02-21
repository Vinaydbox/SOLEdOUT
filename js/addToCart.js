/*
$("#productImg")
$("#productName")
$("#productPrice")
*/
let productAddedToCart = document.getElementById("productAddedToCart");
function addToCart() {
    // alert("Product Added to cart Successfully!");
    // productAddedToCart.style.display = "inline";
    let currPID = window.location.hash.substring(1);
    if (localStorage.getItem("userloggedin") == 1) {
        console.log(currPID)
        // $.get("http://localhost:3003/getProductDetailsByID/"+currPID,(data)=>{
        $.get("http://localhost:3003/getProdDetailsByID/" + currPID, (data) => {
            if (data.count > 0) {

                let productData = {
                    productName: $("#productName").text(),
                    price: $("#productPrice").text(),
                    productURL: $("#productImg").attr('src'),
                    loggedinUserEmail: localStorage.getItem('loggedinUserEmail'),
                    brand: $("#productBrand").text().substring(8),
                    pid: currPID
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
                        alert("product added to cart successfully")
                        console.log("success", productData);
                    },
                    error: () => {
                        console.log("We are sorry but our servers are having an issue right now");
                    }
                })
            }
            else {
                alert("out of stock")
                document.getElementById("addToCartBtn").disabled = true;
            }
        })
    }
    else {
        alert("Please Login to add to cart")
    }
}