let container = document.getElementById('productSection');
let pname = document.getElementById('productName');
let price = document.getElementById('price');
let picurl = document.getElementById('productURL');
let pid = document.getElementById('productID');
let category = document.getElementById('category');
let desc = document.getElementById('productDESC');

let button = document.getElementById('pushProduct');

button.addEventListener('click',()=>{
    console.log("clicked");
    let data = {
        pid : pid.value,
        productName: pname.value,
        price:price.value,
        productURL: picurl.value,
        productDesc: desc.value,
        category: category.value
    }
    $.ajax({
        type: "post",
        url: "http://localhost:3003/addProduct",
        contentType: "application/json",
        data : JSON.stringify(data),
        xhrFields: {withCredentials : false,},
        headers: {},
        success: function(data){
            console.log("hogaya bhai");
            alert("Product Added");
        },
        error: ()=>{
            console.log("We are sorry but our servers are having an issue right now");
        } 
    })
})

