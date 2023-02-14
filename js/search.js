let searchBtn = document.getElementById("searchBtn");
let searchText = document.getElementById("searchInputField");
searchBtn.addEventListener("click", function(){
    let searchData = {
        searchText: searchText,
    }
    $.ajax({
        type:"post",
        url:"http://localhost:3003/searchBar/",
        contentType: "application/json",
        data: JSON.stringify(searchData),
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function(data){
            console.log("Searching...");

        },
        error:function(){
            console.log("Error")
        }
    })
})