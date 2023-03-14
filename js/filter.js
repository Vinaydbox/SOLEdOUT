import head from "./urls.js";

const elasticIP = head();
let nike = document.getElementById("Nike")
let adidas = document.getElementById("Adidas")
let puma = document.getElementById("Puma")




// function renderCard1(pid, pname, price, category, pdesc, imgurl) {
//     return `<div class="col-lg-4 col-md-6">
//      <div class="single-product">
//         <a href="./single-product.html#${pid}"> <img class="img-fluid" src="${imgurl}" alt="">
//          <div class="product-details">
//              <h6>${pname}</h6></a>
//              <div class="price">
//                  <h6>$${price}</h6>
//                  <h6 class="l-through">$210.00</h6>
//              </div>
//              <div class="prd-bottom">

//                  <a href="" class="social-info">
//                      <span class="ti-bag"></span>
//                      <p class="hover-text">add to bag</p>
//                  </a>
//                  <a href="" class="social-info">
//                      <span class="lnr lnr-heart"></span>
//                      <p class="hover-text">Wishlist</p>
//                  </a>
//              </div>
//          </div>
//      </div>
//  </div>`

// }

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


