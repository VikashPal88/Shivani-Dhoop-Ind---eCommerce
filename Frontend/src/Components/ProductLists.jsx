import React from 'react'
import Navbar from '../Navbar'
import ShowProducts from './Show Product/ShowProducts'

function ProductLists() {
    return (
        <div className=''>
            <div className='mt-8 w-[80%] justify-center items-center'>
                <Navbar />
            </div>

            <div className='w-[100%] mt-28'>
                <ShowProducts />
            </div>

        </div >
    )
}

export default ProductLists
