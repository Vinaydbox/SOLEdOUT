import head from "./urls.js";

const elasticIP = head();
window.onload = function () {
    //! rendering profile details
    var url = elasticIP+"/fetchUser/" + localStorage.getItem("loggedinUserEmail");
    // let userData = $.get(url);
    // console.log(userData);
    $.get(url, (docs) => {
        console.log(docs)
        
        $("#profileMainBody").append(`
        <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-header">Profile Picture</div>
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="${docs[0].profileImage}" alt="ProfileImage" class="rounded-circle" width="150">
                                    <div class="col-md-12" style="display: none;" id="uploadImage">
                                        <div class="form-outline">
    
                                            <label for="profileImage">Upload Image</label>
                                            <input type="file" id="profileImage" class="form-control" /><br>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <h4 id="mainUsernameField">${docs[0].username}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-twitter mr-2 icon-inline text-info">
                                            <path
                                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                            </path>
                                        </svg>Twitter</h6>
                                    <span class="text-secondary" id="twitterUsername">${docs[0].username}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-instagram mr-2 icon-inline text-danger">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>Instagram</h6>
                                    <span class="text-secondary" id="instagramUsername">${docs[0].username}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-facebook mr-2 icon-inline text-primary">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg>Facebook</h6>
                                    <span class="text-secondary" id="facebookUsername">${docs[0].username}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-header">Account Details</div>
                            <di v class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id="editUsername" contenteditable="false">
                                        <span>${docs[0].username}</span>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id="editEmail" contenteditable="false">
                                    <span>${docs[0].email}</span>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id="editMobileNum" contenteditable="false">
                                    <span>${docs[0].mobileNumber}</span>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id="editCity" contenteditable="false">
                                    <span>${docs[0].address}</span>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <a class="btn btn-info " onclick="editProfile()" id="editProfileBtn">Edit</a>
                                    </div>
                                </div>
                            </di>
                        </div>
    
    
                    </div>
    
                </div>`)
    })

    //!rendering prev orders
    let url2 = elasticIP+"/getPrevOrders/" + localStorage.getItem("loggedinUserEmail");
        $.get(url2, (data) => {
            // alert("render cart")
            // doc = data;
            console.log(data);
            let totalprice = 0;


            for (let x = 0; x < data.length; x++) {
                // console.log(data[0].userCart[x].count)
                // console.log(data[0].userCart[x].price)

                $("#cartItem1").append(`
                <tr>
                <td>
                <div class="media">
                <div class="d-flex">
                <a href="./single-product.html#${data[x].pid}">
                            <img src="${data[x].productURL}" alt="" width="150px" height="150px">
                        </div>
                        <div class="media-body">
                            <p class="text-dark">${data[x].productName}</p>
                            </a>
                        </div>
                    </div>
                    
                </td>
                <td>
                    <div class="product_count">
                    <h5>${data[x].count}</h5>
                        </div>
                    </td>
                    <td>
                        <h5>${data[x].price}</h5>
                    </td>
                <td>
                    <h5>$${data[x].price.substring(1) * data[x].count}</h5>
                </td>
                
            </tr> 
             
        `);

            }
            for (let x = 0; x < data.length; x++) {
                totalprice = totalprice + (data[x].price.substring(1) * data[x].count);
            }
            $("#cartItem1").append(`<td></td>
        <td></td>
        <td>
            <h5>Subtotal</h5>
        </td>
        <td>
            <h5>$${totalprice}</h5>
        </td>
        
        `)
        });
}

let flag_es = 0
// function adrak() {
//     flag_p = 0
//     // var pbar = document.getElementById("bar")
//     document.getElementById("editUsername").innerHTML.length > 0 ? flag_p += 1 : ''
//     document.getElementById("editEmail").innerHTML.length > 0 ? flag_p += 1 : ''
//     document.getElementById("editMobileNum").innerHTML.length > 0 ? flag_p += 1 : ''
//     // document.getElementById("edit4").innerHTML.length > 0 ? flag_p += 1 : ''
//     document.getElementById("editCity").innerHTML.length > 0 ? flag_p += 1 : ''
//     // pbar.style.width = (20 * flag_p) + "%";
//     console.log("end of adrak")
// }


function editProfile() {
    // alert("edit profile")
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
let email = localStorage.getItem("loggedinUserEmail");
let username = $("#editUsername");
let mobileNumber = $("#editMobileNumber");
let address = $("#editCity");
let picurl = $("#profileImage");

function updateData() {
    // alert("update data functio")
    let fd = new FormData();
    fd.append("email", email);
    fd.append("username", username.text());
    fd.append("mobileNumber", mobileNumber.text());
    fd.append("address", address.text());   
    console.log(picurl.files)
    fd.append("profileImage", picurl.files[0]);
    console.log(fd.toString());
    $.ajax({
        type: "post",
        url: elasticIP+"/updateUser/" + localStorage.getItem("loggedinUserEmail"),
        contentType: "application/json",
        data:fd,
        xhrFields: { withCredentials: false, },
        headers: {},
        success: function (data) {
            console.log(data);
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


