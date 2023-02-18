let searchInput = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
let filterSection = document.getElementById("filterSection")
let productSection = document.getElementById("productSection")
// let brandSection = document.getElementById("brandSection")

searchInput.addEventListener("keyup", (e) => {
    console.log(searchInput.value)
    $.ajax({
        type: "post",
        url: "http://localhost:3003/getSneakers",
        contentType: "application/json",
        data: JSON.stringify({ query: searchInput.value }),
        xhrFields: { withCredentials: false, },
        header: {},
        success: function (data) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                productSection.style.display = "none";
                filterSection.style.display = "";
                searchResults.innerHTML = "";
                filterSection.innerHTML = "";
                brandSection.innerHTML = "";
                if (data.result.length > 0) {
                    for (let i = 0; i < data.result.length; i++) {
                        filterSection.innerHTML += renderCard(data.result[i].pid, data.result[i].productName, data.result[i].price, data.result[i].productURL);
                    }
                }
            }
            else if (e.keyCode === 8) {
                filterSection.style.display = "none";
                productSection.style.display = "";
                searchResults.innerHTML = "";
                if (data.result.length > 0) {
                    for (let i = 0; i < data.result.length; i++) {
                        searchResults.innerHTML += `<a href="./single-product.html#${data.result[i].pid}">${data.result[i].productName}</a><hr>`
                    }
                }
            }
            else {
                searchResults.innerHTML = "";
                if (data.result.length > 0) {
                    for (let i = 0; i < data.result.length; i++) {
                        searchResults.innerHTML += `<a href="./single-product.html#${data.result[i].pid}">${data.result[i].productName}</a><hr>`
                    }
                }
            }
        },
        error: function () {
            console.log("something went wrong")
        }
    })
})

function renderCard(pid, pname, price, imgurl) {
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
