import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';
import Contact from '../contact/Contact';

const Navbar = () => {

    let {pathname} = useLocation();
    let subPage = pathname.split('/')?.[1]

    function linkness (type= null){
        if(subPage === ""){
            subPage= "home"
        }

       
        // if(type===subPage){
        //     classes+= "bg-purple-800 w-full h-1 rounded-full"
        // }
        // else{
        //     classes +=" "
        // }
    }
   


  return (

    <header className=' pt-4 pb-4 flex w-screen pl-10 pr-10 justify-between  gap-5 mx-auto bg-purple-100 '> 
        <div className= ' flex  text-xl cursor-pointer text-purple-900'>
            <div className='mt-2 mr-2   w-4 h-4 rounded-full bg-purple-900'>
                <div className='ml-[3px] -mt-1 w-2.5 h-4 rounded-full bg-purple-900 border-2 border-purple-100'>
                </div>
            </div>
            <h1>
            LO<span className=' font-extrabold'>GO</span>
            </h1>
        </div>


        <nav className=''>
            <ul className='hidden md:block md-flex gap-5 font-normal'>
                <Link to={'/'}   className='hover:text-purple-400 cursor-pointer '>Home
                    <div className={linkness('home')}>
                    </div>
                </Link> 
                 <Link to={'/service'}  className='hover:text-purple-400 cursor-pointer'>Service
                    <div className={linkness('service')}>
                    </div>
                </Link>  
                <Link to={'/product'}  className='hover:text-purple-400 cursor-pointer'>Product
                    <div className={linkness('product')}>
                    </div>
                </Link>  
                <Link to={'/contact'}  className='hover:text-purple-400 cursor-pointer'>Contact
                    <div className={linkness('contact')}>
                    </div>
                </Link>
                

                
            </ul>
        </nav>
        <div className='flex  bg-purple-900 rounded '>
            <input type="text" placeholder='Search...' className='placeholder:text-zinc-50 placeholder:opacity-80 outline-none text-white p-2' />
            <CiSearch className='text-white w-7 h-10 mr-2' />
        </div>
    </header>
  )
}

export default Navbar