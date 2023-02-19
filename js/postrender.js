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

button.addEventListener('click', () => {
    $.get("http://localhost:3003/fetchProdByID/" + pid.value, (data) => {
        // console.log("data"+data);
        if (data == "DoNotExist") {
            console.log("clicked");
            let fd = new FormData();
            fd.append("pid", pid.value);
            fd.append("pname", pname.value);
            fd.append("price", price.value);
            fd.append("productURL", picurl.files[0]);
            fd.append("productDesc", desc.value);
            fd.append("brand", brand.value);
            fd.append("count",1);
            // console.log(brand.value)
            // alert(brand.value)
            var brandsArr = JSON.parse(localStorage.getItem("brandsArr"));
            // console.log("before",brandsArr)
            if (brandsArr.includes(brand.value) == false) {
                // console.log("in if")
                brandsArr.push(brand.value);
                localStorage.setItem("brandsArr", JSON.stringify(brandsArr));
            }
            console.log("after",brandsArr)
            $.ajax({
                type: "post",
                url: "http://localhost:3003/addProduct",
                contentType: false,
                data: fd,
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
                url: "http://localhost:3003/updateProductCount/"+pid.value,
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
})


