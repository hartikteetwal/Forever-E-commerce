import React ,{useContext, useState} from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import { ShopContaxt } from '../context/ShopContaxt'

const Navbar = () => {
    const {setShowSearch,getCartCount} = useContext(ShopContaxt)
    const [visible, setvisible] = useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/Forever-E-commerce/'><img src={assets.logo} className='w-36' alt="" /></Link>
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/Forever-E-commerce/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <Link to='/collection'><img src={assets.search_icon} onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' alt="" /></Link>
        <div className="group relative">
             <Link to="/login"><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>
        <Link className='relative' to='/cart' >
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link> 
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden block' alt="" />
      </div>

      {/* menu bar from left to right  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?"w-full":"w-0"}`}>
     <div className="flex flex-col text-gray-600">
        <div onClick={()=>setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
        </div>
        <NavLink to='/Forever-E-commerce/' className='py-2 pl-6 border' onClick={()=>{setvisible(false)}}>
            <p>HOME</p>
        </NavLink>
        <NavLink to='/collection' className='py-2 pl-6 border' onClick={()=>{setvisible(false)}}>
            <p>COLLECTION</p>
        </NavLink>
        <NavLink to='/about' className='py-2 pl-6 border' onClick={()=>{setvisible(false)}}>
            <p>ABOUT</p>
        </NavLink>
        <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=>{setvisible(false)}}>
            <p>CONTACT</p>
        </NavLink>
     </div>
      </div>
    </div>
  )
}

export default Navbar
