import React from 'react'
import AdminSidebar from './AdminSidebar'
import { BsSearch } from "react-icons/bs"
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import data from '../../assets/data.json';
import { BarChart, DoughnutChart } from '../Charts'
import { BiMaleFemale } from "react-icons/bi"
import DashboardTable from './DashboardTable'



function Dashboard() {

    const userImg = "https://hips.hearstapps.com/hmg-prod/images/the-witcher-henry-cavill-649abaf045583.jpg?crop=0.350xw:0.700xh;0.326xw,0.00977xh&resize=1200:*";

    const WidgetItem = ({ heading, value, percent, amount = false, color }) => (
        <article className='widget'>
            <div className='widgetInfo'>
                <p>{heading}</p>
                <h4>{amount ? `$${value}` : value}</h4>
                {
                    percent > 0 ? (<span className='green'><HiTrendingUp /> + {percent}%{" "}</span>)
                        : (<span className='red'><HiTrendingDown /> {percent}%{" "}</span>)
                }
            </div>

            <div className='widgetCircle' style={{
                background: `conic-gradient(
                    ${color} ${Math.abs(percent) / 100 * 360}deg,
                    rgb(255, 255, 255) 0
                )`
            }}>
                <span style={{ color }}>{percent}</span>
            </div>
        </article>
    )

    const CategoryItem = ({ color, value, heading }) => (
        <div className='category-item'>
            <h5>{heading}</h5>
            <div>
                <div style={{
                    backgroundColor: color,
                    width: `${value}%`
                }}>
                </div>
            </div>
            <span>{value}%</span>
        </div>
    )

    return (
        <div className='adminContainer'>
            {/* side bar */}
            <AdminSidebar />

            <main className='dashboard'>
                {/* Top bar */}
                <div className='bar'>
                    <BsSearch />
                    <input type="text" placeholder='Search for data, users, docs' />
                    <FaRegBell />
                    <img src={userImg} alt="user" />
                </div>

                {/* Section 1 */}
                <section className='widget-container'>
                    <WidgetItem
                        percent={40}
                        amount={true}
                        value={30021}
                        heading="Revenue"
                        color="rgb(120, 115, 255)"
                    />
                    <WidgetItem
                        percent={-14}
                        value={30500}
                        heading="Users"
                        color="rgb(0, 192, 202)"
                    />
                    <WidgetItem
                        percent={80}
                        value={30200}
                        heading="Transactionn"
                        color="rgba(255, 196, 0)"
                    />
                    <WidgetItem
                        percent={100}
                        value={50}
                        heading="Products"
                        color="rgba(76 0 255)"
                    />
                </section>

                {/* Section 2 */}
                <section className='graph-container'>
                    {/* Revenue Chart */}
                    <div className='revenue-chart'>
                        <h2>Revenue & Transaction</h2>
                        <BarChart
                            data_1={[300, 144, 433, 655, 237, 755, 190]}
                            data_2={[200, 444, 343, 556, 778, 990, 455]}
                            title_1="Revenue"
                            title_2="Transaction"
                            bgColor_1="rgb(0, 115, 255)"
                            bgColor_2="rgb(53, 162, 235, 0.8)"
                        />
                    </div>

                    {/* dashboard categories */}
                    <div className='dashboard-categories'>
                        <h2>Inventory</h2>
                        <div>
                            {
                                data.categories.map((item, index) => (
                                    <CategoryItem
                                        key={index}
                                        heading={item.heading}
                                        value={item.value}
                                        color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
                                    />
                                ))
                            }
                        </div>
                        <div>

                        </div>
                    </div>
                </section>

                {/* Gender chart */}
                <section className='transaction-container'>
                    <div className="gender-chart">
                        <h2>Gender Ratio</h2>
                        <DoughnutChart
                            labels={["Female", "Male"]}
                            data={[120, 190]}
                            backgroundColor={["hsl(340, 82%, 56%", "rgba(53, 162, 235, 0.8)"]}
                        />
                        <p>
                            <BiMaleFemale />
                        </p>
                    </div>

                    <DashboardTable
                        data={data.transaction}
                    />
                </section>
            </main>
        </div>
    )
}

export default Dashboard
