import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer"
import { NavLink } from 'react-router-dom'
function SingleProduct() {
    const [show, setShow] = useState("Description")

    const handleShow = (e) => {
        let value = e.target.textContent
        setShow(value)
    }
    return (
        <>
            <div className='sticky  bg-cyan-800 top-0'>
                <Navbar />
            </div>
            <div className='flex flex-col '>
                <div className='flex justify-center items-start w-full px-10  min-h-[80vh] mt-24'>
                    {/* images section */}
                    <div className='w-[50%] flex h-[70vh] overflow-hidden'>
                        <div className='multiimages  p-4 flex flex-col gap-5 w-[15%]'>
                            <div className='h-12 w-12 bg-red-500 rounded-md cursor-pointer'><img src="" alt="img1" /></div >
                            <div className='h-12 w-12 bg-red-500 rounded-md cursor-pointer'><img src="" alt="img1" /></div>
                            <div className='h-12 w-12 bg-red-500 rounded-md cursor-pointer'><img src="" alt="img1" /></div>
                            <div className='h-12 w-12 bg-red-500 rounded-md cursor-pointer'><img src="" alt="img1" /></div>
                            <div className='h-12 w-12 bg-red-500 rounded-md cursor-pointer'><img src="" alt="img1" /></div>
                        </div >
                        <div className=' '>
                            <img className='h-full px-24' src="\src\images\stick.png" alt="" />

                        </div>
                    </div >

                    {/* details section */}
                    < div className=' w-[50%] min-h-[70vh]' >
                        {/* Product Details */}
                        < div className='' >
                            <h1 className='text-3xl font-bold'>Shivani Dhoop Industries Agraptti bestfo kepofk poe</h1>
                            <p className='px-2 bg-red-500 py-1 w-24 rounded-lg text-xs mt-2'>Summer Sale</p>
                            <p className='text-red-500 text-3xl mt-2 font-bold'>-60% <span className='text-black'>₹999</span></p>
                            <p className='text-sm '>M.R.P.: <span className='line-through text-gray-700'>2999</span> </p>
                            <p className='mt-2 pb-3 text-lg border-b-2 border-zinc-300'>Availibilty   : <span className='text-red-500'>In Stock</span></p>
                            <div className='mt-5'>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>

                                <div className='mt-5'>
                                    <div className='flex'>
                                        <p>Quntity:</p>
                                        <input type="number" className='bg-transparent bg-slate-200 outline-none rounded-md px-5 w-1/3' />
                                    </div>
                                    <div className='flex items-center mt-5'>
                                        <button className='ATCbtn '>Add To Cart</button>
                                        <p className='whish ml-5 bg-orange-500 text-2xl rounded-2xl w-8 text-center cursor-pointer'><i className="ri-heart-line"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >

                </div >
                {/* Policies */}
                < div className='w-[80%]  border-[1px] m-auto pb-2' >
                    <div className='bg-blue-300'>
                        <nav className='flex list-none justify-center gap-5 py-2 '>
                            <li onClick={(e) => handleShow(e)} className={`text-black px-3 py-1 font-medium cursor-pointer ${show === "Description" ? "bg-orange-500 text-white" : "bg-white"}`}>Description</li>
                            <li onClick={(e) => handleShow(e)} className={`text-black px-3 py-1 font-medium cursor-pointer ${show === "Specifiction" ? "bg-orange-500 text-white" : "bg-white"}`}>Specifiction</li>
                            <li onClick={(e) => handleShow(e)} className={`text-black px-4 py-1 font-medium cursor-pointer ${show === "Comments" ? "bg-orange-500 text-white" : "bg-white"}`}>Comments</li>
                            <li onClick={(e) => handleShow(e)} className={`text-black px-6 py-1 font-medium cursor-pointer ${show === "Reviews" ? "bg-orange-500 text-white" : "bg-white"}`}>Reviews</li>
                        </nav>
                    </div>

                    {/* details  */}
                    <div className='mt-2'>
                        <div className={`${show === "Description" ? "block" : "hidden"}`}>
                            <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and</p>

                            <p>
                                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less
                            </p>
                        </div>
                        <div className={`${show === "Specifiction" ? "block" : "hidden"}`}>
                            <div className='grid grid-cols-2 px-20 text-gray-500'>
                                <div className='text-sm font-medium'>
                                    <p className='borderB'>width</p>
                                    <p className='borderB'>Height</p>
                                    <p className='borderB'>Depth</p>
                                    <p className='borderB'>Weight</p>
                                    <p className='borderB'>Quality Checking</p>
                                    <p className='borderB'>Freashness Duration</p>
                                    <p className='borderB'>When Packaging</p>
                                    <p className='borderB border-none'>each box containes</p>
                                </div>
                                <div className='text-sm font-medium'>
                                    <p className='borderB'>128mm</p>
                                    <p className='borderB'>508mm</p>
                                    <p className='borderB'>85mm</p>
                                    <p className='borderB'>52gm</p>
                                    <p className='borderB'>yes</p>
                                    <p className='borderB'>03days</p>
                                    <p className='borderB'>without touch of hand</p>
                                    <p className='borderB border-none'>60pcs</p>
                                </div>
                            </div>
                        </div>
                        {/* Comments */}
                        <div className={`${show === "Comments" ? "block" : "hidden"}`}>
                            {/* See comments */}
                            <div className='flex justify-center'>
                                <div className='w-1/2 '>
                                    <div className='flex justify-between items-center px-5'>
                                        <div className='flex justify-center items-center gap-5'>
                                            <div className='rounded-full  overflow-hidden '>
                                                <img className='bg-green-300 h-20 w-20 object-cover' src="\src\images\stick.png" alt="" />
                                            </div>
                                            <div>
                                                <h3>Vikas Pal</h3>
                                                <h3>12 feb, 2024 at 05:56pm</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <button className='px-5 py-1 rounded-full bg-white text-balance  border-2 hover:bg-orange-400'>Reply</button>
                                        </div>
                                    </div>
                                    <div className='px-5 text-sm text-zinc-500'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt dolorum in blanditiis impedit asperiores fugiat quam, neque, quos, maxime architecto reprehenderit deleniti molestias dolore eaque laboriosam repellat facilis assumenda!</p>
                                    </div>
                                </div>
                                {/* Post Comments */}
                                <div className='flex flex-col w-1/2 px-5'>
                                    <div>
                                        <h1 className='text-3xl font-semibold'>Post a Comment</h1>
                                    </div>
                                    <div>
                                        <form action="" className='flex flex-col '>
                                            <input type="text" placeholder='Your Full name' className='inputBtn' />
                                            <input type="email" placeholder='Email Address' className='inputBtn' />
                                            <input type="tel" placeholder='Your Full name' className='inputBtn' />
                                            <textarea name="" placeholder='Message' className='resize-none outline-none border-[1px] border-zinc-300 mt-2 px-2' ></textarea>
                                            <input type="submit" value="Submit Now" className='mt-2 bg-yellow-300 w-32 py-2 text-xl font-bold cursor-pointer' />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Reviews */}
                        <div className={`${show === "Reviews" ? "block" : "hidden"} w-full`}>
                            <div className='w-full flex justify-center gap-10 '>
                                {/* Overall rating */}
                                <div className='text-center bg-zinc-300 w-[25%] h-36'>
                                    <h1 className='text-2xl font-bold'>Overall</h1>
                                    <h2 className='text-4xl font-extrabold mt-2 text-orange-500'>4.0</h2>
                                    <p className='text-lg font-medium mt-2'>(03 Reviews)</p>
                                </div>
                                {/* Stars */}
                                <div className='w-[25%]'>
                                    <div>
                                        <h1>Based on 100 Reviews</h1>
                                    </div>
                                    <div>
                                        <p>5 Star⭐⭐⭐⭐⭐ <span>50</span></p>
                                        <p>4 Star⭐⭐⭐⭐⭐ <span>20</span></p>
                                        <p>3 Star⭐⭐⭐⭐⭐ <span>01</span></p>
                                        <p>2 Star⭐⭐⭐⭐⭐ <span>02</span></p>
                                        <p>1 Star⭐⭐⭐⭐⭐ <span>90</span></p>
                                    </div>
                                </div>
                                {/* review form */}
                                <div className='w-[50%]'>
                                    <h1 className='text-3xl font-semibold'>Add a Review</h1>
                                    <p className='text-sm text-zinc-500 mt-2'>Your Rating: ⭐⭐⭐⭐⭐ Outstanding</p>
                                    <form action="" className='flex flex-col mt-2'>
                                        <input type="text" placeholder='Your Full name' className='inputBtn' />
                                        <input type="email" placeholder='Email Address' className='inputBtn' />
                                        <input type="tel" placeholder='Your Full name' className='inputBtn' />
                                        <textarea name="" placeholder='Review' className='resize-none outline-none border-[1px] border-zinc-300 mt-2 px-2' ></textarea>
                                        <input type="submit" value="Submit Now" className='mt-2 bg-yellow-300 w-32 py-2 text-xl font-bold cursor-pointer' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div style={{ backgroundColor: "#222222" }} className='footer h-[80vh] w-full  text-white mt-8'>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default SingleProduct
