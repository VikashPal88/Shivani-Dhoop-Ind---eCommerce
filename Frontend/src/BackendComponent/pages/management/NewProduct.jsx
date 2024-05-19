import React from 'react'
import AdminSidebar from '../AdminSidebar'
import { useState, ChangeEvent } from 'react'

function NewProduct() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [photo, setPhoto] = useState("")

    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];
        const reader = new FileReader()

        if (file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                if (typeof reader.result === "string") setPhoto(reader.result)
            }
        }
    }

    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main className='product-management'>
                <article>
                    <form>
                        <h2>New Product</h2>
                        <div>
                            <label>Name</label>
                            <input required type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Price</label>
                            <input required type="text" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div>
                            <label>Stock</label>
                            <input required type="text" placeholder='Stock' value={stock} onChange={(e) => setStock(e.target.value)} />
                        </div>
                        <div>
                            <label>Photo</label>
                            <input required type="file" onChange={changeImageHandler} />
                        </div>
                        {
                            photo && <img src={photo} alt="img" />
                        }

                        <button type='submit'>Create Product</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default NewProduct
