import React from 'react'

function LatestProducts() {
    return (
        <div className='flex  flex-col items-center  w-[50%] m-auto mt-8'>
            {/* first Div */}
            <div className='flex gap-14  items-center py-2'>
                <div className='text-sm text-gray-400 hover:text-slate-900 cursor-pointer leading-3 text-center '>
                    <p>PREV</p>
                    <p><i className="ri-arrow-left-line"></i></p>
                </div>
                <div className='text-4xl font-bold '>
                    <h1>Latest Products</h1>
                </div>
                <div className='text-sm text-gray-400 hover:text-slate-900 cursor-pointer leading-3 text-center'>
                    <p>NEXT</p>
                    <p><i className="ri-arrow-right-line" ></i></p>
                </div>
            </div>
            {/* second div */}
            <div className='text-center text-zinc-500 mt-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores optio temporibus eligendi exercitationem dignissimos doloribus dolor voluptatem dolorem illum!</p>
            </div>
        </div>
    )
}

export default LatestProducts
