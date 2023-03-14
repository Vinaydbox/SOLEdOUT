import head from "./urls.js";
const elasticIP = head();
let clickdata = localStorage.getItem("onclickRecomms");
let searchRecomms = localStorage.getItem("searchRecomms");


window.onload = function () {
    var id = window.location.hash.substring(1);
    let url = elasticIP + "/getProdDetailsByID/" + id;
    // let singleProductArea = document.getElementById("singleProductArea")
    $.get(url, (data, status) => {
        console.log(clickdata)
        let stockAvailablity = "";
        let color = ""
        if (data.count > 5) {
            stockAvailablity = "In Stock"
            color = "green"
        }
        else if (data.count > 0 && data.count <= 5) {
            stockAvailablity = "Hurry Up!!! Only Few Left..."
            color = "red"
        }
        else {
            stockAvailablity = "Out Of Stock";
            color = "red"
        }
        $("#singleProductArea").append(
            `<div class="container">
            <div class="row s_product_inner">
                <div class="col-lg-6">
                    <img id="productImg" class="img-fluid" src="${data.productURL}" alt="">
                </div>
                <div class="col-lg-5 offset-lg-1">
                    <div class="s_product_text">
                        <h3 id="productName">${data.productName}</h3>
                        <h2 id="productPrice">$${data.price}</h2>
                        <ul class="list">
                            <li><a class="active" id="productBrand" href="#"><span >Brand</span> : ${data.brand}</a></li>
                            <li><a href="#"><span>Availibility</span> : <h5 style="color:${color};display:inline">${stockAvailablity}</h5></a></li>
                        </ul>
                        <p>${data.productDesc}</p>
                        <div id="productAddedToCart" style="display:none;"
											class="alert alert-warning alert-dismissible fade show " role="alert">
											<strong class="text-success">Product Successfully Added to the Cart</strong>
											<button type="button" class="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
                        <div class="card_area d-flex align-items-center">
                            <a href="#" id="addToCartBtn"  class="primary-btn">Add to Cart</a>
                        </div>         
                    </div>
                </div>
            </div>
        </div>`
        )

        let cartBtn = document.getElementById("addToCartBtn");
        cartBtn.addEventListener("click", () => {
            let currPID = window.location.hash.substring(1);
            if (localStorage.getItem("userloggedin") == 1) {
                console.log(currPID)
                // $.get(elasticIP+"/getProductDetailsByID/"+currPID,(data)=>{
                $.get(elasticIP + "/getProdDetailsByID/" + currPID, (data) => {
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
                            url: elasticIP + "/addToCart",
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
        });
        // console.log(JSON.parse(searchRecomms));
        clickdata = JSON.parse(clickdata);
        console.log(clickdata);
        let fl = 0;
        for (let i = 0; i < clickdata.length; i++) {
            if (clickdata[i].pid === data.pid) {
                fl = 1;
                clickdata[i].cnt += 1;
            }
        }
        if (fl === 0) {
            clickdata.push({ pid: data.pid, cnt: 1 });
        }
        // if(clickdata.length>8){
        //     clickdata = clickdata.slice(0,9);
        // }
        console.log("clicked data", clickdata);
        let tempi = clickdata.sort(function (a, b) {
            return (a.cnt > b.cnt) ? -1 : ((b.cnt > a.cnt) ? 1 : 0)
        });
        console.log("onclick recomms after sort", tempi);
        localStorage.setItem("onclickRecomms", JSON.stringify(tempi));
    })
}








// $("#addToCartBtn").click();
