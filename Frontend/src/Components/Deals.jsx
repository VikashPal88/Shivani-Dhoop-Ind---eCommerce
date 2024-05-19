import React from 'react'

function Deals() {
    return (
        <div className='w-full h-full flex'>
            <div className='bg-green-400 h-full w-1/2 flex flex-col justify-center items-center text-white'>
                <div>
                    <h1 className='text-4xl font-semibold'>Exclusive Hot Deal Ends Soon!</h1>
                    <p className='mt-1 text-center text-lg font-medium'>Who are in Extremely love with eco friendly system</p>
                </div>
                <div className='mt-5 bg-white w-4/5 flex text-black rounded-lg justify-between px-14 py-3'>
                    <div>
                        <p className='text-4xl font-bold'>29</p>
                        <p>Days</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>05</p>
                        <p>Hours</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>19</p>
                        <p>Mins</p>
                    </div>
                    <div>
                        <p className='text-4xl font-bold'>32</p>
                        <p>Secs</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <button className='bg-gradient-to-r from-yellow-300 to-yellow-600 px-5 py-2 rounded-3xl'>SHOP NOW</button>
                </div>
            </div>
            <div className='bg-yellow-500 h-full w-1/2'>

            </div>
        </div>
    )
}

export default Deals
