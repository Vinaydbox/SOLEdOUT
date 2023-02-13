window.onload = function () {
    let url = "http://localhost:3003/getUserCart/" + localStorage.getItem("loggedinUserEmail");

    $.get(url, (data) => {
        console.log(data);
        // alert("renderin cart")
        // alert(data[0].userCart[0].productURL)
        for (let x=0; x < data[0].userCart.length; x++) {
            console.log(x)
            $("#cartItem1").append(`
                <tr>
                <td>
                    <div class="media">
                        <div class="d-flex">
                            <img src="${data[0].userCart[x].productURL}" alt="" width="150px" height="150px">
                        </div>
                        <div class="media-body">
                            <p>${data[0].userCart[x].productName}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="product_count">
                        <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
                                                class="input-text qty">
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                                class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                        <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                                class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                        </div>
                    </td>
                    <td>
                        <h5>${data[0].userCart[x].price}</h5>
                    </td>
                <td>
                    <h5>${data[0].userCart[x].price}</h5>
                </td>
            </tr>
            
    `);
        }
    });

}
