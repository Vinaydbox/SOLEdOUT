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

button.addEventListener('click', () => {
    $.get("http://localhost:3003/fetchProdByID/" + pid.value, (data) => {
        // console.log("data"+data);
        if (data == "DoNotExist") {
            console.log("clicked");
            let fd = new FormData();
            fd.append("pid",pid.value);
            fd.append("pname",pname.value);
            fd.append("price",price.value);
            fd.append("productURL",picurl.files[0]);
            fd.append("productDesc",desc.value);
            fd.append("brand",brand.value);
            $.ajax({
                type: "post",
                url: "http://localhost:3003/addProduct",
                contentType: false,
                data: fd,
                processData:false,
                xhrFields: { withCredentials: false, },
                headers: {},
                success: function (data) {
                    console.log("hogaya bhai");
                    // alert("Product Added Successfully");
                    productAdded.style.display = "inline";
                },
                error: () => {
                    console.log("We are sorry but our servers are having an issue right now");
                }
            })
        }
        else{
            productAlreadyExists.style.display = "inline";
            console.log("Product Already Exists");
        }
    })
})

