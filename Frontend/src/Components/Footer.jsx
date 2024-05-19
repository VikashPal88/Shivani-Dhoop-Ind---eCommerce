import React from 'react'

function Footer() {
    return (
        <div>
            <div className='flex  w-full py-20 px-24 gap-5 '>
                <div className='w-1/4 '>
                    <h1 className='text-lg font-bold'>About Us</h1>
                    <p className='mt-5 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo unde consequatur veritatis, exercitationem quos reprehenderit hic deleniti esse voluptatem totam.</p>
                </div>
                <div className='w-1/4 '>
                    <h1 className='text-lg font-bold'>Newsletter</h1>
                    <p className='mt-5 text-gray-400'>Stay update with our latest</p>
                    <input className='w-64 h-8 mt-4' type="text" placeholder='Enter Email' />
                    <button className='h-8 w-7 bg-orange-300'><i className="ri-arrow-right-line"></i></button>
                </div>
                <div className='w-1/4 '>
                    <h1 className='text-lg font-bold'>Instagram Feed</h1>
                    <div className='grid grid-cols-4 gap-1'>
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                        <img className='h-10 w-16' src="\src\images\banner-bg.jpg" alt="" />
                    </div>
                </div>
                <div className='w-1/4 '>
                    <h1 className='text-lg font-bold'>Follow Us</h1>
                    <p className='mt-5 text-gray-400'>Let us be social</p>
                    <div className='flex gap-7 text-xl mt-4'>
                        <p><i className="ri-twitter-x-line"></i></p>
                        <p><i className="ri-linkedin-box-fill"></i></p>
                        <p><i className="ri-facebook-circle-fill"></i></p>
                        <p><i className="ri-instagram-fill"></i></p>
                    </div>
                </div>
            </div>

            <div className='text-center text-gray-400'>
                <p>Copyright ©2024 All rights reserved | This templete is made with  by Vikas</p>
            </div>

        </div >
    )
}

export default Footer
