import React, { useEffect, useState } from 'react'
import { array } from 'yup'
import SingleProduct from './Show Product/SingleProduct'
import { Link } from 'react-router-dom'

function Products() {
    const [data, setData] = useState(null)
    const fetchapi = async (url) => {
        const response = await fetch(url)
        let result = await response.json()
        setData(result.data.data)
    }

    useEffect(() => {
        fetchapi("https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%2Cprice%2Cthumbnail%2Cimages%2Ctitle%2Cid&query=mens-watches")
    }, [])




    return (
        <div className='mt-8 grid grid-cols-4 gap-5'>
            {
                data && data.length ?
                    data.map((value, index) => (<div key={index} className='w-60 h-80 mt-8 shadow-lg shadow-gray-300 '>
                        <div className='bg-purple-300 h-52 overflow-hidden'>
                            <Link to="/singlePage">
                                <img src={value.thumbnail} alt="img" className='h-52 w-full object-cover cursor-pointer' />
                            </Link>

                        </div>
                        <div className='h-5 '>
                            <h1 className='leading-5 text-lg'>{value.title}</h1>
                            <p className='mt-1'>{value.price} <span className='ml-5 line-through text-slate-400'>₹499.00</span></p>
                        </div>
                        <div className='flex gap-2 h-36 text-base mb-2'>
                            <div className='flex  cursor-pointer gap-2 items-center '>
                                <p className='rounded-xl bg-blue-900 hover:bg-orange-300 h-6 w-6 text-center text-white'><i className="ri-shopping-cart-line"></i></p>
                                <p className='text-sm text-gray-600'>Add To cart</p>
                            </div>
                            <div className='flex px-1 cursor-pointer gap-2 items-center'>
                                <p className='rounded-xl bg-blue-900 hover:bg-orange-300 h-6 w-6 text-center text-white'><i className="ri-heart-line"></i></p>
                                <p className='text-sm text-gray-600'>Add To cart</p>
                            </div>
                        </div>
                    </div>

                    )) :
                    null
            }
        </div>
    )
}

export default Products
