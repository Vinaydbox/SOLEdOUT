


function sendData(e) {
    console.log(e)
    if (e.keyCode === 13) {
        alert("enter pressed")
    }
    let searchResults = document.getElementById('searchResults');
    $.ajax({
        type: "post",
        url: "http://localhost:3003/getSneakers",
        contentType: "application/json",
        data: JSON.stringify({ query: e.value }),
        xhrFields: { withCredentials: false, },
        header: {},
        success: function (data) {
            console.log(data)
            searchResults.innerHTML = ""
            if (data.result.length > 0) {
                for (let i = 0; i < data.result.length; i++) {
                    searchResults.innerHTML += `<a href="./single-product.html#${data.result[i].pid}">${data.result[i].productName}</a><hr>`
                }
            }
        },
        error: function () {
            console.log("something went wrong")
        }
    })
}

// let searchData = document.getElementById("searchInput")
// let formData = document.getElementById("searchEnter")
// let productSection = document.getElementById("productSection")
// formData.addEventListener("submit", () => {
//     console.log(searchData.value)
//     productSection.innerHTML = ""
// })
