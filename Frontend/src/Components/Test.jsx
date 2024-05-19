import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef } from 'react'
import Navbar from "./Navbar"


function Test() {

    const gsapRef = useRef()

    useGSAP(() => {
        gsap.from(".gsapBox", {
            x: 1000,
            duration: 2,
            delay: 1,
            rotate: 720,
            scale: 5,
            opacity: 0
        })
    })
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div ref={gsapRef} className='gsapBox w-48 h-48 bg-red-400 mt-20'>

            </div>
        </div>
    )
}

export default Test
