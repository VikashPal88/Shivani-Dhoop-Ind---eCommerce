import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {


    return (
        <>

            {/* Navbar  */}
            <div className="absolute w-[100%]">
                <div className={` navbar flex justify-between  space-x-4 px-5 py-3  shadow-2xl bg-yellow-300`} >
                    <div className=''>
                        <NavLink to="/">Shivani Dhoop Industries</NavLink>
                    </div>
                    <div className='flex space-x-14 required:'>
                        <nav className={`flex list-none gap-14 `}>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/"><li>Home</li></NavLink>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/products"><li>Products</li></NavLink>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/login"><li>Login</li></NavLink>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/signup"><li>SignUp</li></NavLink>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/Test"><li>Test</li></NavLink>
                        </nav>
                        <div className='flex gap-8'>
                            <NavLink className={(e) => { return e.isActive ? "text-orange-500" : "" }} to="/cart"><i className="ri-shopping-cart-2-line"></i></NavLink>
                            <p><i className="ri-search-line"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner div */}


        </>
    )
}

export default Navbar
