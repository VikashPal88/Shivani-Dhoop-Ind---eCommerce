import React from 'react'
import { Link, useLocation, } from 'react-router-dom'
import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { FaChartBar, FaChartPie, FaChartLine, FaGamepad } from "react-icons/fa"

function AdminSidebar() {

    const location = useLocation()
    const Li = ({ url, text, Icon }) => (
        < li style={{
            backgroundColor: location.pathname.includes(url)
                ? "rgba(0, 115, 225, 0.1)"
                : "white"
        }}> <Link
            to={url}
            style={{
                color: location.pathname.includes(url)
                    ? "rgba(0, 115, 255)" : "black"
            }}>
                <Icon />
                {text}
            </Link></li >
    )

    return (
        <>
            <aside>
                <Link to="/"><h1>Logo</h1></Link>
                <div>
                    <h5>Dashboard</h5>
                    <ul>
                        <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />

                        <Li url="/admin/products" text="Product" Icon={RiShoppingBag3Fill} location={location} />

                        <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location} />

                        <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
                    </ul>
                </div>

                {/* second section */}

                <div>
                    <h5>Charts</h5>
                    <ul>
                        <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} />

                        <Li url="/admin/chart/pie" text="Product" Icon={FaChartPie} location={location} />

                        <Li url="/admin/chart/line" text="Customer" Icon={FaChartLine} location={location} />

                    </ul>
                </div>

                {/* Third Div */}

                <div>
                    <h5>Apps</h5>
                    <ul>
                        <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon3Fill} location={location} />
                    </ul>
                </div>
            </aside >

        </>

    )
}




export default AdminSidebar
