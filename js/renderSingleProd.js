let clickdata=localStorage.getItem("onclickRecomms");
let searchRecomms=localStorage.getItem("searchRecomms");

window.onload = function () {
    var id = window.location.hash.substring(1);
    let url = "http://localhost:3003/getProdDetailsByID/" + id;
    // let singleProductArea = document.getElementById("singleProductArea")
    $.get(url, (data, status) => {
        console.log(clickdata)
        let stockAvailablity = "";
        let color = ""
        if(data.count > 5){
            stockAvailablity = "In Stock"
            color ="green"
        }
        else if(data.count >0 && data.count < 5){
            stockAvailablity = "Hurry Up!!! Only Few Left..."
            color="red"
        }
        else{
            stockAvailablity = "Out Of Stock";
            color="red"
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
                            <div id="addToCartBtn" onclick="addToCart()" data-toggle="modal" data-target="#adeddSucessfully" class="primary-btn">Add to Cart</div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>`
        )
        // console.log(JSON.parse(searchRecomms));
        clickdata = JSON.parse(clickdata);
        console.log(clickdata);
        let fl=0;
        for(let i=0;i<clickdata.length;i++){
            if(clickdata[i].pid === data.pid){
                fl=1;
                clickdata[i].cnt +=1;
            } 
        }
        if(fl===0){
            clickdata.push({pid:data.pid,cnt:1});
        }
        // if(clickdata.length>8){
        //     clickdata = clickdata.slice(0,9);
        // }
        console.log("clicked data",clickdata);
        let tempi= clickdata.sort(function(a, b) {
            return (a.cnt > b.cnt) ? -1 : ((b.cnt > a.cnt) ? 1 : 0)
          });
          console.log("onclick recomms after sort",tempi);
        localStorage.setItem("onclickRecomms",JSON.stringify(tempi));
    })

}

// $("#addToCartBtn").click();
