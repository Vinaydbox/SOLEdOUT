//data table
//! getting data in postman but not in admin page -userlist
$("#example").DataTable({
    ajax: {
        url: 'http://127.0.0.1:3003/fetchAllUsers',
        dataSrc: '',
    },
    columns: [
        { data: 'username' },
        { data: 'email' },
    ]
})

$("#sneakersTable").DataTable({
    ajax: {
        url: 'http://127.0.0.1:3003/getProducts',
        dataSrc: '',
    },
    columns: [
        { data: 'pid' },
        { data: 'productName' },
        {data:'price'},
        {data:'brand'}
    ]
})