let container = document.getElementById('productSection');

let url = "http://localhost:3003/getproducts";

$.get(url, function (data) {
    // console.log(data);
    data = JSON.parse(data);
    // console.log(data);
    for (i = 0; i < data.length; i++) {
        pid = data[i].pid;
        productName = data[i].productName;
        price = data[i].price;
        category = data[i].brand;
        productDesc = data[i].productDesc;
        purl = data[i].productURL;
        let x;
        if (i % 3 == 0) {
            x = renderCard1(pid, productName, price, category, productDesc, purl);
        }
        if (i % 3 == 1) {
            x = renderCard2(pid, productName, price, category, productDesc, purl);
        }
        if (i % 3 == 2) {
            x = renderCard3(pid, productName, price, category, productDesc, purl);
        }
        container.innerHTML += x;
    }
})

function renderCard1(pid, pname, price, category, pdesc, imgurl) {
    return `<div class="col-lg-4 col-md-6">
     <div class="single-product">
        <a hef="./single-product.html#${pid}"> <img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6></a>
             <div class="price">
                 <h6>$${price}</h6>
                 <h6 class="l-through">$210.00</h6>
             </div>
             <div class="prd-bottom">
 
                 <a href="" class="social-info">
                     <span class="ti-bag"></span>
                     <p class="hover-text">add to bag</p>
                 </a>
                 <a href="" class="social-info">
                     <span class="lnr lnr-heart"></span>
                     <p class="hover-text">Wishlist</p>
                 </a>
             </div>
         </div>
     </div>
 </div>`

}

function renderCard2(pid, pname, price, category, pdesc, imgurl) {
    return `<div class="col-lg-4 col-md-6">
     <div class="single-product">
         <a href="./single-product.html#${pid}"><img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6></a>
             <div class="price">
                 <h6>$${price}</h6>
                 <h6 class="l-through">$210.00</h6>
             </div>
             <div class="prd-bottom">
                 <a href="" class="social-info">
                     <span class="ti-bag"></span>
                     <p class="hover-text">add to bag</p>
                 </a>
                 <a href="" class="social-info">
                     <span class="lnr lnr-heart"></span>
                     <p class="hover-text">Wishlist</p>
                 </a>
             </div>
         </div>
     </div>
 </div>`
}

function renderCard3(pid, pname, price, category, pdesc, imgurl) {
    return `<div class="col-lg-4 col-md-6">
     <div class="single-product">
         <a href="./single-product.html#${pid}"><img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6></a>
             <div class="price">
                 <h6>$${price}</h6>
                 <h6 class="l-through">$210.00</h6>
             </div>
             <div class="prd-bottom">
 
                 <a href="" class="social-info">
                     <span class="ti-bag"></span>
                     <p class="hover-text">add to bag</p>
                 </a>
                 <a href="" class="social-info">
                     <span class="lnr lnr-heart"></span>
                     <p class="hover-text">Wishlist</p>
                 </a>
                 
             </div>
         </div>
     </div>
 </div>`
}


