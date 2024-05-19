import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ShowProducts from './Components/Show Product/ShowProducts'
import Cart from './Components/Shopping Cart/Cart'
import Test from './Components/Test'
import SingleProduct from './Components/Show Product/SingleProduct'
import Admin from "./BackendComponent/Admin"
import Signup from './Components/Signup'
import AddProducts from './BackendComponent/pages/AddProducts'
import Customer from './BackendComponent/pages/Customer'
import Transaction from './BackendComponent/pages/Transaction'
import NewProduct from './BackendComponent/pages/management/NewProduct'
import ProductManagement from './BackendComponent/pages/management/ProductManagement'
import TransactionMangement from './BackendComponent/pages/management/TransactionMangement'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/products",
      element: <ShowProducts />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/test",
      element: <Test />
    },
    {
      path: "/singlePage",
      element: <SingleProduct />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/admin/dashboard",
      element: <Admin />
    },
    {
      path: "/admin/products",
      element: <AddProducts />
    },
    {
      path: "/admin/customer",
      element: <Customer />
    },
    {
      path: "/admin/transaction",
      element: <Transaction />
    },

    // Management
    {
      path: "/admin/product/new",
      element: <NewProduct />
    },
    {
      path: "/admin/product/:id",
      element: <ProductManagement />
    },
    {
      path: "/admin/transaction/:id",
      element: <TransactionMangement />
    },



  ])

  return (
    <>

      <RouterProvider router={router} />
      {/* <RouterProvider router={router} /> */}

      {/* <div className='box-border h-[100vh] w-[100%] hidden'> */}
      {/* first div */}
      {/* <div className="bg-[url('..\src\images\banner-bg.jpg')] bg-cover bg-cente h-[100vh] w-[100%] flex justify-center items-center flex-col">
          <Navbar />
          <Home />
        </div> */}

      {/* second div */}
      {/* <div className='h-[100vh] w-[100%] '>
          <Info />
          <Categories />
        </div> */}

      {/* thrid div */}
      {/* <div className='main w-[100%] mt-14'> */}
      {/* Latest Products */}
      {/* <LatestProducts /> */}


      {/* Products */}
      {/* <div className='flex flex-wrap justify-center gap-8 mt-8'>
            < Products />
            < Products />
            < Products />
            < Products />
            < Products />
            < Products />
            < Products />
            < Products />
          </div>
        </div > */}

      {/* 4th div Deals */}
      {/* <div className='border-2 border-red-800 w-full bg-slate-300 h-[100vh] mt-24'>
          <Deals />
        </div> */}

      {/* 5th div */}
      {/* <div style={{ backgroundColor: "#222222" }} className='footer h-[80vh] w-full  text-white'>
          <Footer />
        </div> */}

      {/* Login */}

      {/* </div> */}
      {/* <div className=''>
        <Login />
      </div>
      <div className='hidden'>
        <ProductLists />
      </div> */}
    </>
  )
}

export default App
