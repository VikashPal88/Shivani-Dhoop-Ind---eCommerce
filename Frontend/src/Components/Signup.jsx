import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from "react-router-dom"




function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate("/")
        }

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await fetch("http://localhost:8000/signup", {
                method: "post",
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            result = await result.json();
            localStorage.setItem("user", JSON.stringify(result))
            console.log(result)
            navigate("/")
        } catch (error) {
            console.log("user Data not send")
        }
    }



    return (
        <>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            <div className=''>
                <div className='relative flex  flex-col items-center '>
                    <div className='h-[60vh] bg-slate-500 w-full -z-10'>
                        <img src="\src\images\banner-bg.jpg" className='h-[60vh] w-full relative' alt="" />
                        <h1 className='absolute right-32 top-56 text-4xl font-bold text-black'>Login/Signup</h1>
                    </div>

                    <div className='mt-14 flex justify-center items-center  h-[80vh] w-[80%] shadow-lg  m-auto'>
                        <div className='w-1/2 bg-sky-500 h-full'>

                        </div>
                        <div className='w-1/2 flex flex-col items-center'>
                            <h1 className='text-xl font-bold'>LOG IN TO ENTER</h1>
                            <form className='flex flex-col' method='POST' onSubmit={handleSubmit}>
                                <input
                                    className='pr-10 py-2 border-b-2 outline-none mt-5 text-left cursor-pointer'
                                    type="text"
                                    name="name"
                                    placeholder='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />

                                <input
                                    className='pr-10 py-2 border-b-2 outline-none mt-5 text-left cursor-pointer'
                                    type="text"
                                    name="email"
                                    placeholder='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />


                                <input
                                    className='pr-10 py-2 border-b-2 outline-none mt-2 cursor-pointer'
                                    type="text"
                                    name="password"
                                    placeholder='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />

                                <p className='mt-5 cursor-pointer'><input type="checkbox" />Keep me logged in</p>
                                <input className='mt-8 h-8 bg-orange-400 w-full cursor-pointer hover:bg-orange-600' type="submit" value={"SignUp"} />
                                <p className='text-sm text-gray-500 text-center mt-3 cursor-pointer'>forget password</p>
                            </form>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#222222" }} className='footer h-[vh] w-full  text-white mt-20'>
                        <Footer />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup
