import React from 'react'
import AdminSidebar from './AdminSidebar'
import { useState, useCallback } from "react"
import TableHOC from '../TableHOC'
import { Link } from "react-router-dom"

const columns = [
    {
        Header: "User",
        accessor: "user"
    },
    {
        Header: "Amount",
        accessor: "amount"
    },
    {
        Header: "Discount",
        accessor: "discount"
    },
    {
        Header: "Status",
        accessor: "status"
    },
    {
        Header: "Action",
        accessor: "action"
    },
]

const arr = [
    {
        user: "Charas",
        amount: 4500,
        discount: 400,
        quantity: 3,
        status: <span className="red">Processing</span>,
        action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
        user: "Xavirors",
        amount: 6999,
        discount: 400,
        status: <span className="green">Shipped</span>,
        quantity: 6,
        action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
    {
        user: "Xavirors",
        amount: 6999,
        discount: 400,
        status: <span className="purple">Delivered</span>,
        quantity: 6,
        action: <Link to="/admin/transaction/sajknaskd">Manage</Link>,
    },
]

function Transaction() {

    const [data, setData] = useState(arr)
    const Table = useCallback(TableHOC(
        columns,
        data,
        'dashboard-products-box',
        'Transaction',
        true), [])

    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main>{Table()}</main>
        </div>
    )
}

export default Transaction
