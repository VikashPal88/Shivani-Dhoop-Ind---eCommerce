import React from 'react'
import Products from '../Products'
import Footer from '../Footer'
import Navbar from '../Navbar'

function ShowProducts() {
    return (
        <div className='flex flex-col'>
            <div className='sticky top-0'>
                <Navbar />
            </div>
            <div className='w-[80%] flex justify-center m-auto gap-7 mt-16'>
                {/* Browse Category */}
                <div className='w-[15%]'>
                    <div className='px-5 py-3 bg-violet-200 text-center text-xl font-bold'>
                        <h1>Broswe Categories</h1>
                    </div>
                    <div className='mt-4 text-lg font-medium'>
                        <h1 className='BB px-2 '>Agarbatti</h1>
                        <div className='ml-3 mt-3 '>
                            <p className='BB'>red</p>
                            <p className='BB'>green</p>
                            <p className='BB'>blue</p>
                            <p className='BB'>yellow</p>
                        </div>
                    </div>
                    <div className='mt-4 text-lg font-medium'>
                        <h1 className='BB px-2 '>Agarbatti</h1>
                        <div className='ml-3 mt-3 hidden'>
                            <p className='BB'>red</p>
                            <p className='BB'>green</p>
                            <p className='BB'>blue</p>
                            <p className='BB'>yellow</p>
                        </div>
                    </div>
                    <div className='mt-4 text-lg font-medium'>
                        <h1 className='BB px-2 '>Agarbatti</h1>
                        <div className='ml-3 mt-3 hidden'>
                            <p className='BB'>red</p>
                            <p className='BB'>green</p>
                            <p className='BB'>blue</p>
                            <p className='BB'>yellow</p>
                        </div>
                    </div>
                    <div className='mt-4 text-lg font-medium'>
                        <h1 className='BB px-2 '>Agarbatti</h1>
                        <div className='ml-3 mt-3 hidden'>
                            <p className='BB'>red</p>
                            <p className='BB'>green</p>
                            <p className='BB'>blue</p>
                            <p className='BB'>yellow</p>
                        </div>
                    </div>
                    <div className='mt-4 text-lg font-medium'>
                        <h1 className='BB px-2 '>Agarbatti</h1>
                        <div className='ml-3 mt-3 hidden'>
                            <p className='BB'>red</p>
                            <p className='BB'>green</p>
                            <p className='BB'>blue</p>
                            <p className='BB'>yellow</p>
                        </div>
                    </div>
                </div>
                {/* Products */}
                <div className=' w-[90%]'>
                    {/* Product Navbar */}
                    <div className='flex justify-between items-center px-3 bg-red-400 py-2'>
                        <div className='px-8 py-1 bg-sky-400 text-xl'>
                            <h1>Filter</h1>
                        </div>
                        <div className='flex gap-1 text-center'>
                            <p className='box'><i className="ri-arrow-left-line"></i></p>
                            <p className='box'>1</p>
                            <p className='box'>2</p>
                            <p className='box'>3</p>
                            <p className='box'><i className="ri-arrow-right-line"></i></p>
                        </div>
                    </div>

                    {/* Products */}
                    <div className='w-[100%] flex justify-center '>
                        <div className=''>
                            <Products />
                        </div>

                    </div>

                    {/* Footer  */}
                    <div className='bg-pink-300 h-16 mt-8 mb-6 flex justify-center items-center'>

                        <div className='flex gap-1 justify-center items-center'>
                            <p className='box'><i className="ri-arrow-left-line"></i></p>
                            <p className='box'>1</p>
                            <p className='box'>2</p>
                            <p className='box'>3</p>
                            <p className='box'><i className="ri-arrow-right-line"></i></p>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#222222" }} className='footer h-[vh] w-full  text-white mt-20'>
                <Footer />
            </div>
        </div>
    )
}

export default ShowProducts
