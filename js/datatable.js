//data table
import head from "./urls.js";

const elasticIP = head();
//! getting data in postman but not in admin page -userlist
$("#example").DataTable({
    ajax: {
        url: elasticIP+'/fetchAllUsers',
        dataSrc: '',
    },
    columns: [
        { data: 'username' },
        { data: 'email' },
    ]
})

$("#sneakersTable").DataTable({
    ajax: {
        url: elasticIP+'/getProducts',
        dataSrc: '',
    },
    columns: [
        { data: 'pid' },
        { data: 'productName' },
        {data:'price'},
        {data:'brand'}
    ]
})