import React from 'react'
import AdminSidebar from '../AdminSidebar'
import { useState, ChangeEvent } from 'react'

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";


function ProductManagement() {

    const [name, setName] = useState("Puma shoes")
    const [price, setPrice] = useState(2000)
    const [stock, setStock] = useState(10)
    const [photo, setPhoto] = useState(img)

    const [nameUpdate, setNameUpdate] = useState(name)
    const [priceUpdate, setPriceUpdate] = useState(price)
    const [stockUpdate, setStockUpdate] = useState(stock)
    const [photoUpdate, setPhotoUpdate] = useState(photo)

    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];
        const reader = new FileReader()

        if (file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                if (typeof reader.result === "string") setPhotoUpdate(reader.result)
            }
        }
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setName(nameUpdate)
        setPrice(priceUpdate)
        setStock(stockUpdate)
        setPhoto(photoUpdate)
    }

    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main className='product-management'>
                <section>
                    <strong>ID - sdfjnslks</strong>
                    <img src={photo} alt="productImg" />
                    <p>{name}</p>
                    {
                        stock > 0 ? (<span className='green'>{stock} Available</span>
                        ) : (<span className='red'>UnAvailable</span>)
                    }
                    <h3>${price}</h3>
                </section>


                <article>
                    <form onSubmit={submitHandle}>
                        <h2>Manage</h2>
                        <div>
                            <label>Name</label>
                            <input required type="text" placeholder='Name' value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
                        </div>
                        <div>
                            <label>Price</label>
                            <input required type="text" placeholder='Price' value={priceUpdate} onChange={(e) => setPriceUpdate(e.target.value)} />
                        </div>
                        <div>
                            <label>Stock</label>
                            <input required type="text" placeholder='Stock' value={stockUpdate} onChange={(e) => setStockUpdate(e.target.value)} />
                        </div>
                        <div>
                            <label>Photo</label>
                            <input required type="file" onChange={changeImageHandler} />
                        </div>
                        {
                            photo && <img src={photoUpdate} alt="img" />
                        }

                        <button type='submit'>Update</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default ProductManagement

