$("#editProfileBtn").click(() => {
    editProfile();
    // adrak()
})

// userData()
window.onload = function () {
    var url = "http://localhost:3003/fetchUser/" + localStorage.getItem("loggedinUserEmail");
    $.get(url, (docs) => {
        console.log(docs)
        response = docs[0];
        console.log(response)
        $("#twitterUsername").html("@" + response.username)
        $("#instagramUsername").html(response.username)
        $("#facebookUsername").html(response.username)
        $("#mainUsernameField").html(response.username)
        $("#editUsername").html(response.username);
        $("#editEmail").html(response.email)
        $("#editMobileNum").text(response.mobileNumber)
        $("#editCity").text(response.address)
    })
    // adrak()
}

flag_es = 0
function adrak() {
    flag_p = 0
    // var pbar = document.getElementById("bar")
    document.getElementById("editUsername").innerHTML.length > 0 ? flag_p += 1 : ''
    document.getElementById("editEmail").innerHTML.length > 0 ? flag_p += 1 : ''
    document.getElementById("editMobileNum").innerHTML.length > 0 ? flag_p += 1 : ''
    // document.getElementById("edit4").innerHTML.length > 0 ? flag_p += 1 : ''
    document.getElementById("editCity").innerHTML.length > 0 ? flag_p += 1 : ''
    // pbar.style.width = (20 * flag_p) + "%";
    console.log("end of adrak")
}


function editProfile() {
    if (flag_es == 0) {
        flag_p = 0;
        document.getElementById("editUsername").contentEditable = true;
        document.getElementById("editMobileNum").contentEditable = true;
        // document.getElementById("edit4").contentEditable = true;
        document.getElementById("editCity").contentEditable = true;
        document.getElementById("uploadImage").style.display = "inline"
        document.getElementById("uploadImage").contentEditable = true;
        document.getElementById("editProfileBtn").innerHTML = "Save Changes";
        flag_es = 1;
    }
    else {
        flag_p = 0
        document.getElementById("editUsername").contentEditable = false;
        document.getElementById("editMobileNum").contentEditable = false;
        // document.getElementById("edit4").contentEditable = false;
        document.getElementById("editCity").contentEditable = false;
        document.getElementById("uploadImage").style.display = "none"

        document.getElementById("editProfileBtn").innerHTML = "Edit";
        updateData()
        flag_es = 0;
    }
    console.log("end of ediprofile func")
}


//!update profile data
let picurl = document.getElementById("profileImage");

function updateData() {
    // alert("update data functio")
    let fd = new FormData();
    fd.append("email", localStorage.getItem('loggedinUserEmail'));
    fd.append("username", $("#editUsername").text());
    fd.append("mobileNumber", $("#editMobileNum").text());
    fd.append("address", $("#editCity").text(),);
    fd.append("profileImage", picurl.files[0]);
   
    // let data = {
    //     email: localStorage.getItem('loggedinUserEmail'),
    //     username: $("#editUsername").text(),
    //     mobileNumber: $("#editMobileNum").text(),
    //     address: $("#editCity").text(),
    //     profileImage: $("#profileImage").
    // }
    // console.log("data: " + JSON.stringify(data))
    $.ajax({
        type: "post",
        // url: url,
        url: "http://localhost:3003/updateUser/" + localStorage.getItem("loggedinUserEmail"),
        contentType: "application/json",
        // data: JSON.stringify(data),
        data:fd,
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function (data) {
            console.log(data);
            // data = JSON.parse(data);
            // alert("in sucess function");
            if (data == "success") {
                console.log("updated successfully");

            } else if (data == "failed") {
                console.log("could not update");
            }

        },
        error: function () {
            console.log("Issue with server.");
            console.log("in error function");
        },
    })
}
