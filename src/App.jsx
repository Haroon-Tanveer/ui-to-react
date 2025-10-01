import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/home/Home"
import Service from "./components/service/Service"
import Product from "./components/product/Product"
import Contact from "./components/contact/Contact"
import Layout from "./components/layout/Layout"
import Navbar from "./components/navbar/Navbar"


function App() {

  const router =createBrowserRouter([
    
      
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/product',
          element:<Product/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
      
  
]
)
 

  return (
    <>
    <RouterProvider router={router}/>
    
    
    </>
  )
}

export default App
