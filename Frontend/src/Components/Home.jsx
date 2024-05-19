import React from 'react'
import Navbar from './Navbar'
import Info from './Info'
import Categories from './Categories'
import LatestProducts from './LatestProducts'
import Products from './Products'
import Deals from './Deals'
import Footer from './Footer'

function Home() {
    return (
        <>
            <div className='sticky top-0 bg-cyan-400'>
                <Navbar />
            </div>
            <div className='flex flex-col'>
                <div className="bg-[url('..\src\images\banner-bg.jpg')] bg-cover bg-center w-[100%] h-[100vh] relative -z-10 ">
                    <div className='flex items-center justify-center m-auto w-[70%] mt-16 '>
                        <div className='w-[45%] flex flex-col items-start'>
                            <h1 className='text-6xl font-bold'>Nike New <br /> Collection!</h1>
                            <p className='mt-8 text-base text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae maxime autem ex rem, optio ducimus, ullam, soluta recusandae ipsa deserunt praesentium in officiis quasi? Iure, blanditiis neque. Iusto, doloribus?</p>
                            <div className='flex mt-5 gap-2 items-center'>
                                <button className=' text-5xl text-orange-400'><i className="ri-add-circle-line"></i></button>
                                <p className='text-xs'> ADD TO BAG</p>
                            </div>
                        </div>

                        <div className='w-[55%] '>
                            <img src="\src\images\banner-img.png" alt="" />
                        </div>

                    </div>
                </div>

                <div className=' w-[100%]'>
                    <Info />
                    <Categories />
                    <LatestProducts />
                    <div className='flex justify-center'>
                        <Products />
                    </div>
                </div>
                <div className=' w-full bg-slate-300 h-[100vh] mt-24'>
                    <Deals />
                </div>
                <div style={{ backgroundColor: "#222222" }} className='footer h-[80vh] w-full  text-white'>
                    <Footer />
                </div>
            </div >
        </>

    )
}

export default Home
