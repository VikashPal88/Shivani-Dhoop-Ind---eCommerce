import React from 'react'

function Categories() {
    return (
        <div className='h-[60vh]  w-[80%] m-auto flex justify-between px-5 py-4 '>
            <div className='flex flex-wrap gap-5 w-[70%] '>
                <div className='w-[60%] bg-red-500'></div>
                <div className='w-[30%] bg-red-500'></div>
                <div className='w-[30%] bg-red-500'></div>
                <div className='w-[60%] bg-red-500'></div>
            </div>
            <div className=' w-[30%] flex justify-center gap-8 '>
                <div className=' w-[90%] bg-red-500'></div>
            </div >
        </div >
    )
}

export default Categories
