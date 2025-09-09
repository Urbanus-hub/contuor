import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => (
    <div className='w-full h-[80px] bg-[#3B5D50] flex items-center px-25 justify-between'>
        {/* #3B5D50 */}
        {/* logo */}
        <div className='w-[20%]'>
          <h1 className='text-white text-3xl font-medium'>Contuor.</h1>
        </div>
        {/* nav links */}
        <div className='w-[60%] h-full flex items-center justify-end'>
         <ul className='flex gap-10'>
            <li><Link to="/" className='text-base text-white/75 focus:text-white  duration-100 ease hover:text-white hover:text-underline'>Home</Link></li>
            <li><Link to="/shop" className='text-base text-white/75 focus:text-white hover:text-white  active:text-white'>Shop</Link></li>
            <li><Link to="/about" className='text-base text-white/75 focus:text-white hover:text-white active:text-white ' >About us</Link></li>
            <li><Link to="/services" className='text-base text-white/75 focus:text-white hover:text-white active:text-white'>Services</Link></li>
            <li><Link to="/blog" className='text-base text-white/75 focus:text-white hover:text-white active:text-white'>Blog</Link></li>
             <li><Link to="/contact" className='text-base text-white/75 focus:text-white hover:text-white active:text-white'>Contact us</Link></li>
         </ul>
        </div>
        {/* account */}
        <div className='w-[7%] h-full flex items-center justify-between '>
         <img src="images/user.svg" alt="user" className='w-[24px] h-[24px]' />
         <img src="images/cart.svg" alt="cart" className='w-6 h-6' />
         
        </div>
    </div>
)

export default Header