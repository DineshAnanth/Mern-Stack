import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const linksdata =[
        {
            title : 'Home',
            path : '/'
        },
        {
            title : 'Products',
            path : '/products'
        },
        {
            title : 'Contacts',
            path : '/contacts'
        }
    ]
  return (
    <>
        <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
            <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500'>
                 Max Store
            </div>
            <div className='w-[40%]-full flex justify-end items-center '>
                <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                    {linksdata.map((link,index)=>(
                     <NavLink to ={link.path} key={index} className='h-[80%] hover:bg-purple-500 hover:text-white'>
                        {link.title}
                     </NavLink>    
                    ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar