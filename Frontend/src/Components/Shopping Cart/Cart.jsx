import React from 'react'
import Navbar from '../Navbar'

function Cart() {
    return (
        <>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            <div className='relative flex flex-col'>
                <div className='text-center mt-12 text-5xl font-bold'>
                    <h1>My Cart</h1>
                </div>
                <div className='mt-12 flex justify-around  min-h-80 w-full'>
                    {/* cart div */}
                    <div className='w-[60%]'>
                        <ul className=' border-b-2 border-gray-300 flex w-full  py-1'>
                            <li className=' w-[50%] '>PRODUCT</li>
                            <li className=' w-[15%] text-center'>PRICE</li>
                            <li className=' w-[15%] text-center'>QTY</li>
                            <li className=' w-[15%] text-center'>TOTAL</li>
                            <li className=' w-[5%] text-center'></li>
                        </ul>
                        <div className='mt-12 w-[100%]'>
                            <ul className=' border-b-2 border-gray-300 flex py-1 '>
                                <div className='flex w-[50%]'>
                                    <img src="" alt="img" />
                                    <h2>Sai Sagar Agrabtti</h2>
                                </div>
                                <div className='w-[15%] text-center'>
                                    <p>₹599</p>
                                </div>
                                <div className='w-[15%] flex justify-center'>
                                    <div className='flex bg-blue-400 justify-center gap-3 w-[60%] rounded-xl'>
                                        <p className='cursor-pointer'><i className="ri-subtract-line"></i></p>
                                        <p>2</p>
                                        <p className='cursor-pointer'><i className="ri-add-line"></i></p>
                                    </div>

                                </div>
                                <div className='w-[15%] text-center'>
                                    <p>₹1199</p>
                                </div>
                                <div className='w-[5%] text-center '>
                                    <p><i className=" ri-close-circle-line cursor-pointer"></i></p>
                                </div>
                            </ul>
                        </div >
                    </div>

                    {/* payment div */}
                    <div className='border-2 border-zinc-200 w-[30%] bg-amber-200 flex flex-col justify-between'>
                        <div className='py-3 px-5 text-2xl font-bold border-2 border-gray-300'>
                            <h1>Order Summary</h1>
                        </div>
                        <div>
                            <div className='flex justify-between px-7 py-2 '>
                                <p>SubTotal</p>
                                <p>₹2999.00</p>
                            </div>
                            <div className='flex justify-between px-7 py-2'>
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <div className='flex justify-between px-7 py-2 '>
                                <label htmlFor="">Add coupon code <span><i className="ri-arrow-right-line"></i></span> </label>
                                <input className='bg-transparent outline-none bg-fuchsia-100' type="text" name='coupon' />
                            </div>
                            <div className='flex justify-between px-7 border-2 border-gray-300 py-3'>
                                <h1>Total</h1>
                                <p>₹5999.00</p>
                            </div>
                        </div>
                        <div className='text-center border-2 border-gray-500 bg-green-400 py-2 '>
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart
