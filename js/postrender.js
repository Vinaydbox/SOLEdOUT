import head from "./urls.js";

const elasticIP = head();
let container = document.getElementById('productSection');
let pname = document.getElementById('productName');
let price = document.getElementById('price');
let picurl = document.getElementById("productURL");
let pid = document.getElementById('productID');
let brand = document.getElementById('category');
let desc = document.getElementById('productDESC');
let productAdded = document.getElementById('productAdded');

let productAlreadyExists = document.getElementById('productAlreadyExists');

let button = document.getElementById('pushProduct');

console.log(localStorage.getItem("brandsArr"));
if (localStorage.getItem("brandsArr") == null) {
    localStorage.setItem("brandsArr", JSON.stringify(["Nike", "Puma", "Adidas"]));
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    let pidval = pid.value
    if (pidval.match(/^[0-9]+$/)!=null && price.value.match(/^[0-9]+$/)!=null && pname.value.match(/^[A-Za-z0-9 ]*$/)!=null 
    && desc.value.match(/^[A-Za-z0-9 ]*$/)!=null && brand.value.match(/^[A-Za-z0-9 ]*$/)!=null){
        $.get(elasticIP + "/fetchProdByID/" + pid.value, (data) => {
            // console.log("data"+data);
            if (data == "DoNotExist") {
                console.log("clicked");
                let fd = new FormData();
                fd.append("pid", pidval);
                fd.append("pname", pname.value);
                fd.append("price", price.value);
                fd.append("productURL", picurl.files[0]);
                fd.append("productDesc", desc.value);
                fd.append("brand", brand.value);
                fd.append("count", 1);
                console.log(picurl.files[0]);
                // alert(brand.value)
                var brandsArr = JSON.parse(localStorage.getItem("brandsArr"));
                // console.log("before",brandsArr)
                if (brandsArr.includes(brand.value) == false) {
                    // console.log("in if")
                    brandsArr.push(brand.value);
                    localStorage.setItem("brandsArr", JSON.stringify(brandsArr));
                }
                console.log("after", brandsArr)
                $.ajax({
                    type: "post",
                    enctype: "multipart/form-data",
                    url: elasticIP + "/addProduct",
                    data: fd,
                    contentType: false,
                    processData: false,
                    xhrFields: { withCredentials: false, },
                    headers: {},
                    success: function (data) {
                        console.log("product added successfully");
                        // alert("Product Added Successfully");
                        productAdded.style.display = "inline";
                    },
                    error: () => {
                        console.log("We are sorry but our servers are having an issue right now");
                    }
                })
            }
            else {
                //! if product already exists, increment the count of the product
                $.ajax({
                    type: "post",
                    url: elasticIP + "/updateProductCount/" + pid.value,
                    contentType: false,
                    data: {},
                    processData: false,
                    xhrFields: { withCredentials: false, },
                    headers: {},
                    success: function (data) {
                        console.log("product count incremented successfully");
                    },
                    error: () => {
                        console.log("We are sorry but our servers are having an issue right now");
                    }
                })
            }
        })
    }
    else {
        alert("Enter only acceptable characters in every field")
    }
})


