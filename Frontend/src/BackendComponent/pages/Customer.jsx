import React, { useCallback } from 'react'
import AdminSidebar from './AdminSidebar'
import { useState } from 'react'
import TableHOC from '../TableHOC'
import { FaTrash } from 'react-icons/fa'

const columns = [
    {
        Header: "Avatar",
        accessor: "avatar"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header: "Gender",
        accessor: "gender"
    },
    {
        Header: "Role",
        accessor: "role"
    },
    {
        Header: "Action",
        accessor: "action"
    },
]

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr = [
    {
        avatar: (
            <img
                style={{
                    borderRadius: "50%",
                }}
                src={img}
                alt="Shoes"
            />
        ),
        name: "Emily Palmer",
        email: "emily.palmer@example.com",
        gender: "female",
        role: "user",
        action: (
            <button>
                <FaTrash />
            </button>
        ),
    },

    {
        avatar: (
            <img
                style={{
                    borderRadius: "50%",
                }}
                src={img2}
                alt="Shoes"
            />
        ),
        name: "May Scoot",
        email: "aunt.may@example.com",
        gender: "female",
        role: "user",
        action: (
            <button>
                <FaTrash />
            </button>
        ),
    },
]

function Customer() {
    const [data, setData] = useState(arr)

    const Table = useCallback(TableHOC(
        columns,
        data,
        'dashboard-products-box',
        'Customers',
        true), [])


    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main>{Table()}</main>
        </div>
    )
}

export default Customer
