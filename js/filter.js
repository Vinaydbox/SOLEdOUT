let nike = document.getElementById("nike")
let adidas = document.getElementById("adidas")
let puma = document.getElementById("puma")
let mainsec = document.getElementById("productSection");
let brandSection = document.getElementById("brandSection");


nike.addEventListener("click", (res) => {
    mainsec.style.display = "none";

    console.log("nike");
    let url = "http://localhost:3003/fetchOneProduct/Nike";
    $.get(url, (data) => {
        console.log(data);
        console.log("nike");
        // data = JSON.parse(data);
        console.log(data);
        brandSection.innerHTML = "";
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
            brandSection.innerHTML += x;
        }
    })
})

adidas.addEventListener("click", (res) => {
    mainsec.style.display = "none";

    console.log("Adidas");
    let url = "http://localhost:3003/fetchOneProduct/Adidas";
    $.get(url, (data) => {
        console.log(data);
        console.log("Adidas");
        // data = JSON.parse(data);
        console.log(data);
        brandSection.innerHTML = "";
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
            brandSection.innerHTML += x;
        }
    })
})

puma.addEventListener("click", (res) => {
    mainsec.style.display = "none";

    console.log("Puma");
    let url = "http://localhost:3003/fetchOneProduct/Puma";
    $.get(url, (data) => {
        console.log(data);
        console.log("Puma");
        // data = JSON.parse(data);
        console.log(data);
        brandSection.innerHTML = "";
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
            brandSection.innerHTML += x;
        }
    })
})

function renderCard1(pid, pname, price, category, pdesc, imgurl) {
    return `<div class="col-lg-4 col-md-6">
     <div class="single-product">
         <img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6>
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
         <img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6>
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
         <img class="img-fluid" src="${imgurl}" alt="">
         <div class="product-details">
             <h6>${pname}</h6>
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
                 <a href="" class="social-info">
                     <span class="lnr lnr-sync"></span>
                     <p class="hover-text">compare</p>
                 </a>
                 <a href="" class="social-info">
                     <span class="lnr lnr-move"></span>
                     <p class="hover-text">view more</p>
                 </a>
             </div>
         </div>
     </div>
 </div>`
}