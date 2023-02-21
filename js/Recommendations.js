let onclickRecomms=JSON.parse(localStorage.getItem("onclickRecomms"));
let searchRecomms=JSON.parse(localStorage.getItem("searchRecomms"));

let onclickcontainer = document.getElementById("onclickSection")
let searchContainer =document.getElementById("SearchSection");
let url = "http://localhost:3003/getproducts";



$.get(url, function (data) {
    data = JSON.parse(data);
    for(let j=0;j<onclickRecomms.length;j++){
        for (i = 0; i < data.length; i++) {
            pid = data[i].pid;
            productName = data[i].productName;
            price = data[i].price;
            category = data[i].brand;
            productDesc = data[i].productDesc;
            purl = data[i].productURL;
            if(onclickRecomms[j].pid == data[i].pid){
                console.log(data[i]);
                onclickcontainer.innerHTML += rendercard(pid,productName,price,purl);
            }
        }
    }
    searchContainer.innerHTML="";
    for(let j=0;j<searchRecomms.length;j++){
        console.log(j);
        for(let i=0;i<data.length;i++){
            pid=data[i].pid;
            productName=data[i].productName;
            price = data[i].price;
            purl=data[i].productURL;
            if(data[i].pid == searchRecomms[j].pid){
                searchContainer.innerHTML += rendercard(pid,productName,price,purl);
            }
        }
    }
})



function rendercard(pid,productName,price,purl){
    return `<div class="col-lg-3 col-md-6">
        <div class="single-product">
        <a href="./single-product.html#${pid}">
            <img class="img-fluid" src="${purl}" alt="">
            <div class="product-details">
                <h6>${productName}</h6>
                <div class="price">
                    <h6>$${price}</h6>
                    <h6 class="l-through">$${price+price*40/100}</h6>
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
    </div>`
}
