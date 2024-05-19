import React, { useEffect, useState } from 'react'
import { useFormik } from "formik"
import Footer from './Footer'
import Navbar from './Navbar'
import { signUpSchema } from '../Schemas'
import { useNavigate } from "react-router-dom"

const initialValues = {
    email: "",
    password: ""
}

function Login() {

    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        if (user.email === "vikas@gmail.com") {
            navigate("/admin/dashboard")
        } else {
            navigate("/")
        }
    })


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            console.log(values)
            try {
                let result = await fetch("http://localhost:8000/login", {
                    method: "post",
                    body: JSON.stringify({ email: values.email, password: values.password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                result = await result.json();
                localStorage.setItem("user", JSON.stringify(result))
                console.log(result)
            } catch (error) {
                console.log("user not found", error)
            }
        }
    })




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
                            <form action="POST" onSubmit={handleSubmit} className='flex flex-col '>
                                <input
                                    className='pr-10 py-2 border-b-2 outline-none mt-5 text-left cursor-pointer'
                                    type="text"
                                    name="email"
                                    placeholder='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.email && touched.email ? (<p className='text-red-500 text-xs'>{errors.email}</p>) : null}

                                <input
                                    className='pr-10 py-2 border-b-2 outline-none mt-2 cursor-pointer'
                                    type="text"
                                    name="password"
                                    placeholder='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.password && touched.password ? (<p className='text-red-500 text-xs'>{errors.password}</p>) : null}

                                <p className='mt-5 cursor-pointer'><input type="checkbox" />Keep me logged in</p>
                                <input className='mt-8 h-8 bg-orange-400 w-full cursor-pointer hover:bg-orange-600' type="submit" value={"LOG IN"} />
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

export default Login
