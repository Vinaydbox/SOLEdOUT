window.onload = function () {
    var id = window.location.hash.substring(1);
    let url = "http://localhost:3003/getProdDetailsByID/" + id;
    // let singleProductArea = document.getElementById("singleProductArea")
    $.get(url, (data, status) => {
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
                            <li><a href="#"><span>Availibility</span> : In Stock</a></li>
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
                            <div id="addToCartBtn" onclick="addToCart()" data-toggle="modal" data-target="#adeddSucessfully" class="primary-btn">Add to Cart</div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>`
        )

    })

}

// $("#addToCartBtn").click();
