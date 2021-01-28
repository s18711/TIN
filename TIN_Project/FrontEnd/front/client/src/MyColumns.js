
const empsColumns = [
    {dataField: "id_employee", text: "id_employee", headerStyle: {backgroundColor: 'green'}},
    {
        dataField: "employee_name", text: "employee_name", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "employee_surname", text: "employee_surname", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "employee_birthday", text: "employee_birthday", headerStyle: {backgroundColor: 'green'}
    },
    // {
    //     dataField: "employee_position", text: "employee_position", headerStyle: {backgroundColor: 'green'}
    // },
    // {
    //     dataField: "employee_seniority", text: "employee_seniority", headerStyle: {backgroundColor: 'green'}
    // }
];

const itemsColumns = [
    {
        dataField: "id_item", text: "id_item", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "item_name", text: "item_name", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "item_price", text: "item_price", headerStyle: {backgroundColor: 'green'}
    },
    // {
    //     dataField: "item_category", text: "item_category", headerStyle: {backgroundColor: 'green'}
    // },
    // {
    //     dataField: "item_color", text: "item_color", headerStyle: {backgroundColor: 'green'}
    // }
]
const transactionsColumns = [
    {
        dataField: "id_transaction", text: "id_transaction", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "id_item", text: "it_item", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "id_employee", text: "id_employee", headerStyle: {backgroundColor: 'green'}
    },
    {
        dataField: "transaction_date", text: "transaction_date", headerStyle: {backgroundColor: 'green'}
    },
    // {
    //     dataField: "transaction_comment", text: "transaction_comment", headerStyle: {backgroundColor: 'green'}
    // },
    // {
    //     dataField: "transaction_method", text: "transaction_method", headerStyle: {backgroundColor: 'green'}
    // }
]

module.exports = {
    transactionsColumns : transactionsColumns,
    empsColumns : empsColumns,
    itemsColumns : itemsColumns
};