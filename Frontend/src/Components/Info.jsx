import React from 'react'

function Info() {
    return (
        <div className='mt-16 h-[40vh] flex justify-center flex-col '>
            <div className='mt-2 flex items-center px-10 py-4 gap-2  m-auto shadow-2xl w-[80%]'>
                <div className='infoDiv '>
                    <p className='hover:text-gray-500 cursor-pointer'><i className="ri-truck-line text-4xl"></i></p>
                    <h2 className='mt-2 font-semibold'>Free Delivery</h2>
                    <p className='text-sm text-gray-500'>Free Shipping on all order</p>
                </div>
                <div className='infoDiv'>
                    <p className='hover:text-gray-500 cursor-pointer'><i className="ri-refresh-line text-4xl"></i></p>
                    <h2 className='mt-2 font-semibold'>Return Policy</h2>
                    <p className='text-sm text-gray-500'>We have return policy</p>
                </div>
                <div className='infoDiv'>
                    <p className='hover:text-gray-500 cursor-pointer'><i className="ri-customer-service-2-line text-4xl"></i></p>
                    <h2 className='mt-2 font-semibold'>24/7 Support</h2>
                    <p className='text-sm text-gray-500'>we have support for quries</p>
                </div>
                <div className='infoDiv border-r-0'>
                    <p className='hover:text-gray-500 cursor-pointer'><i className="ri-coin-line text-4xl"></i></p>
                    <h2 className='mt-2 font-semibold'>Secure Payment</h2>
                    <p className='text-sm text-gray-500'>Secure payment on all trascation</p>
                </div>
            </div>


        </div>
    )
}

export default Info
