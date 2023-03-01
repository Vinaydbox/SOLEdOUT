// const { isTypeOnlyImportOrExportDeclaration } = require("typescript");
import head from "./urls.js";

const elasticIP = head();
let container = document.getElementById('productSection');

let brands = [];
let url = elasticIP + "/getproducts";
let onclickd = localStorage.getItem("onclickRecomms");
let searchRecomms = localStorage.getItem("searchRecomms");

let temparr = []
$.get(url, function (data) {
    // console.log(data);
    data = JSON.parse(data);
    console.log(data);
    localStorage.setItem("sneakerCnt", data.length);
    for (let i = 0; i < data.length; i++) {
        let pid = data[i].pid;
        let productName = data[i].productName;
        let price = data[i].price;
        let category = data[i].brand;
        let productDesc = data[i].productDesc;
        let purl = data[i].productURL;
        let datad = { pid: data[i].pid, cnt: 1 };
        temparr.push(datad);
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

    //! setting local recomms and search recommns in local storage
    console.log(temparr)
    console.log(localStorage.getItem("onclickRecomms"));
    if (localStorage.getItem("onclickRecomms").length < 3) {
        // console.log("IM HERE");
        // temparr=JSON.parse(temparr);
        console.log(JSON.stringify(temparr));
        localStorage.setItem("onclickRecomms", JSON.stringify(temparr));
    }
    console.log(localStorage.getItem("searchRecomms"))
    if (localStorage.getItem("searchRecomms").length < 3) {
        localStorage.setItem("searchRecomms", JSON.stringify(temparr));
    }
})


function renderCard1(pid, pname, price, category, pdesc, imgurl) {
    return `<div class="col-lg-4 col-md-6">
     <div class="single-product">
        <a href="./single-product.html#${pid}"> <img class="img-fluid" src="${imgurl}" alt="">
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



//! brands sec under sneakers
let sneakerBrandList = document.getElementById("sneakerBrandList")
var brandsArr = JSON.parse(localStorage.getItem("brandsArr"));
console.log(brandsArr);
sneakerBrandList.addEventListener("click", function () {
    $("#fruitsVegetable").html("");
    for (let i = 0; i < brandsArr.length; i++) {
        $("#fruitsVegetable").append(`<li style="cursor:pointer" class="main-nav-list child"><a onclick="getBrandItems('${brandsArr[i]}')">${brandsArr[i]}<span
    class="number"></span></a></li>`)
    }
})


